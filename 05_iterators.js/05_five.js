// foreach loop

const lang = ["js","rb","cpp"];

lang.forEach(function (vals) {
    // console.log(vals);
});

//arrow function

lang.forEach((vals) => {
    // console.log(vals);
});

function printMe(item){
    // console.log(item);
}

// lang.forEach(printMe);


lang.forEach((item,index,arr) => {
    console.log(item,index,arr);
})

const mycoding = [
    {
        langName : "javascript",
        langFile : ".js"
    },
    {
        langName : "java",
        langFile : ".java"
    },
    {
        langName : "python",
        langFile : ".py"
    }
];

mycoding.forEach((item) => {
    console.log(item.langName);
});