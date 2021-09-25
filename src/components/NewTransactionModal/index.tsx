import { useState, useContext, FormEvent } from 'react'

import Modal from 'react-modal'
import { TransactionsContext } from '../../TransactionsContext'
import { api } from '../../services/api'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'

import { Container, TransactionTypeContainer, ModalButton } from './styles'




interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void

}

export const NewTransactionModal = ({ isOpen, onRequestClose } : NewTransactionModalProps) => {

  const { createTransaction } = useContext(TransactionsContext)

  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [value, setValue] = useState(0)

  const handleCreateNewTransaction = async(event: FormEvent) => {
    event.preventDefault();

    await createTransaction({
      title,
      value,
      category,
      type
    })

    setTitle('')
    setCategory('')
    setValue(0)
    setType('deposit')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImg} alt='botão de fechar'/>
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação </h2>

        <input
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={e => setValue(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <ModalButton
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </ModalButton>

          <ModalButton
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </ModalButton>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}