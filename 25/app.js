const keyby = require('lodash.keyby');

const newone=({name})=>{
    console.log(`Name: ${name}`);
}

newone({name:"kesava"});


const users = [
    { id: '1', name: 'Alice', age: 25 },
    { id: '2', name: 'Bob', age: 30 },
    { id: '3', name: 'Charlie', age: 35 }
  ];
  
  const ByAge = keyby(users, user => user.age);
  console.log(ByAge);
  