import ReactDOM from "react-dom";
import Corpo from "./Corpo";
import FundoMobile from "./FundoMobile";
import NavBar from "./NavBar";


function App() {
    return (
        <div>
            <NavBar/>
            <Corpo/>
            <FundoMobile/>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));