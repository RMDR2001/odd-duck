'use strict';

const productsList = [
    'bag',
    'banana',
    'bathroom',
    'boots',
    'breakfast',
    'bubblegum',
    'chair',
    'cthulhu',
    'dog-duck',
    'dragon',
    'pen',
    'pet-sweep',
    'scissors',
    'shark',
    'sweep',
    'tauntaun',
    'unicorn',
    'water-can',
    'wine-glass'];

const state = {
    totalProducts: [],
}

function Product(name, path, view = 0, cont = 0) {
    this.name = name;
    this.path = path;
    this.views = view;
    this.cont = cont;
}

(function crearAlbum() {
    for (let i = 0; i < productsList.length; i++) {
        let product = new Product(productsList[i], `img/${productsList[i]}.jpg`);
        state.totalProducts.push(product);
    }
})();

const selectedProduct = {
    totalClick: 0,
    rounds: 25,
    objLeft: null,
    objCent: null,
    objRight: null,

    elemLeft: document.getElementById('img1'),
    elemCent: document.getElementById('img2'),
    elemRight: document.getElementById('img3'),
    elemImage: document.getElementById('images'),
    elemResul: document.getElementById('results'),
    buttonResult: document.getElementById('btnResult'),
    buttonReset: document.getElementById('btnReset'),

    getRandomIndex: function () {
        return Math.floor(Math.random() * productsList.length);
    },

    showImages: function () {
        selectedProduct.objLeft = state.totalProducts[selectedProduct.getRandomIndex()];
        selectedProduct.objCent = state.totalProducts[selectedProduct.getRandomIndex()];
        selectedProduct.objRight = state.totalProducts[selectedProduct.getRandomIndex()];

        if (selectedProduct.objLeft === selectedProduct.objCent || selectedProduct.objLeft === selectedProduct.objRight || selectedProduct.objCent === selectedProduct.objRight) {
            selectedProduct.showImages();
        }

        selectedProduct.objLeft.views += 1;
        selectedProduct.objCent.views += 1;
        selectedProduct.objRight.views += 1;

        selectedProduct.elemLeft.src = selectedProduct.objLeft.path;
        selectedProduct.elemLeft.id = selectedProduct.objLeft.name;
        selectedProduct.elemCent.src = selectedProduct.objCent.path;
        selectedProduct.elemCent.id = selectedProduct.objCent.name;
        selectedProduct.elemRight.src = selectedProduct.objRight.path;
        selectedProduct.elemRight.id = selectedProduct.objRight.name;
    },

    clickCount: function (ids) {
        for (let i = 0; i < state.totalProducts.length; i++) {
            if (state.totalProducts[i].name === ids) {
                state.totalProducts[i].cont += 1;
                this.totalClick += 1;
                console.log(`${state.totalProducts[i].name} tiene ${state.totalProducts[i].cont} votos`)
            }
        }
    },

    showResult: function () {
        const list = document.createElement('ul');
        for (let i = 0; i < state.totalProducts.length; i++) {
            const firstLi = document.createElement('li');
            const info = `${state.totalProducts[i].name} tiene ${state.totalProducts[i].cont} votos y se ha visto ${state.totalProducts[i].views}`;
            primerLi.textContent = info;
            list.appendChild(firstLi);
        }
        const secondLi = document.createElement('li');
        secondLi, textContent = `Total de clicks: ${this.totalClick}`;
        list.appendChild(secondLi);
        this.elemResult.appendChild(list);
    },

    btnShow: function () {
        this.buttonResult.hidden = false;
        this.buttonResult.addEventListener('click', function () {
            selectedProduct.buttonReset.hidden = false;
            selectedProduct.buttonResult.hidden = true;
            selectedProduct.showResult();

            selectedProduct.buttonReset.addEventListener('click', function () {
                selectedProduct.buttonReset.hidden = true;
                location.reload();
            });
        });
    },

    onClick: function (event) {
        if (event.target.id === selectedProduct.objLeft.name || event.target.id === selectedProduct.objCent.name || event.target.id === selectedProduct.objRight.name) {
            selectedProduct.clickCount(event.target.id);

            if (selectedProduct.totalClick % selectedProduct.rounds === 0) {
                selectedProduct.elemImage.removeEventListener('click', selectedProduct.onClick);
                selectedProduct.btnShow();
            }
            selectedProduct.showImages();
        } else {
            alert('Haz click en la imagen');
        }
    }

};

selectedProduct.elemImage.addEventListener('click', selectedProduct.onClick);
selectedProduct.showImages();
