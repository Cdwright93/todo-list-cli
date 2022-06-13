const prompt = require('prompt-sync')({sigint: true});


console.log("Welcome to the To-Do List Manager Application!\n");

console.log("Select an action: ");
console.log("[1] Create to-do item");
console.log("[2] Complete to-do item");
console.log("[3] Exit the application");
let choice = Number(prompt("> ")); //user can input their choice here

let items = [""]; //our list of to do items
let statusArray = [""] //our list of completion statuses (true/false)

while(choice !== 3){
    if(choice === 1){
        console.log("\nCreate a new item\n");
        let answer = prompt("Please enter an item: ");
        items.push(answer);
        statusArray.push(false);
        printList();
        selectChoice();
    } else if(choice == 2){
        while(choice == 2){
        let answer = Number(prompt("\nSelect an item to complete\n"));
        if(answer > statusArray.length){
            printList()
            answer = Number(prompt("\nSelect an item to complete\n"));
        }
        if(answer <= statusArray.length){
            statusArray[answer] = true
            printList();
            selectChoice();
        } 
    }
    } else {
        console.log("\nPlease choose a number between 1 and 3\n");
        selectChoice();
    }
}

// Functions
function selectChoice(){
    console.log("Select an action: ");
    console.log("[1] Create to-do item");
    console.log("[2] Complete to-do item");
    console.log("[3] Exit the application");
    choice = Number(prompt("> "));
}

function printList(){
    console.log("\nCurrent To-Do list: ");
    let status = "";
    for(let i = 1; i < items.length; i++){
        //if statement to check if status is true or false
        if(statusArray[i] === false){
            status = "[Incomplete] ";
        } else if(statusArray[i] === true){
            status = "[Complete] ";
        }
        console.log(i + ". " + status + items[i]);
    }
    console.log("");
}
