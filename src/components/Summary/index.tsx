import { useContext } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export const Summary = () => {

  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      acc.deposits += transaction.value
      acc.total += transaction.value
    } else{
      acc.withdraws += transaction.value
      acc.total -= transaction.value
    }

    return acc
  },{
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  const { deposits, withdraws, total } = summary

  return (
    <Container>
      <section>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(deposits)
          }
        </strong>
      </section>
      <section>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          -
          {

            new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(withdraws)
          }
        </strong>
      </section>
      <section className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(total)
          }
        </strong>
      </section>
    </Container>
  )
}