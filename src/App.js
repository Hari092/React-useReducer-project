import React, { useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, [action.multiplier]: state[action.multiplier] + 1 };
    case "decrement":
      return { ...state, [action.multiplier]: state[action.multiplier] - 1 };
    case "remove":
      return { ...state, [action.multiplier]: 0 };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    multiplier500: 1,
    multiplier400: 1,
    multiplier250: 1,
  });

  function increment(multiplier) {
    dispatch({ type: "increment", multiplier });
  }

  function decrement(multiplier) {
    dispatch({ type: "decrement", multiplier });
  }
  function remove(multiplier) {
    dispatch({ type: "remove", multiplier });
  }

  const totalValue =
    400 * state.multiplier400 +
    600 * state.multiplier250 +
    500 * state.multiplier500;

  let total1 = state.multiplier500;
  let total2 = state.multiplier400;
  let total3 = state.multiplier250;

  let totalCart = total1 + total2 + total3;

  return totalValue > 0 ? (
    <div>
      <div className="header">
        <h1>useReducer</h1>
        <h1>
          <FontAwesomeIcon icon={faCartShopping} style={{ height: "40px" }} />
          {totalCart}
        </h1>
      </div>

      <div className="Main">
        <h1 className="bag">YOUR BAG</h1>

        <div className="cards" style={{ display: state.multiplier500 < 1 ? "none" : "flex" }} >

          <div className="left">
            <img
              src="https://www.course-api.com/images/cart/phone-1.png"
              className="image"
              alt="one"
            />
            <div>
              <h2>Google Pixel</h2>
              <p>${500 * state.multiplier500}</p>
              <button onClick={() => remove("multiplier500")} className="remove-btn">remove</button>
            </div>
          </div>

          <div className="rigth">
            <button onClick={() => increment("multiplier500")}>
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
            <h2>{state.multiplier500}</h2>
            <button onClick={() => decrement("multiplier500")}>
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </div>
        </div>

        
        <div className="cards" style={{ display: state.multiplier400 < 1 ? "none" : "flex" }} >

          <div className="left">
            <img
              src="https://www.course-api.com/images/cart/phone-2.png"
              className="image"
              alt="one"
            />
            <div>
              <h2>Samsung Galaxy S7</h2>
              <p>${400 * state.multiplier400}</p>
              <button onClick={() => remove("multiplier400")} className="remove-btn">remove</button>
            </div>
          </div>

          <div className="rigth">
            <button onClick={() => increment("multiplier400")}>
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
            <h2>{state.multiplier400}</h2>
            <button onClick={() => decrement("multiplier400")}>
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </div>
        </div>

           
        <div className="cards" style={{ display: state.multiplier250 < 1 ? "none" : "flex" }} >

          <div className="left">
            <img
              src="https://www.course-api.com/images/cart/phone-3.png"
              className="image"
              alt="one"
            />
            <div>
              <h2>Samsung Galaxy S7</h2>
              <p>${600 * state.multiplier250}</p>
              <button onClick={() => remove("multiplier250")} className="remove-btn">remove</button>
            </div>
          </div>

          <div className="rigth">
            <button onClick={() => increment("multiplier250")}>
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
            <h2>{state.multiplier250}</h2>
            <button onClick={() => decrement("multiplier250")}>
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </div>
        </div>

        <hr className="hr"></hr>

        <div className="cards finalCheck">
          <h2>Total</h2>
          <p>${totalValue}</p>
        </div>

      </div>
      <button className="clearAll"
        onClick={() => {
          remove("multiplier250");
          remove("multiplier400");
          remove("multiplier500");
        }}
      >
        Clear Cart
      </button>
    </div>
  ) : (
    <div className="empty" style={{ textAlign: "center" }}>
      <h1>Your Bag is currently Empty</h1>
    </div>
  );
}

export default App;
