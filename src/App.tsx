import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CustomButton from './components/CustomButton/CustomButton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersView from './pages/UsersView';
import About from './pages/About';
import Layout from './components/Layout/Layout';


function App() {
  return (
    <div className="App">
     <CustomButton/>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/users" element={<UsersView />}/>
     {/* <Route path="/users/:userId" element={< />}/> */}
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
