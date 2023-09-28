let h = 14;
// for (let i = 0; i < h; i++) {
for (let j = 1; j <= h; j++) {
    if( j / 2 !==0 ){
    console.log(" ".repeat((h-j)/2-1) + "*".repeat(j));
 
}
else {
    console.log(" ".repeat((h-j)/2-4) + "*".repeat(j));
}
}
    
    
// let i = 0,
//             j = 0;
//         // Желаемое количество строк
//         let max = 15;
//         let space = "",
//             star = "";

//         while (i < max) {
//             space = "";
//             star = "";
//             for (j = 0; j < max - i; j++) space += " ";
//             for (j = 0; j < 2 * i + 1; j++) star += "*";
//             console.log(space + star);
//             i++;
//         }