const newFunc = () => {
    console.log('hello');
}

newFunc();

setTimeout(() => {
    console.log(newHobbes);
}, 2000);

const hobbes = ['one', 'tow'];
const newHobbes = [...hobbes];

const finalObj = {
    name : 'finsd',
    age : '31'
};

const {name,age} = finalObj;


console.log(name);

console.log(finalObj);