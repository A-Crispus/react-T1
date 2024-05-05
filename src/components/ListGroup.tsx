function ListGroup() {
    //render the list dynamicly
    const items =["New york","Tokyo","London","Paris","Texas"];
   
   // items [];
    //const message =items.length === 0 ? <p>no items found</p> : null;
    /*const getMessage = () => {
       return items.length === 0 ? <p>no items found</p> : null
    this refered after h1
    } this conditional rendering 
    {items.length === 0 && <p>no items found</p>}
    */




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
    <h1>List</h1>
    {items.length === 0 && <p>no items found</p> }
    <ul className="list-group">
       {items.map((item) => (
        <li className="list-group-item" key={item} onClick={() => console.log("clicked")}>{item}</li>
        ))}

    </ul>
    </>
  )
  ;
}

export default ListGroup;
