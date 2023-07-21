import'./styles/UserCard.css'

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpenForm, setCloseModal, showDeleteMessage }) => {

  const handleDelete = () => {
    deleteUserById('/users', user.id)
    setCloseModal(false)
    showDeleteMessage(`${user.first_name} ${user.last_name}`)
    
}

const handleUpdate = () => {
  setUpdateInfo(user)
  handleOpenForm()
}



return (
  <article className="usercard__container">
    <h2 className="usercard__name">{`${user.first_name} ${user.last_name}`}</h2>
    <hr className="usercard__line"/>
    <ul className="usercard__group">
      <li className="usercard_group-container">
        <span className="usercard__title">EMAIL:</span>
        <span className="usercard__inf">{user.email}</span>
      </li>
      
      <li className="usercard_group-container">
        <span className="usercard__title">BIRTHDAY:</span>
        <span className="usercard__inf">{user.birthday}</span>
      </li>
    </ul>
    <hr className="usercard__line"/>
    <footer className="usercard__footer">
      <button onClick= {handleDelete}><i className='bx bxs-trash btn-trash bx-sm'></i></button>
      <button onClick={handleUpdate}><i className='bx bx-edit btn-edit bx-sm' ></i></button>
    </footer>
  </article>
)
}

export default UserCard