import logo from './logo.svg';
import './App.css';

import { createHashRouter, RouterProvider} from 'react-router-dom'
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Services from './Component/Services/Services';
import NotFound from './Component/NotFound/NotFound';
import Navbar from './Component/Navbar/Navbar';
import Projects from './Component/Projects/Projects';
import CommerceProject from './Component/CommerceProject/CommerceProject';
import TodosProject from './Component/TodosProject/Todos'
import MediaContextProvider from './Component/Context/mediaContext';



const routers = createHashRouter([{
  path:'' , element:<Navbar/>, children:[
    {index:true , element:<Home/>} ,
    {path:'about' , element:<About/>} ,
    {path:'contact' , element:<Contact/>} ,
    {path:'services' , element:<Services/>} ,
    {path:'projects' , element:<Projects/>} ,
    {path:'commerceproject' , element:<CommerceProject/>} ,
    {path:'todosproject' , element:<TodosProject/>} ,
    {path:'projects' , element:<Projects/>} ,
    {path:'*' , element:<NotFound/>} ,
   
  ]

}])
function App() {


  return<MediaContextProvider>
   <RouterProvider router={routers}></RouterProvider>
   </MediaContextProvider>
}

export default App;
