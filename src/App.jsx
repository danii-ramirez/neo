import NavBar from "./Components/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <ItemListContainer greeting="Bienevidos a Neo" />
      </main>
    </>
  );
}

export default App;
