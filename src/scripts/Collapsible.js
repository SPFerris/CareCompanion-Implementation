import React, { useState } from 'react';

/*

Use states (booleans) to handle the status of the sub menu titles
and their children

*/

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  /* 
  
  Returns the the paramters for the sub menus and content (title, children)

  The JSX children prop is allowing any information wrapped inside of the collapsible
  compoent (within StickyMenu) to be rendered when the status of the submenu is open

  Stylings for the divs are handled in StickyMenu

  */
 
  return (
    <div>
      <div onClick={toggleCollapse}>
        <h4>{title}</h4>
        <span>{isOpen}</span>
      </div>
      {isOpen && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapsible;