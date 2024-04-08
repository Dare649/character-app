import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screen1 from "./pages/Screen1";
import Screen2 from "./pages/Screen2";
import Character from "./pages/Character";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Screen1/>}/>
        <Route path="screen-2" element={<Screen2/>}/>
        <Route path="/:id" element={<Character/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
