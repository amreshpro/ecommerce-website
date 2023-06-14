import Home from "./app/pages/Home"

import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import LoginPage from "./app/pages/LoginPage";
import SignupPage from "./app/pages/SignupPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <LoginPage/> ,
  },
  {
    path:"/signup",
    element:<SignupPage/>
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