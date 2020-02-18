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

export { createBeatLoop };