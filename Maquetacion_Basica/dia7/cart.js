let item1 = {name: "Jersey Rayas Corto", price: 15.99};
let item2 = {name: "JERSEY PUNTO RAYAS AZULES", price: 22.99};
let item3 = {name: "JERSEY CROPPED RAYAS", price: 15.99};

let cart = [];


jQuery(() => {
$("#button1").on('click', ()=> {
    cart.push(item1);
});
$("#button2").on('click', ()=> {
    cart.push(item2);
});
$("#button3").on('click', ()=> {
    cart.push(item3);
});

$("#cart-btn").on('click', ()=> {
    $("#carritoModal").modal('show')
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        $("#modalTotal").append(`<ul>
                                    <li>${cart[i].name} -- ${cart[i].price}</li>
                                </ul>`)
        sum += cart[i].price        
    }
    $("#modalTotal").append(`<p>Total: ${sum}€</p>`)
})
})
// $("#cart-btn").on('click', ()=> {
//     $("#carritoModal").modal('show')
// })


// let cartItems = []

// function listItems () {
//     let clothingItem {
//         name : name,
//         price : price,
//     }

//     cartItems.append(clothingItem)
// }

// function addItemToCart() {
//     let name = $(".itemName[i]")
//         price = $(".itemPrice[i]")

//     listItems(name, price)
// }

// $(".addToCart[i]").on('click', addItemToCart());

// function calcTotal() {
//     let sum = 0;
//     for (let i = 0; i < cartItems.length; i++) {
//         sum += cartItems[i];
//         $("#modalTotal").append(`<ul>
//                                 <li>${cartItems[i].name}</li>
//                                 <li>${cartItems[i].price}</li>
//                             </ul>`)
//     }
//     return sum;
    
// }