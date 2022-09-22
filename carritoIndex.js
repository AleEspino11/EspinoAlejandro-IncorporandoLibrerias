const carritoDeCompras = []

const carritoIndex = (productoId)=>{

    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductosCarrito = ()=> {

       /*  const existe = carritoDeCompras.some (producto => producto.id === productoId)
           if (existe){
            const producto = carritoDeCompras.map (producto =>{
                if (producto.id === productoId){
                    producto.cantidad++
                }
            })
           } 
        else {
            let producto  = productos.find((producto) => producto.id === productoId )
        carritoDeCompras.push(producto)
        console.log(carritoDeCompras);
        producto.cantidad = 1
        contenedorCarrito.innerHTML = ""
        }   */
        
        let producto  = productos.find((producto) => producto.id === productoId )
        carritoDeCompras.push(producto)
        console.log(carritoDeCompras);
        producto.cantidad = 1
        contenedorCarrito.innerHTML = ""

        carritoDeCompras.forEach ((producto) => {
            let div = document.createElement("div")
            div.classList.add("productoEnCarrito")
            div.setAttribute ("id", `div-${producto.id}`)

            div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p> 
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button id="${producto.id}" class="boton-eliminar"><i class="fa-solid fa-trash-can"></i></button>`;
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras))

        document.addEventListener('DOMContentLoaded', () => {
            if (localStorage.getItem('carritoDeCompras')){
                carritoDeCompras = JSON.parse(localStorage.getItem("carritoDeCompras"))
               /*  renderProductosCarrito() */
            }
        })

         const eliminarCarrito = document.getElementById(producto.id)
         const divElement = document.getElementById(`div-${producto.id}`)

            console.log(eliminarCarrito);
            eliminarCarrito.addEventListener("click", (e)=>{
                const indice = carritoDeCompras.findIndex(element => element.id === producto.id)
                carritoDeCompras.splice (indice,1)
                divElement.remove()
            })

        contadorCarrito.innerText = carritoDeCompras.length

        } )
       

        
    }

    renderProductosCarrito()

   
} 


