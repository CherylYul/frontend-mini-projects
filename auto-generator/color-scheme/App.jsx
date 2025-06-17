import React from "react";
import Header from "./components/Header";
import Scheme from "./components/Scheme";
const FormContext = React.createContext();
export { FormContext };

export default function App() {
  const [data, setData] = React.useState([
    "#BD2705",
    "#F03005",
    "#FC522C",
    "#FD7B5D",
    "#FEA48F",
  ]);
  const [form, setForm] = React.useState({
    color: "#FF6542",
    mode: "monochrome",
  });
  return (
    <div>
      <FormContext.Provider value={{ form, setForm, data, setData }}>
        <Header />
        <Scheme />
      </FormContext.Provider>
    </div>
  );
}
