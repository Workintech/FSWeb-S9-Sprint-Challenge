import React, { useState } from "react";
import axios from "axios";
// önerilen başlangıç stateleri
// const initialMessage = "";
// const initialEmail = "";
// const initialSteps = 0;
//const initialIndex = 4; //  "B" nin bulunduğu indexi

export default function AppFunctional(props) {
  //const [location, setLocation] = useState([x,y])
  const [location, setLocation] = useState([2, 2]);
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(0);
  const [form, setForm] = useState("");

  function reset() {
    setLocation([2, 2]);
    setStep(0);
    setMessage("");
  }

  function onChange(evt) {
    // inputun değerini güncellemek için bunu kullanabilirsiniz
    setForm(evt.target.value);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    // payloadu POST etmek için bir submit handlera da ihtiyacınız var.
    let data = {
      x: location[0],
      y: location[1],
      steps: step,
      email: form,
    };
  }

  //location[1]=2
  function up() {
    setMessage("");
    //yukarı giderken x sabit kalacak. y değişken
    if (location[1] > 1) {
      setLocation([location[0], location[1] - 1]); //(2,1)
      setStep(step + 1);
    } else {
      setMessage("You can't go up");
    }
  }

  function right() {
    setMessage("");
    //x değişken y sabit
    if (location[0] < 3) {
      setLocation([location[0] + 1, location[1]]);
      setStep(step + 1);
    } else {
      setMessage("You can't go right");
    }
  }

  function down() {
    setMessage("");
    // x sabit y değişken
    if (location[1] < 3) {
      setLocation([location[0], location[1] + 1]);
      setStep(step + 1);
    } else {
      setMessage("You can't go down");
    }
  }

  function left() {
    setMessage("");
    // x değişken y sabit
    if (location[0] > 1) {
      setLocation([location[0] - 1, location[1]]);
      setStep(step + 1);
    } else {
      setMessage("You can't go left");
    }
  }
  const initialIndex = (location[1] - 1) * 3 + location[0] - 1; //ilk index=4
  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Koordinatlar ({location.join(", ")})</h3>
        <h3 id="steps">{step} kere ilerlediniz</h3>
      </div>
      <div id="grid">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
          <div
            key={idx}
            className={`square${idx === initialIndex ? " active" : ""}`}
          >
            {idx === initialIndex ? "B" : null}
          </div>
        ))}
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={left}>
          SOL
        </button>
        <button id="up" onClick={up}>
          YUKARI
        </button>
        <button id="right" onClick={right}>
          SAĞ
        </button>
        <button id="down" onClick={down}>
          AŞAĞI
        </button>
        <button id="reset" onClick={reset}>
          reset
        </button>
      </div>
      <form onSubmit={onSubmit}>
        <input
          id="email"
          type="email"
          placeholder="email girin"
          onChange={onChange}
        ></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  );
}
