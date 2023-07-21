import './styles/CardModal.css'

const AddModal = ({
    addModal,
    setAddModal
  }) => {


const handleOpenCard = () => {
    setAddModal(true)
  }

  return (
    <div onClick={handleOpenCard} className={`cardmodal-container ${addModal && 'close-card'}`}>
    <div onClick={e => e.stopPropagation()} className='cardmodal__group'>
    <div onClick={handleOpenCard} className="cardmodal__close">x</div>
     <h2 className="cardmodal__tittle">New user</h2>
     <h3 className='cardmodal__text'>You have successfully created a new user</h3>
     
     <button onClick={handleOpenCard} className='cardmodal__btn'>Accept</button>
     </div>
    </div>
 )
}

export default AddModal
