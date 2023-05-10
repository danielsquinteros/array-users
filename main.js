console.log('HOLA MUNDO')

// Paso 4 - Crear el render que se insertará en el HTML
// obtener id root
const root = document.getElementById('root')

// Paso 5 - Crear función que insertará HTML en el root
const renderHTML = (urlImage, title, date) => {
    return `
    <div class="card mb-3 mt-4">
        <img src=${urlImage} class="card-img-top image-nasa" alt="...">
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">${date}</small></p>
        </div>
    </div>
    `
}

// Paso 1 - Obtener la información que ingrese en el input latitud
const inputLatitud = document.getElementById('inputLatitud')

//Paso 2 - Obtener la información que ingrese en el input longitud
const inputLongitud = document.getElementById('inputLongitud')

//Paso 3 - Necesito cuando la persona haga click
const buttonGetImageNasa = document.getElementById('buttonGetImageNasa')

buttonGetImageNasa.addEventListener('click', async () => {
    const lat = inputLatitud.value;
    const lon = inputLongitud.value;

    //Verificación de valores
    if(!lat || !lon){
        alert('Falta ingresar latitud o longitud, verifica tu formulario')
        return
    }

    // then y catch
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=2021-01-10&dim=0.10&api_key=rMxkO9eCV5NlwONJbvLG1CH39CcSCEJJmgrK42GS`, {
            method: "GET"
        })
    
        const responseNasa = await response.json();
        
        root.innerHTML = renderHTML(responseNasa.url,responseNasa.resource.planet, responseNasa.date )
        
    } catch (error) {
        root.innerHTML = `<div class="mt-3 alert alert-danger" role="alert">
        Ocurrio un error, intenta con otra latitud y longitud
      </div`     
    }

})

