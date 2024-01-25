import React from 'react'
import { useContext, useState } from 'react'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import { AppLocalStorage } from '../../utils'

function MyAccount() {
  const context = useContext(ShoppingCartContext)
  const localSotorageAccount = new AppLocalStorage('account', {})
  const [editing, setEditing] = useState({ name: false, email: false, password: false });
  const account = context.account.name? context.account: localSotorageAccount.get()

  function setAccount(account) {
    localSotorageAccount.set(account)
    context.setAccount(account)
  }

  const [tempAccount, setTempAccount] = useState({ ...account });

  const handleEditClick = (field) => {
      setEditing({ ...editing, [field]: true });
  };

  const handleConfirmClick = (field) => {
      setAccount({ ...account, [field]: tempAccount[field] });
      setEditing({ ...editing, [field]: false });
  };

  const handleChange = (e, field) => {
      setTempAccount({ ...tempAccount, [field]: e.target.value });
  };

  return (
    <Layout>
        <div className='flex items-center justify-center relative w-80 mb-4'>
          <h1 className='font-medium text-xl'>My Account</h1>
        </div>
        <div className='w-full max-w-md p-6 border border-gray-200 rounded-lg shadow-sm'>
            {Object.entries(account).map(([key, value]) => (
                <div key={key} className='flex items-center justify-between py-2'>
                    <div>
                        <span className='font-medium mr-2'>{key.toLocaleUpperCase()}:</span>
                        {editing[key] ? (
                          <>
                            <input
                                type={key === 'password' ? 'password' : 'text'}
                                value={tempAccount[key]}
                                onChange={(e) => handleChange(e, key)}
                                className='p-2 border border-gray-300 rounded-md'
                            />
                          </>
                        ) : (
                            <span className='font-medium'>{key === 'password'? '******':value}</span>
                        )}
                    </div>
                    <button
                        onClick={() => editing[key] ? handleConfirmClick(key) : handleEditClick(key)}
                        className='p-2 text-white bg-blue-500 rounded-md'
                    >
                        {/* Reemplaza con tus íconos */}
                        {editing[key] ? 'Confirm' : 'Edit'}
                    </button>
                </div>
            ))}
        </div>
    </Layout>
  );
};

export default MyAccount