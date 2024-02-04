//ARRAY OF HOME ITEMS
const homeItemsArray = [
    {
        name:"shopping",
        image:"https://c8.alamy.com/comp/P3T55C/selection-of-the-goods-in-household-shop-P3T55C.jpg",
        alt:"shopping items"
    },
    {
        name:"cloth",
        image:"https://img.freepik.com/premium-photo/mockup-tshirt-hanging-hanger-store-ai-generated_193066-2441.jpg?size=626&ext=jpg&ga=GA1.1.1788078767.1695748733&semt=ais",
        alt:"cloth items"
    },
    {
        name:"Electronics",
        image:"https://img.freepik.com/premium-vector/realistic-electronic-devices-gadgets-isometry-vector-isometric-illustration-devices_480270-27.jpg",
        alt:"Electronics items"
    }
]
//FUNCTION TO DISPLAY HOME ITEMS
const homeItemsEl = document.getElementById("homeItems");
homeItemsArray.forEach(({name,image,alt}) => {
    homeItemsEl.innerHTML += `
    <div>
    <h3>${name}</h3>
    <img src="${image}" alt="${alt}" onclick="loginFunc()">
    </div>
    `;
});
//FUNCTION TO DIPLAY LOGIN
const loginEl = document.getElementById("login");
const loginFunc = () =>{
     homeItemsEl.innerHTML = "";
     loginEl.innerHTML += `
     <div class="loginClass">
     <h1>LOGIN</h1>
     <input type="text" id="userName" placeholder="Username" pattern="Anthony" required>
     <input type="password" id="passWord" placeholder="Password" pattern="anto" required> 
     <i onclick="checkPassword()" class="fa-solid fa-eye-low-vision"></i>
     <button type="submit" id="submit" onclick="validateUser()">Submit</button>
     <button type="reset" id="reset" onclick="res()">Reset</button>
     <p>Don't have an account: <button onclick="signUpFunc()">Sign Up</button></p>
     </div>
     `
}
//VALIDATE USER FUNCTION 
const validateUser =()=>{
    let username = document.getElementById('userName');
    let password = document.getElementById('passWord');
    if (username.value === "Anthony" && password.value === "anto"){
        alert ("Login Successful! Welcome back Anthony!");
        window.location.href = "electronics.html";
    }
}
//FUNCTION TO CHENGE PASSWORD TO TEXT
const checkPassword = () =>{
    const passWordEl = document.getElementById("passWord");
    if(passWordEl.type === "password"){
        passWordEl.type = "text";
    }else{
        passWordEl.type = "password";
    }
}
//FUNCTION TO CLEAR INPUTS
const res = ()=>{
   const resetEl = document.querySelectorAll("input");
   resetEl.forEach(input => input.value = "")
}
//FUNCTION  FOR SIGN UP
const signUpEl = document.getElementById("signUp");
const signUpFunc =()=>{
    homeItemsEl.innerHTML = "";
    loginEl.innerHTML = "";
    signUpEl.innerHTML += `
    <div>
       <form class="myForm"> 
            <label for="fname">FirstName: 
                <input type="text" name="fname" id="fname" required>
            </label>
            <label for="lname">LastName: 
                <input type="text" name="lname" id="lname" required>
            </label>
            <label for="sname">SurName: 
                <input type="text" name="sname" id="sname" required>
            </label>
            <label for="email">Email: 
                <input type="email" name="email" id="email" required>
            </label>
            <label for="address">Address: 
                <input type="text" name="address" id="address" required>
            </label>
            <label for="date">Date: 
                <input type="date" name="date" id="date" required>
            </label>
            <label for="country">Country: 
                <select name="country" id="selectCountry">
                    <option value="Country">Country</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Tanzania">Tanzania</option>
                    
                </select>
            </label>

            <div class="btn">
               <button type="submit" id="save">SAVE</button>
               <button type="reset" id="clear" onclick="res()">CLEAR</button>
            </div>
        </form>
    `
}
//END OF SIGNUP
  