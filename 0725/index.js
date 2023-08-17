// let i;
// let j;
// for(let i = 0; i > 30; i++){
//     console.log(i);
//         for(let j = 0; j > 30; j++){
//             console.log(i,j);
//         }
// }

// var arr = new Array(3);      // 3개의 요소를 가지는 배열을 생성함.
// for (var row = 0; row < 3; row++) {
//     arr[row] = new Array(4); // 각각의 요소마다 또다시 4개의 요소를 가지는 배열을 생성함.
//     for (var column = 0; column < 4; column++) {
//         arr[row][column] = "[" + row + "," + column + "]"; // 각각의 배열 요소를 생성함.
//         console.log(arr[row][column] + " ");            // 각 배열 요소에 접근함.
//     }
// }

// let arr = new Array(15);
// for(let row = 0; row < 30; row++){
//     arr[row] = new Array(15);
//     for(let j = 0; j < 30; j++){
//         arr[row][j] = "[" + row + "," + j + "]";
//         console.log(arr[row][j] + "");
//     }
// }

while(true){
    for(let row = 0; row < 30; row++){
        for(let j = 0; j < 30; j++){
            console.log(row,j);
            break;
        }
    }
}