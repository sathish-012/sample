import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home'; 
import Contacts from './Contacts'; 
import About from './About';
import Header from './Header';
import { Provider } from 'react-redux'; // Corrected import
import { myStore } from './redux/Config';

const routerPaths = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/header", element: <Header /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> }, 
  { path: "/contacts", element: <Contacts /> }, 
]);

function App() {
  return (
    <Provider store={myStore}> {/* Corrected Provider and myStore */}
      <div className="App">
        <Header />
        <RouterProvider router={routerPaths} />
      </div>
    </Provider>
  );
}

export default App;
