console.log('HOLA MUNDO')

// Paso 4 - Crear el render que se insertará en el HTML
// obtener id root
const root = document.getElementById('root')

// Paso 5 - Crear función que insertará HTML en el root
const renderHTML = (name, email, websiteURL) => {
    return `
    <div class="card mt-2 mb-2">
        <h5 class="card-header">Usuario</h5>
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${email}</p>
        <a target="_blank" href="https://${websiteURL}" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `
}

//Paso 3 - Necesito cuando la persona haga click
const buttonGetImageNasa = document.getElementById('buttonGetImageNasa')

buttonGetImageNasa.addEventListener('click', async () => {
    // then y catch
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
            method: "GET"
        })
    
        const users = await response.json();
        const renderUsers = users.map(user => {
            return renderHTML(user.name, user.email, user.website)
        })
        root.innerHTML = renderUsers.join(" ");
        
    } catch (error) {
        root.innerHTML = `<div class="mt-3 alert alert-danger" role="alert">
        Ocurrio un error, intenta con otra latitud y longitud
      </div`     
    }

})

