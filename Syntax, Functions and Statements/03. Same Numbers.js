function sameNumber(num){
    let same = true;
    let sum = 0;
    let splitted = String(num).split('');
    let first = splitted[0];
    for(let i = 0; i < splitted.length; i++){
        if (splitted[i] != first){
            same = false;
        }
        sum += Number(splitted[i]);
    }
    console.log(same)
    console.log(sum)
}
sameNumber(2222222)
//sameNumber(1234)