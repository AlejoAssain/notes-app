import { Route, Routes } from 'react-router-dom';
import Register from './components/register/Register';
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
  return (
    <div id="App">
      <Routes>
        <Route path="/" element={ <Login /> }/>
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/register" element={ <Register /> } />
      </Routes>
    </div>
  );

}

export default App;
