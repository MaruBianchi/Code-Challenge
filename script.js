const formulario = document.getElementById ("formulario")

formulario.addEventListener ("submit" , (e)=> {

    e.preventDefault();
    
    const data = new FormData (formulario)
    const objeto = {}

    data.forEach ((value, key) => {
        objeto [key] = ["nombre" , "apellido"].includes(key) ? value.toLowerCase():value
    })


    fetch ("https://jsonplaceholder.typicode.com/users", {
        method: "POST", 
        body: JSON.stringify(objeto),
        headers:{
            "Content-Type":"application/json"
        }
    }).then (res=> {
        console.log(res.body)
        console.log(JSON.stringify(objeto))
        if (res.status ===201) {
            alert ("Subido exitosamente")
        }
        else {
            alert("Hubo un error al subir los datos")
        }
    })

})

