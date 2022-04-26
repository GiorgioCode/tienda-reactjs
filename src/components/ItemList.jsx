import React, { useEffect, useState } from 'react';
import Item from './Item';
import { productList } from './Products';


const ItemList = () => {
  //usaré useState para luego en products introducir los productos que consuma de mi API o en este caso del array de productos que tengo en la carpeta data
  const [products, setProducts] = useState([]);

  //esta constante guarda una instancia de la clase Promise, en la cual hay un setTimeout con 2 segundos que devuelve mi array de productos como parámetro en el "resolve".
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 2000);
  });

  //esta función implemente un async que setea la variable products de mi useState y le ingresa mi array de productos
  const getProductsFromDB = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };

  //useEffect ejecutará la función getProductsFromDB simulando que estamos consumiendo los datos desde una base de datos.
  //Esto se ejecutará solo una vez ya que el array de dependencias "[]" está vacío.
  useEffect(() => {
    getProductsFromDB();
  }, []); //[] = array de dependencias

  return (
    
    <div className="flex flex-wrap justify-evenly">
      {
        //estaré implementando un ternario (ver documentación de mozilla) en el cual pregunto por el número de elementos que hay en products
        products.length ? ( //si en products no hay nada, el valor será "0" y en ese caso, un cero se puede interpretar como un valor booleano por lo cual se considerará como falso
          <>
            {
              //Luego de dos segundos, products tendrá los productos dentro, y por lo tanto el products.length será distinto de "0", así que se puede interpretar como un valor booleano "true"
              products.map((product) => {
                // acá tenemos el uso de map, que basicamente está retornando un div con nuestro item adentro tantas veces como productos tenga en mi array de productos (nótese la propiedad key a la cual asigno el id para que react pueda identificar los nodos que se van creando y así los pueda diferenciar). Por favor leer la documentación de map en MDN
                return (
                  <div key={product.id}>
                    <Item
                      id={product.id}
                      nombre={product.nombre}
                      imagen={product.imagen}
                      precio={product.precio}
                      stock={product.stock}
                      detalle={product.detalle}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <div class="text-center">
              <svg role="status" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-red-600 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
          </div>
        ) //Si products.length es "0" se interpreta como falso y por lo tanto se imprimirá "cargando productos"
        //Recuerden, en javascript tenemos tres datos que se pueden interpretar como false: 0, false y undefined
      }
    </div>
    
  );
};

export default ItemList;
