
// const addToCartDivs = document.querySelectorAll('.add_to_card');
// const yourCardDiv = document.querySelector('.cart_items'); // Select the cart items container

// addToCartDivs.forEach(function(div) {
//     div.addEventListener('click', function() {
//         // Reset all other backgrounds, visibility, and buttons
//         addToCartDivs.forEach(function(d) {
//             d.style.backgroundColor = ''; // Reset background color
//             const img = d.querySelector('img');
//             const p = d.querySelector('p');
//             if (img) img.style.display = 'block';  // Show img tag
//             if (p) p.style.display = 'block';      // Show p tag

//             // Remove +, -, and number elements if they exist
//             const plusButton = d.querySelector('.plus-button');
//             const minusButton = d.querySelector('.minus-button');
//             const numberDisplay = d.querySelector('.number-display');
//             if (plusButton) plusButton.remove();
//             if (minusButton) minusButton.remove();
//             if (numberDisplay) numberDisplay.remove();
//         });

//         // Set the background color of the clicked div to orange
//         this.style.backgroundColor = 'orange';

//         // Hide the <img> and <p> tags inside the clicked div
//         const img = this.querySelector('img');
//         const p = this.querySelector('p');
//         if (img) img.style.display = 'none'; // Hide img tag
//         if (p) p.style.display = 'none';     // Hide p tag

//         // Create +, -, and number display elements
//         const plusButton = document.createElement('button');
//         plusButton.innerText = '+';
//         plusButton.classList.add('plus-button');

//         const minusButton = document.createElement('button');
//         minusButton.innerText = '-';
//         minusButton.classList.add('minus-button');
//         minusButton.style.marginLeft='50px';

//         const numberDisplay = document.createElement('span');
//         numberDisplay.innerText = '0'; // Initial value
//         numberDisplay.classList.add('number-display');
//         numberDisplay.style.margin = '0 10px'; // Add spacing between buttons and number

//         // Append buttons and number display to the div
//         this.appendChild(minusButton);
//         this.appendChild(numberDisplay);
//         this.appendChild(plusButton);

//         // Find the price and name for the current item
//         const priceElement = this.parentElement.querySelector('.names .waffle_price') || 
//                              this.parentElement.querySelector('.names .cremeBrule_price') || 
//                              this.parentElement.querySelector('.names .macarone_price') || 
//                              this.parentElement.querySelector('.names .tiramisu_price') || 
//                              this.parentElement.querySelector('.names .baklava_price') || 
//                              this.parentElement.querySelector('.names .lemonPie_price') || 
//                              this.parentElement.querySelector('.names .redCake_price') || 
//                              this.parentElement.querySelector('.names .saltedcaramel_price') || 
//                              this.parentElement.querySelector('.names .vanila_price');

//         const nameElement = this.parentElement.querySelector('.names .dessert_name'); // Get the dessert name
//         let itemPrice = priceElement.innerText; // Store the price
//         let itemName = nameElement.innerText; // Store the name
        
//         plusButton.addEventListener('click', function(event) {
//             event.stopPropagation(); // Prevent click event from reaching the parent div
//             let currentValue = parseInt(numberDisplay.innerText);
//             numberDisplay.innerText = currentValue + 1;
        
//             // Every time the + button is clicked, add one item to 'your_card'
//             const cartItem = document.createElement('div');
//             cartItem.innerText = `${itemName} - ${itemPrice}`; // Format: Dessert Name - Price
//             cartItem.classList.add('cart_item'); // Add a class for styling or future use
//             cartItem.setAttribute('data-item-name', itemName); // Add a unique identifier for easy removal
//             yourCardDiv.appendChild(cartItem);
//         });
        
//         minusButton.addEventListener('click', function(event) {
//             event.stopPropagation(); // Prevent click event from reaching the parent div
//             let currentValue = parseInt(numberDisplay.innerText);
        
//             if (currentValue > 0) { 
//                 numberDisplay.innerText = currentValue - 1;
        
//                 // Remove the last added item with this item name from 'your_card'
//                 const cartItems = yourCardDiv.querySelectorAll('.cart_item');
//                 for (let i = cartItems.length - 1; i >= 0; i--) { // Iterate in reverse to remove the last added item
//                     if (cartItems[i].innerText.includes(itemName)) {
//                         cartItems[i].remove(); // Remove the last specific cart item
//                         break; // Exit the loop once an item is removed
//                     }
//                 }
//             }
//         });
//     });
// });

// const confirmOrderButton = document.querySelector('.your_card button');

// confirmOrderButton.addEventListener('click', function() {
//     const cartItems = yourCardDiv.querySelectorAll('.cart_item');
//     let total = 0;

//     cartItems.forEach(function(item) {
//         const priceText = item.innerText.split(' - ')[1]; // Get the price part
//         const price = parseFloat(priceText.replace('$', '').trim()); // Convert to number
//         total += price; // Sum the total
//     });

//     alert(`Your total order amount is: $${total.toFixed(2)}`); // Show alert with total
//     location.reload(); // Refresh the page after the alert is dismissed
// });
        
        
const addToCartDivs = document.querySelectorAll('.add_to_card');
const yourCardDiv = document.querySelector('.cart_items'); // Select the cart items container

