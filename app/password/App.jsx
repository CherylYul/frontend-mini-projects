import React from "react";
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";
import Slider from "./components/Slider";
import Info from "./components/Info";

const UPPER_CHARACTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const LOWER_CHARACTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const SYMBOLS = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const PasswordContext = React.createContext();
export { PasswordContext };

export default function App() {
  const [form, setForm] = React.useState({
    Length: 12,
    Uppercase: true,
    Lowercase: true,
    Numbers: false,
    Symbols: false,
    Requirements: "",
  });
  const [container, setContainer] = React.useState(getContainer());
  const [password, setPassword] = React.useState(getPassword());
  const [isCopied, setIsCopied] = React.useState(false);

  function removeElement(arr, el) {
    const idx = arr.indexOf(el);
    if (idx > -1) {
      arr.splice(idx, 1);
    }
  }

  React.useEffect(() => {
    if (form.Requirements === "Easy to say") {
      form.Uppercase = true;
      form.Lowercase = true;
      form.Numbers = false;
      form.Symbols = false;
    }

    if (form.Requirements === "All characters") {
      form.Uppercase = true;
      form.Lowercase = true;
      form.Numbers = true;
      form.Symbols = true;
    }

    setContainer(getContainer());

    if (form.Requirements === "Easy to read") {
      removeElement(container, "I");
      removeElement(container, "l");
      removeElement(container, "O");
      removeElement(container, "0");
      removeElement(container, "1");
    }

    setPassword(getPassword());
  }, [form]);

  function handleChange(e) {
    const { name, value, checked, type } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function getRandomNumber(con) {
    return Math.floor(Math.random() * con.length);
  }

  function getContainer() {
    if (form.Uppercase && form.Lowercase && form.Symbols && form.Numbers) {
      return UPPER_CHARACTERS.concat(LOWER_CHARACTERS, NUMBERS, SYMBOLS);
    }
    if (form.Uppercase && form.Lowercase && form.Symbols) {
      return UPPER_CHARACTERS.concat(LOWER_CHARACTERS, SYMBOLS);
    }
    if (form.Uppercase && form.Lowercase && form.Numbers) {
      return UPPER_CHARACTERS.concat(LOWER_CHARACTERS, NUMBERS);
    }
    if (form.Lowercase && form.Numbers && form.Symbols) {
      return LOWER_CHARACTERS.concat(NUMBERS, SYMBOLS);
    }
    if (form.Uppercase && form.Numbers && form.Symbols) {
      return UPPER_CHARACTERS.concat(NUMBERS, SYMBOLS);
    }
    if (form.Uppercase && form.Lowercase) {
      return UPPER_CHARACTERS.concat(LOWER_CHARACTERS);
    }
    if (form.Uppercase && form.Symbols) {
      return UPPER_CHARACTERS.concat(SYMBOLS);
    }
    if (form.Uppercase && form.Numbers) {
      return UPPER_CHARACTERS.concat(NUMBERS);
    }
    if (form.Lowercase && form.Symbols) {
      return LOWER_CHARACTERS.concat(SYMBOLS);
    }
    if (form.Lowercase && form.Numbers) {
      return LOWER_CHARACTERS.concat(NUMBERS);
    }
    if (form.Numbers && form.Symbols) {
      return NUMBERS.concat(SYMBOLS);
    }
    if (form.Uppercase) {
      return UPPER_CHARACTERS;
    }
    if (form.Lowercase) {
      return LOWER_CHARACTERS;
    }
    if (form.Numbers) {
      return NUMBERS;
    }
    if (form.Symbols) {
      return SYMBOLS;
    }
  }

  function getPassword() {
    let result = "";
    for (let i = 0; i < form.Length; i++) {
      result += container[getRandomNumber(container)];
    }
    return result;
  }

  function regenerate() {
    setPassword(getPassword());
  }

  async function copyTextToClipboard(text) {
    // Check if the current browser supports the Clipboard API, if so we wait for the promise
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(password)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="center-container">
        <PasswordContext.Provider value={{ form, handleChange }}>
          <form className="custom-container">
            <h1 className="title">Customize your password</h1>
            <Slider>Password Length</Slider>
            <div className="radio-btn">
              <div className="flex">
                <Radio>Easy to say</Radio>
                <Info>Avoid numbers and special characters</Info>
              </div>
              <div className="flex">
                <Radio>Easy to read</Radio>
                <Info>Avoid ambiguous characters like l, I, O, 0, and 1</Info>
              </div>
              <div className="flex">
                <Radio>All characters</Radio>
                <Info>Any character combination</Info>
              </div>
            </div>
            <div className="checkbox-group">
              <Checkbox check={form.Uppercase}>Uppercase</Checkbox>
              <Checkbox check={form.Lowercase}>Lowercase</Checkbox>
              <Checkbox check={form.Numbers}>Numbers</Checkbox>
              <Checkbox check={form.Symbols}>Symbols</Checkbox>
            </div>
          </form>
        </PasswordContext.Provider>
        <div className="result-container">
          <div className="pass">{password}</div>
          <button onClick={handleCopyClick}>
            <i className="bi bi-copy"></i>
          </button>
          <button onClick={regenerate}>
            <i className="bi bi-arrow-repeat"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
