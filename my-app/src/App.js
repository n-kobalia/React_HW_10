import img from './assets/zima-blue.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
    <h1 className="name">Zima Blue</h1>  
    <img src={img} className="img" alt="img"/>
    <p className="bio">The renowned artist Zima recounts his mysterious past and rise to fame before unveiling his final work.</p>
    </div>
  );
}

export default App;
