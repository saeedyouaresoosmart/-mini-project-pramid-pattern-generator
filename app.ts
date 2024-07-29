let propmt = require ('prompt-sync')();

let n :number = parseInt(propmt ('please enter num of rowss:'));
let a :string ="";
for (let d:number=1;d <= n; d++) {
    for ( let i : number = 1 ; i <= d; i++){
        a+= "*";
    }
    a +=  "\n" ; 
}
console.log(a);
export{};