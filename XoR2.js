// langkah 9
var l = [
    [
        1,1,0,0,
        1,0,1,0,
        0,0,0,1,
        0,0,1,0,
        1,0,0,1,
        0,1,0,0,
        1,1,1,1,
        1,0,1,0
    ]
]

var fl0k1 = [
    0,0,1,0,
    0,0,1,1,
    1,0,1,0,
    0,1,1,1,
    0,0,1,1,
    0,0,1,1,
    0,0,1,1,
    1,0,0,0
]

console.log("=====")
console.log("l0 : "+l0)
console.log("flok1: "+fl0k1)
console.log("=====")
console.log("hasil l0 XoR fl0k1 :")

var hasil = ''
for(let i=0;i<l0.length;i++){
    if(l0[i]!=fl0k1[i]){
        hasil+='1'
        if((i+1)%4==0){
            hasil+=' '
        }
    }else{
        hasil+='0'
        if((i+1)%4==0){
            hasil+=' '
        }
    }

}
console.log(hasil)
