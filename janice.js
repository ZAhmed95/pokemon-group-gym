function janiceData(callback){

class Trainer {
  constructor(name, gender, hometown){ 
  this.name = name;
  this.gender = gender;
  this.hometown = hometown;
  this.pokemon = [];
  }
  
  add(pokemon) {
  this.pokemon.push(pokemon)
  }
  
  get(name) {
  return this.pokemon.find((element) => {
  return element.name == name
  })
  }
  
  }
  
  // const terra = new Trainer("Terra", "female", "Pokemon trainer");
  
  // console.log(terra);
  
  class Pokeball {
  constructor() {
  this.all = []
  }
  
  add(pokemon) {
  this.all.push(pokemon)
  }
  
  get(name) {
  return this.all.find((element) => {
  return element.name = name
  })
  }
  
  }
  const pokeball = new Pokeball();
  console.log(pokeball);
  
  class Pokemon {
  
  constructor(data, info) {
  
  this.id = data.id;
  this.name = data.name;
  this.weight = data.weight;
  this.height = data.height;
  this.type = data.types[0].type.name;
  this.hp = data.stats[5].base_stat;
  this.attack = data.stats[4].base_stat;
  this.defense = data.stats[3].base_stat;
  this.abilities = [];
  this.info = info;
  
  for (let i = 0; i < data.abilities.length; i++) {
  this.abilities.push(data.abilities[i].ability.name)
  }
  
  }
  }
  
  let para = document.getElementById("info1");
  
  function terrasPokemon(pokemon) {
    if (pokemon.name === "cyndaquil") {
      para = document.getElementById("info2");
    } else if (pokemon.name === "larvitar") {
      para = document.getElementById("info3");
    }
  
    para.innerHTML = (`id: ${ pokemon.id }<br>
    name: ${ pokemon.name }<br>
    weight: ${ pokemon.weight }lbs<br>
    height: ${ pokemon.height }<br>
    type: ${ pokemon.type }<br>
    hp: ${ pokemon.hp }<br>
    attack: ${ pokemon.attack }<br>
    defense: ${ pokemon.defense }<br>
    abilities: ${ pokemon.abilities }`);
  }
  
  // let paratwo = document.getElementById("info2");
  
  // function terrasPokemon2(pokemon) {
  
  //   paratwo.innerHTML = (`id: ${ pokemon.id }<br>
  //   name: ${ pokemon.name }<br>
  //   weight: ${ pokemon.weight }lbs<br>
  //   height: ${ pokemon.height }<br>
  //   type: ${ pokemon.type }<br>
  //   hp: ${ pokemon.hp }<br>
  //   attack: ${ pokemon.attack }<br>
  //   defense: ${ pokemon.defense }<br>
  //   abilities: ${ pokemon.abilities }`);
  // }
  
  // let parathree = document.getElementById("info3");
  
  // function terrasPokemon3(pokemon) {
  
  //   parathree.innerHTML = (`id: ${ pokemon.id }<br>
  //   name: ${ pokemon.name }<br>
  //   weight: ${ pokemon.weight }lbs<br>
  //   height: ${ pokemon.height }<br>
  //   type: ${ pokemon.type }<br>
  //   hp: ${ pokemon.hp }<br>
  //   attack: ${ pokemon.attack }<br>
  //   defense: ${ pokemon.defense }<br>
  //   abilities: ${ pokemon.abilities }`);
  // }
  
  
  
  
  
  
  
  const chooseBulbasaur = axios.get("https://pokeapi.co/api/v2/pokemon/1/");
  const chooseCyndaquil = axios.get("https://pokeapi.co/api/v2/pokemon/155/");
  const chooseLarvitar = axios.get("https://pokeapi.co/api/v2/pokemon/246/");
  
  axios.all([chooseBulbasaur, chooseCyndaquil, chooseLarvitar])
  
  .then(catchem => {
  
  const poke1 = catchem[0].data;
  const poke2 = catchem[1].data;
  const poke3 = catchem[2].data;
  
  console.log(poke1);
  
  // // console.log(catchem[0].data.name)
  // let monstername1= poke1.name;
  // console.log(monstername1)
  
  // let monstername1hp= poke1.stats[5].base_stat; 
  // // console.log(catchem[0].data.hp)
  // console.log(monstername1hp)
  
  // let monstername1attack= poke1.stats[4].base_stat;
  // // console.log(catchem[0].data.attack)
  // console.log(monstername1attack)
  
  // let monstername1defense= poke1.stats[3].base_stat;
  // // console.log(catchem[0].data.defense)
  // console.log(monstername1defense)
  
  // let monstername1abilities= catchem[0].data.abilities
  // // console.log(catchem[0].data.abilities)
  // console.log(monstername1abilities)
  
  
  // let monstername2= catchem[1].data.name
  // console.log(monstername2)
  
  // let monstername2hp= catchem[1].data.stats[5].base_stat; 
  // // console.log(catchem[0].data.hp)
  // console.log(monstername2hp)
  
  // let monstername2attack= catchem[1].data.attack
  // // console.log(catchem[0].data.attack)
  // console.log(monstername2attack)
  
  // let monstername2defense= catchem[1].data.defense
  // // console.log(catchem[0].data.defense)
  // console.log(monstername2defense)
  
  // let monstername2abilities= catchem[1].data.abilities
  // // console.log(catchem[0].data.abilities)
  // console.log(monstername2abilities)
  
  
  
  
  // let monstername3= catchem[2].data.name
  // console.log(monstername3)
  
  // let monstername3hp= catchem[2].data.hp 
  // // console.log(catchem[0].data.hp)
  // console.log(monstername3hp)
  
  // let monstername3attack= catchem[2].data.attack
  // // console.log(catchem[0].data.attack)
  // console.log(monstername3attack)
  
  // let monstername3defense= catchem[2].data.defense
  // // console.log(catchem[0].data.defense)
  // console.log(monstername3defense)
  
  // let monstername3abilities= catchem[2].data.abilities
  // // console.log(catchem[0].data.abilities)
  // console.log(monstername3abilities)
  
  

  
  const terra = new Trainer("Terra", "female", "Pokemon trainer");
  
  let bulbasaurInfo = "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger."
  
  let bulbasaur = new Pokemon(poke1, bulbasaurInfo);
  
  console.log(bulbasaur);
  pokeball.add(bulbasaur);
  terra.add(bulbasaur);
  terrasPokemon(bulbasaur);
  
  let cyndaquilInfo = "Cyndaquil protects itself by flaring up the flames on its back. The flames are vigorous if the Pokémon is angry. However, if it is tired, the flames splutter fitfully with incomplete combustion."
  
  let cyndaquil = new Pokemon(poke2, cyndaquilInfo);
  console.log(cyndaquil);
  pokeball.add(cyndaquil);
  terra.add(cyndaquil);
  terrasPokemon(cyndaquil);
  
  let larvitarInfo = "Larvitar is born deep under the ground. To come up to the surface, this Pokémon must eat its way through the soil above. Until it does so, Larvitar cannot see its parents."
  
  let larvitar = new Pokemon(poke3, larvitarInfo);
  console.log(larvitar);
  pokeball.add(larvitar);
  terra.add(larvitar);
  terrasPokemon(larvitar);
  
  console.log(pokeball);
  console.log(terra);
  
  console.log(terra.get("bulbasaur"));
  
  callback(terra)
  
  }).catch((error) => {
  console.log(error);
  })


}