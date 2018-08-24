function janiceData(callback){

class Trainer {
  constructor(name, gender, hometown){ 
  this.name = name;
  this.gender = gender;
  this.hometown = hometown;
  this.pokemon = [];
  }
  
  all() {
    return this.pokemon
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
    
      this.image = data.sprites.front_default;
      this.name = data.name;
      this.weight = data.weight;
      this.height = data.height;
      this.types = data.types[0].type.name;
      this.weaknesses = [];
      this.speed = data.stats[0].base_stat;
      this.hp = data.stats[5].base_stat;
      this.attack = data.stats[4].base_stat;
      this.defense = data.stats[3].base_stat;
      this.specialAttack = data.stats[2].base_stat;
      this.specialDefense = data.stats[1].base_stat;
      this.abilities = [];
      this.description = this.description;
      
      for (let i = 0; i < data.abilities.length; i++) {
        this.abilities.push(data.abilities[i].ability.name)
      }
      
    }
    get(key) {
      return this[key]

    }
  }

  
  
  const chooseBulbasaur = axios.get("https://pokeapi.co/api/v2/pokemon/1/");
  const chooseCyndaquil = axios.get("https://pokeapi.co/api/v2/pokemon/155/");
  const chooseLarvitar = axios.get("https://pokeapi.co/api/v2/pokemon/246/");
  
  axios.all([chooseBulbasaur, chooseCyndaquil, chooseLarvitar])
  
    .then(catchem => {
  
      const poke1 = catchem[0].data;
      const poke2 = catchem[1].data;
      const poke3 = catchem[2].data;
  
  console.log(poke1);
  
  
  

  
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