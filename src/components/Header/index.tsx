import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export const Header = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="money manager logo" />
      <button type="button">
        Nova transação
      </button>
    </Content>
  </Container>
)