fs = require('fs');

const func = () => {
    try {
        fs.readFile('./test.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            }

            const array = data.split('\n');
            let summ = 0;
            array.reduce((acc, curr) => {
                if (curr > acc) {
                    summ++;
                }
                return curr;
            });
            console.log(summ);
        });
    } catch(error) {
        console.log(error);
    }
}



func();