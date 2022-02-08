//Array de objeto

const users = [
    {username: 'ppc90' , age: 30, premium: false},
    {username: 'lu65' , age: 24, premium: false},
    {username: 'maria3' , age: 36, premium: false},
    {username: 'abc123' , age: 20, premium: true},
    {username: 'sergio58' , age: 26, premium: true},
];



//se filtran los usuarios que son premium
const userPremium = users.filter(user => user.premium === true);
//se pinta en consola la frase "es premium" para cada usuario con esta categoría
userPremium.forEach(u => console.log(`${u.username} es premium`));


//se filtran los usuarios que no son premium
const Nopremium = users.filter(user => user.premium === false);
//se pinta en consola el array de los que no son premium
console.log(Nopremium);

//se podría añadir una frase también para los usuarios No  premium
Nopremium.forEach(u => console.log(`${u.username} no es premium`));

