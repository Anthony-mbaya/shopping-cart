//START TO DISPLAY ELECTRONICS

const electronicsArray = [
    {
        id:1,
        name:"Laptops",
        price:20,
        image:"https://i.roamcdn.net/hz/pi/listing-thumb-543w/1dba92214b974ed5085555da803d5bb6/-/horizon-files-prod/pi/picture/qdvk2kg/5d52ae7fd1b6a2bc5561f0b512f2f0c52d5d3f0d.jpg"
    },
    {
        id:2,
        name:"Desktops",
        price:32,
        image:"https://www.gbscomputers.com/images/resource/desktop-showroom-chennai.jpg"
    },
    {
        id:3,
        name:"SmartPhones",
        price:28,
        image:"https://netstorage-tuko.akamaized.net/images/ba24e3423c2e7aeb.png"
    },
    {
        id:4,
        name:"Televisions",
        price:50,
        image:"https://i.roamcdn.net/hz/pi/listing-thumb-543w/e04073e3ce7779b63215f7bcff2dd650/-/horizon-files-prod/pi/picture/q2jje8vp/fcf6d599a6659069aa24e6362dbb5432c05f9eff.jpg"
    },
    {
        id:5,
        name:"FlashDisks",
        price:14,
        image:"https://res.cloudinary.com/comprehensive-technical-providers/image/upload/v1700031603/flash_disks_o8cisk.jpg"
    },
    {
        id:6,
        name:"Cameras",
        price:19,
        image:"https://www.ugabox.com/images/shop/cameras/camera-microphones/camera-microphones-kampala-uganda.jpg"
     }
]
const elecDispItemsEl = document.getElementById("elecDispItems");
electronicsArray.forEach(({id,name,price,image}) => {
    elecDispItemsEl.innerHTML += `
    <div class="elecElement">
    <div class="elecElement1">
    <img src=${image} alt="${name}" />
    </div>
    <div class="elecElement2">
    <h3>${name}</h3>
    <p>Price:<span class="priceSpan"> $${price}</span></p>
    <button id=${id} class="addToCartBtn">Add to Cart</button>
    </div>
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
    clearCartMethod(){
        const confirmEl = confirm("Are you sure you want to clear cart?");
        if(!confirmEl){
            return
        }else{
            elecCartItems1El.innerHTML = "";
            this.itemsArr = []; 
            noOfItemsEl.textContent = 0;
            costOfItemsEl.textContent = 0;
            taxEl.textContent = 0;
            grandTotalEl.textContent = 0;
        }
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

const elecCartItemsEl = document.getElementById("elecCartItems");
const elecContainerEl = document.getElementById("elecContainer");
let showCart = false;
const openHideCart =()=>{
    showCart = !showCart;  
    showCart  ? elecCartItemsEl.style.display = "block" : elecCartItemsEl.style.display ="none";
    showCart ? elecContainerEl.style.width = "100%" : elecContainerEl.style.width = "";
    showCart ? elecContainerEl.style.display = "flex" : elecContainerEl.style.display = "";
    showCart  ? elecCartItemsEl.style.width = "75%" : elecCartItemsEl.style.width ="";
    showCart ? elecContainerEl.style.justifyContent = "spaceBetween" : elecContainerEl.style.justifyContent = "";
    showCart ? elecContainerEl.style.overflow = "visible" : elecContainerEl.style.display = "";
}

const clearCartBtnEl = document.getElementById("clear");
clearCartBtnEl.addEventListener("click",() => {
    cartObject.clearCartMethod();

})