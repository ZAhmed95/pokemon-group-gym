M.AutoInit();

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
    atk: document.querySelector("#stat-atk"),
    def: document.querySelector("#stat-def"),
    speed: document.querySelector("#stat-speed"),
    spAtk: document.querySelector("#stat-sp-atk"),
    spDef: document.querySelector("#stat-sp-def"),
    height: document.querySelector("#height"),
    weight: document.querySelector("#weight"),
    abilities: document.querySelector("#abilities"),

    //controlling pokedex functionality
    count: 0, //how many pokemon are stored in the pokedex
    index: 0, //index of currently selected pokemon
    previous: document.querySelector("#previous"), //next pokemon button
    next: document.querySelector("#next"), //previous pokemon button
    trainer: undefined, //the trainer this pokedex belongs to (will be assigned later)
  }

  //add some properties to the stat elements
  for (let statName of ["hp", "atk", "def", "spAtk", "spDef", "speed"]){
    var stat = pokedex[statName];
    //store the stat element's text in a property
    stat.text = stat.querySelector(`#${stat.id}-text`);
    //store the stat bar
    stat.bar = stat.querySelector(".stat-bar");
  }

  //Create functions to cycle through pokemon in pokedex
  function previous(){
    if (pokedex.count != 0){
      pokedex.index = (pokedex.index - 1 + pokedex.count) % pokedex.count;
      pokedex.renderPokemon(pokedex.trainer.pokemon[pokedex.index]);
    }
  }
  function next(){
    if (pokedex.count != 0){
      pokedex.index = (pokedex.index + 1 + pokedex.count) % pokedex.count;
      pokedex.renderPokemon(pokedex.trainer.pokemon[pokedex.index]);
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
    this.pokemonName.innerText = pokemon.name;
    //deactivate image spinner
    this.imgSpinner.style.display = "none";
    this.pokemonImg.src = pokemon.image;
    this.description.innerText = pokemon.description;
    
    //function to set list items in a ul
    function renderList(ul, items){
      ul.innerHTML = items.map(item => `<li>${item}</li>`).join("");
    }

    //update types list
    renderList(pokedex.types, pokemon.types);
    //update weaknesses list (Not yet implemented)
    renderList(pokedex.weaknesses, pokemon.weaknesses);
    //update abilities list
    renderList(pokedex.abilities, pokemon.abilities);

    //function to render a stat on the page
    function renderStat(statName){
      var stat = pokedex[statName];
      var statData = pokemon.stats[statName];
      //update the stat number
      stat.text.innerText = statData;
      //set the width of the colored bar appropriately
      stat.bar.style.width = `${Math.round(statData / 255 * 100)}%`;
    }
    //for each stat, update the elements on the page 
    for (let statName of ["speed", "atk", "def", "spAtk", "spDef", "hp"]){
      renderStat(statName);
    }

    pokedex.height.innerText = pokemon.height;
    pokedex.weight.innerText = `${pokemon.weight} lbs`;
  }

  return pokedex;
}

// janiceData((trainer) => {
// })


zaheenData((trainer, typesManager) => {
  //Initialize pokedex
  pokedex = initializePokedex();
  //create trainer object that holds these pokemon
  pokedex.trainer = trainer;
  //set pokemon count in pokedex
  pokedex.count = trainer.pokemon.length;
  //render the first pokemon in the array
  pokedex.renderPokemon(trainer.pokemon[0]);
  //also, when the typesManager is ready, refresh the render to show
  //weaknesses list
  typesManager.onReady(() => {
    pokedex.renderPokemon(trainer.pokemon[pokedex.index]);
  });
});
