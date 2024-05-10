import ListGroup  from "./components/ListGroup";

function App() {
   let items =["New york","Tokyo","London","Paris","Texas"];

   const handleSelectItem = (items: string)=> {
      console.log(items);
   }

return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      </div>
      );
  
}

export default App;