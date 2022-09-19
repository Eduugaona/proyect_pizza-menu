const input = document.getElementById("inputsito")
const boton = document.getElementById("boton")
const formulario = document.getElementById("formulario")
const valores = document.querySelector(".valores")
const titulo = document.getElementById("h3")
const Ingredientes = document.getElementById("ingredientes")
const Precio = document.getElementById("precio")
const fotoPizza = document.getElementById("foto-pizza")
const card = document.getElementById("card")
const hero = document.getElementById("hero")



const pizzas=[

    {id:1, nombre: "Muzzarella",ingredientes:"ajo, cebolla, queso",precio:200,imagen:"imagenes_pizzas/pizza-muzzarella.jpg"},
   
    {id:2, nombre: "Napolitana",ingredientes:"tomate, jamon, queso",precio:900,imagen:"imagenes_pizzas/pizza-napolitana.jpg"},
   
    {id:3, nombre: "Jamon y Morron",ingredientes:"jamon, morron, queso",precio:470, imagen:"imagenes_pizzas/pizza-de-jamon-y-morrones.jpg"},
   
    {id:4, nombre: "Champignones",ingredientes:"ajo, hongos, queso",precio:600, imagen:"imagenes_pizzas/pizza-de-champinones.jpg"},
   
    {id:5, nombre: "Primavera",ingredientes:"ajo, verdeo, queso, tomate",precio:685, imagen:"imagenes_pizzas/pizza-primavera.jpg"},
   
    {id:6, nombre: "Fugazzeta",ingredientes:"fugazza, queso",precio:1020, imagen:"imagenes_pizzas/pizza-fugazzeta.jpg"},
       
   ];




   localStorage.setItem("pizzas", JSON.stringify(pizzas))

   const pizzaGuardada = JSON.parse( localStorage.getItem("pizzas") )

   let intercambiarImagen = ()=>{
    card.classList.remove("card_display_off")
    hero.classList.remove("hero_display_on")
}

   


   let prevencion = (e) => {
    e.preventDefault()

        const mostrar = () => {

            const valorIngresado = parseInt(input.value);

            const getObject = pizzaGuardada.find( (pizza)=> pizza.id === valorIngresado );

            if(getObject!=undefined){
                titulo.textContent=getObject.nombre
                Precio.textContent="Su precio es $"+getObject.precio
                Ingredientes.textContent="Sus ingredientes son: "+getObject.ingredientes
                fotoPizza.src=getObject.imagen
                intercambiarImagen()
                
                
            }
            else{
                alert("Numero de pizza equivocado, vuelva a intentar porfavor")
            }
   

            input.value=""
        }


        mostrar()

    }



     

   const init = () => {
   formulario.addEventListener("submit", prevencion)}

   init()




