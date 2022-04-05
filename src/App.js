import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCashAction, getCashAction } from './store/cashReducer';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
  
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  console.log(customers)
  console.log(cash)

  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }

  const addCash = (cash) => {
      dispatch(addCashAction(cash))
  }

  const addCustomer = (name) => {
    const customer = {
      name: name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const deleteCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div>
        <div className='cash'>$ {cash}</div>
        <button onClick={() => addCash(Number(prompt("Cash: ")))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt("Cash: ")))}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt("Name: "))}>Добавить клиента</button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer => 
            <div onClick={() => deleteCustomer(customer)} style={{fontSize:"25px", padding: 10, margin:10, border:"2px solid black", width: "500px"}}>{customer.name}</div>    
          )}
        </div>
        :
        <div style={{fontSize: "35px", marginTop: "20px"}}>
          Клиенты отсутствуют!
        </div>
      }
    </div>
  );
}

export default App;
