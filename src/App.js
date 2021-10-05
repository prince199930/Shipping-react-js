import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <div className="App">
      <>
        <Navbar/>
        <Dashboard/>
        <Shipment/>
      </>
    </div>
  );
}

export default App;
