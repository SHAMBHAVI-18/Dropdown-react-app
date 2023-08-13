import { useState } from 'react';

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button 
        className="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        Select 
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {options.map(option => (
            <li 
              key={option}
              onClick={() => setIsOpen(false)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;