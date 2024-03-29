const data= [
    {
        id : 0,
        img : '/css/Screen Shot 2022-02-10 at 2.08.36 pm.png',
        name : 'Sequin Shift Dress',
        price : 150,
        save : 50,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 1,
        img : '/css/Screen Shot 2022-02-10 at 2.06.49 pm.png',
        name : 'Summer Lite',
        price : 75,
        save : 25,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 2,
        img : '/css/Screen Shot 2022-02-10 at 2.04.33 pm.png',
        name : 'Bridal Infinity',
        price : 300,
        save : 50,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 3,
        img : '/css/Screen Shot 2022-02-10 at 3.17.56 pm.png',
        name : 'Lolita Dress',
        price : 180,
        save : 20,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 4,
        img : '/css/Screen Shot 2022-02-09 at 10.17.06 pm.png',
        name : 'Vintage Glam',
        price : 130,
        save : 20,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 5,
        img : '/css/Screen Shot 2022-02-09 at 10.16.14 pm.png',
        name : 'Summer Beach',
        price : 75,
        save : 25,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 6,
        img : '/css/Screen Shot 2022-02-09 at 10.13.17 pm.png',
        name : 'Pink Blazer',
        price : 95,
        save : 25,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 7,
        img : '/css/Screen Shot 2022-02-09 at 10.12.39 pm.png',
        name : 'Womens Blazer',
        price : 115,
        save : 85,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 8,
        img : '/css/Screen Shot 2022-02-10 at 2.09.33 pm.png',
        name : 'Butterfly Sleeve',
        price : 175,
        save : 75,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 9,
        img : '/css/Screen Shot 2022-02-09 at 10.19.07 pm.png',
        name : 'LuLu Dress',
        price : 115,
        save : 85,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 10,
        img : '/css/Screen Shot 2022-02-09 at 10.15.45 pm.png',
        name : 'Pink Ruffles Dress',
        price : 175,
        save : 25,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 11,
        img : '/css/Screen Shot 2022-02-09 at 10.16.34 pm.png',
        name : 'Diane Dress',
        price : 175,
        save : 50,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
];

let cartList=[]; //array to store cart lists

const i = "";
const detail =document.getElementsByClassName('card-item');
const detailsImg = document.getElementById('details-img')
const detailTitle = document.getElementById('detail-title')
const detailPrice = document.getElementById('detail-price')
const youSave = document.getElementById('you-save');
const detailsPage = document.getElementById('details-page');
const back = document.getElementById('buy')
back.addEventListener('click',refreshPage)
const addToCarts = document.querySelectorAll('#add-to-cart')
const cart = document.getElementById('cart');

// click event to display cart page
cart.addEventListener('click',displayCart)

const carts = document.getElementById('carts');

//click events to add items to cart from details page
carts.addEventListener('click',()=>addToCart(getId))

//let home = document.getElementById('logo');

//click event to hide cart page and return to home page
//home.addEventListener('click',hideCart);

//events on dynamically created element to remove items from list
document.addEventListener('click',function (e){
    if(e.target.id=='remove'){
        const itemId = e.target.parentNode.id
        removeFromCart(itemId)
    }
})

//click event to display details page
//for( let i=0; i<data.length;i++){
    //detail[i].addEventListener('click',handleDetail)
//}

let getId = "";

//click events to add items to cart from home page cart icon
addToCarts.forEach(val=>val.addEventListener('click',()=>addToCart(val.parentNode.id)));



// details function
function handleDetail(e){
    detailsPage.style.display = 'block'
    getId= this.parentNode.id;
    detailsImg.src= data[getId].img;
    detailTitle.innerHTML=   data[getId].name;
    detailPrice.innerHTML= 'Price : $ ' +data[getId].price;
    youSave.innerHTML= 'You save : ($ ' + data[getId].save + ')';
}

// add item to the cart
function addToCart(id) {
    if(!data[id].itemInCart){
        cartList= [...cartList,data[id]];
        addItem()
        
        alert('item added to your cart')

    }
    else{
        alert('your item is already there')
    }
    data[id].itemInCart= true
}

//back to main page
function refreshPage(){
    detailsPage.style.display = 'none'
}

// hide your cart page
function hideCart(){
    document.getElementById('main').style.display= "block";
    document.getElementById('cart-container').style.display= "none";
}

//display your cart page
function displayCart(){
    document.getElementById('main').style.display= "none";
    document.getElementById('details-page').style.display= "none";
    document.getElementById('cart-container').style.display= "block";
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
    else{
        document.getElementById('empty-cart').style.display= "none";
        document.getElementById('cart-with-items').style.display= "block";
        
    }
}

const totalAmount =" ";
const totalItems =" ";
const totalSaving =" ";

//add item to the cart
function addItem(){
    totalAmount=0;
    totalItems = 0;
    totalSaving=0
    const clrNode=document.getElementById('item-body');
        clrNode.innerHTML= '';
        console.log(clrNode.childNodes)
        cartList.map((cart)=>
        {
            let cartCont = document.getElementById('item-body');
            totalAmount = totalAmount + cart.price;
            totalSaving = totalSaving + cart.save;
            totalItems = totalItems + 1;

            let tempCart = document.createElement('div')
            tempCart.setAttribute('class','cart-list');
            tempCart.setAttribute('id',cart.id);

            let listImg = document.createElement('img');
            listImg.setAttribute('id','list-img');
            listImg.src = cart.img
            tempCart.appendChild(listImg)

            let listName = document.createElement('h3');
            listName.setAttribute('class','list-name');
            listName.innerHTML = cart.name;
            tempCart.appendChild(listName)

            let listPay = document.createElement('h3');
            listPay.setAttribute('class','pay');
            listPay.innerHTML = cart.price;
            tempCart.appendChild(listPay);

            let listQuantity = document.createElement('h3');
            listQuantity.setAttribute('class','quantity');
            listQuantity.innerHTML = '1';
            tempCart.appendChild(listQuantity);

            let listTrash = document.createElement('i');
            listTrash.setAttribute('class','fa fa-trash ');
            listTrash.setAttribute('id','remove');
            tempCart.appendChild(listTrash);

            cartCont.appendChild(tempCart)
            
        })
        document.getElementById('total-amount').innerHTML = 'Total Amount : $ ' + totalAmount;
        document.getElementById('total-items').innerHTML = 'Total Items : ' + totalItems;
        document.getElementById('you-saved').innerHTML = 'You Saved : $ ' + totalSaving;
        document.getElementById('total').style.display= "block";
}

//remove item from the cart
function removeFromCart(itemId){
    data[itemId].itemInCart = false
    cartList = cartList.filter((list)=>list.id!=itemId);
    addItem()
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
}
