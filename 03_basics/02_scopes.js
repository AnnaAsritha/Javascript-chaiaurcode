// the scope is different for different let,const,var once let used inside scope cannot be changed


if (true){
    let a =10;
    const b = 29;
    var c = 30;
    console.log(b)

}
// console.log(a);// here the value of a is 10 but cannot be fetehed out of the scope but can assign new value outside the scope and use
// console.log(b); // here the value b is const cannot be fetehed out of the scope and cannot be redecalred as well
console.log(c); // can be feteched out of the loop and can change the value as well 