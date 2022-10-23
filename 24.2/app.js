function Pokemon(pokemonName, pokemonType,pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function(){
    console.log(`I choose you ${this.name}`)

}

Pokemon.prototype.attack = function () {
    console.log(`${this.name} used ${this.attackList}`)
}

pokemon_1 =new Pokemon('a','Fire','fireball');
pokemon_2 =new Pokemon('b','normal','rocks');
pokemon_3 =new Pokemon('c','Fighting','knife');

pokemon_1.callPokemon();
pokemon_2.attack();


