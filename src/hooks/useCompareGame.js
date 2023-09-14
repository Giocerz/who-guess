import { useState, useEffect } from "react";
import { compareGameArrays } from "../logic/compareArrays";
import { MAX_ATTEMPS } from "../logic/constants";

export function useCompareGame(actualAttemp, gameAttemps, correctArr) {
    const [guessLeads, setGuessLeads] = useState();
    const [finishGame, setFinishGame] = useState(null)
    useEffect(() => {
        if (gameAttemps === 0) return;
        const leads = compareGameArrays(correctArr, actualAttemp);
        setGuessLeads(leads);
        if(gameAttemps === MAX_ATTEMPS) {
            leads.fames === 4 ? setFinishGame(true) : setFinishGame(false);
        } else {
            if(leads.fames === 4) {
                setFinishGame(true);
            } 
        }
    }, [gameAttemps])

    return { guessLeads, finishGame, setGuessLeads, setFinishGame }
}