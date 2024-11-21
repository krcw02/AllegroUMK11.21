function palindorm(string){
    let a = string.split("");
    let b = [...a].reverse();
    return  a.every((val,index) => val === b[index]);
}

console.log(palindorm("kajak"))