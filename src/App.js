import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import PatientsList from "./components/PatientsList";
import PatientFilter from "./components/PatientFilter";
import Parent from "./components/Parent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Parent />
        <PatientFilter />
        <PatientsList />
      </div>
    </Provider>
  );
}

export default App;
