function createBeatLoop(beatsPerMeasure, subdivisionsPerBeat, beatAccentuation) {
    if (!beatsPerMeasure) {
        return [[[], []]]
    }

    const firstBeat = [[200], []];
    const weakBeat = [[210], []];
    const strongBeat = [[205], []];
    const muteBeat = [[], []]
    var beatLoop = [];

    for (let tick = 0; tick < (beatsPerMeasure * subdivisionsPerBeat); tick++) {
        let accent = beatAccentuation.get(tick)
        switch (accent) {
            case 1: beatLoop[tick] = weakBeat;
                break;
            case 2: beatLoop[tick] = strongBeat;
                break;
            case 3: beatLoop[tick] = firstBeat;
                break;
            case 0: beatLoop[tick] = muteBeat;
                break;
            default: beatLoop[tick] = muteBeat;
        }
    }
    return beatLoop;
}

function createPolyrythmAccents(counterRythm, basicPulse) {
    var accents = new Map()
    accents.set(0, 3)
    for (let tick = 1; tick < (counterRythm * basicPulse); tick++) {
        if ((tick % counterRythm) === 0) {
            accents.set(tick, 2)
        }
        else if ((tick % basicPulse) === 0) {
            accents.set(tick, 1)
        }
        else {
            accents.set(tick, 0)
        }
    }
    return accents
}

export { createBeatLoop, createPolyrythmAccents };