// langkah 9
var k1 = [
    0,1,0,1,0,0,
    1,0,0,0,0,0,
    1,0,1,0,0,0,
    0,1,1,0,0,0,
    0,1,0,0,0,0,
    0,0,0,0,0,0,
    1,0,0,0,1,0,
    0,0,0,0,0,0
]

var er0 = [
    1,0,0,1,0,1,
    0,1,0,1,1,0,
    1,0,1,1,0,1,
    0,1,1,0,0,1,
    0,1,0,1,0,1,
    0,1,0,1,1,0,
    1,0,0,1,0,1,    
    0,1,0,1,1,0
]

console.log("=====")
console.log("k1 : 010100 100000 101000 011000 010000 000000 100010 000000")
console.log("er0: 100101 010110 101101 011001 010101 010110 100101 010110")
console.log("=====")
console.log("hasil k1 XoR er0 :")

var hasil = ''
for(let i=0;i<er0.length;i++){
    if(k1[i]!=er0[i]){
        hasil+='1'
        if((i+1)%6==0){
            hasil+=' '
        }
    }else{
        hasil+='0'
        if((i+1)%6==0){
            hasil+=' '
        }
    }

}
console.log(hasil)
