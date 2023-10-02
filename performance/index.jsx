import React from "react"
import ReactDOM from "react-dom/client"

const ProductsList = React.lazy(() => {
   return import("./ProductsList")
})

function App() {
  const [count, setCount] = React.useState(0)
  const [sort, setSort] = React.useState(false)
  const [showProducts, setShowProducts] = React.useState(false)

  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={() => setCount(prev => prev - 1)}>-</button>
      <button className="button" onClick={() => setCount(prev => prev + 1)}>+</button>
      <br />
      <br />
      <button className="button" onClick={() => setSort(prev => !prev)}>
        {sort ? "Unsort" : "Sort"}
      </button>
      <br />
      <br />
      <button className="button" onClick={() => setShowProducts(prev => !prev)}>
        Show Products
      </button>
      <br />
      <br />
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <div className="products-list">
          {showProducts && <ProductsList isSort={sort} />}
        </div>
      </React.Suspense>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
