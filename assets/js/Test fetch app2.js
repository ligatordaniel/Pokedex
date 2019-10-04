const img = document.getElementById('pokemonPerfil')
const info = document.getElementById('pokeInfo')
           
           
           
           
           
           fetch(`https://pokeapi.co/api/v2/pokemon/${250}`)
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


