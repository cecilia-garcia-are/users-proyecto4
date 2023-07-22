import './App.css'
import FormUser from './components/FormUser'
import CardModal from './components/CardModal'
import UserCard from './components/UserCard'
import useFetch from './hooks/useFetch'
import { useEffect, useState } from 'react'
import AddModal from './components/AddModal'
import UpdateModal from './components/UpdateModal'
import IsDarkMode from './components/IsDarkMode'

function App() {

  const [updateInfo, setUpdateInfo] = useState()

  const [closeForm, setCloseForm] = useState(true)

  const [closeModal, setCloseModal] =useState(true)

  const [addModal, setAddModal] = useState(true)

  const [updateModal, setUpdateModal] = useState(true)

  const [updateUserName, setUpdateUserName] = useState()

  const [addUserName, setAddUserName] = useState()

  const [deleteUserName, setDeleteUserName] = useState()

  const [darkMode, setDarkMode] = IsDarkMode() //llamada de mi componente

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


//DARK MODE
  const handleToggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode)
  }
  
  //ELIMINAR USER MODAL
  const showDeleteMessage = (userName) => {
    setDeleteUserName(userName)
  
  }

  //ACTUALIZAR USER MODAL
  const showUpdateMessage = (userName) => {
    setUpdateUserName(userName)
  }

  //ADDUSER MODAL
 const showAddMessage = (userName) => {
  setAddUserName(userName)
 }

//MODAL FOMRULARIO 
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
      {/** btn dark */}
      <div className='group__dark'>
      <input className='switch' type="checkbox" 
      id="switch"
      defaultChecked={!darkMode} 
      onChange={handleToggleDarkMode}
      />
      <label className='mov' for="switch">Toggle</label>
      </div>

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
      showUpdateMessage={showUpdateMessage}
      showAddMessage={showAddMessage}
  
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
              showDeleteMessage={showDeleteMessage}

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
      addUserName={addUserName}
      />
      <UpdateModal
      updateModal={updateModal}
      setUpdateModal={setUpdateModal}
      updateUserName={updateUserName}
      />

   </>
   
      )}
  </div>
  )
}

export default App