//DEFINE ELECTRONICS ARRAY TO STORE NAME,IMAGE AND PRICE
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
     },
     {
        id:7,
        name:"Switch",
        price: 57,
        image:"https://www.noteworthyaudio.com/cdn/shop/products/melco-s100_480x.jpg?v=1704460693"
     },
     {
        id:8,
        name:"Scanner",
        price:34,
        image:"https://5.imimg.com/data5/XQ/NX/PA/SELLER-33294641/zebra-symbol-ds2208-sr-barcode-scanner-500x500.png"
     },
     {
        id:9,
        name:"Router",
        price:20,
        image:"https://ctcsolutions.co.ke/wp-content/uploads/2018/12/TL-WR840N-450x450.jpg"
     },
     {
        id:10,
        name:"E-Cable",
        price:18,
        image:"https://secomart.com/cdn/shop/files/ethernet-cable-network-patch-cord-005.jpg?v=1687121062"
     },
     {
        id:11,
        name:"WI-FI",
        price:24,
        image:"https://m.media-amazon.com/images/I/710OiCp6HpL.jpg"
     }
]  

//DEFINE VAR WHERE TO DISPLAY THE ITEMS
const elecDispItemsEl = document.getElementById("elecDispItems"); 

//ACCESS THE ARRAY AND DISPLAY EACH ELEMENT
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

//DEFINE ALL THE VARIABLES TO BE USED IN CART CLASS
const costOfItemsEl = document.getElementById("costOfItems"); 
const taxEl = document.getElementById("tax");
const elecCartItems1El = document.getElementById("elecCartItems1");
const grandTotalEl = document.getElementById("grandTotal"); 
const favouritesEl = document.getElementById("fav");
const countingEl = document.getElementById("itemNo");

//DEFINE CLASS
class Cart{
    constructor(){
        this.itemsArr = [];
        this.total = 0;
        this.tax = 1.4;
    }
    //METHOD TO ADD ITEMS WHEN ADDCART BUTTON IS CLICKED
    addItemToCart(id,array){
        const addedItem = array.find((item) => item.id === id);
        const {name,price} = addedItem;
        this.itemsArr.push(addedItem);

        const objCount = {};//EMPTY OBJECT TO COUNT THE NUMBER OF ID'S IN THE ITEMS ARRAY
        this.itemsArr.forEach((item)=>{
            objCount[item.id] = (objCount[item.id] || 0) + 1;//IF THE OBJECT COUNT EXISTS OR IS ZERO ADD ONE
        });
        const currentItemCount = objCount[addedItem.id];
        const countIdEl = document.getElementById(`countId${id}`);
        //IF THE COUNT IS GREATER THAN 1 MULTIPLY THE VALUE WITH THE COUNT ELSE ITS FIRST CLICK IS 0 THEN IT DISPLAY ELEMENTS
        currentItemCount > 1 ? countIdEl.innerHTML = `} *${currentItemCount}` : elecCartItems1El.innerHTML += `
        <div>
        <h3>${name} <span id=countId${id}></span></h3>
        <p>Price: $${price}</p>
        </div>
        `
        //IF THE COUNT IS >2 IT SHOULD BE ADDED TO FAVOURITES
        currentItemCount > 2 ? favouritesEl.innerHTML =  `
        <div id="itemVal">  
        <h3>${name} <span id=countId${id}></span></h3>
        <p>Price: $${price}</p>
        </div>
        ` : "";
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
        costOfItemsEl.innerHTML = `<span id="itemVal">$${cost.toFixed(2)}</span>`;
        taxEl.innerHTML = `<span id="itemVal">$${tax.toFixed(2)}</span>`;
        grandTotalEl.innerHTML = `<span id="itemVal">$${this.total.toFixed(2)}</span>`;
        return this.total;
    }
    //CONFIRM IF YOU WANT TO CLEAR
    clearCartMethod(){
        const confirmEl = confirm("Are you sure you want to clear cart?");
        if(!confirmEl){
            return
        }else{
            elecCartItems1El.innerHTML = "";
            this.itemsArr = [];   
            costOfItemsEl.textContent = 0;
            taxEl.textContent = 0;
            grandTotalEl.textContent = 0;
            countingEl.textContent = 0;
        }
    }

}
//CREATE VARIABLE TO REP THE CLASS
let cartObject = new Cart; 

//VARIBLE TO ACCEE ADDTOCART BTN
const addToCartBtnEl = document.getElementsByClassName("addToCartBtn"); 

//ARRAY ALL THE BUTTONS 
[...addToCartBtnEl].forEach((btn) => {
    btn.addEventListener("click",(event) => {
        cartObject.addItemToCart(Number(event.target.id),electronicsArray); 
        cartObject.grandTotalMethod(); 
        countingEl.textContent = cartObject.noOfItemsMethod();
    })
});

//VARIBLE TO ACCESS CLEAR BTN
const clearCartBtnEl = document.getElementById("clear");

//FUNCTION TO CLEAR
clearCartBtnEl.addEventListener("click",() => {
    cartObject.clearCartMethod();

})
 
//VARIABLES TO DISPLAY CART ITEMS
const elecCartItemsEl = document.getElementById("elecCartItems");
const elecContainerEl = document.getElementById("elecContainer");
let showCart = false;
const openHideCart =()=>{
    showCart = !showCart;  
    showCart  ? elecCartItemsEl.style.display = "block" : elecCartItemsEl.style.display ="none";
    showCart ? elecContainerEl.style.width = "100%" : elecContainerEl.style.width = "";
    showCart ? elecContainerEl.style.display = "flex" : elecContainerEl.style.display = "";
    showCart  ? elecCartItemsEl.style.width = "50%" : elecCartItemsEl.style.width = "";
    showCart ? elecContainerEl.style.justifyContent = "spaceBetween" : elecContainerEl.style.justifyContent = "";
    showCart ? elecContainerEl.style.overflow = "visible" : elecContainerEl.style.display = "";
}

//VAR TO ACCESS FAVOURITES WHEN CLICKED ICON
const favouriteClass = document.getElementsByClassName("fav");

//FUNCTION TO GET FAVOURITES
function favFunc(){  
    showCart = !showCart;
   showCart ? elecDispItemsEl.style.display = "none": elecDispItemsEl.style.display = "";
   showCart ? favouritesEl.style.display = "block": favouritesEl.style.display = "none"; 
   showCart  ? elecCartItemsEl.style.display = "nne" : elecCartItemsEl.style.display ="";
}