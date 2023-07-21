import './styles/CardModal.css'

const CardModal = ({
    closeModal,
    setCloseModal,
    deleteUserName
  }) => {


const handleOpenCard = () => {
    setCloseModal(true)
  }

  return (
    <div onClick={handleOpenCard} className={`cardmodal-container ${closeModal && 'close-card'}`}>
    <div onClick={e => e.stopPropagation()} className='cardmodal__group'>
    <div onClick={handleOpenCard} className="cardmodal__close">x</div>
     <h2 className="cardmodal__tittle">Delete user</h2>
     <h3 className='cardmodal__text'>{`The user ${deleteUserName} has been successfully deleted`}</h3>
     
     <button onClick={handleOpenCard} className='cardmodal__btn'>Accept</button>
     </div>
    </div>
 )
}

export default CardModal
