// 199  A      
// 200  A B    
// 208  A B C  
// 210    B C D
// 200  E   C D
// 207  E F   D
// 240  E F G  
// 269    F G H
// 260      G H
// 263
fs = require('fs');
const func = () => {
    fs.readFile('./test.txt', 'utf8', (err, data) => {
        // const array = [607, 618, 618, 617, 647, 716, 769, 792];
        if (err) {
            console.error(err);
        }

        const array = data.split('\n');
        console.log(array);
        let storedSum = 0;
        let increasedCount = 0;
        array.forEach((el, index, arr) => {
            let summ = 0;
            for (let i = 0; i <= 2; i++) {
                summ += parseInt(arr[index + i]);
            }
            if (storedSum === NaN) {
                console.log(el);
            }

            if (storedSum !== 0) {
                if (summ > storedSum) {
                    console.log('Sum: ' + summ + '/n');
                    console.log('Stored sum: ' + storedSum + '/n');
                    increasedCount++;
                }
            }
            storedSum = summ

        })
        console.log(increasedCount);
    })
}

func();