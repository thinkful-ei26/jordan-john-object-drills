// Write a factory function called createCharacter

// that could appropriately build characters from LOTR that have the following attributes:
// ===============================================================================================
// | Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
// -----------------------------------------------------------------------------------------------
// | Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
// -----------------------------------------------------------------------------------------------
// | Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
// -----------------------------------------------------------------------------------------------
// | Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
// -----------------------------------------------------------------------------------------------
// | Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
// -----------------------------------------------------------------------------------------------
// | Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
// -----------------------------------------------------------------------------------------------

function createCharacter(nickName, race, origin, x, y) {

    return {
        nickName: nickName,
        race: race,
        origin: origin,
        x: x,
        y: y,
        describe: function() {
           console.log(`${nickName} is a ${race} from ${origin}.`)
        },
        evaluateFight: function() {
            console.log(`Your opponent takes ${x} damage and you receive ${y} damage`)
        }
    }
}

const gandalfTheGrey = createCharacter('Gandalf', 'Wizard', 'Middle Earth', 10, 6);
gandalfTheGrey.describe();
gandalfTheGrey.evaluateFight();

const bilboBaggins = createCharacter('Bilbo', 'Hobbit', 'The Shire', 2, 1);
bilboBaggins.describe();
bilboBaggins.evaluateFight();

const frodoBaggins = createCharacter('Frodo', 'Hobbit', 'The Shire', 3, 2);
frodoBaggins.describe();
frodoBaggins.evaluateFight();

const aragornSonOfArathorn= createCharacter('Aragorn', 'Man', 'Dunnedain', 6, 8);
aragornSonOfArathorn.describe();
aragornSonOfArathorn.evaluateFight();

const legolas = createCharacter('Legolas', 'Elf', 'Woodland Realm', 8, 5);
legolas.describe();
legolas.evaluateFight();

const arwenUndomiel = createCharacter('Arwen', 'Half-Elf', 'Rivendell', 6, 4);
arwenUndomiel.describe();
arwenUndomiel.evaluateFight();


const characters = [gandalfTheGrey, bilboBaggins, frodoBaggins, aragornSonOfArathorn, legolas, arwenUndomiel]
const findAragorn = characters.find(Aragorn);



