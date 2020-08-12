import { combineReducers } from "redux";
import CakeReducer from "./Cake/CakeReducer";
import IceCreamReducer from "./Icecream/IceCreamReducer";
import PepsiReducer from "./Pepsi/PepsiReducer";
import UserReducer from "./User/UserReducer";
const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: IceCreamReducer,
  pepsi: PepsiReducer,
  user: UserReducer,
});

export default rootReducer;
