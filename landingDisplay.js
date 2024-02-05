//const homeItemsEl = document.getElementById("homeItems");
//FUNCTION TO DIPLAY LOGIN
const loginEl = document.getElementById("login");
const mainEl = document.getElementById("mainId");
const advertEl = document.getElementById("advert");
const loginFunc = () =>{ 
     mainEl.innerHTML = "";
     advertEl.innerHTML = "";
     signUpEl.innerHTML = "";
     loginEl.innerHTML += `
     <h1 class="loginTitle"><i class="fa-regular fa-credit-card"></i> CRUXTON</h1>
     <div class="loginClass">
     <h1>LOGIN</h1>
     <input type="text" id="userName" placeholder="Username" pattern="Anthony" required>
     <div class="pass"><input type="password" id="passWord" placeholder="Password" pattern="anto" required> 
     <i onclick="checkPassword()" class="fa-solid fa-eye-low-vision"></i></div>
     <div class="btns">
     <button type="submit" id="submit" onclick="validateUser()">Submit</button>
     <button type="reset" id="reset" onclick="res()">Reset</button></div>
     <p>Don't have an account: <button onclick="signUpFunc()" class="signup">Sign Up</button></p>
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
    loginEl.innerHTML = "";
    mainEl.innerHTML = "";
    advertEl.innerHTML = "";
    signUpEl.innerHTML += `
    <div>
       <form class="form"> 
          <div class="myForm">
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
            <button onclick="loginFunc()">Login</button>
            </div>
        </form>
    `
}
//END OF SIGNUP
//ALERT MESSAGE ONMOUSEOVER
 
  