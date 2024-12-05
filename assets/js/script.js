const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
  ];
  
  // Filtrar productos con descuentos
  const discount = products.filter(i => i.discount > 0)
   console.log(discount) 


  
  const precio = products.map(i => i.price)
   console.log(precio)


  // Calcualr precio final con descuento
  const priceAfterDiscount = products.map((product) => product.price - ((product.price * product.discount) / 100))
   console.log(priceAfterDiscount)


   // Identificar productos con stock bajo 5
  const productsBajoStock = products.filter(i => i.stock < 5)
   console.log(productsBajoStock)

   
   // Actualizar stock de productos 
   // no pude hacer sola pedi ayuda a chatGPT
   function actualizarStock(nombreProducto, cantidad) {
    try {
      const producto = products.find(p => p.name.toLowerCase() === nombreProducto.toLowerCase());
  
      if (!producto) {
        throw new Error(`El producto "${nombreProducto}" no se encontró en el inventario.`);
      }
  
      producto.stock += cantidad;
  
      console.log(`Stock actualizado: ${producto.name} ahora tiene ${producto.stock} unidades.`);
    } catch (error) {
     
      console.error(error.message);
    }
  }
  
  actualizarStock("Televisor", 5);
  


  // Resumen por categorías 
  const getresumenCategorias = (products) => {
    const resumenCategorias = {}
    
    for(const product of products){
      if(!resumenCategorias[product.category])
        { resumenCategorias[product.category] = 0
        }
      resumenCategorias[product.category]++
    }
    return resumenCategorias;
  }
  
  console.log(getresumenCategorias(products))