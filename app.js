//Question 1
alert("Question 1")
var arraylength = parseInt(prompt("Enter length of an array"));
var num = [];
for (let index = 0; index < arraylength; index++) {
num.push(parseInt(prompt("Enter number ")))  
}
var product=0;
var ans = []
for (let i = 0; i < num.length; i++) {
    if (product< num[i]*num[i+1]) {
    product = num[i]*num[i+1]; 
    ans.push(num[i])
    ans.push(num[i+1])  
    } 
}
alert(product);
//Question 2
alert("Question 2")
var array_length = parseInt(prompt("Enter length of an array"))
var nums = [];
for (let index = 0; index < array_length; index++) {
nums.push(parseInt(prompt("Enter number dont repeat the number")))  
}
var target = parseInt(prompt("Enter the targeted element"));
var indices = [];
for (let i = 0; i < nums.length; i++) {
    for(let j=i+1 ; j < nums.length  ; j++){
        if (nums[i]+nums[j]==target){
            indices.push(i)
            indices.push(j)
        }
    }
}
alert(indices);

//Question 3
alert("Question 3")
var sentence = []
sentence = prompt("Enter any string");
var revsentence=[];
for (let index = sentence.length; index >= 0; index--) {

    revsentence[sentence.length - index] = sentence[index]
}
alert(revsentence);

//Question 4
alert("Question 4")
var library = [
    {
      author :'bill gates',
      title : 'the road ahead',
      readingStatus : true
    },
    {
        author :'steve jobs',
        title : 'walter isaacson',
        readingStatus : true
      },
      {
        author :'suzzain collens',
        title : 'the final book of hunger',
        readingStatus : false
      }
];


var readBooks= [];
var unreadBooks= [];
for (const key in library) {
    if (library.hasOwnProperty(key)) {
        if (library[key].readingStatus == true){
            readBooks.push(library[key].author);
        }
        else{
            unreadBooks.push(library[key].author);
        }
    }
  }
  alert(readBooks);
  alert(unreadBooks);

//Question 5
alert("Question 5");

var typesOfCoin = parseInt(prompt("Enter types of coin"));
var coins = [];
for (let index = 0; index < typesOfCoin; index++) {
  coins.push(parseInt(prompt("Enter coins")));
}
var result = [];
var amount = parseInt(prompt("Enter amount"));
function amountToCoins(amount, coins) {
    const output = [];

    for (let j =0 ; j < coins.length ; j++) {
        while (amount >= coins[j]) {
            output.push(coins[j]);
            amount -= coins[j];
        }
    }
    return output;
}


result = amountToCoins(amount, coins);
alert(result);


