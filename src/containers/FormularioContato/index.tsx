import { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/contatos'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`

const Botao = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

function FormularioContato() {
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const adicionarContato = (e: React.FormEvent) => {
    e.preventDefault()

    if (!nome || !email || !telefone) return

    dispatch(adicionar({ nome, email, telefone }))

    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <Form onSubmit={adicionarContato}>
      <Input
        type="text"
        placeholder="Nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="tel"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <Botao type="submit">Adicionar Contato</Botao>
    </Form>
  )
}

export default FormularioContato
