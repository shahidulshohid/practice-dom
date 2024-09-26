const glass = {name:'glass', color:'golden', price:12, isCleaned: true}
// for(const keys in glass){
//     console.log(keys)
// }
// const keys = Object.keys(glass);
// for(const key of keys){
//     console.log(key, glass[key])
// }

const values = Object.values(glass)
for(const value of values){
    console.log(value, glass[value])
}