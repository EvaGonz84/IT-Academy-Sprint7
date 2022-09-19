import { useState } from "react";
import { Panell, Button} from "./styled";

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

  // const handleAdd = (e) => {
  //   setPagesBudget(pagesBudget + 1)

  // };

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
                    <Button onClick={()=>setPagesBudget(pagesBudget + 1 )}>+</Button>
                    <input type="text"
                      placeholder="Escribe un número"
                      value={pagesBudget}
                      onChange={(e) => setPagesBudget(e.target.value)}/>
                      
                    
                    <Button onClick={()=>setPagesBudget(pagesBudget - 1 )}>-</Button>
                    <label>Número de idiomas</label>
                    <Button onClick={()=>setLanguagesBudget(languageBudget + 1)}>+</Button>
                    <input
                      type="text"
                      placeholder="Escribe un número"
                      value={languageBudget}
                      onChange={(e) => setLanguagesBudget(e.target.value)}
                    />
                    <Button onClick={()=>setLanguagesBudget(languageBudget - 1)}>-</Button>
                  </Panell>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="price-section">
        Total:{`${total + pagesBudget *30 + languageBudget *30}€`}
      </div>
    </div>
  );
}
export default App;
