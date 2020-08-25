import React, { Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js'
import Welcome from './components/Welcome'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Person from './components/Person';
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import Form from './components/Form';
import FragmentDemo from './components/FragmentDemo';
import ParentComp from './components/ParentComp'
import PortalDemo from './components/PortalDemo';
function App() {
  return (
    <div className="App">
          {/* <Greet className="Bruce" heroName="Batman" >
            <p>this is props children</p>
          </Greet> */}
          {/* <Greet className="Clark" heroName="Superman">
          <button>Click me</button>
          </Greet>
          <Greet className="Diana" heroName="Wonder woman"/> */}

          {/* <Welcome className="Bruce" heroName="Batman"/>
          <Welcome className="Clark" heroName="Superman"/>
          <Welcome className="Diana" heroName="Wonder woman"/> */}
          {/* <Message></Message> */}
          {/* <Counter></Counter> */}
          {/* <FunctionClick></FunctionClick>
          <ClassClick></ClassClick> */}
          {/* <EventBind></EventBind> */}
          {/* <ParentComponent></ParentComponent> */}
          {/* <UserGreeting></UserGreeting> */}
          {/* <NameList></NameList> */}
          {/* <Stylesheet primary={true}></Stylesheet>
          <Inline></Inline> */}

        {/* <Form></Form> */}
        {/* <FragmentDemo /> */}
        {/* <ParentComp></ParentComp> */}
        <PortalDemo></PortalDemo>
          </div>
  );
}

export default App;
