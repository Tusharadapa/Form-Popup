import React from "react";
import "./App.css";
import MainForm from "./components/form";

// Popup Funcs
const closebtn = () => {
  document.querySelector(".login-popup").classList.remove("show");
};
window.addEventListener("load", function () {
  showPopup();
});
function showPopup() {
  const timeLimit = 3;
  let i = 0;
  const timer = setInterval(function () {
    i++;
    if (i === timeLimit) {
      clearInterval(timer);
      document.querySelector(".login-popup").classList.add("show");
    }
  }, 1000);
}

// Main Func

function App() {
  return (
    <div className="login-popup">
      <div className="box">
        <div className="close" onClick={closebtn}>
          &times;
        </div>
        <div className="img-area"></div>
        <div className="form">
          <MainForm />
        </div>
      </div>
    </div>
  );
}
export default App;
