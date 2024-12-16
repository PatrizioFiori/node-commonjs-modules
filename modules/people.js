const createName = require('./names');
const createHobbies = require('./hobbies');

function createPerson() {
    const name = createName('Mario', 'Rossi');
    const hobbies = createHobbies('Videogiochi', 'Film', 'viaggi');

    return {
        fullName: `${name.firstName} ${name.lastName}`,
        hobbies: hobbies.hobbies,
    };
}

module.exports = createPerson;
