function printhNthElement(elements, n) {
    let output = [];
    for (let i = 0; i < elements.length; i += n) {
        output.push(elements[i]);
    }
   return output;
    
}
printN(['5', '20', '31', '4', '20'], 2)