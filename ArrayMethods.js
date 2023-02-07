const ages = [72, 33, 18, 20];

// Concat() method
console.log("1. Concat");
arr1 = ["abc", "def", "ghi"];
arr2 = ["jkl", "mno", "pqr"];
arr3 = arr1.concat(arr2);
console.log(arr3);
arr4 = ["stu", 1,2];
arr3 = arr1.concat(arr2, arr4);
console.log(arr3);
arr5 = [["vwx", 3], 4];
arr3 = arr3.concat(arr5);
console.log(arr3);

// Constructor method
console.log("2. Constructor");
function User() {
    this.name = 'Yaswanth';
}
var user = new User()
console.log(user.name);

// CopyWithin() method
console.log("3. CopyWithin");
student = ['a','b','c','d','e','f'];
console.log(student.copyWithin(2,3))
console.log(student)
console.log(student.copyWithin(0,2))

// entries method
console.log("4. Entries");
student = ['a','b','c','d','e','f'];
stu = student.entries();
for (let x of stu){
    console.log(x)
}

// every method
console.log("5. Every");
names = ["Roronoa Zoro", "Goku", "Naruto", "Levi Ackerman", "Eren Yaeger", "Monkey D. Luffy"];
function checkNames1(name){
    return name.startsWith('A');
}
console.log(names.every(checkNames1));

// Fill method
console.log("6. fill");
names.fill("Monkey D. Luffy", 1, 3);
console.log(names);

// Filter method
console.log("7. Filter");
names = ["Roronoa Zoro", "Goku", "Naruto", "Levi Ackerman", "Eren Yaeger", "Monkey D. Luffy"];
function checkNames2(name){
    return name.startsWith('A');
}
console.log(names.filter(checkNames2));

// Find method
console.log("8. find");
function checkNames3(name) {
    return name.startsWith('R')
}
console.log(names.find(checkNames3));

// FindIndex method
console.log("9. FindIndex");
function checkNames4(name) {
    return name.startsWith('E');
}
console.log(names.findIndex(checkNames4));

// ForEach
console.log("10. ForEach");
names.forEach(printNames);
function printNames(name, index) {
    console.log(index + 1 + ". " + name);
}

// From method
console.log("11. From");
console.log(Array.from(names));

// includes
console.log("12. includes");
console.log(names.includes("Roronoa Zoro"));


// indexOf method
console.log("13. IndexOf");
console.log(names.indexOf("Monkey D. Luffy"));

// isArray method
console.log("14. isArray");
console.log(Array.isArray(names));

// join method
console.log("15. join");
console.log(names.join(", "));

// Keys
console.log("16. Keys");
const keys = Object.keys(names);

let text2 = "";
for (let x of keys) {
  text2 += x + " ";
}
console.log(text2);

// Last Index of
console.log("17. Last Index Of");
let index1 = names.lastIndexOf("Pineapple");
console.log(index1);

// length
console.log("18. Array length");
let length = names.length;
console.log(length);

let length1=arr3.length=2;
console.log(arr3);

// Map method
console.log("19. Map");
const newAge = ages.map(Math.sqrt)
console.log(newAge);

// pop method
console.log("20. Pop");
let remove=names.pop();
console.log(names);
console.log(remove);


console.log("21. Push");
names.push("Jackfruit");
console.log(names);

// reduce 
console.log("22. Reduce");
console.log(ages.reduce(sub));

// Reduce right
console.log("23. Reduce Right");
console.log(ages.reduceRight(sub));

function sub(total,num){
    return total-num;
}

// reverse
console.log("24. Reverse");
names.reverse();
console.log(names);

// Shift
console.log("25. Shift");
console.log(names.shift());
console.log(names);

// Slice method
console.log("26. Slice");
const citrus = names.slice(1, 3);
console.log(citrus);

// Sort method
console.log("27. Sort");
names.sort();
console.log(names);
names.reverse();
console.log(names);

// Splice method
console.log("28. Splice");
names.splice(2, 0, "Lemon", "Kiwi")
console.log(names);
names.splice(2, 2);
console.log(names);

// To String method
console.log("29. To String");
let text3 = names.toString();
console.log(text3);

// unshift
console.log("30. unshift");
names.unshift("Lemon","Pineapple");
console.log(names);

// value of
console.log("31. Value of");
const myArray = names.valueOf();
console.log(myArray);