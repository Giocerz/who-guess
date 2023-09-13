import { useState, useEffect } from "react";
import { compareGameArrays } from "../logic/compareArrays";

export function useCompareGame(actualAttemp, gameAttemps, correctArr) {
    const [guessLeads, setGuessLeads] = useState();
    useEffect(() => {
        if (gameAttemps === 0) return;
        setGuessLeads(compareGameArrays(correctArr, actualAttemp))
    }, [gameAttemps])

    return { guessLeads, setGuessLeads }
}