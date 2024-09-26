

// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ], //onek somay atak array of array bole. and two dimensional array o boe;
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]


const glass = {name:'glass', color:'golden', price:12, isCleaned: true}
// const keys = Object.keys(glass)
// const values = Object.values(glass)
// const entries = Object.entries(glass)
// delete glass.isCleaned;
// const {name, ...getEverything} = glass;
// const {color, ...allProperty} = glass;


// console.log(keys);
// console.log(values)
// console.log(entries);
// console.log(getEverything)
// console.log(allProperty);
// console.log(glass)



// Object.freeze(glass)
// glass.name = 'glass2';
// delete glass.color;
// console.log(glass)


Object.seal(glass) // ata update korte dey but delete korte dey na;
glass.color = 'red'
glass.name = 'glass2'
console.log(glass)