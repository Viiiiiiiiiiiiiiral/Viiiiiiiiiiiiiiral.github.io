// Cau 1

function cauMot(){
    let n1 = document.getElementById("n1").value;
    console.log(n1);
    for(let i = 1; i <= n1; i++){
        console.log(i);
    }
}

// Cau 2

function cauHai(){
    let n2 = document.getElementById("n2").value;
    console.log(n2);
    for(let i = 1; i <= n2; i++){
        if( i % 2 == 1){
            console.log(i);
        }
    }
}

// Cau 3

function cauBa(){
    let n3 = document.getElementById("n3").value;
    console.log(n3);
    for(let i = 1; i <= n3; i++){
        if( i % 2 == 0){
            console.log(i);
        }
        
    }
}
//  Cau 4

function cauBon(){
    let n4 = document.getElementById("n4").value;
    console.log(n4);
    for(let i = 1; i <= n4; i++){
        let count = 0;
        for(let j = 2; j <= sqrt(i); i++){
            if(i%n == 0){
                count++;
            }
            if(count > 2){
                console.log(i);
            }
        }
    }
}
// Cau 5

function cauNam(){
    let n5 = document.getElementById("n5").value;
    for(let i = 1; i <= n5; i++){
        tong += i;
        console.log(tong);
    }
}

// Cau 6

function cauSau(){
    let n6 = document.getElementById("n6").value;
    for(let i = 1; i <= n6; i++){
        tong += i * i;
        console.log(tong);
    }
}

// Cau 7

function cauBay(){
    let n7 = document.getElementById("n7").value;
    for(let i = 1; i <= n7; i++){
        if( i % 2 == 1){
            tong += i;
            console.log(tong);
        }
    }
}

// Cau 8

let ketqua8 = document.getElementById("ketqua8");
let check = false;
let arr = [];
function cauTam(){
    let n8 = document.getElementById("n8").value;
    n8 = n8.split("", 10);
    console.log(n8);
    for(let i = 0; i <= n8.length-1; i++){
        console.log(n8[i]);
        if( n8[i] % 2 == 1){
            console.log('So du la '+n8[i]);
            arr8.push(soN8[i]);
            console.log("Mang sau duyet "+arr);
            check = true;
        }else if( n8[i] % 2 == 0){
            check = false;
            break;
        }
    }
    console.log(check);
}