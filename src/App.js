import { useState } from 'react'
import Dropdown from './components/Dropdown/Dropdown'

const App = () => {
  const [selected, setSelected] = useState('')

  return (
    <div>
      {selected && (<p>O item selecionado foi: {selected}</p>)}
      <Dropdown 
        title="Selecione uma marca"
        options={['Ferrari', 'Mercedes-Benz', 'BMW', 'Rolls Royce']}
        onSelect={option => setSelected(option)}
      />
    </div>
  )
}

export default App 