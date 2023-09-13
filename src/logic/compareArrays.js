export const compareGameArrays = (arrCorrect, arrGame) => {
    let fameIndexes = [];
    let fame = 0;
    let point = 0;
    for (let i = 0; i < arrCorrect.length; i++) {
        for (let j = 0; j < arrCorrect.length; j++) {
            if (arrGame[i] === arrCorrect[j]) {
                if (i === j) {
                    fame++;
                    fameIndexes.push(j);
                }
            }
        }
    }
    if (fame !== 4) {
        for (let i = 0; i < arrCorrect.length; i++) {
            if (arrGame.some((value) => arrCorrect[i] === value) && !fameIndexes.some((value) => i === value)) {
                point++;
            }
        }
    }

    return { fames: fame, points: point }
}