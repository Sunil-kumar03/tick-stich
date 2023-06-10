import React, { useState } from "react";

function Tick() {

    const [pos, setPos] = useState({ scale: 1 });

    const onScroll = (e) => {
    const delta = e.deltaY * -0.01;
    const newScale = pos.scale + delta;

    const ratio = 1 - newScale / pos.scale;

    setPos({
        scale: newScale,
      });
    };

    
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 offset-md-3 mt-4 ">
        <div onWheelCapture={onScroll} >
                <img
                    src="https://i.pinimg.com/originals/1b/60/df/1b60dfdc7e66e6430bd3884964046d72.jpg"
                    height={300}

                    style={{
                    transformOrigin: "0 0",
                    transform: ` scale(${pos.scale})`
                    }}
                />
        </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 text-success mt-2 mb-4">
        <ul className="list-group">
            <caption>Accessories</caption>
            <li className="list-group-item">
                <strong>Dial or Watch Face</strong>
            </li>
            <li className="list-group-item">
                <strong>Bezel</strong>
            </li>
            <li className="list-group-item">
                <strong>Glass</strong>
            </li>
            <li className="list-group-item">
                <strong>Strap or Bracelet</strong>
            </li>
            <li className="list-group-item">
                <strong>Hands</strong>
            </li>
            <li className="list-group-item">
                <strong>Clasp or Buckle</strong>
            </li>
            <li className="list-group-item">
                <strong>Crown or Button</strong>
            </li>

        </ul>
        </div>
    </div>

    </div>
    
  )
}

export default Tick