import { useState } from "react";

const budgets = [
  {
    name: "Una pàgina web",
    price: 500,
  },

  {
    name: "Una consultoria SEO",
    price: 300,
  },
  {
    name: "Una campanya de Google Ads",
    price: 200,
  },
];

function App() {
  const [checkedState, setCheckedState] = useState(
    new Array(budgets.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + budgets[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  return (
    <div className="App">
      <h2>¿Qué vols fer?</h2>
      <div className="options-budgets">
        {budgets.map(({ name, price }, index) => {
          return (
            <div key={index}>
              <div className="budget-list">
                <input
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  name={name}
                  value={name}
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                />
                <label
                  htmlFor={`custom-checkbox-${index}`}
                >{`${name} (${price}€)`}</label>
              </div>
            </div>
          );
        })}
      </div>
      <div className="price-section">Total:{`${total}€`}</div>
    </div>
  );
}

export default App;
