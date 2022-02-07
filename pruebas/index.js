const users = [
    {username: 'ppc90' , age: 30, premium: false},
    {username: 'lu65' , age: 24, premium: false},
    {username: 'maria3' , age: 36, premium: false},
    {username: 'abc123' , age: 20, premium: true},
    {username: 'sergio58' , age: 26, premium: true},
];


const userpremium = users
.filter(function(user){
    return user.premium == true
});

console.log("Estos son los premium"[userpremium]);


const nopremium = users
.filter(function(user){
    return user.premium == false
});

console.log(nopremium);





