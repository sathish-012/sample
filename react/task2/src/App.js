import logo from './logo.svg';
import './App.css';
import Product from './Product';
import UserList from './UserList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div>
      <Product/>
      <UserList/>
   </div>
  );
    
}

export default App;
