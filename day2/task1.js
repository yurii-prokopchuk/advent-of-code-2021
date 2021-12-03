fs = require('fs');

const func = () => {
    fs.readFile('./text.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }
        const obj = {
            forward: 0,
            up: 0,
            down: 0
        };
        data.split('\n').forEach(el => {
            const [key, value] = el.split(' ');
            obj[key] = obj[key] + parseInt(value);
        });
        
        const res = obj.forward * (obj.up - obj.down);
        console.log(res);
    });
}



func();