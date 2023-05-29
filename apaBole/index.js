const apaBole = (jumlahAngka) => {
    const data = [];

    for (let i = 1; i <= jumlahAngka; i++) {
        data.push(i);
    }

    const output = data.map((num) => {
        if (num % 3 === 0 && num % 5 === 0) {
            return 'ApaBole';
        } else if (num % 3 === 0) {
            return 'Apa';
        } else if (num % 5 === 0) {
            return 'Bole';
        } else {
            return num.toString();
        }
    });

    return output.join(', ');
}

console.log(apaBole(100));