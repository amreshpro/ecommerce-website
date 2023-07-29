import { Link, Navigate } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import { isAuth } from "../../store/authSlice";
import { useState } from "react";
import { userLoginDetailsForStore } from "../../store/userSlice";




const Login = () => {

const [user, setUser] = useState({
  name:"",
  email:"",
  password:"",
})




  const isAuthenticated = useSelector((state)=>state.auth)
const dispatch = useDispatch()

function submitLoginFormHandler(e){
  e.preventDefault();

  const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

if(regex.test(user.email) && user.password){

dispatch(userLoginDetailsForStore(user))
  dispatch(isAuth(true))

}


}



  return (
    <>
{ isAuthenticated ? <Navigate to="/" replace={true} /> :  <div className="flex justify-center items-center w-screen">
    

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto  sm:max-w-sm">
              <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Log in to your account
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center justify-center ">
              <form className="space-y-6" action="#" method="POST">
              <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      onChange={(e)=>{setUser({...user,name:e.target.value})}}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      onChange={(e)=>{setUser({...user,email:e.target.value})}}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    {/* <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                      </a>
                    </div> */}
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      onChange={(e)=>{setUser({...user,password:e.target.value})}}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                 onClick={submitLoginFormHandler}
                 >
                    Log In
                  </button>
                </div>
              </form>
    
              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{' '}
                <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Create an Account
                </Link>
              </p>
            </div>
          </div>
    
    
        </div>




}
    </>
  )
}
export default Login



