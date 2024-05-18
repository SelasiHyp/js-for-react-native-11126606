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
