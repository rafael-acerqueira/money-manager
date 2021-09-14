import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";

export const Summary = () => (
  <Container>
    <section>
      <header>
        <p>Entradas</p>
        <img src={incomeImg} alt="Entradas" />
      </header>
      <strong>R$1.000,00</strong>
    </section>
    <section>
      <header>
        <p>Saídas</p>
        <img src={outcomeImg} alt="Saídas" />
      </header>
      <strong>-R$300,00</strong>
    </section>
    <section className='highlight-background'>
      <header>
        <p>Total</p>
        <img src={totalImg} alt="Total" />
      </header>
      <strong>R$700,00</strong>
    </section>
  </Container>
)