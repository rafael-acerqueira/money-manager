import Modal from 'react-modal'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void

}

export const NewTransactionModal = ({ isOpen, onRequestClose } : NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <p>Modal modal</p>
    </Modal>
  )
}