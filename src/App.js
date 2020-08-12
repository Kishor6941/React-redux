import React from "react";
import "./App.css";
/* import CakeContainer from "./components/CakeContainer";
 */
import { Provider } from "react-redux";
import store from "./redux/store";
import HookCakeContainer from "./redux/Cake/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import CakeContainer from "./components/CakeContainer";
import PepsiContainer from "./components/PepsiContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <PepsiContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer />
       */}
      </div>
    </Provider>
  );
};

export default App;
