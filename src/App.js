import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/default";
import { Box } from "@mui/material";
//components
import Header from "./Components/Header/Header";
import DetailView from "./Components/ItemDetails/DetailView";
import TemplateProvider from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./context/CartProvider";

function App() {
  return (
      <TemplateProvider>
        <CartProvider>
          <ContextProvider>
            <BrowserRouter>
              <Header />
              <Box style={{ marginTop: 54 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/product/:id" element={<DetailView />} />
                </Routes>
              </Box>
            </BrowserRouter>
          </ContextProvider>
        </CartProvider>
      </TemplateProvider>
  );
}

export default App;
