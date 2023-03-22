import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/catalogo" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
