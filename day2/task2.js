fs = require('fs');

const func = () => {
    fs.readFile('./text.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }
        const obj = {
            forward: 0,
            aim: 0,
            depth: 0,
        };
        data.split('\n').forEach(el => {
            const [key, value] = el.split(' ');
            console.log(key, value);
            switch (key) {
                case 'forward':
                    obj[key] = obj[key] + parseInt(value);
                    let depth = obj.aim * parseInt(value)
                    obj.depth = obj.depth + depth;
                    break;
                case 'up':
                    obj.aim = obj.aim - parseInt(value);
                    break;
                case 'down':
                    obj.aim = obj.aim + parseInt(value);
                    break
            }
        });

        const res = obj.depth * obj.forward;
        console.log(res);
    });
}



func();