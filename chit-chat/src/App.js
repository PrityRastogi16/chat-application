import './App.css';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Join from "./component/Join/Join";


function App() {
  return (
    <div className="App">
    <Router> 
    <Routes>
    <Route exact path="/" element={<Join />} />
    <Route exact path="/chat" />
    </Routes>
    
    </Router>
    </div>
  );
}

export default App;
