import ListGroup  from "./components/ListGroup";

function App() {
   let items =["New york","Tokyo","London","Paris","Texas"];

return (
    <div>
      <ListGroup items={items} heading="Cities"/>
      </div>
      );
  
}

export default App;