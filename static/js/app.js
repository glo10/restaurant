//datas to show on html page
const choices = [
  {
    name : 'Entrée',
    label : 'starter',
    q : 0,
    articles :   ['gaspacho','roulades de jambon','mousse truite'],
    prices : [3.20,4.00,2.20]
  },
  {
    name : 'Plat principal',
    label : 'main',
    q : 0,
    articles :   ['porc au caramel','agneau au miel','farce pour volaille'],
    prices :  [25.00,34.00,18.00]
  },
  {
    name : 'Déssert',
    label : 'dessert',
    q : 0,
    articles :   ['tarte tatin pomme et caramel','riz au lait','mousse au chocolat'],
    prices :  [8.00,5.00,7.80]
  },
  {
    name : 'Boisson',
    label : 'drink',
    q : 0,
    articles :  ['vin blanc','vin rouge','vin blanc'],
    prices :  [8.00,5.00,7.80]
  }
];

const menu = document.getElementById('menu');
const listChoice = document.getElementById('choice-list');
const initialOption = '<option value="-1" selected disabled>Choisir ici</option>';
//html page structure
const structure = {
  startDiv : '<div>',
  label : '',
  startSelect : '',
  options : initialOption,
  endSelect : '</select>',
  //amount : '<input type="number" class="amount" id="text"/>',
  amount : '',
  button : '<button class="btn btn-success"><span class="glyphicon glyphicon-plus"></span></button>',
  endDiv : '</div>'
}

menu.innerHTML = '';
//add html element to the DOM
for (let i = 0; i < choices.length; i++) {
  structure.label = '<label for="'+choices[i].label+'">' + choices[i].name + '</label>';
  structure.startSelect = '<select id="'+choices[i].label +'">';
  for(let j = 0; j < choices[i].articles.length;j++){
    structure.options += '<option data-price = "' +choices[i].prices[j]+ '" value ="' + j + '">' + choices[i].articles[j]   + ' ' + choices[i].prices[j] + ' &euro;' + '</option>';
  }
  menu.innerHTML += structure.startDiv + structure.label + structure.startSelect + structure.options + structure.endSelect + structure.amount + structure.button + structure.endDiv;
  structure.options = initialOption;
}

const btns = document.querySelectorAll('#menu .btn-success');
const prices = document.querySelectorAll('span.prices');
const totalBook = document.getElementById('total');
const msg = document.getElementById('msg');
const book = document.getElementById('book');
let total = 0;

//add click event on buttons && add product in the list
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', e =>{
    let id = e.srcElement.previousElementSibling.id;
    let selectId = document.getElementById(id);
    let product = selectId.selectedOptions[0].innerText;
    let productPrice = selectId.selectedOptions[0];
    if(product != 'Choisir ici'){
      total += parseFloat(productPrice.getAttribute('data-price'));
      listChoice.innerHTML += '<li>' + product  + '&nbsp;<span class="glyphicon glyphicon-remove alert alert-danger"></span></li>';
      totalBook.innerHTML = total;
      showMsg(null,null,false);
    }
    else{
      showMsg('alert alert-warning','Veuillez Choisir un produit !',true);
    }
  });
}

//add click event on the only button to order products
book.addEventListener('click',e =>{
  if(total == 0){
    showMsg('alert alert-danger','Veuillez ajouter au moins un article dans le panier',true);
  }
  else {
    showMsg('alert alert-success','Merci pour votre commande!',true);
    setTimeout(restart,2000);
  }
});

/**
*@desc reload the page after the order
*/
function restart(){
  location.reload();
}

/**
*@desc show user message
*@param className string bootstrap class
*@param content string message to show
*@param show boolean true add message, false remove msg
*/
function showMsg(className,content,show){
  if(show){
    msg.setAttribute('class',className);
    msg.innerText = content;
  }
  else{
    msg.innerText = '';
    msg.removeAttribute('class');
  }
}
