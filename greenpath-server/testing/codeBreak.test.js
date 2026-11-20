import { generateCandidate } from "../recommendation_system/candidate_handlers/generateCandidates.js";
import userState from "../recommendation_system/temp/userState.js";
import environmentDomainModel from "../recommendation_system/data/environmentModel.js";

import assert from 'node:assert/strict';

//Test for generateCandidate() function
const expectedCandidateLength = 8 // Expected number of candidates

const candidates = generateCandidate(userState, environmentDomainModel) //Execute candidate generation

// Test 1: Check output type
assert.ok(
    Array.isArray(candidates),
    'Candidate generation should return an array'
);
// Test 2: Check array length
assert.equal(
    candidates.length,
    expectedCandidateLength,
    `Expected ${expectedCandidateLength} candidates, received ${candidates.length}`
);

console.log('Candidate generation tests passed!');