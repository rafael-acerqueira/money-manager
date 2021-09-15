import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export const TransactionsTable = () => {

  useEffect(() => {
    api.get('transactions')
      .then(reponse => console.log(reponse.data))
  }, [])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lavagem Simples</td>
            <td className='withdraw'>-R$100,00</td>
            <td>Higiene</td>
            <td>20/03/2020</td>
          </tr>
          <tr>
            <td>Lavagem Completa</td>
            <td className='withdraw'>-R$250,00</td>
            <td>Higiene</td>
            <td>20/01/2021</td>
          </tr>
          <tr>
            <td>Salário</td>
            <td className='deposit'>R$1.500,00</td>
            <td>Financeiro</td>
            <td>23/06/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}