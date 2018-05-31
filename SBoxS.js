// langkah 10
// get head map
function getHead(map){
    return map[0]
}

// get tail map
function getTail(map) {
    return map[map.length-1]
}

// get 4 digit hexadec
function getHexa(map){
    var newMap = ''
    for(let j=1;j<map.length-1;j++){
        newMap+=(map[j])
    }
    return newMap;
}

var sBox1 = [
        1,1,0,0,0,1
    ],sBox2 = [
        1,1,0,1,1,0
    ],sBox3 = [
        0,0,0,1,0,1
    ],sBox4 = [
        0,0,0,0,0,1
    ],sBox5 = [
        0,0,0,1,0,1
    ],sBox6 = [
        0,1,0,1,1,0
    ],sBox7 = [
        0,0,0,1,1,1
    ],sBox8 = [
        0,1,0,1,1,0
    ]

var hex2bin = {
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
    10 : '1010',
    11 : '1011',
    12 : '1100',
    13 : '1101',
    14 : '1110',
    15 : '1111'
}

var bin2hex = {
    '0001':1,
    '0010':2,
    '0000':0,
    '0011':3,
    '0100':4,
    '0101':5,
    '0110':6,
    '0111':7,
    '1000':8,
    '1001':9,
    '1010':10,
    '1011':11,
    '1100':12,
    '1101':13,
    '1110':14,
    '1111':15
}


function getValSBox(sBox,S){
    
    for(let i=0;i<S.length;i++){
        process.stdout.write("s"+(i+1)+"(B)"+(i+1)+"\n")
        var tail = getTail(sBox[i])
        var head = getHead(sBox[i])
        var hex = getHexa(sBox[i])
        var col = head+""+tail
        
        // console.log(hex)
        // console.log(col)
        // console.log(S[i][col][bin2hex[hex]]);
        
        var getDec = S[i][col][bin2hex[hex]]
        console.log(hex2bin[getDec]+"\n");

        // console.log(tail)
        
    }
    
}

var s1 = {
    '00':[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],
    '01':[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],
    '10':[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],
    '11':[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]
},s2 = {
    '00':[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],
    '01':[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],
    '10':[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],
    '11':[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]
},s3 = {
    '00':[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8,],
    '01':[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],
    '10':[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],
    '11':[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]
},s4 = {
    '00':[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],
    '01':[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],
    '10':[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],
    '11':[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]
},s5 = {
    '00':[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],
    '01':[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,16],
    '10':[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],
    '11':[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]
},s6 = {
    '00':[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],
    '01':[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],
    '10':[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],
    '11':[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]
},s7 = {
    '00':[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],
    '01':[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],
    '10':[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],
    '11':[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]
},s8 = {
    '00':[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],
    '01':[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],
    '10':[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],
    '11':[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]
}

getValSBox(
    [
        sBox1,sBox2,sBox3,sBox4,sBox5,sBox6,sBox7,sBox8
    ],
    [
        s1,s2,s3,s4,s5,s6,s7,s8
    ]
)
// console.log(getTail(sBox3));

