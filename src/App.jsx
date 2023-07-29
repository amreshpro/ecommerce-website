import Home from "./app/pages/Home"

import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import LoginPage from "./app/pages/LoginPage";
import SignupPage from "./app/pages/SignupPage";
import Profile from "./app/features/mini/Profile";
import CartList from "./app/features/mini/CartList";
import Navbar from "./app/features/navbar/Navbar";
import AuthWrapper from "./app/components/AuthWrapper";




const router = createBrowserRouter([
  {
    path: "/",
    element:<AuthWrapper> <Home/></AuthWrapper>,
  },
  {
    path: "/login",
    element: <LoginPage/> ,
  },
  {
    path:"/signup",
    element:<SignupPage/>
  },

{
  path:"/profile",
  element:<>
  <AuthWrapper>
<Navbar/>
<Profile/>
  </AuthWrapper>
  </>
},
{
  path:"/cart",
  element:(<>
  <AuthWrapper>
  <Navbar/>
  <CartList/>
  </AuthWrapper>
 
  </>
  )
},


]);


const App = () => {
  return (
    <div className="">

<RouterProvider  router={router} />


    </div>
  )
}
export default App