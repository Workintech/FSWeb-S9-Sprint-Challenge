import React, { useState } from 'react';
import axios from "axios";

// önerilen başlangıç stateleri
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 //  "B" nin bulunduğu indexi


const initialGridX = 1;
const initialGridY = 1;
const gridSizeWidth = 3;
const gridSizeHeight = 3;



const theGrid = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2],

];

export default function AppFunctional(props) {
  const [coordStep, setCoordStep] = useState(initialSteps);
  const [coordIndex, setCoordIndex] = useState(initialIndex);
  const [theeMail, seteMail] = useState(initialEmail);
  const [err, setErr] = useState(initialMessage)
  // AŞAĞIDAKİ HELPERLAR SADECE ÖNERİDİR.

  // Bunları silip kendi mantığınızla sıfırdan geliştirebilirsiniz.

  function getXY() {
    return theGrid[coordIndex];
    // Koordinatları izlemek için bir state e sahip olmak gerekli değildir.
    // Bunları hesaplayabilmek için "B" nin hangi indexte olduğunu bilmek yeterlidir.
  }

  function getXYMesaj() {
    // Kullanıcı için "Koordinatlar (2, 2)" mesajını izlemek için bir state'in olması gerekli değildir.
    // Koordinatları almak için yukarıdaki "getXY" helperını ve ardından "getXYMesaj"ı kullanabilirsiniz.
    // tamamen oluşturulmuş stringi döndürür.

  }

  function reset() {
    setCoordIndex(initialIndex)
    setCoordStep(initialSteps)
    // Tüm stateleri başlangıç ​​değerlerine sıfırlamak için bu helperı kullanın.
  }

  function sonrakiIndex(yon) {
    // Bu helper bir yön ("sol", "yukarı", vb.) alır ve "B" nin bir sonraki indeksinin ne olduğunu hesaplar.
    // Gridin kenarına ulaşıldığında başka gidecek yer olmadığı için,
    // şu anki indeksi değiştirmemeli.
  }

  function ilerle(evt) {
    // Bu event handler, "B" için yeni bir dizin elde etmek üzere yukarıdaki yardımcıyı kullanabilir,
    // ve buna göre state i değiştirir.

    const nereye = evt.target.id;
    console.log("ilerle fonk çalıştı", nereye);
    const gridStateX = gridState[0];
    const gridStateY = gridState[1];


    if (nereye === "left") {
      if (theGrid[coordIndex][0] > 1) {
        setCoordIndex(coordIndex - 1)
        setCoordStep(coordStep + 1)
      } else {
        setErr("Sola gidemezsiniz.")
      }
    }

    // gridStateX >= 0 && gridStateX < gridSizeX - 1 && ) {
    //   //gridState -1;
    //   setGridState([gridStateX - 1, gridStateY]);

    // }
    if (nereye === "right") {
      if (theGrid[coordIndex][0] < gridSizeWidth) {
        setCoordIndex(coordIndex + 1)
        setCoordStep(coordStep + 1)
      } else {
        setErr("Sağa gidemezsiniz.")
      }
    }

    if (nereye === "up") {
      if (theGrid[coordIndex][1] > 1) {
        setCoordIndex(coordIndex - 3)
        setCoordStep(coordStep + 1)
      } else {
        setErr("Yukarı gidemezsiniz.")
      }
    }
    if (nereye === "down") {
      if (theGrid[coordIndex][1] > gridSizeHeight) {
        setCoordIndex(coordIndex - 3)
        setCoordStep(coordStep + 1)
      } else {
        setErr("Aşağı gidemezsiniz.")
      }




    }
  }

  function onChange(evt) {
    // inputun değerini güncellemek için bunu kullanabilirsiniz
  }

  function onSubmit(evt) {
    evt.preventDefault();
    console.log("form submitted")
    // payloadu POST etmek için bir submit handlera da ihtiyacınız var.
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">
          Koordinatlar  {`(${gridState[0]},${gridState[1]})`}
        </h3>
        <h3 id="steps">0 kere ilerlediniz</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === 4 ? ' active' : ''}`}>
              {idx === 4 ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={ilerle}>
          SOL
        </button>
        <button id="up" onClick={ilerle}>
          YUKARI
        </button>
        <button id="right" onClick={ilerle}>
          SAĞ
        </button>
        <button id="down" onClick={ilerle}>
          AŞAĞI
        </button>
        <button id="reset" onClick={reset}>reset</button>
      </div>
      <form onSubmit={onSubmit}>
        <input id="email" type="email" placeholder="email girin"></input>
        <input id="submit" type="submit" ></input>
      </form>
    </div>
  )
}


