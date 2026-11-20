import {generateCandidate} from '../candidate_handlers/generateCandidates.js';
import environmentDomainModel from '../data/environmentModel.js';
import userState from './userState.js';

const candidates = generateCandidate(userState, environmentDomainModel);
console.log(candidates)
console.log("\n" + candidates.length)
// const tempData = environmentDomainModel.domains.