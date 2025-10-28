import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import Header from "./component/Header";
import Main from "./component/Main";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    <>
      <Header />
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
}

export default App;
