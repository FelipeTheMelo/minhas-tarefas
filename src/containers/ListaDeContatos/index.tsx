import styled from 'styled-components'
import FormularioContato from '../FormularioContato'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import ContatoCard from '../../components/ContatoCard'

const Container = styled.main`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
`

function ListaDeContatos() {
  const contatos = useSelector((state: RootState) => state.contatos.itens)

  return (
    <Container>
      <h1>Lista de Contatos</h1>
      <FormularioContato />
      <div style={{ marginTop: '20px' }}>
        {contatos.map((contato) => (
          <ContatoCard
            key={contato.id}
            id={contato.id}
            nome={contato.nome}
            email={contato.email}
            telefone={contato.telefone}
          />
        ))}
      </div>
    </Container>
  )
}

export default ListaDeContatos