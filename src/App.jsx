import './App.css'
import FormUser from './components/FormUser'
import CardModal from './components/CardModal'
import UserCard from './components/UserCard'
import useFetch from './hooks/useFetch'
import { useEffect, useState } from 'react'
import AddModal from './components/AddModal'
import UpdateModal from './components/UpdateModal'

function App() {

  const [updateInfo, setUpdateInfo] = useState()

  const [closeForm, setCloseForm] = useState(true)

  const [closeModal, setCloseModal] =useState(true)

  const [addModal, setAddModal] = useState(true)

  const [updateModal, setUpdateModal] = useState(true)

  const [deleteUserName, setDeleteUserName] = useState()


  const baseUrl = 'https://users-crud.academlo.tech'
  
  const [ 
    users, 
    getAllUsers, 
    createNewUser, 
    deleteUserById, 
    updateUserById,
    isLoading
  ] = useFetch (baseUrl, setCloseForm)

  useEffect(() => {

    getAllUsers('/users')
    
  }, [])
  
  const showDeleteMessage = (userName) => {
    setDeleteUserName(userName)
    
  }

  const handleOpenForm = () => {
    setCloseForm(false)
  }

  
  

  return (
    <div>
      {isLoading 
      ? 
      (
        <div className='loader__users'>
        <div className="loader">
         <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
      </div>
      )
      :
      (
        <>
        <div>
      <header className='header'></header>
      <h1 className='user__tittle'>Users</h1>
      <button onClick={handleOpenForm} className='formuser__btn-open'>CREATE NEW USER</button>
      <FormUser
      createNewUser={createNewUser}
      updateInfo={updateInfo}
      updateUserById={updateUserById}
      setUpdateInfo={setUpdateInfo}
      closeForm={closeForm}
      setCloseForm={setCloseForm}
      setAddModal={setAddModal}
      setUpdateModal={setUpdateModal}
  
      />
      <div className='usercard-container'>
        {
          users?.map( user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              handleOpenForm={handleOpenForm}
              setCloseModal={setCloseModal}

            />
          ))
        }
      </div>
      <CardModal
      closeModal={closeModal}
      setCloseModal={setCloseModal}
      deleteUserName={deleteUserName}
      />
      </div>
      <AddModal
      addModal= {addModal}
      setAddModal={setAddModal}
      />
      <UpdateModal
      updateModal={updateModal}
      setUpdateModal={setUpdateModal}
      />

   </>
   
      )}
  </div>
  )
}

export default App