import { fireEvent,render, screen } from "@testing-library/react";

import Post from "..";

const comentarios = ['que daora!!!', 'Prefiro os modelos novos.']

describe('testes para o componente PostComments', () => {
    test('testando a renderização do componente', () => {
        render(<Post />)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })
    test('Testar adição de dois comentários ao post', () => {
        render(<Post />)
        const campoTexto = screen.getByTestId('txtarea-adicionar-comentario')
        const botao = screen.getByTestId('btn-adicionar-comentario')

        for(const comentario in comentarios){
            fireEvent.change(campoTexto, {
                target: {
                    value: comentario
                }
            })
            fireEvent.click(botao)
        }
        
        expect(screen.getAllByTestId('li-comentario')).toHaveLength(2);
    })
})