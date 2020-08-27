// var keypress = require('keypress')
// keypress(process.stdin)

// process.stdin.on('keypress',function(cafeChar,key){
//     console.log('got keypress',cafeChar)
// })

// function edValueKeyPress() {
//     var edValue = document.getElementById("cafeTextField");
//     var s = edValue.value;
//     console.log('value', s);

// }

exports.renderHomePage = (req,res) =>{
    res.render("index")
}

exports.getCafe = (req,res) =>{
    
    res.send("your form has been submitted")
}