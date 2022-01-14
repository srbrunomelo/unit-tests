import Dropdown from './Dropdown'

import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Dropdown', () => {
  const title = "Selecione uma marca"
  const options = ['Ferrari', 'Mercedes-Benz']

  it('Verificar se o Dropdown inicia fechado', () => {
    render(
      <Dropdown 
        title={title} 
        options={options}
        onSelect={() => {}}
      />
    )

    options.map(option => {
      expect(screen.queryByText(option)).not.toBeInTheDocument() 
    })
 
  })

  it('Mostrar opções ao clicar', () => {
    render(
      <Dropdown 
        title={title} 
        options={options}
        onSelect={() => {}}
      />
    )

    options.map(option => {
      expect(screen.queryByText(option)).not.toBeInTheDocument() 
    })
 
    userEvent.click(screen.getByRole('button', { name: title }))

    options.map(option => {
      expect(screen.getByRole('menuitem', { name: option })).toBeInTheDocument()
    })

  })

  it('Quando selecionar um item de menu, fechar o dropdown e indicar qual opção foi selecionada', () => {
    const onSelect = jest.fn();
    render(<Dropdown  title={title}  options={options} onSelect={onSelect} /> )

    userEvent.click(screen.getByRole('button', { name: title }))

    options.map(option => {
      expect(screen.getByRole('menuitem', { name: option })).toBeInTheDocument()
    }) 

    userEvent.click(screen.getByRole('menuitem', { name: options[0]} )) 

    expect(onSelect).toHaveBeenCalledWith(options[0])

    options.map(option => {
      expect(screen.queryByText(option)).not.toBeInTheDocument() 
    })

  })
})