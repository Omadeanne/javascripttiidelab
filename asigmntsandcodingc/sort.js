
    
      function quickSortContacts(contacts) {
    if (contacts.length <= 1) {
        return contacts;
    }

    const pivot = contacts[0]; // Choose a pivot (first contact in this case)
    const left = [];
    const right = [];

    for (let i = 1; i < contacts.length; i++) {
        if (contacts[i].name < pivot.name) { // Compare contacts by name
            left.push(contacts[i]);
        } else {
            right.push(contacts[i]);
        }
    }

    // Recursively sort the left and right sublists
    const sortedLeft = quickSortContacts(left);
    const sortedRight = quickSortContacts(right);

    // Combine the sorted sublists and the pivot
    return [...sortedLeft, pivot, ...sortedRight];
}

// Example usage:
const contacts = [
    { name: "Abbas", phone: "124-456-7890" },
    { name: "Leezy", phone: "123-555-5555" },
    { name: "Efe", phone: "987-654-3210" },
    { name: "Gladys", phone: "555-555-5555" },
    { name: "Patience", phone: "678-555-5555" },
    { name: "Obinna", phone: "234-555-5555" },
   
    // Add more contacts here...
];

const sortedContacts = quickSortContacts(contacts);
console.log(sortedContacts)
   



let arr = [6,7,5,4,5,6,8,9]  //merge sort
let arr1 = [6,7,5,4]
let arr2 = [5,6,8,9]

let arr3 = [6,7]
let arr4 = [5,4]

let arr5 = [5,6]
let arr6 = [8,9]