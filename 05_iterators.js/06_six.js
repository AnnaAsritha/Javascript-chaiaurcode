//this foreach loop will not return any value


const lang = ["javascript","rb","cpp","python","html"];

const element = lang.forEach((item) => {
    return item;
});

//console.log(element);// will give undefined value because foreach will not return any value

const myarr = [0,1,2,3,4,5,6,7,8,9];

// const newNums = myarr.filter((item) => item > 4);// this is how we write with out scope


const newNums = myarr.filter((item) => {
    return item > 4; // once the scope has come then we have to give return key word else we will get empty array
})
// console.log(newNums);


const newNum = [];

myarr.forEach((num) => {
    if(num > 4){
        // console.log(myarr);
        // myarr.push(num)
        // myarr.pop(num)
        newNum.push(num)
    }
})
// console.log(newNum);
// console.log(myarr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userbooks = books.filter( (bk) => bk.genre === 'History');

// const userbooks = books.filter( (bk) => bk.publish > 1987); // filter all the books based on 

// const userbooks = books.filter( (bk) => { return bk.publish >= 2000; }) // with scope so using return keywor d


const userbooks = books.filter( (bk) => { return bk.publish >= 1987 && bk.genre === 'Fiction'; }) 
console.log(userbooks);
