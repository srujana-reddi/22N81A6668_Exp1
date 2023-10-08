let cartItems = []; 
  
 function addToCart(product, price) { 
     cartItems.push({product, price}); 
     updateCart(); 
 } 



 function loginForm() {
    // Get the username and password input elements
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    // Check if both fields are filled
    if (usernameInput.value === "" || passwordInput.value === "") {
        alert("Please enter both username and password.");
        return false;
         // Prevent form submission
    }
    return true;
    
}



function registerForm() {
    // Get the username and password input elements
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    // Check if both fields are filled
    if (usernameInput.value === "" || passwordInput.value === "") {
        alert("Please enter both username and password.");
         // Prevent form submission
         return false;
    }
    else
    {
        const registersubmit=document.getElementById('registersubmit');
        registersubmit.addEventListener('click',()=>
        {
                window.location.href="login.html";
        
        });
    }   
}



// document.getElementById('registersubmit').addEventListener('click',()=>
// {
//         window.location.href="index.html";

// });

// document.getElementById('registerhere').addEventListener('click',()=>{
//     window.location.href="register.html";
// });
// document.getElementById('productsregister').addEventListener('click',()=>{
//     window.location.href="products.html";
// })

  
 function updateCart() { 
     let cartList = document.getElementById("cart-items"); 
     let totalElement = document.getElementById("total"); 
     let total = 0; 
  
     cartList.innerHTML = ""; 
     cartItems.forEach(item => { 
         let listItem = document.createElement("li"); 
         listItem.innerText = `${item.product} - $${item.price}`; 
         cartList.appendChild(listItem); 
         total += item.price; 
     }); 
  
     totalElement.innerText = total; 
 } 
  
  
  
  
 // Add product and cart logic similar to the previous example 
  
 function checksout() { 
     alert('Thank you for your purchase!'); 
 }
