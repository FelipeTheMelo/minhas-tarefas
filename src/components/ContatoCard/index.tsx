import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { remover } from '../../store/reducers/contatos'
import { useState } from 'react'
import { editar } from '../../store/reducers/contatos'

type Props = {
    id: number
    nome: string
    email: string
    telefone: string
}

const Card = styled.div`
    background-color: white;
    padding: 16px;
    border-radius: 6px;
    margin-bottom: 12px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`

const Campo = styled.p`
    margin: 4px 0;
`

const Botoes = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 10px;
`

const Botao = styled.button`
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: white;

&.remover {
    background-color: #dc3545;
}

&.editar {
    background-color: #17a2b8;
}

&.salvar {
    background-color: #28a745;
}
`

const InputEdicao = styled.input`
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 4px;
`

function ContatoCard({ id, nome, email, telefone }: Props) {
    const dispatch = useDispatch()

    const [editando, setEditando] = useState(false)
    const [nomeEditado, setNomeEditado] = useState(nome)
    const [emailEditado, setEmailEditado] = useState(email)
    const [telefoneEditado, setTelefoneEditado] = useState(telefone)

    const removerContato = () => {
    dispatch(remover(id))
}

const salvarEdicao = () => {
    dispatch(
        editar({
        id,
        nome: nomeEditado,
        email: emailEditado,
        telefone: telefoneEditado
    })
    )
    setEditando(false)
}

return (
    <Card>
        {editando ? (
        <>
            <InputEdicao
            value={nomeEditado}
            onChange={(e) => setNomeEditado(e.target.value)}
        />
        <InputEdicao
            value={emailEditado}
            onChange={(e) => setEmailEditado(e.target.value)}
        />
        <InputEdicao
            value={telefoneEditado}
            onChange={(e) => setTelefoneEditado(e.target.value)}
        />
        <Botoes>
            <Botao className="salvar" onClick={salvarEdicao}>
                Salvar
            </Botao>
            </Botoes>
        </>
    ) : (
        <>
            <Campo><strong>Nome:</strong> {nome}</Campo>
            <Campo><strong>Email:</strong> {email}</Campo>
            <Campo><strong>Telefone:</strong> {telefone}</Campo>
            <Botoes>
            <Botao className="editar" onClick={() => setEditando(true)}>
                Editar
            </Botao>
            <Botao className="remover" onClick={removerContato}>
                Remover
            </Botao>
            </Botoes>
        </>
        )}
    </Card>
)}

export default ContatoCard