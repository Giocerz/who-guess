const getRandomNumber = (len) => {
    return Math.floor(Math.random() * len);
}

export function generateRandomGame() {
    const numbersOps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const randomArr = []
    for (let i = 0; i < 4; i++) {
        let randomIndex = getRandomNumber(numbersOps.length);
        randomArr.push(numbersOps[randomIndex]);
        numbersOps.splice(randomIndex, 1);
    }

    return randomArr;
}