var obj = [
{
    name: "Jack",
    age: "26",
    designation: "developer",
    place: "bengaluru",
},
{
    name: "Jill",
    age: "25",
    designation: "Senior developer",
    place: "Mumbai",
},
{
    name: "Jam",
    age: "22",
    designation: "Manager",
    place: "Hyderabad",
},
]
//to find the key value 
for (var key in obj) {
    console.log(key);
}

//For loop
for (var i = 0; i < obj.length; i++) {
  console.log(`
${obj[i].name}
${obj[i].age}
${obj[i].designation}
${obj[i].place}
  `);
}

//for in loop
for (var key in obj) { 
    console.log (`
    ${obj[key].name}
    ${obj[key].age}
    ${obj[key].designation}
    ${obj[key].place}
    `);
}

//for of loop
for (var i of obj) {
console.log (`
    ${i.name}
    ${i.age}
    ${i.designation}
    ${i.place}
`)}

//For Each loop
obj.forEach((data) => {
   console.log(`
 ${data.name}
 ${data.age}
 ${data.designation}
 ${data.place}
   `);
 });

 //Resume in array of object

 var obj = [
{
    name: "Sai Prasad",
    age: "26",
    hobbies: "Cricket, Chess",
    experience: "Worked as Technical support L1 in DXC Technology and HPE",
    years:"2 years and 3 months",
    Qualification: "BCA",

}
 ]

 //for loop
for (var i=0; i<obj.length; i++) {
    console.log(`
    ${obj[i].name}
    ${obj[i].age}
    ${obj[i].hobbies}
    ${obj[i].experience}
    ${obj[i].years}
    ${obj[i].Qualification}
    `)
}