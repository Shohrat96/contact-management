import React, { createContext, useEffect, useReducer } from "react";
import { ContactsReducer } from "./ContactsReducer";



const initialState = {
  contacts: [
    {
      id: "1",
      name:"John",
      surname:"Does",
      fatherName:"James",
      email:"john@gmail.com",
      position:"student",
      age:25,
      gender:"male",
      keepUpdated:true,
    },
    {
      id: "2",
      name:"Smith",
      surname:"Laker",
      fatherName:"Dawkins",
      email:"smith@gmail.com",
      position:"professional",
      age:55,
      gender:"male",
      keepUpdated:true,
      },
    {
      id: "3",
      name:"Mark",
      surname:"Levy",
      fatherName:"Mark's Father",
      email:"yankin@gmail.com",
      position:"graduate",
      age:66,
      gender:"male",
      keepUpdated:false,
    },
  ]
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ContactsReducer, initialState, ()=>{

    //check if data exists in local storage, if not, load initial State
    const localData=localStorage.getItem('state');
    return localData ? JSON.parse(localData): initialState;
  });

  //set update to local storage on state update
  useEffect(()=>{
    localStorage.setItem('state',JSON.stringify(state))
  },[state]);

  function removeContact(id) {
    dispatch({
      type: "REMOVE_CONTACT",
      payload: id
    });
  }

  function addContact(contact) {
    dispatch({
      type: "ADD_CONTACT",
      payload: contact
    });
  }

  function editContact(contact) {
    dispatch({
      type: "EDIT_CONTACT",
      payload: contact
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        contacts: state.contacts,
        removeContact,
        addContact,
        editContact
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};