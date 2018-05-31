function hex2bin(hex)
{
    var alpha = {
        0 : '0000',
        1 : '0001',
        2 : '0010',
        3 : '0011',
        4 : '0100',
        5 : '0101',
        6 : '0110',
        7 : '0111',
        8 : '1000',
        9 : '1001',
        a : '1010',
        b : '1011',
        c : '1100',
        d : '1101',
        e : '1110',
        f : '1111'
    }
    // return alpha[0];
    var val = ''
    for(let i=1;i<=hex.length;i++){
        val+=alpha[hex[i-1]];
        if(i%2==0){
            val+='\n'
        }
    }
    return val;
}

// langkah 1
// jadikan P(hexa) -> P(biner)
console.log("langkah 1")
console.log("convert ["+['a','e','d','e','3','0','a','b','0','5','f','f','2','0','1','8']+"] to binary")
console.log(hex2bin(['a','e','d','e','3','0','a','b','0','5','f','f','2','0','1','8']))

// langkah 3
// jadikan K(hexa) -> K(biner)
console.log("langkah 3")
console.log("convert ["+['a','1','1','2','0','1','5','0','9','1','0','1','2','0','1','8']+"] to binary")
console.log(hex2bin(['a','1','1','2','0','1','5','0','9','1','0','1','2','0','1','8']))

