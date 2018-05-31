// langkah 4
// map binary
var bit = [
    0,0,1,0,1,0,1,1,
    0,1,1,0,1,1,0,0,
    1,0,1,0,1,0,1,1,
    0,0,1,0,1,0,1,1
]
// map mutasi
var map = [
    32,1,2,3,4,5,
    4,5,6,7,8,9,
    8,9,10,11,12,13,
    12,13,14,15,16,17,
    16,17,18,19,20,21,
    20,21,22,23,24,25,
    24,25,26,27,28,29,
    28,29,30,31,32,1
]

process.stdout.write("hasil permutasi r0 :\n")
for (let i = 0; i < map.length; i++) {
    if(i%6==0){
        process.stdout.write(" ")
    }
    process.stdout.write(bit[map[i]-1]+'')
}
