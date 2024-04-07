import './App.css'
import Workers from './components/Workers'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edit from './components/Edit';
import Add from './components/Add';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Workers />} />
          <Route path={"/edit/:id"} element={<Edit />} />
          <Route path={"/add"} element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

