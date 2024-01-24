import React from 'react'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import { AppLocalStorage } from '../../utils'

function SignIn() {
  const [view, setView] = useState('log-in')
  const [accountValues, setAccountValues] = useState({})
  const context = useContext(ShoppingCartContext)

  //Account
  const localSotorageAccount = new AppLocalStorage('account', {})
  const localSotorageSignOut = new AppLocalStorage('sign-out', true)

  function determineElementsInAccount(object) {
    return object? Object.keys(object).length === 0 : true
  }

  const noAccountOnLocalStorage = determineElementsInAccount(localSotorageAccount.get())
  const noAccountOnContext = determineElementsInAccount(context.account)
  const hasAccount = !noAccountOnLocalStorage || !noAccountOnContext

  function renderLogIn () {
    return (
      <div className='w-full p-6 border border-gray-200 rounded-lg shadow-sm'>
            <form className='flex flex-col items-center space-y-4'>
                <input 
                    type='email'
                    placeholder={hasAccount ? context.account?.email : 'Email'}
                    className='w-full p-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:ring focus:ring-gray-200 focus:outline-none'
                />
                <input
                    type='password'
                    placeholder={hasAccount ? 'Already In' : 'Password'}
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
                          localSotorageSignOut.set(false)
                          context.setSignOut(false)
                          setAccountValues({})
                        }
                      }
                      disabled={!hasAccount}
                  >
                      Log In
                  </button>
                </Link>
                <Link to='/sign-in' className='w-full'>
                  <button
                    type='submit'
                    className='w-full py-2 px-4 bg-white text-black rounded-lg border-black border-2 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50'
                    onClick={() => setView('sign-up')}
                    disabled={hasAccount}
                  >
                    Sign Up
                  </button>
                </Link>
                
            </form>
        </div>
      
    )
  }

  function renderSignUp () {
    return(
      <div className='w-full max-w-xs p-6 border border-gray-200 rounded-lg shadow-sm'>
        <form className='flex flex-col items-center space-y-4'>
            <h1 className='text-xl font-medium mb-5'>Create Account</h1>
            <div className='w-full'>
              <span>Name:</span>
              <input 
                  type='text'
                  placeholder='Name'
                  onChange={(event) => setAccountValues({...accountValues, name: event.target.value})}
                  className='w-full p-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:ring focus:ring-gray-200 focus:outline-none'
              />
            </div>
            <div className='w-full'>
              <span>Email:</span>
              <input 
                type='email'
                placeholder='Email'
                onChange={(event) => setAccountValues({...accountValues, email: event.target.value})}
                className='w-full p-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:ring focus:ring-gray-200 focus:outline-none'
            />
            </div>
            <div className='w-full'>
              <span>Password:</span>
              <input
                type='password'
                placeholder='Password'
                onChange={(event) => setAccountValues({...accountValues, password: event.target.value})}
                className='w-full p-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:ring focus:ring-gray-200 focus:outline-none'
              />
            </div>
            <Link to='/' className='w-full'>
              <button
                type='submit'
                className='w-full py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50'
                onClick={
                  () => {
                    localSotorageSignOut.set(false)
                    context.setSignOut(false)
                    context.setAccount(accountValues)
                    localSotorageAccount.set(accountValues)
                    setAccountValues({})
                  }
                }
              >
                Sign Up
              </button>
            </Link>
        </form>
      </div>
    )
  }

  const actualRender = view === 'log-in' ? renderLogIn() : renderSignUp()

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center w-full max-w-xs mb-4'>
        <h1 className='text-xl font-medium mb-6'>Welcome</h1>
        {actualRender}
      </div>
    </Layout>
  )
}

export default SignIn