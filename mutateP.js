// langkah 11
// map mutasi P
var map = [
    16,7,20,21,
    29,12,28,17,
    1,15,23,26,
    5,18,31,10,
    2,8,24,14,
    32,27,3,9,
    19,13,30,6,
    22,11,4,25,
]

// binary map
var bit = [
    0,1,0,1,
    0,1,1,0,
    0,0,0,0,
    1,1,0,1,
    0,0,1,0,
    0,1,0,0,
    0,1,1,1,
    1,1,1,0
]

console.log("mutasi : ["+bit+"] dengan P");


for(let i=0;i<map.length;i++){
    if(i%4==0){
        process.stdout.write(" ")    
    }
    process.stdout.write(bit[map[i]-1]+'')
}