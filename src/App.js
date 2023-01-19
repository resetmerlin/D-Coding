import "./App.css"
import HomeScreen from "./components/HomeScreen";
import ExampleScreen from "./components/ExampleScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <main>   
          <Routes>
            
            <Route path="/" element={<HomeScreen/>} exact></Route>
            <Route path="/todo" element={<ExampleScreen/>} exact></Route>

            </Routes>       
</main>


      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
