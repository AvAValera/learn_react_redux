import Header from "./components/Header";
import Todo from "./components/todo/Todo";
import { selectTheme } from "./store/theme";
import { useSelector } from "react-redux";

function App() {
    const theme = useSelector(selectTheme);


    return (
        <div className={`app ${theme} relative w-full h-screen min-w-[320px]`}>
            <Header />
            <Todo />
        </div>
    );
}

export default App;
