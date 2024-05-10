// import mouseevent
//[L.18]import { MouseEvent } from "react";
//hook eg useState & useEffect
import { useState } from "react";

//{items :[array], heading: string} to make props
interface Props{
  items: string[];
  heading: string; 
  //a 3rdfunc (item: string) => void
  onSelectItem: (items: string) => void;
}



function ListGroup( {items, heading , onSelectItem}:Props ) {
    //render the list dynamicly
    const [selectedIndex, setSelectedIndex] = useState(-1);
   
   // items [];
    //const message =items.length === 0 ? <p>no items found</p> : null;
    /*const getMessage = () => {
       return items.length === 0 ? <p>no items found</p> : null
    this refered after h1
    } this conditional rendering 
    {items.length === 0 && <p>no items found</p>}
    */

//Event handler
  // const handleClick = ((event: MouseEvent) => console.log(event))

//we're repeating so we shud condition render
 /* if(items.length === 0)
     return (
    <>
      <h1>List</h1>
      <p>no item found</p>
    </>);
    */


//curly braces used to render data dynamically

  return (
    /*the empty braces make it ok to add multiple components
    
    */
    <>
    <h1>{heading}</h1>
    {items.length === 0 && <p>no items found</p> }
    <ul className="list-group ">
       {items.map((item, index) => (
         <li className= {selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
         key={item} 
         onClick={() => {setSelectedIndex (index);
          onSelectItem(item);
         }}
        >
          {item}
          </li>
        ))}

    </ul>
    </>
  )
  ;
}

export default ListGroup;
