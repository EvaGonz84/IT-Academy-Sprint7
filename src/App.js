import { useState } from "react";
import { Panell } from "./styled";

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
  const [isClick, setIsClick] = useState(false);
  const [pagesBudget, setPagesBudget] = useState(0);
  const [languageBudget, setLanguagesBudget] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);

    position === 0 && setIsClick(!isClick);

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
                {isClick && index === 0 && (
                  <Panell>
                    <label>Número de páginas</label>

                    <input
                      type="number"
                      placeholder="Escribe un número"
                      name=""
                      onChange={(e) => setPagesBudget(e.target.value * 30)}
                    />
                    <label>Número de idiomas</label>
                    <input
                      type="number"
                      placeholder="Escribe un número"
                      name=""
                      onChange={(e) => setLanguagesBudget(e.target.value * 30)}
                    />
                  </Panell>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="price-section">
        Total:{`${total + pagesBudget + languageBudget}€`}
      </div>
    </div>
  );
}
export default App;
