const productos = [
    {
        id:1,
        nombre:"Goku SSJ 4 - Benpresto",
        desc:"Figuras",
        precio:40000,
        img:'src/img/1.jpg',
        cantidad:1
    },
    {
        id:2,
        nombre:"Attack on Titan - Tomo 1",
        desc:"Mangas",
        precio:1071,
        img:'src/img/2.jpg',
        cantidad:1
    },
    {
        id:3,
        nombre:"Tunica Grifindor, Harry Potter",
        desc:"Cosplay",
        precio:9000,
        img:'src/img/3.jpg',
        cantidad:1
    },
    {
        id:4,
        nombre:"Vaso Game of Thrones",
        desc:"Accesorios",
        precio:2000,
        img:'src/img/4.jpg',
        cantidad:1
    },
    {
        id:5,
        nombre:"Batman",
        desc:"Historietas",
        precio:1071,
        img:'src/img/5.jpg',
        cantidad:1
    },
]
/* 
let productosJson  = JSON.stringify("productos") */
localStorage.setItem("productos", JSON.stringify(productos));
let productosJson = localStorage.getItem("productos")
productos = JSON.parse(productosJson)
console.log(productos);





