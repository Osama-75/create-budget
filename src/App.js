
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Err404 from './pages/Err404';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BudgetPage from './pages/BudgetPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Err404 />} />
        <Route path='budget/:id' element={<BudgetPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
