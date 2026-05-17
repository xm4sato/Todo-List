import { useState } from "react";
import "./App.css";

// importing Material Icons :-
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CircleIcon from "@mui/icons-material/Circle";

// importing components :-
import HeaderComponent from "./Features/Menu/components/Header";
import Sections from "./Features/Menu/components/Sections";
import Projects from "./Features/Menu/components/Projects";
import AlertUI from "./UI/Alert";
import { toast, ToastContainer } from "react-toastify";

function App() {

  return (
    <>
      <ToastContainer />
      <div className="w-full h-full flex flex-row">
        {/* <button onClick={() => {
          toast.success("jdddddddddd",{
              autoClose : 5000,
            })
        }}>
          Buttooooon
        </button> */}
        <main className="w-[75%] h-full  bg-brand-primary">
          <h1>hello world</h1>
        </main>
        <aside className="flex flex-col w-[25%] min-h-screen h-full py-3 px-5  bg-brand-secondary">
          <HeaderComponent />
          <Sections />
          <Projects />
        </aside>
      </div>
    </>
  );
}

export default App;
