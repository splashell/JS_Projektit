function readItem(){
    // Parse items into a list, using ";" as the separator. Check for 0 length input.

    let shoppingList = document.getElementsByName("item")[0].value;
    let shoppingListParsed;
    if (shoppingList.length == 0){
        alert ("No input items!");
        document.getElementsByName("item")[0].style.borderColor = "red";
    
        return;
    }
    if (shoppingList.length > 0){
        // Call the function which creates the checkboxed list with the shopping items.
        shoppingListParsed = shoppingList.split(";");
        listAppend(shoppingListParsed);
    }
    return;
}
    

function listAppend(shoppingList){
    // Form front and back tags.
    let formFront = "<form>";
    let formInterior = "";
    let formBack = "</form>";
    let counter = 0;
    // Build up row input and label tags. 
    for (i=0; i < shoppingList.length; i += 1){
        formAdditionCheckBox = "<input type='checkbox' onclick='overLine(" + i + ")' class='item'  name='item"+i+"' value=" +shoppingList[i] + "'>";
        formAdditionLabel = "<label for=" + shoppingList[i] +">" + shoppingList[i] + "</label>";
        formInterior += formAdditionCheckBox + formAdditionLabel + "<br>";
        counter += 1;
        // Set item to local storage and log in console.
        localStorage.setItem("Item"+(i), shoppingList[i]);
        console.log(localStorage.getItem("Item"+i));
        
    }
    // Change innerHTML of division element reserved for output shopping list.
    let wholeList = formFront + formInterior + formBack + "<br>" + "<p>You have " + counter + " items in your cart.</p>";
    let div = document.getElementById("outputForm");
    div.innerHTML = wholeList;

    }

function overLine(number){
    /* Check the status of the given checkbox. If checkbox is checked, make a line-through (CSS property) to the label. 
    If the checkbox is un-checked, remove the line from the label. */

    let label = document.getElementsByTagName('label')[number+1];
    let item = document.getElementsByClassName('item')[number];
    if (item.checked){
        label.style.textDecoration = "line-through";
        return;
    } else if (!item.checked){
        label.style.textDecoration = "none";
        return;
    }
    
}
