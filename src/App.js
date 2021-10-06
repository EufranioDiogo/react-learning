import logo from './logo.svg';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import './App.css';

function App() {
  return (
    <div className="App">
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
