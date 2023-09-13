import { useState, useEffect } from "react";

export function useGenerateRandomGame() {
    const [correctRandomArr, setCorrectRandomArr] = useState();
    const getRandomNumber = (len) => {
        return Math.floor(Math.random() * len);
    }
    useEffect(() => {
        console.log('hola')
        const numbersOps = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const randomArr = []
        for(let i = 0; i < 4; i++) {
            let randomIndex = getRandomNumber(numbersOps.length);
            randomArr.push(numbersOps[randomIndex]);
            numbersOps.splice(randomIndex, 1);
        }
        setCorrectRandomArr(randomArr);
    },[])

    return { correctRandomArr };
}