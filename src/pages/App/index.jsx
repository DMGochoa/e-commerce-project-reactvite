import { useRoutes, BrowserRouter } from 'react-router-dom'

import { ShoppingCartProvider } from '../../context'
import { Home } from '../Home'
import { SignIn } from '../SignIn'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { MyAccount } from '../MyAccount'
import { Navbar } from '../../components/navbar'
import { CheckOutSideMenu } from "../../components/CheckOutSideMenu"

import './App.css'

function AppRouters() {
  return useRoutes([
    {path: '/', element: <Home />},
    {path: '/category/:category', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-orders/:id', element: <MyOrder />},
    {path: '/my-orders/last', element: <MyOrder />},
    {path: '/sign-in', element: <SignIn />},
    {path: '*', element: <NotFound />}
  ])
}


function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRouters />
        <Navbar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
