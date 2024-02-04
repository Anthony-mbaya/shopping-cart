//START TO DISPLAY ELECTRONICS

const electronicsArray = [
    {
        id:1,
        name:"Laptops",
        price:20
    },
    {
        id:2,
        name:"Desktops",
        price:32
    },
    {
        id:3,
        name:"SmartPhones",
        price:28
    },
    {
        id:4,
        name:"Smart Televisions",
        price:50
    },
    {
        id:5,
        name:"FlashDisks",
        price:14
    },
    {
        id:6,
        name:"Cameras",
        price:19
    }
]
const elecDispItemsEl = document.getElementById("elecDispItems");
electronicsArray.forEach(({id,name,price}) => {
    elecDispItemsEl.innerHTML += `
    <div>
    <h3>${name}</h3>
    <p>Price: ${price}<p>
    <button id=${id} class="addToCartBtn">Add to Cart</button>
    </div>
    `
});
const costOfItemsEl = document.getElementById("costOfItems"); 
const taxEl = document.getElementById("tax");
const elecCartItems1El = document.getElementById("elecCartItems1");
const grandTotalEl = document.getElementById("grandTotal");
const noOfItemsEl = document.getElementById("noOfItems");
class Cart{
    constructor(){
        this.itemsArr = [];
        this.total = 0;
        this.tax = 1.4;
    }
    addItemToCart(id,electronicsArray){
        const addedItem = electronicsArray.find((item) => item.id === id);
        const {name,price} = addedItem;
        this.itemsArr.push(addedItem);

        const objCount = {};
        this.itemsArr.forEach((item)=>{
            objCount[item.id] = (objCount[item.id] || 0) + 1;
        });
        const currentItemCount = objCount[addedItem.id];
        const countIdEl = document.getElementById(`countId${id}`);
        currentItemCount > 1 ? countIdEl.innerHTML = `} *${currentItemCount}` : elecCartItems1El.innerHTML += `
        <div>
        <h3>${name} <span id=countId${id}></span></h3>
        <p>Price: $${price}</p>
        </div>
        `
    }
    noOfItemsMethod(){
        return this.itemsArr.length;
    } 
    taxMethod(amount){
        return parseFloat(((this.tax / 100) * amount).toFixed(2));

    }
    grandTotalMethod(){
        const cost = this.itemsArr.reduce((total,itemPrice) => total + itemPrice.price,0); 
        const tax = this.taxMethod(cost);
        this.total = cost + tax;
        costOfItemsEl.textContent = `$${cost.toFixed(2)}`;
        taxEl.textContent = `$${tax.toFixed(2)}`;
        grandTotalEl.textContent = `$${this.total.toFixed(2)}`;
        return this.total;
    }

}

let cartObject = new Cart; 
const addToCartBtnEl = document.getElementsByClassName("addToCartBtn");
[...addToCartBtnEl].forEach((btn) => {
    btn.addEventListener("click",(event) => {
        cartObject.addItemToCart(Number(event.target.id),electronicsArray);
        cartObject.grandTotalMethod();
        noOfItemsEl.textContent = cartObject.noOfItemsMethod();
    })
});
