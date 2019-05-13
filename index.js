import ReactDOM from 'react-dom';
import React from 'react';


function Clicker({handleClick}){  
  return <div>
    <button onClick={() => { handleClick('A');}}>A</button>
    <button onClick={() => { handleClick('B');}}>B</button>
    <button onClick={() => { handleClick('C');}}>C</button>
    </div>;
}

ReactDOM.render(<Clicker handleClick={(letter)=>{ alert(`${letter}  is clicked`);}} />,
document.getElementById('root')
);