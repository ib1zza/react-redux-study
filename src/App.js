import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "./asyncActions/customers";
// import TodoList from "./components/TodoList";
import "./css/App.css";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReducer";

function App(props) {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  function addCash(dif) {
    dispatch({ type: "ADD_CASH", payload: dif });
  }

  function getCash(dif) {
    dispatch({ type: "GET_CASH", payload: dif });
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div>
      <h1>{cash}</h1>
      <button
        onClick={() =>
          addCash(Number(prompt("how many do you want to add?")) | undefined)
        }
      >
        add
      </button>
      <button
        onClick={() =>
          getCash(Number(prompt("how many do you want to get")) | undefined)
        }
      >
        get
      </button>

      {/* !! */}

      {customers.length ? (
        <div>
          {customers.map((customer) => (
            <div
              onClick={() => {
                removeCustomer(customer);
              }}
            >
              {customer.name}{" "}
            </div>
          ))}
        </div>
      ) : (
        <div>Клиенты отсутствуют!</div>
      )}
      <button
        onClick={() => {
          addCustomer(prompt("name: "));
        }}
      >
        add customer
      </button>

      <button
        onClick={() => {
          dispatch(fetchCustomers());
        }}
      >
        ПОЛУЧИТЬ КЛИЕНТОВ ИЗ БАЗЫ
      </button>
    </div>
  );
}

export default App;
