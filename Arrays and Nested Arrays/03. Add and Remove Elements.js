function addAndRemoveElements(input) {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        if (command == 'add') {
            output.push(i + 1);
        } else if (command == 'remove') {
            output.pop()
        }
    }
    console.log(output.length > 0 ? output.join('\n') : 'Empty');
}
addAndRemove(['add', 'add', 'add', 'add'])