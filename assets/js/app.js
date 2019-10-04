const formulario = document.getElementById('formulario'); //no deja usar query selector :(


formulario.addEventListener('submit', function(e){     //addEventListen detecta click en submit y hara una funcion
  e.preventDefault();                              //evita que el formulario mande autocomplete en la  url por defecto
  console.log('me diste un click')
  var datos = new FormData(formulario);   // var nueva informacion de formulario de formulario 
  console.log(datos.get('usuario'))       //pinta lo escrito en consola lo almacenado en input name:"usuario" en html form
  const pokemon = (datos.get('usuario')).toLowerCase();  // loguardamos en var pokemon y el .toLowerCase(); transforma texto en minuscula
  
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;   //url con comillas dinamicas insertamos var pokemon
        
       

        const img = document.getElementById('pokemonPerfil');   //variables para facilitar uso
        const info = document.getElementById('pokeInfo');     //variables para facilitar uso
              
        
            fetch(url)
            .then(res => res.json())                       //transforma promesa json a un lenguaje que el nav entienda
            .then(data => {
                img.innerHTML = `<img src="${data.sprites.front_default}" alt="">` //inserta img rescatada del json
                info.innerHTML = `<div class="capitalize">
                                <h2>${data.name}</h2>
                                ID: ${data.id} <br>                           
                                Type : ${data.types[0].type.name} <br>
                                Ability 1: ${data.abilities[0].ability.name}<br>
                                Ability 2: ${data.abilities[1].ability.name}<br>
                                </div>`      // incerta div con toda la info rescatada del json
                                
            })
            .catch(err=>console.log(err))       //poner en caso de que haya error



})

