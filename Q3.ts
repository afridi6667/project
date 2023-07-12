/*
Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase.
*/
let personName = 'Talha Afridi';
console.log(`Name : ${personName}`);
console.log( `Name in Lowercase : ${personName.toUpperCase()}`);
console.log( `Name in Lowercase : ${personName.toLowerCase()}`);


let titlecase = personName.split("")

for(let i = 0; i < titlecase.length; i++)
{

titlecase[i] = titlecase[i].charAt(0).toUpperCase() + titlecase[i].slice(1).toLowerCase();

}
console.log(titlecase.toString().replace(/ ,/g , ' '))
