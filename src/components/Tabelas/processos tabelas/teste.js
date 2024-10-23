const filter = function(arr, fn){
    const resultado = [];

    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i])){
            resultado.push(fn(arr[i], i))
        }
    }

    return resultado
}


const arr1 =  [1, 2, 3, 4, 5];
const calculo = function(n) { return n > 1};

console.log(filter(arr1, calculo))