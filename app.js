'use strict';

const productsList = [bag,banana,bathroom,boots,breakfast,bubblegum,chair,cthulhu,dog_duck,dragon,pen,pet_sweep,scissors,shark,sweep,tauntaun,unicorn,water_can,wine_glass];

function Product (name, path, view = 0){
    this.name = name;
    this.path = path;
    this.views = view;
}

const bag = new Product('bag','img/bag.jpg');
const banana = new Product('banana','img/banana.jpg');
const bathroom = new Product('bathroom','img/bathroom.jpg');
const boots = new Product('boots','img/boots.jpg');
const breakfast = new Product('breakfast','img/breakfast.jpg');
const bubblegum = new Product('bubblegum','img/bubblegum.jpg');
const chair = new Product('chair','img/chair.jpg');
const cthulhu = new Product('cthulhu','img/cthulhu.jpg');
const dog_duck = new Product('dog-duck','img/dog-duck.jpg');
const dragon = new Product('dragon','img/dragon.jpg');
const pen = new Product('pen','img/pen.jpg');
const pet_sweep = new Product('pet-sweep','img/pet-sweep.jpg');
const scissors = new Product('scissors','img/scissors.jpg');
const shark = new Product('shark','img/shark.jpg');
const sweep = new Product('sweep','img/sweep.jpg');
const tauntaun = new Product('tauntaun','img/tauntaun.jpg');
const unicorn = new Product('unicorn','img/unicorn.jpg');
const water_can = new Product('water-can','img/water-can.jpg');
const wine_glass = new Product('wine-glass','img/wine-glass.jpg');


