import React from "react";

export default function App() {
  const [data, setData] = React.useState("");
  async function getAct() {
    const res = await fetch("https://apis.scrimba.com/bored/api/activity");
    const data = await res.json();
    setData(data);
    console.log("hi!");
  }

  React.useEffect(() => {
    getAct();
  }, []);

  return (
    <div className="container">
      <h1>Bored Bot</h1>
      <h3>Find something to kill time...</h3>
      <div>
        <i className="bi bi-robot"></i>
      </div>
      <button onClick={getAct}>Get Activity</button>
      <div>
        <p>{data.activity}</p>
        <p>Type: {data.type}</p>
        <p>Price ${data.price}</p>
      </div>
    </div>
  );
}
