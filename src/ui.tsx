import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./ui.css";
import Inputs from "./components/Inputs";
import Buttons from "./components/Buttons";
import BottomSection from "./components/BottomSection";

declare function require(path: string): any;

function App() {
  var inputCopy = { num: 5, lang: "Hindi", block: "words" };

  const getInput = (val) => {
    inputCopy = { num: val.num, lang: val.lang, block: val.block };
  };

  const onGenerate = (lang) => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "get-desi-ipsum",
          data: { ...inputCopy, lang: lang },
        },
      },
      "*"
    );
  };

  return (
    <main>
      <Inputs onInput={getInput} />

      <Buttons onClick={onGenerate} />

      <BottomSection />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("react-page")).render(<App />);
