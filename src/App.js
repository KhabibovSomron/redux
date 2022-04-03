
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  console.log(cash)

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  const addCash = (cash) => {
      dispatch({type: "ADD_CASH", payload: cash})
  }

  return (
    <div className="App">
      <div className='cash'>$ {cash}</div>
      <button onClick={() => addCash(Number(prompt("Cash: ")))}>Пополнить счет</button>
      <button onClick={() => getCash(Number(prompt("Cash: ")))}>Снять со счета</button>
    </div>
  );
}

export default App;
