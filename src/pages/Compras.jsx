import  { useContext} from "react";
import { Card } from "../component/Card";
import { ProductoContext } from "../context/ProductoContext";
import { CarritoContext } from "../context/CarritoContext";

export const Compras = () => {

  
    const {productos} = useContext(ProductoContext)

    const {
      agregarCompra,
      aumentarCantidad,
      disminuirCantidad,
      eliminarCompra,
    } = useContext( CarritoContext );

    const handleAgregar =(compra)=>{
      agregarCompra(compra)
    }

    const handleEliminar =(id)=>{
      eliminarCompra(id)
    }

    const handleAumentar =(id)=>{
      aumentarCantidad(id)
    }

    const handleDisminuir =(id)=>{
      disminuirCantidad(id)
    }

  return (
    <>
      <h1>Compras: </h1>
      <hr />
      {productos.map((producto) => (
        <Card key={producto.id}
          imagen={producto.image}
          titulo={producto.title}
          descripcion={producto.description}
          precio={producto.price}
          handleAgregar={()=>handleAgregar(producto)}
          handleEliminar={()=>handleEliminar(producto.id)}

        ></Card>
      ))}
    </>
  );
};
