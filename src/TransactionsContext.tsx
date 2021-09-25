import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

interface Transaction {
  id: number,
  title: string,
  type: string,
  value: number,
  category: string,
  date: string
}

interface TransctionsProviderProps {
  children: ReactNode;
}

type TransactionInput = Omit<Transaction, 'id' | 'date'>

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}


export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export const TransactionsProvider = ({children}: TransctionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  const createTransaction = async (transactionInput: TransactionInput) => {

    const response = await api.post('/transactions', {
      ...transactionInput,
      date: new Date()
    })
    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}