M.AutoInit();

// floating-nav-menu

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'bottom'
  });
});

// tooltip for floating-nav-menu

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems) ;
});

var pokedex; //pokedex object that will be initialized

//Function to initialize the pokedex
function initializePokedex(){
  var pokedex = {
    title: document.querySelector("#pokedex-title"),
    pokemonName: document.querySelector("#pokemon-name"),
    pokemonImg: document.querySelector("#pokemon-img"),
    imgSpinner: document.querySelector("#img-spinner"),
    description: document.querySelector("#pokemon-description"),
    types: document.querySelector("#types"),
    weaknesses: document.querySelector("#weaknesses"),
    hp: document.querySelector("#stat-hp"),
    attack: document.querySelector("#stat-atk"),
    defense: document.querySelector("#stat-def"),
    speed: document.querySelector("#stat-speed"),
    specialAttack: document.querySelector("#stat-sp-atk"),
    specialDefense: document.querySelector("#stat-sp-def"),
    height: document.querySelector("#height"),
    weight: document.querySelector("#weight"),
    abilities: document.querySelector("#abilities"),
    //create closure for gym object
    gym: (() => {
      var name = "Fulton Gym";
      var pokemon = []; //list of all pokemon in this gym
      //function to add more pokemon
      function add(newPokemon){
        //if an array is passed in,
        if (Array.isArray(newPokemon)){
          //merge the arrays
          pokemon = pokemon.concat(newPokemon);
        }
        else {
          //otherwise, add the single pokemon passed in
          pokemon.append(newPokemon);
        }
      }

      function get(index){
        return pokemon[index];
      }

      //how many pokemon are stored in the gym
      var count = () => pokemon.length;

      return {
        add,
        get,
        count
      }
    })(), //call the closure to generate gym object

    //controlling pokedex functionality
    index: 0, //index of currently selected pokemon
    previous: document.querySelector("#previous"), //next pokemon button
    next: document.querySelector("#next"), //previous pokemon button
  }

  //add some properties to the stat elements
  for (let statName of ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed"]){
    var stat = pokedex[statName];
    //store the stat element's text in a property
    stat.text = stat.querySelector(`#${stat.id}-text`);
    //store the stat bar
    stat.bar = stat.querySelector(".stat-bar");
  }

  //Create functions to cycle through pokemon in pokedex
  function previous(){
    if (pokedex.count != 0){
      pokedex.index = (pokedex.index - 1 + pokedex.gym.count()) % pokedex.gym.count();
      pokedex.renderPokemon();
    }
  }
  function next(){
    if (pokedex.count != 0){
      pokedex.index = (pokedex.index + 1 + pokedex.gym.count()) % pokedex.gym.count();
      pokedex.renderPokemon();
    }
  }
  //add event listeners to control previous/next functions
  pokedex.previous.addEventListener("click", previous);
  pokedex.next.addEventListener("click", next);
  document.addEventListener("keydown", event => {
    if (event.key == "ArrowLeft") previous();
    else if (event.key == "ArrowRight") next();
  });
  //show the chosen pokemon's data on the page
  pokedex.renderPokemon = function(pokemon){
    //if a Pokemon instance wasn't passed in, choose the one at pokedex.index
    pokemon = pokemon || pokedex.gym.get(pokedex.index);
    this.pokemonName.innerText = pokemon.get("name");
    //deactivate image spinner
    this.imgSpinner.style.display = "none";
    this.pokemonImg.src = pokemon.get("image");
    this.description.innerText = pokemon.get("description");
    
    //function to set list items in a ul
    function renderList(ul, items){
      ul.innerHTML = items.map(item => `<li>${item}</li>`).join("");
    }

    //update types list
    renderList(pokedex.types, pokemon.get("types"));
    //update weaknesses list (Not yet implemented)
    renderList(pokedex.weaknesses, pokemon.get("weaknesses"));
    //update abilities list
    renderList(pokedex.abilities, pokemon.get("abilities"));

    //function to render a stat on the page
    function renderStat(statName){
      var stat = pokedex[statName];
      var statData = pokemon.get(statName);
      //update the stat number
      stat.text.innerText = statData;
      //set the width of the colored bar appropriately
      stat.bar.style.width = `${Math.round(statData / 255 * 100)}%`;
    }
    //for each stat, update the elements on the page 
    for (let statName of ["speed", "attack", "defense", "specialAttack", "specialDefense", "hp"]){
      renderStat(statName);
    }

    pokedex.height.innerText = pokemon.get("height");
    pokedex.weight.innerText = `${pokemon.get("weight")} lbs`;
  } //end pokedex.renderPokemon

  return pokedex;
} //end initializePokedex

function updatePokedex(trainer){
  //if pokedex hasn't been created yet, initialize pokedex
  pokedex = pokedex || initializePokedex();
  //add the trainer's pokemon to the gym
  pokedex.gym.add(trainer.all());
  //render the current pokemon in the gym
  pokedex.renderPokemon();
}

// when janice's data is ready,
janiceData((trainer) => {
  //update pokedex
  updatePokedex(trainer);
  trainerInfo(trainer, 1)
})

//when zaheen's data is ready,
zaheenData((trainer, typesManager) => {
  //update pokedex
  updatePokedex(trainer);
  trainerInfo(trainer, 0)
  //also, when the typesManager is ready, refresh the render to show
  //weaknesses list
  typesManager.onReady(() => {
    pokedex.renderPokemon();
  });
});

// tooltip info
function trainerInfo(trainer, index) {
 
  let trainerToolTip = Array.from(document.querySelectorAll(".tooltipped")) [index]

  trainerToolTip.setAttribute("data-tooltip",  
    ` 
      name: ${ trainer.name}<br>
      age: ${ trainer.age}<br>
      gender: ${ trainer.gender}<br>
      class: ${ trainer.trainerClass}<br>
      hometown: ${ trainer.hometown}<br>
    `)
  M.AutoInit();


}