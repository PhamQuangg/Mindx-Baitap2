function numberOneTriangle(n) {
    if (n < 1 || n > 10) {
        alert("Số không hợp lệ. Vui lòng nhập số trong khoảng từ 1 đến 10.");
        return;
    }
    let row = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        row+='\n'
    }
    document.getElementById('display').innerHTML = '<pre class="triangle">' + row + '</pre>';
}

numberOneTriangle(9);