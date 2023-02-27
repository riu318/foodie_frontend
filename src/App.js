import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import SignUp from './components/signIn';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
