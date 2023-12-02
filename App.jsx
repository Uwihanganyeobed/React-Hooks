import React, { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassCounter from './Usestate-UseEffect/ClassCounter'
import ClassCounter1 from './Usestate-UseEffect/ClassCounter1'
import ColorHook from './Usestate-UseEffect/ColorHook'
import DataFetching from './Usestate-UseEffect/DataFetching'
import DataFetching1 from './Usestate-UseEffect/DataFetching1'
//import DataFetching2 from './Usestate-UseEffect/DataFetching2'
import DeleteReview from './Usestate-UseEffect/DeleteReview'
import HookCounter from './Usestate-UseEffect/HookCounter'
import HookCounter1 from './Usestate-UseEffect/HookCounter1'
import HookCounter2 from './Usestate-UseEffect/HookCounter2'
import HookCounter3 from './Usestate-UseEffect/HookCounter3'
import HookCounter4 from './Usestate-UseEffect/HookCounter4'
import HookMouse from './Usestate-UseEffect/HookMouse'
import IntervalHookCounter from './Usestate-UseEffect/IntervalHookCounter'
import MouseConatiner from './Usestate-UseEffect/MouseConatiner'
// import ComponentC from './UseContexts/ComponentC'
import CounterOne from './UseReducer/CounterOne'
import WeekDaysCounter from './UseReducer/WeekDaysCounter'
import CounterTwo from './UseReducer/CounterTwo'
import CounterRef from './UseRefs/CounterRef'
import RefOne from './UseRefs/RefOne'
import ClassTimer from './UseRefs/ClassTimer'
import HookTimer from './UseRefs/HookTimer'
import FocusInput from './UseRefs/FocusInput'
import TrackChanges from './UseRefs/TrackChanges'
import ParentComponent from './UsecallBack/ParentComponent'
import Counter from './UseMemo/Counter'
import CounterThree from './UseReducer/CounterThree'
import ComponentA from './UseReducer/ComponentA'
import ComponentB from './UseReducer/ComponentB'
import ComponentC from './UseReducer/ComponentC'
import DataFetchingOne from './UseReducer/DataFetchingOne'
import DataFetching2 from './UseReducer/DataFetching2'
import DocTitleOne from './CustomHooks/DocTitleOne'
import DocTitle2 from './CustomHooks/DocTitle2'
import CounterOnez from './CustomHooks/CounterOnez'
import CounterTwoz from './CustomHooks/CounterTwoz'
import UserForm from './CustomHooks/UserForm'
//these three lines are on Usecontexts folder
export const UserContext=React.createContext()
export const ChannelContext=React.createContext()
export const nickContext=React.createContext()
//........................................don't mind

export const CountContext=React.createContext()

const initialState=0
const reducer=(state, action)=>{
   switch(action){
      case 'increment': 
      return state+1 
      case 'decrement': 
      return state-1 
      case 'reset':  
      return initialState
      default:
         return state
   }
}
//...........`................................................................
function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
      <div>
        {/* Count - {count}
      <ComponentA/>
      <ComponentB/>
      <ComponentC/> */}
   <UserForm/>
        {/*
          <CounterOnez/>
     <CounterTwoz/>
        <DocTitleOne/>
     <DocTitle2/>
         <DataFetching2/>
         <DataFetchingOne/>
        <CounterThree/>
        <Counter/>
        <ParentComponent/>
        <TrackChanges/>
        <FocusInput/>
        <CounterRef/>
      <HookTimer/>
        <ClassTimer/>
        <RefOne/>
        
        <CounterTwo/>
        <WeekDaysCounter/>
        <CounterOne/> 

        <UserContext.Provider value={'Major'}>
          <ChannelContext.Provider value={'Vargas'}>
            <nickContext.Provider value={'Obed'}>
              <ComponentC/>
            </nickContext.Provider>
            
          </ChannelContext.Provider>
        
        </UserContext.Provider> */}
        
  {/*       
        <ClassCounter/>
        <ClassCounter1/>
        <ColorHook/>
        <DataFetching/>
        <DataFetching1/>
        <DataFetching2/>
        <DeleteReview/>
        <HookCounter/>
        <HookCounter1/>
        <HookCounter2/>
        <HookCounter3/>
        <HookCounter4/>
        <HookMouse/>
        <IntervalHookCounter/>
        <MouseConatiner/> 
        */}
      </div>
    </CountContext.Provider>
  )
}

export default App
