import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import { Compras } from "./pages/Compras";
import { Carrito } from "./pages/Carrito";
import { ProductosProviders } from "./context/ProductosProviders";
import { CarritoProvider } from "./context/CarritoProvider";

export const CarritoApp = () => {
  return (
    <ProductosProviders>
      <CarritoProvider>
        <Navbar></Navbar>
        <div className="container">
          <Routes>
            <Route path="/" element={<Compras></Compras>}></Route>
            <Route path="/carrito" element={<Carrito></Carrito>}></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProviders>
  );
};
