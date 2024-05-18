const { createUserProfiles } = require('./userInfo');
function processArray(arr) {
    var result=[];
    for (var i= 0; i < arr.length; i++){
        var num = arr[i];
        if (num % 2===0){
            result.push(num*num);
        }else{
            result.push(num*3);
        }
    }return result;
}

function  formatArrayStrings(string, processedNum){
    for(var i =0; i<string.length;i++){
        if(processedNum[i] % 2 ===0){
            string[i]= string[i].toUpperCase();
        }else{
            string[i]= string[i].toLowerCase();
        }
    }return string;

}

/*
const strings = ["hello","hypeman", "world", "john", "car", "GOOD MORNING"];
const numbers = [30, 121, 33, 7, 80];
const processedNumbers = processArray(numbers);
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings);
*/