function readItem(){
    // Parse items into a list, using ";" as the separator.
    let shoppingList = document.getElementsByName("item")[0].value;
    let shoppingListParsed;
    if (shoppingList.length == 0){
        alert ("No input items!");
        return;
    }
    if (shoppingList.length > 0){
        // Call the function which creates the checkboxed list with the shopping items.
        shoppingListParsed = shoppingList.split(";");
        listAppend(shoppingListParsed);
    }
    return;
    

function listAppend(shoppingList){
    // 
    let formFront = "<form>";
    let formInterior = "";
    let formBack = "</form>";
    let counter = 0;
    for (i=0; i < shoppingList.length; i += 1){
        formAdditionCheckBox = "<input type='checkbox' id='item'" +i +  " name='item'" + i + " value='" + shoppingList[i] +"'>";
        formAdditionLabel = "<label for=" + shoppingList[i] +">" + shoppingList[i] + "</label>";
        formInterior += formAdditionCheckBox + formAdditionLabel + "<br>";
        counter += 1;
        
    }
    let wholeList = formFront + formInterior + formBack + "<br>" + "<p>You have " + counter + "items in your cart.</p>";
    let div = document.getElementById("outputForm");
    div.innerHTML = wholeList;


    }

}
