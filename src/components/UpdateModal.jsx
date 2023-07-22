import './styles/CardModal.css'

const UpdateModal = ({
    updateModal,
    setUpdateModal,
    updateUserName
  }) => {


const handleOpenCard = () => {
    setUpdateModal(true)
  }

  return (
    <div onClick={handleOpenCard} className={`cardmodal-container ${updateModal && 'close-card'}`}>
    <div onClick={e => e.stopPropagation()} className='cardmodal__group'>
    <div onClick={handleOpenCard} className="cardmodal__close">x</div>
     <h2 className="cardmodal__tittle">Update user</h2>
     <h3 className='cardmodal__text'>{`You have updated ${updateUserName} with success`}</h3>
     
     
     <button onClick={handleOpenCard} className='cardmodal__btn'>Accept</button>
     </div>
    </div>
 )
}

export default UpdateModal