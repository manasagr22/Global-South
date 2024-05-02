import { useEffect, useState } from "react";
import '../styles/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Spinner from './Spinner';
import AlertIcon from './Alert';
import Home from './Home';
import Header from './Header';
import MainFile from "./MainFile";

function App() {
  const navigate = useNavigate();
  const [mediaWidth, setMediaWidth] = useState(window.innerWidth);
  const [load, setLoad] = useState(false);
  const [alert, setAlert] = useState(null);

  function handleAlert(flag, msg) {
    if (flag === "success") {
      setAlert({
        msg: msg,
        d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
        type: flag,
      });

      setTimeout(() => {
        setAlert(null);
      }, 1800);
    } else {
      setAlert({
        msg: msg,
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        type: flag,
      });

      setTimeout(() => {
        setAlert(null);
      }, 1800);
    }
  }

  function setBackground(value) {
    const bg = document.getElementById("background");
    bg.style.filter = value;
  }

  return (
    <>
      {alert ? <AlertIcon alert={alert} /> : undefined}
      {load ? <Spinner /> : undefined}
      <div id="background" className="App w-full h-full absolute overflow-x-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  homePage={true}
                  mediaWidth={mediaWidth}
                  page={"home"}
                />
                <Home handleAlert={handleAlert} />
              </>
            }
          />
          <Route path='/app' element={
            <>
              <Header homePage={false} mediaWidth={mediaWidth} />
              <MainFile handleAlert={handleAlert} setLoad={setLoad} setBackground={setBackground}/>
            </>
          } />
        </Routes>
      </div>
    </>
  )
}

export default App;
