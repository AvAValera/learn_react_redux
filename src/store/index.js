import { createStore} from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';
import { rootTodo } from  "./todo/index";

const store = createStore(rootTodo, devToolsEnhancer());

export default store;