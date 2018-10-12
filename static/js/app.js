let choices = [
  {
    name : 'Entrée',
    label : 'starter',
    q : 0,
    choose : [
      ['gaspacho','roulades de jambon','mousse truite'],
      [3.20,4.00,2.20]
    ]
  },
  {
    name : 'Plat principal',
    label : 'main',
    q : 0,
    choose : [
      ['porc au caramel','agneau au miel','farce pour volaille'],
      [25.00,34.00,18.00]
    ]
  },
  {
    name : 'Boisson',
    label : 'drink',
    q : 0,
    choose : [
      ['vin blanc','vin rouge','vin blanc'],
      [15.00,24.00,12.00]
    ]
  },
  {
    name : 'Déssert',
    label : 'dessert',
    q : 0,
    choose : [
      ['tarte tatin pomme et caramel','riz au lait','mousse au chocolat'],
      [8.00,5.00,7.80]
    ]
  }
];

const menu = document.getElementById('menu');
const listChoice = document.getElementById('choice-list');
const starter = document.getElementById('abc');
const main = document.getElementById('def');
const dessert = document.getElementById('hij');
const drink = document.getElementById('klm');
let myChoice = [];

console.log(choices);
//menu.innerHTML = '';
// for (let i = 0; i < choices.length; i++) {
//   menu.innerHTML += '<label for="'+choices[i].label+'">' + choices[i].name + '</label>';
//   menu.innerHTML += '<select id="'+choices[i].label +'">';
//   console.log('taille',choices[i].choose.length);
//   for (let j = 0; j < choices[i].choose.length; j++){
//     for(let k = 0; k < choices[i].choose[j].length;k++){
//       menu.innerHTML += '<option value ="' + k + '">' + choices[i].choose[j][k] + '</option>';
//     }
//   }
//   menu.innerHTML += '</select>';
//   menu.innerHTML += '<button class="btn btn-success"><span class="glyphicon glyphicon-plus"></span></button>';
// }

const btns = document.querySelectorAll('.btn-success');

btns.forEach(btn =>{
  btn.addEventListener('click', (e,i) =>{
    console.log(e);
      listChoice.innerHTML ='';
    switch(i){
      case 0 :
        listChoice.innerHTML += '<li>' + starter.value + '</li>';
      break;
      case 1 :
        listChoice.innerHTML += '<li>' + main.value + '</li>';
      break;
      case 2 :
        listChoice.innerHTML += '<li>' + dessert.value + '</li>';
      break;
      case 3 :
        listChoice.innerHTML += '<li>' + drink.value + '</li>';
      break;
    }
  })
})
