function greet(name)
{
    return `Hello, ${name}!`;
}


module.exports = greet;

if (require.greet == module){
    console.log(greet("world"));
}