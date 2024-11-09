import "./App.css";
import Header from "./components/common/Header";
import AppRoutes from "./routes";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
};

export default App;
