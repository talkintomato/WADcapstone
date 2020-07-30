
(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space




// async function getPrice(ticker) {

//   const response = await fetch(`https://api.gemini.com/v1/book/${ticker}`)
//   const data = await response.json();

//   const ul = document.getElementById('crypto');

//   data.bids.forEach(bid => {
//     const li = document.createElement('li');
//     li.classList.add('some-class');
//     li.innerHTML = bid.price;
//     ul.appendChild(li);
//   })

//   document.getElementById("price").innerHTML = data.bids[0].price;
// };

// let x = 10;

// var btcprice;

// const response = fetch(`https://api.gemini.com/v1/book/BTCUSD`)
// .then(response => response.json())
// .then(data => {
//   console.log(data);
//   btcprice = data.bids[0].price;
//   console.log(btcprice);
// })

// console.log(btcprice);

// let blockchain = [
//   { Token: "Bitcoin", Ticker: "BTC", Price: btcprice },
//   { Token: "Ethereum", Ticker: "ETH", Price: "$" + " one" },
// ];

// function generateTableHead(table, data) {
//   let thead = table.createTHead();
//   let row = thead.insertRow();
//   for (let key of data) {
//     let th = document.createElement("th");
//     let text = document.createTextNode(key);
//     th.appendChild(text);
//     row.appendChild(th);
//   }
// }

// function generateTable(table, data) {
//   for (let element of data) {
//     let row = table.insertRow();
//     for (key in element) {
//       let cell = row.insertCell();
//       let text = document.createTextNode(element[key]);
//       cell.appendChild(text);
//     }
//   }
// }

// let table = document.querySelector("table");
// let data = Object.keys(blockchain[0]);
// generateTableHead(table, data);
// generateTable(table, blockchain);

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.materialboxed');
//   var instances = M.Materialbox.init(elems, options);
// });

// Or with jQuery

// $(document).ready(function(){
//   $('.materialboxed').materialbox();
// });

// Database
function createFoodItem(food) {
  // Create <li class="collection-item"> </li> element
  const listItem = document.createElement("li"); 
  listItem.innerHTML = food;
  listItem.classList.add("collection-item");
  
  document.getElementById("food_list").appendChild(listItem);
}

function clearAllFoodItem() {
  document.getElementById("food_list").innerHTML = "";
}

// On load, see if localstorage has anything 
const savedFoods = localStorage.getItem('foods');
if (savedFoods != null) {
  console.log('value found: ' + savedFoods);
  
  savedFoods.split(",")
    .forEach(food => {
      createFoodItem(food);
    })
}

// Add btn click event listener
const addBtn = document.getElementById("add_btn");
addBtn.addEventListener('click', function (event) {

  console.log("added")
  
  // Get the value of favourite food
  const favFoodVal = document.getElementById("fav_food").value;
  
  // Add to the list
  createFoodItem(favFoodVal);
  
  // Save to localstorage
  const currentFood = localStorage.getItem('foods');
  if (currentFood == null) {
    localStorage.setItem("foods", favFoodVal);
  } else {
    localStorage.setItem("foods", currentFood + "," + favFoodVal);
  }
  
  // Remove the existing input val 
  document.getElementById("fav_food").value = "";
});


// Clear btn click event listener
const clearBtn = document.getElementById("clear_btn");
clearBtn.addEventListener('click', function (event) {
  
  // Delete from database
  localStorage.clear();
  
  // Unset the input value 
  clearAllFoodItem();
});

// Box animation

let box = document.querySelector('.box');

box.addEventListener('click', function() {
  box.classList.toggle('move');
});

box.addEventListener('transitionend', onTransitionEnd, false); 

function onTransitionEnd() { 
 // Handle the transition finishing. 
  console.log('finished animating');
}


