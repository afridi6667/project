/*
Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase.
*/
var personName = 'Talha Afridi';
console.log("Name : ".concat(personName));
console.log("Name in Lowercase : ".concat(personName.toUpperCase()));
console.log("Name in Lowercase : ".concat(personName.toLowerCase()));
var titlecase = personName.split("");
for (var i = 0; i < titlecase.length; i++) {
    titlecase[i] = titlecase[i].charAt(0).toUpperCase() + titlecase[i].slice(1).toLowerCase();
}
console.log(titlecase.toString().replace(/ ,/g, ' '));
