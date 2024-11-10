import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const initialState = [];

const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[CARRITO] Agregar compra":
        return [...state, action.payload];
      case "[CARRITO] eliminar compra":
        return state.filter((compra) => compra.id !== action.payload);

      case "[CARRITO] Disminuir cantidad":
        return state.map((item)=>{
            const cant = item.cantidad-1
            if(item.id === action.payload && item.cantidad > 1){
                return {...item, cantidad: cant}
            }
            return item
        })
        
      case "[CARRITO] Aumentar cantidad":
        return state.map((item)=>{
            const cant = item.cantidad+1
            if(item.id === action.payload){
                return {...item, cantidad: cant}
            }
            return item
        })
      default:
        return state
    }
  }

export const CarritoProvider = ({ children }) => {
  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
    compra.cantidad = 1
    const accion = {
      type: "[CARRITO] Agregar compra",
      payload: compra,
    };
    dispatch(accion);
  };

  const eliminarCompra = (id) => {
    const accion = {
      type: "[CARRITO] eliminar compra",
      payload: id,
    };
    dispatch(accion);
  };

  const disminuirCantidad = (id) => {
    const accion = {
      type: "[CARRITO] Disminuir cantidad",
      payload: id,
    };
    dispatch(accion);
  };

  const aumentarCantidad = (id) => {
    const accion = {
      type: "[CARRITO] Aumentar cantidad",
      payload: id,
    };
    dispatch(accion);
  };

  

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        eliminarCompra,
        aumentarCantidad,
        disminuirCantidad
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
