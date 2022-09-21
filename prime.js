
let n=15
let count=0

for(let i=1; i<=n; i++){
    if(n%i==0){
        count++
    }
}
if(count==1){
    return true
}else{
    return false
}
