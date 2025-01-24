import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "universal-cookie";
// import dotenv from 'dotenv'

// dotenv.config()

const cookies = new Cookies();

const Login = () => {
  const backendURL = import.meta.env.VITE_BackendURL || 'http://localhost:3000/';
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendURL}login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const error = await response.json();
        setUser({ email: '', password: '' })
        toast.error(`${error.message}!!`, {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        throw new Error(error.message || 'Login failed');
      }

      const data = await response.json();

      // set the cookie
      cookies.set("TOKEN", data.user.token, {
        path: "/",
      });

      toast.success('Login Successful!!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });

      setTimeout(() => {
        navigate('/admin');
      }, 3000);
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <div className='h-screen'>
        <section className="bg-gray-50  h-screen  pt-28">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 ">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl ">
                  Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Your email
                    </label>
                    <input
                      onChange={handleChange}
                      value={user.email}
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Password
                    </label>
                    <input
                      onChange={handleChange}
                      value={user.password}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Sign In
                  </button>

                  {/* <p className="text-sm font-light text-gray-500 ">
                    Don’t have an account yet?{' '}
                    <Link
                      to="/register"
                      className="font-medium text-primary-600 hover:underline "
                    >
                      Sign up
                    </Link>
                  </p> */}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Login