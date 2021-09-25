import { useState } from 'react'
import Modal from 'react-modal'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { GlobalStyle } from "./styles/global"
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './hooks/useTransactions'

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }
  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <TransactionsProvider>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  )
}
