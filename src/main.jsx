import {} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import EditarPedido from './routes/EditarPedido.jsx'
import EditarProduto from './routes/EditarProduto.jsx'
import Error from './routes/Error.jsx'
import ExcluirPedido from './routes/ExcluirPedido.jsx'
import ExcluirProduto from './routes/ExcluirProduto.jsx'
import Home from './routes/Home.jsx'
import InserirPedido from './routes/InserirPedido.jsx' 
import Login from './routes/Login.jsx'
import Pedido from './routes/Pedido.jsx'
import Produtos from  './routes/Produtos.jsx'
import Sobre from './routes/Sobre.jsx'
import Nav from './components/Nav.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
  {
  
  path:'/',
  element:<App/>,
  errorElement: <Error />,
  
  
  
  children:[
      {path: '/', element:<Home/>},
      {path: '/Nav', element:<Nav/>},
      {path: '/EditarPedido', element:<EditarPedido/>},
      {path: '/EditarProduto', element:<EditarProduto/>},
      {path: '/Error', element:<Error/>},
      {path: '/ExcluirPedido', element:<ExcluirPedido/>},
      {path: '/ExcluirProduto', element:<ExcluirProduto/>},  
      {path: '/InserirPedido', element:<InserirPedido/>},
      {path: '/Login', element:<Login/>},
      {path: '/Pedido', element:<Pedido/>},
      {path: '/Produtos', element:<Produtos/>},
      {path: '/Sobre', element:<Sobre/>},
      {path: '/EditarProduto/Produtos/:id', element: <EditarProduto />},
      {path: '/ExcluirProduto/Produtos/:id', element: <ExcluirProduto />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);