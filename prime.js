
let number=15
let counter=0

for(let i=1; i<=n; i++){
    if(number%i==0){
        counter++
    }
}
if(counter==2){
    return true
}else{
    return false
}

