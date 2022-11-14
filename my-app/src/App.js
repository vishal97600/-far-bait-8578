import "./App.css";
// import LoginForm from "./Components/LoginForm";
import Header from "./Components/Header";
// import Home from "./Pages/Home";
// import Product from "./Pages/Product";
import RouteComponent from "./Route";
function App() {
  return (
    <div className="app">
      <Header />
      <RouteComponent />
    </div>
  );
}

export default App;
