function unroll(squareArray) {

    var result =[]

    for (let i = 0; i < squareArray.length/2; i++){
       
        const topIndex = squareArray.length - i - 1 
        

        for (let j = i; j< topIndex; j++ ){
            console.log(i,j)
            result.push(squareArray[i][j])
        }

        for (let k = i; k < topIndex; k++){
            result.push(squareArray[k][topIndex])
        }

        for (let l = topIndex; l > i ; l--){
            result.push(squareArray[topIndex][l])
        }

        for (let m = topIndex; m > i; m--){
            result.push(squareArray[m][i])
        }
        console.log(result)

    }
    
    if (squareArray.length%2){
        const mid = Math.floor(squareArray.length/2)
            result.push(squareArray[mid][mid])
    }
    
    console.log(Math.ceil(squareArray.length/2))
    return result
}

module.exports = unroll;
