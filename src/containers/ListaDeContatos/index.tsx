import styled from 'styled-components'
import FormularioContato from '../FormularioContato'

const Container = styled.main`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
`

function ListaDeContatos() {
  return (
    <Container>
      <h1>Lista de Contatos</h1>
      <FormularioContato />
      {/* Em breve: lista dos contatos */}
    </Container>
  )
}

export default ListaDeContatos
