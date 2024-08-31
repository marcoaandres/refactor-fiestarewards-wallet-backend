
const generateRandomString = (long) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let string = "";

    // concatenamos a la variable el caracter aleatorio
    for (let i = 0; i < long; i++) {
        // obtenemos un numero aleatorio
        let random = Math.floor( Math.random() * characters.length );

        string += characters.charAt(random);        
    }
    return string;
    
}

const createMemberNumber = () => {
    
    const firstPart = generateRandomString(5);
    const strToday = String(Date.now());
    const lastPart = strToday.substring(strToday.length - 7)

    return ( `${firstPart}${lastPart}` );
}


module.exports = { createMemberNumber };