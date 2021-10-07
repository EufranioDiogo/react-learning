import logo from './logo.svg';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

import './App.css';

function App() {
  return (
    <div className="App">
    
    

    {/*
    <ParentComponent parentName="Parent 1"></ParentComponent>
    <EventBind/>
    <FunctionClick></FunctionClick>
    <ClassClick></ClassClick>
      <Greet name="Bruce Valente" heroName="Superman"></Greet>
    <Welcome name="Zara Diogo" heroName="Ladybug"/>
    <Counter></Counter>
      <Message></Message>
      <Greet name="Eufránio Diogo" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Bruce Valente" heroName="Superman"></Greet>
      <Greet name="Creuma Kuzola" heroName="Jesus"></Greet>
      <Welcome name="Zara Diogo" heroName="Ladybug"/>
      <Welcome name="Jose Matias" heroName="Huck"/>
      <Welcome name="Lupercio Fortunato" heroName="GatoNua"/>
      {/*<Hello></Hello>*/}
    </div>
  );
}

export default App;
