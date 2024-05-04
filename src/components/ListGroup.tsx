function ListGroup() {
    //render the list dynamicly
    const items =[
        "New york",
        "Tokyo",
        "London",
        "Paris",
        "Texas"

    ];
//curly braces used to render data dynamically

  return (
    /*the empty braces make it ok to add multiple components*/
    <>
    <h1>List</h1>
    <ul className="list-group">
       {items.map((item) => (
        <li key={item}>{item}</li>
        ))}

    </ul>
    </>
  )
  ;
}

export default ListGroup;
