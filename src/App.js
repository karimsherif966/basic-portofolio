import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Layout from './Layout/Layout';

import { Navigate, RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Start from './Start/Start'
import Footer from './Footer/Footer';
import About from './About/About';
import Portofolio from './Portofolio/Portofolio';
import Contact from './Contact/Contact';


function App() {
    let routers = createHashRouter([
        {path:'',element:<Layout/>,children:[
            {path:'',element:<Start/>},
            {path:'start',element:<Start/>},
            {path:'about',element:<About/>},
            {path:'portofolio',element:<Portofolio/>},
            {path:'contact',element:<Contact/>}
            
        ]}
    ])

  return(
    <>
    <RouterProvider router={routers}>

    </RouterProvider>
    </>
  )
}

export default App;
