import { useState } from "react" 

const Dropdown = ({ title, options, onSelect }) => {
  const [isOpen, setIsopen] = useState(false)

  const handleSelection = (option) => {
    onSelect(option) 
    setIsopen(false)
  }

  return (
    <div>
      <button onClick={() => setIsopen(true)}>{title}</button> 
      {
        isOpen && (
          <ul>
            { options.map(option => (
              <li 
                onClick={() => handleSelection(option)} 
                key={option} 
                role="menuitem">
                {option}
              </li>
            ))} 
          </ul>
        )
      }
    </div>
  )
}

export default Dropdown