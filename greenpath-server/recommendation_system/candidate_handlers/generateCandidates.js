//function that take userState and envDomainModel
//match sources and usagelevel from userState to envdomainmodel
//for each candidate calling another function rankCandidates() to assign a score for each candiate (need to import rankCandidates()).
//return the scored candidates

export function generateCandidate(userState, envDomainModel) {
    const rankedCandidates = [];

    for (let domain in userState.behaviours) {

        const userSourceObj = userState.behaviours[domain]; //{ AC: { usageLevel: 'high' }, {}, ... } user behaviour source
        const envMatchedDomain = envDomainModel.domains[domain]; //get domain matched with user behaviour

        const sourcesList = Object.keys(userSourceObj); //sources from user's state ['AC', ...]

        for (let source of sourcesList) {

            let getBehaviour = envMatchedDomain.sources[source]; //get the behaviour obj of user source

            //skip user's behaviour that don't exist in the env domain model.
            if (!getBehaviour) {
                continue;
            }

            let usageLevel = Object.values(userSourceObj[source]) //get the values of sources ['high', ...]

            if (usageLevel[0] == 'Optimized') continue; //skip the optimized source and move to next one in parent loop.

            let candidate = getBehaviour.usageLevel[usageLevel[0]]; //match the usageLevel. 0 because we know the first value ie high is stored at 1th index

            // candidate = rankCandidates(candidate, userState, interactionHistory);

            rankedCandidates.push(candidate); //add objects into an array
        }
    }

    return rankedCandidates;
}

/***************NOTE*******************/
//just copy pasted from testingModules.js, removed .behaviour from envmodel at line 29 that's it
//commented rankCandidates function so that we can test raw candidate generation
//needed checking, updation and testing.