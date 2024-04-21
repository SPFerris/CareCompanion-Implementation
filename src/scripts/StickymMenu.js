import React, { useState } from "react";
import Collapsible from "./Collapsible";

/*

Use states (booleans) to handle the status of the sticky menu

*/

const StickyMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    
  return (

    /* 
    
    Section created for the button postion and menu postion
    onClick tag used to call the function toggleMenu and set isOpen.
    
    Once isOpen is set, a new section is rendered to display a popup menu.
    Within this section Divs are utlised to display submenus containing 
    anxiety managemnt tools.

    <Collapsible> calls another JS file that contains similar fucntionality
    to be used in the submenus.

    CSS is passed directly into the div for stylings
    
    */

    <section>
      <div style={{position: "fixed", bottom: "20px", left: "20px",}}>
        <button onClick={toggleMenu} style={{backgroundColor: "green",color: "white",padding: "15px", border: "none", borderRadius: "40px",}}>Mindful Moments</button>
      </div>

      {isOpen && (
        <section style={{position: "fixed",bottom: "80px", left: "20px", backgroundColor: "white", padding: "20px", borderRadius: "25px", }}>
    <div>
      <Collapsible title="3-3-3 Rule: Ground Anxious Feelings">
        <li>Name 3 things you can see</li>
        <li>Name 3 things you can hear</li>
        <li>Move 3 of your body parts</li>
      </Collapsible>

      <Collapsible title="5 to 1 Tecnique: Engage your mind to prevent racing thoughts">
        <li>Name 5 things you can see</li>
        <li>Name 4 things you can feel</li>
        <li>Name 3 things you can hear</li>
        <li>Name 2 things you can smell</li>
        <li>Name 1 thing you can taste</li>
      </Collapsible>

      <Collapsible title="Put down your thoughts: Release your concerns and worries from the day">
        <form>
          <textarea className="textBox" rows="10" cols="77" placeholder="Write down your worries"></textarea>
        </form>
      </Collapsible>
    </div>
        </section>
      )}
    </section>
  )
};

export default StickyMenu;