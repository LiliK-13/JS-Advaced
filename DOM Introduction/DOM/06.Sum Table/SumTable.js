function sumTable() {
    const rows = document.querySelectorAll('table tr');
    let totalSum = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        totalSum += Number(rows[i].lastElementChild.textContent);
    }
    document.getElementById('sum').textContent = totalSum;
}