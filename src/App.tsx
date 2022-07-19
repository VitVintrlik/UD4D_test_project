import {useState} from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import Popup from "./components/Popup/Popup";

function App() {
    const [popupContent, setContent] = useState<string>('')

  return (
    <div className="App">
      <LoginForm setContent={setContent}/>
        {popupContent ? <Popup content={popupContent} setContent={setContent}/> : null}
    </div>
  )
}

export default App
