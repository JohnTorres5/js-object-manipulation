const sculptureList = require('./data.js');

const sculptureListLengths = {};

sculptureList.forEach(sculptureList => {
    let sculptureLengths = {};

    for (let key in sculptureList)
    {
        sculptureLengths[key] = sculptureList[key].length 
    }

    Object.assign(sculptureListLengths, sculptureLengths);

    console.log(sculptureListLengths);
});

