import './App.css';
import Heures from '../../Components/heures'
import Semaine from '../../Components/semaine';
import Compteur from '../../Components/compteur';

const datas = {
  temp: "252 °C",
  pression: "1074 Hpa",
  humidite: "20 %"
};
const datas2 = {
  temp: "2 °C",
  pression: "974 Hpa",
  humidite: "80 %"
};

function App() {
  return (
    <div className="App">
      <h1>MÉTÉO</h1>
      <button>Affichage par heure</button>
      <button>Affichage par semaine</button>

      <Compteur />

      <Heures />
      <Semaine datas={datas} />
      <Semaine datas={datas2} />
    </div>
  );
}

export default App;