addToCartDivs.forEach(function(div) {
    div.addEventListener('click', function() {
        // Reset all other backgrounds, visibility, and buttons
        addToCartDivs.forEach(function(d) {
            d.style.backgroundColor = ''; // Reset background color
            const img = d.querySelector('img');
            const p = d.querySelector('p');
            if (img) img.style.display = 'block';  // Show img tag
            if (p) p.style.display = 'block';      // Show p tag

            // Remove +, -, and number elements if they exist
            const plusButton = d.querySelector('.plus-button');
            const minusButton = d.querySelector('.minus-button');
            const numberDisplay = d.querySelector('.number-display');
            if (plusButton) plusButton.remove();
            if (minusButton) minusButton.remove();
            if (numberDisplay) numberDisplay.remove();
        });

        // Set the background color of the clicked div to orange
        this.style.backgroundColor = 'orange';

        // Hide the <img> and <p> tags inside the clicked div
        const img = this.querySelector('img');
        const p = this.querySelector('p');
        if (img) img.style.display = 'none'; // Hide img tag
        if (p) p.style.display = 'none';     // Hide p tag

        // Create +, -, and number display elements
        const plusButton = document.createElement('button');
        plusButton.innerText = '+';
        plusButton.classList.add('plus-button');

        const minusButton = document.createElement('button');
        minusButton.innerText = '-';
        minusButton.classList.add('minus-button');
        minusButton.style.marginLeft = '50px';

        const numberDisplay = document.createElement('span');
        numberDisplay.innerText = '0'; // Initial value
        numberDisplay.classList.add('number-display');
        numberDisplay.style.margin = '0 10px'; // Add spacing between buttons and number

        // Append buttons and number display to the div
        this.appendChild(minusButton);
        this.appendChild(numberDisplay);
        this.appendChild(plusButton);

        // Find the price and name for the current item
        const priceElement = this.parentElement.querySelector('.names .waffle_price') || 
                             this.parentElement.querySelector('.names .cremeBrule_price') || 
                             this.parentElement.querySelector('.names .macarone_price') || 
                             this.parentElement.querySelector('.names .tiramisu_price') || 
                             this.parentElement.querySelector('.names .baklava_price') || 
                             this.parentElement.querySelector('.names .lemonPie_price') || 
                             this.parentElement.querySelector('.names .redCake_price') || 
                             this.parentElement.querySelector('.names .saltedcaramel_price') || 
                             this.parentElement.querySelector('.names .vanila_price');

        const nameElement = this.parentElement.querySelector('.names .dessert_name'); // Get the dessert name
        let itemPrice = priceElement.innerText; // Store the price
        let itemName = nameElement.innerText; // Store the name
        
        plusButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click event from reaching the parent div
            let currentValue = parseInt(numberDisplay.innerText);
            numberDisplay.innerText = currentValue + 1;
        
            // Every time the + button is clicked, add one item to 'your_card'
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart_item'); // Add a class for styling or future use
            cartItem.setAttribute('data-item-name', itemName); // Add a unique identifier for easy removal

            // Create the "X" button
            const removeButton = document.createElement('button');
            removeButton.innerText = 'X';
            removeButton.classList.add('remove-button');
            removeButton.style.marginRight = '10px';
            removeButton.style.border='2px solid grey';
            removeButton.style.width='40px';
            removeButton.style.height='40px';
            removeButton.style.cursor='pointer';
            removeButton.style.backgroundColor='white';
            removeButton.style.color='grey';
            
            // Space between the X and text

            // Create the item text
            const itemText = document.createElement('span');
            itemText.innerText = `${itemName} - ${itemPrice}`; // Format: Dessert Name - Price

            // Append the "X" button and item text to the cart item
            cartItem.appendChild(removeButton);
            cartItem.appendChild(itemText);

            // Append the cart item to 'your_card'
            yourCardDiv.appendChild(cartItem);

            // Add event listener to remove the cart item when "X" is clicked
            removeButton.addEventListener('click', function() {
                cartItem.remove(); // Remove the specific item from the cart
            });
        });
        
        minusButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click event from reaching the parent div
            let currentValue = parseInt(numberDisplay.innerText);
        
            if (currentValue > 0) { 
                numberDisplay.innerText = currentValue - 1;
        
                // Remove the last added item with this item name from 'your_card'
                const cartItems = yourCardDiv.querySelectorAll('.cart_item');
                for (let i = cartItems.length - 1; i >= 0; i--) { // Iterate in reverse to remove the last added item
                    if (cartItems[i].innerText.includes(itemName)) {
                        cartItems[i].remove(); // Remove the last specific cart item
                        break; // Exit the loop once an item is removed
                    }
                }
            }
        });
    });
});

// Confirm Order Button Logic
const confirmOrderButton = document.querySelector('.your_card button');

confirmOrderButton.addEventListener('click', function() {
    const cartItems = yourCardDiv.querySelectorAll('.cart_item');
    let total = 0;

    cartItems.forEach(function(item) {
        const priceText = item.innerText.split(' - ')[1]; // Get the price part
        const price = parseFloat(priceText.replace('$', '').trim()); // Convert to number
        total += price; // Sum the total
    });

    alert(`Your total order amount is: $${total.toFixed(2)}`); // Show alert with total
    location.reload(); // Refresh the page after the alert is dismissed
});
        
        

