import "./App.scss";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              saludo1="Bienvenido a JoyveriE "
              saludo2="El lugar ideal para tus joyas y accesorios..."
            />
          }
        />
        <Route
          path="/categoria/:idCategoria"
          element={
            <ItemListContainer
              saludo1="Bienvenido a JoyveriE "
              saludo2="El lugar ideal para tus joyas y accesorios..."
            />
          }
        />
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
        <Route path="*" element={<div>Error 404</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
