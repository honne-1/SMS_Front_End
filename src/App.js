import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListStudentComponent from "./components/ListStudentComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import StudentComponent from "./components/StudentComponent";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <HeaderComponent/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<ListStudentComponent/>}/>
                    <Route path="/students" element={<ListStudentComponent/>}/>
                    <Route path="/add-student" element={<StudentComponent/>}/>
                    <Route path="/update-student/:Zid" element={<StudentComponent/>}/>
                </Routes>
            </div>
            <FooterComponent/>
        </BrowserRouter>
    </div>
  );
}

export default App;
