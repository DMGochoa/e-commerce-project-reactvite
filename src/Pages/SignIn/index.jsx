import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import { AppLocalStorage } from '../../utils'

function SignIn() {
  const context = useContext(ShoppingCartContext)
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center w-full max-w-xs mb-4'>
        <h1 className='text-xl font-medium mb-6'>Welcome</h1>
        <div className='w-full p-6 border border-gray-200 rounded-lg shadow-sm'>
            <form className='flex flex-col items-center space-y-4'>
                <input 
                    type='email'
                    placeholder='Email'
                    className='w-full p-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:ring focus:ring-gray-200 focus:outline-none'
                />
                <input
                    type='password'
                    placeholder='Password'
                    className='w-full p-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:ring focus:ring-gray-200 focus:outline-none'
                />
                <Link to='/recover '>
                  <p
                    className='text-sm text-gray-500 hover:text-gray-600 hover:underline self-start'
                  >
                      Forgot your password?
                  </p>
                </Link>
                
                <Link to='/' className='w-full'>
                  <button
                      type='submit'
                      className='w-full py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50'
                      onClick={
                        () => {
                          new AppLocalStorage('sign-out', false)
                          context.setSignOut(false)
                        }
                      }
                  >
                      Log In
                  </button>
                </Link>
                <Link to='/sign-up' className='w-full'>
                  <button
                      type='submit'
                      className='w-full py-2 px-4 bg-white text-black rounded-lg border-black border-2 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50'
                  >
                      Sign Up
                  </button>
                </Link>
                
            </form>
        </div>
      </div>
    </Layout>
  )
}

export default SignIn