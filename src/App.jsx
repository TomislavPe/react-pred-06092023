import "./App.css";
import MainContent from "./components/MainContent";
import {GetSomeString, GetSomeNumber, GetSomeComponent, GetSomeConstant as nekaKonstanta} from "./components/Utilities"

function App() {
    return (
        <>
            <MainContent />
            <p>{GetSomeString()}</p>
            <p>{GetSomeNumber()}</p>
            <GetSomeComponent />
            <p>Ovo je neka konstanta: {nekaKonstanta}</p>
        </>
    );
}

export default App;
