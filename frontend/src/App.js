import {Routes, Route } from "react-router-dom";
import './App.css';
// import Sidenav from "./component/Sidenav/Sidenav";
import Notesone from "./page/Notes/Notesone/Notesone";
import Notestwo from "./page/Notes/Notestwo/Notestwo";
import Notesthree from "./page/Notes/Notesthree/Notesthree";
// import Notesfour from "./page/Notesfour/Notesfour";
import Paperone from "./page/pyqp/Paperone/Paperone";
import Papertwo from "./page/pyqp/Papertwo/Papertwo";
import Paperthree from "./page/pyqp/Paperthree/Paperthree";
import Paperfour from "./page/pyqp/Paperfour/Paperfour";
import Homepage from "./page/Home/Homepage";
function App() {
  return (
    <>
    {/* <Paperone/> */}

            {/* <Notesfour/> */}
    
    <Routes>
      <Route path="/" element={<Homepage/>} ></Route>
     <Route path="notes" element={<Notesone/>}></Route>
     <Route path="two" element={<Notestwo/>}></Route>
     <Route path="three" element ={<Notesthree/>} > </Route>
      <Route path="question-one" element={<Paperone/>}></Route>
      <Route path="question-two"element={<Papertwo/>} ></Route>
      <Route path="question-three" element={<Paperthree/>}></Route>
      <Route path="question-four" element={<Paperfour/>}></Route>
    </Routes>

    </>
  );
}

export default App;
