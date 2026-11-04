// USER BEHAVIOUR STATE
const userState = {
    userId: "#firstuser01",

    behaviours: {
        energyConsumption: {
            AC: { usageLevel: "high", frequency: 8 },
            fridge: { usageLevel: "moderate", frequency: 24 },
            heater: { usageLevel: "low", frequency: 2 }
        },

        plastic: {
            // packaging: { usageLevel: "low", frequency: 1 },
            bottles: { usageLevel: "high", frequency: 5 },
            bags: { usageLevel: "moderate", frequency: 3 },
        },

        transport: {
            motorcycle: {
                usageLevel: "high",
                trasportMode: "private",
                travelFrequency: "workdays",
                reasonToUse: "work"
            },
            car: {
                usageLevel: "low",
                trasportMode: "private",
                travelFrequency: "weekends",
                reasonToUse: "leisure"
            }
        },

        waterConsumption: {
            shower: { usageLevel: "high", frequency: 2 }, //I don't think we should take such high personal and subjective data
            // laundry: { usageLevel: "moderate", frequency: 3 }
        }
    },

    userGoals: ["save_money", "environment", "health"],
    userLocation: "tire2"
}

// ENVIRONMENT DOMAIN MODEL
// ENVIRONMENT DOMAIN MODEL
const envDomainModel = {
    domains: {
        energyConsumption: {
            generals: {
                envEffects: ["carbon emission", "high coal mining dependency", "air pollution", "grid overload"],
                personalBenifits: ["save money", "lower utility bills", "longer appliance lifespan"],
                envBenifits: ["lower carbon footprint", "reduced fossil fuel depletion"],
                generalInterventions: ["Unplug unused electronics and switch off appliances when leaving the house."]
            },
            sources: {
                AC: {
                    behaviour: {
                        usageLevel: {
                            high: {
                                id: "ac_reduce_usage_high",
                                metadata: {
                                    score: 0,
                                    cost: 1.5,
                                    source: "AC",
                                    domain: "energyConsumption",
                                    level: "high"
                                },
                                interventions: ["Try reducing your AC usage by just one hour a day to see noticeable savings."]
                            },
                            moderate: {
                                id: "ac_reduce_usage_moderate",
                                metadata: {
                                    score: 0,
                                    cost: 0.8,
                                    source: "AC",
                                    domain: "energyConsumption",
                                    level: "moderate"
                                },
                                interventions: ["Limit unnecessary AC use by relying on ceiling fans or natural ventilation when possible."]
                            },
                            low: {
                                id: "ac_reduce_usage_low",
                                metadata: {
                                    score: 0,
                                    cost: 0.2,
                                    source: "AC",
                                    domain: "energyConsumption",
                                    level: "low"
                                },
                                interventions: ["Your AC usage is excellently low. Keep maintaining these energy-efficient habits!"]
                            }
                        }
                    }
                },
                fridge: {
                    behaviour: {
                        usageLevel: {
                            high: {
                                id: "fridge_optimization_high",
                                metadata: {
                                    score: 0,
                                    cost: 0.6,
                                    source: "fridge",
                                    domain: "energyConsumption",
                                    level: "high"
                                },
                                interventions: ["Check your fridge seals and avoid leaving the door open for extended periods."]
                            },
                            moderate: {
                                id: "fridge_optimization_moderate",
                                metadata: {
                                    score: 0,
                                    cost: 0.4,
                                    source: "fridge",
                                    domain: "energyConsumption",
                                    level: "moderate"
                                },
                                interventions: ["Ensure your fridge is set to the optimal temperature (around 4°C/39°F) for maximum efficiency."]
                            },
                            low: {
                                id: "fridge_optimization_low",
                                metadata: {
                                    score: 0,
                                    cost: 0.1,
                                    source: "fridge",
                                    domain: "energyConsumption",
                                    level: "low"
                                },
                                interventions: ["Great job maintaining an energy-efficient refrigerator setup!"]
                            }
                        }
                    }
                },
                heater: {
                    behaviour: {
                        usageLevel: {
                            high: {
                                id: "heater_reduce_usage_high",
                                metadata: {
                                    score: 0,
                                    cost: 2.0,
                                    source: "heater",
                                    domain: "energyConsumption",
                                    level: "high"
                                },
                                interventions: ["Consider lowering your thermostat by just 1-2 degrees and using warmer clothing indoors."]
                            },
                            moderate: {
                                id: "heater_reduce_usage_moderate",
                                metadata: {
                                    score: 0,
                                    cost: 1.0,
                                    source: "heater",
                                    domain: "energyConsumption",
                                    level: "moderate"
                                },
                                interventions: ["Use natural sunlight during the day to warm your home and reduce heater reliance."]
                            },
                            low: {
                                id: "heater_reduce_usage_low",
                                metadata: {
                                    score: 0,
                                    cost: 0.3,
                                    source: "heater",
                                    domain: "energyConsumption",
                                    level: "low"
                                },
                                interventions: ["Your heating habits are very efficient. Keep it up!"]
                            }
                        }
                    }
                }
            }
        },

        plastic: {
            generals: {
                envEffects: ["landfill overflow", "microplastic contamination", "water pollution", "soil degradation"],
                personalBenifits: ["save money", "microplastic-free food and water", "decluttered home"],
                envBenifits: ["reduced landfill mass", "cleaner oceans", "protection of marine wildlife"],
                generalInterventions: ["Dispose of waste responsibly and prioritize reducing, reusing, and recycling in your daily life."]
            },
            sources: {
                bottles: {
                    behaviour: {
                        usageLevel: {
                            high: {
                                id: "plastic_bottles_reduction_high",
                                metadata: {
                                    score: 0,
                                    cost: 4.5,
                                    source: "bottles",
                                    domain: "plastic",
                                    level: "high"
                                },
                                interventions: ["Invest in a high-quality reusable water bottle to drastically cut down on daily plastic waste."]
                            },
                            moderate: {
                                id: "plastic_bottles_reduction_moderate",
                                metadata: {
                                    score: 0,
                                    cost: 2.0,
                                    source: "bottles",
                                    domain: "plastic",
                                    level: "moderate"
                                },
                                interventions: ["Try to avoid purchasing single-use plastic bottles unless absolutely necessary."]
                            },
                            low: {
                                id: "plastic_bottles_reduction_low",
                                metadata: {
                                    score: 0,
                                    cost: 0.5,
                                    source: "bottles",
                                    domain: "plastic",
                                    level: "low"
                                },
                                interventions: ["You rarely use plastic bottles. Keep up the excellent habit!"]
                            }
                        }
                    }
                },
                bags: {
                    behaviour: {
                        usageLevel: {
                            high: {
                                id: "plastic_bags_reduction_high",
                                metadata: {
                                    score: 0,
                                    cost: 1.5,
                                    source: "bags",
                                    domain: "plastic",
                                    level: "high"
                                },
                                interventions: ["Keep reusable shopping bags in your car or backpack so you never forget them."]
                            },
                            moderate: {
                                id: "plastic_bags_reduction_moderate",
                                metadata: {
                                    score: 0,
                                    cost: 0.8,
                                    source: "bags",
                                    domain: "plastic",
                                    level: "moderate"
                                },
                                interventions: ["Refuse single-use plastic bags when buying just a few items at checkout."]
                            },
                            low: {
                                id: "plastic_bags_reduction_low",
                                metadata: {
                                    score: 0,
                                    cost: 0.2,
                                    source: "bags",
                                    domain: "plastic",
                                    level: "low"
                                },
                                interventions: ["You consistently use reusable bags. Fantastic eco-friendly habit!"]
                            }
                        }
                    }
                }
            }
        },

        transport: {
            generals: {
                envEffects: ["greenhouse gas emissions", "noise pollution", "smog creation"],
                personalBenifits: ["improved physical health", "saved fuel costs", "reduced vehicle maintenance"],
                envBenifits: ["cleaner urban air", "reduced traffic congestion", "lower fossil fuel demand"],
                generalInterventions: ["Consider carpooling, using public transit, or walking for short distances whenever feasible."]
            },
            sources: {
                motorcycle: {
                    behaviour: {
                        usageLevel: {
                            high: {
                                id: "transport_motorcycle_reduction_high",
                                metadata: {
                                    score: 0,
                                    cost: 2.5,
                                    source: "motorcycle",
                                    domain: "transport",
                                    level: "high"
                                },
                                interventions: ["Try using public transport for one or two of your regular weekly commutes."]
                            },
                            moderate: {
                                id: "transport_motorcycle_reduction_moderate",
                                metadata: {
                                    score: 0,
                                    cost: 1.2,
                                    source: "motorcycle",
                                    domain: "transport",
                                    level: "moderate"
                                },
                                interventions: ["Consider grouping your errands together to reduce the number of separate trips you take."]
                            },
                            low: {
                                id: "transport_motorcycle_reduction_low",
                                metadata: {
                                    score: 0,
                                    cost: 0.4,
                                    source: "motorcycle",
                                    domain: "transport",
                                    level: "low"
                                },
                                interventions: ["Your motorcycle usage is minimal. Consider walking or cycling for these short trips!"]
                            }
                        }
                    }
                },
                car: {
                    behaviour: {
                        usageLevel: {
                            high: {
                                id: "transport_car_reduction_high",
                                metadata: {
                                    score: 0,
                                    cost: 5.0,
                                    source: "car",
                                    domain: "transport",
                                    level: "high"
                                },
                                interventions: ["Look into carpooling with colleagues or switching to public transit a few days a week."]
                            },
                            moderate: {
                                id: "transport_car_reduction_moderate",
                                metadata: {
                                    score: 0,
                                    cost: 2.5,
                                    source: "car",
                                    domain: "transport",
                                    level: "moderate"
                                },
                                interventions: ["Ensure your tires are properly inflated to maximize fuel efficiency during your drives."]
                            },
                            low: {
                                id: "transport_car_reduction_low",
                                metadata: {
                                    score: 0,
                                    cost: 0.8,
                                    source: "car",
                                    domain: "transport",
                                    level: "low"
                                },
                                interventions: ["You rarely rely on your car. Great job keeping your emissions low!"]
                            }
                        }
                    }
                }
            }
        },

        waterConsumption: {
            generals: {
                envEffects: ["freshwater depletion", "energy waste from water treatment", "habitat degradation"],
                personalBenifits: ["lower water bills", "reduced energy costs for heating"],
                envBenifits: ["conservation of local reservoirs", "sustainable aquatic ecosystems"],
                generalInterventions: ["Turn off the tap while brushing your teeth and fix any household leaks promptly."]
            },
            sources: {
                shower: {
                    behaviour: {
                        usageLevel: {
                            high: {
                                id: "water_shower_reduction_high",
                                metadata: {
                                    score: 0,
                                    cost: 3.5,
                                    source: "shower",
                                    domain: "waterConsumption",
                                    level: "high"
                                },
                                interventions: ["Try shortening your shower time by 2-3 minutes to save dozens of liters of water."]
                            },
                            moderate: {
                                id: "water_shower_reduction_moderate",
                                metadata: {
                                    score: 0,
                                    cost: 1.8,
                                    source: "shower",
                                    domain: "waterConsumption",
                                    level: "moderate"
                                },
                                interventions: ["Consider installing a water-efficient showerhead to easily reduce consumption."]
                            },
                            low: {
                                id: "water_shower_reduction_low",
                                metadata: {
                                    score: 0,
                                    cost: 0.5,
                                    source: "shower",
                                    domain: "waterConsumption",
                                    level: "low"
                                },
                                interventions: ["Your shower water usage is very efficient. Keep it up!"]
                            }
                        }
                    }
                }
            }
        }
    }
};
//Interection History
//interection history is good for updating user's state but does it really matters to be stored permanently in db?
const interactionHistory = [
    {
        challengeId: "ac_reduce_usage_high",
        source: "AC",
        domain: "energyConsumption",
        assignedAt: "2026-10-15",
        outcome: "completed",
        feedback: {
            difficulty: "high",
            relevance: "high",
            willingToContinue: true
        }
    },
    {
        challengeId: "plastic_bottles_reduction_high",
        source: "bottles",
        domain: "plastic",
        assignedAt: "2026-10-01",
        outcome: "partially_completed",
        feedback: {
            difficulty: "easy",
            relevance: "high",
            willingToContinue: true
        }
    }
];

//savings from each sources on different usage level
const savingAssumptions = {
    currency: "INR",
    period: "month",

    // Illustrative estimates only; revise after testing.
    monthlySavings: {
        AC: { high: 300, moderate: 150, low: 0 },
        fridge: { high: 100, moderate: 50, low: 0 },
        heater: { high: 200, moderate: 100, low: 0 },
        bottles: { high: 300, moderate: 150, low: 0 },
        packaging: { high: 150, moderate: 75, low: 0 },
        bags: { high: 100, moderate: 50, low: 0 },
        motorcycle: { high: 300, moderate: 150, low: 0 },
        car: { high: 600, moderate: 300, low: 0 },
        shower: { high: 50, moderate: 25, low: 0 },
        laundry: { high: 50, moderate: 25, low: 0 }
    }
};

// iterDomainModel(envDomainModel);
//need loop
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

        let candidate = getBehaviour.behaviour.usageLevel[usageLevel[0]]; //match the usageLevel. 0 because we know the first value ie high is stored at 1th index

        candidate = rankCandidates(candidate, userState, interactionHistory);

        rankedCandidates.push(candidate); //add objects into an array

    }
}

rankedCandidates.sort((a, b) => b.metadata.score - a.metadata.score)
console.log(rankedCandidates.length);

let selectedCandidates = selectCandidates(rankedCandidates, interactionHistory);

selectedCandidates = selectedCandidates.map(candidate => {
    const domainKnowledge = envDomainModel.domains[candidate.metadata.domain].generals;
    return {
        ...candidate,
        knowledge: {
            envEffects: domainKnowledge.envEffects,
            personalBenifits: domainKnowledge.personalBenifits,
            envBenifits: domainKnowledge.envBenifits
        }
    }
});
console.log(selectedCandidates);



// function to rank candidates

function rankCandidates(candidate, userData, prevActionData) {
    const metadata = candidate.metadata;

    //value 1 get financial score for the candidate - Estimate potential monthly savings.
    const monthlySavings = savingAssumptions.monthlySavings[metadata.source]?.[metadata.level] ?? 0; //using optional chaining and nullish coalescing operator to hand undefined or null and prevent app from crashing.

    // Convert rupee savings to a bounded score from 0 to 10.
    function getFinancialScore(amount) {
        if (amount <= 0) return 0;
        if (amount < 50) return 1;
        if (amount < 100) return 2;
        if (amount < 200) return 4;
        if (amount < 400) return 6;
        if (amount < 700) return 8;
        return 10;
    }

    const financialScore = getFinancialScore(monthlySavings);

    //Value 2 Behavioral opportunity - higher usage suggests more opportunity.
    const usageLevelScores = { high: 9, moderate: 6, low: 2 };

    const behavioralScore = usageLevelScores[metadata.level] ?? 0;

    //VALUE 3 Goal Score - goal alignment
    const goalScores = {
        energyConsumption: { save_money: 9, environment: 9, health: 5 },
        plastic: { save_money: 8, environment: 9, health: 9 },
        transport: { save_money: 9, environment: 9, health: 7 },
        waterConsumption: { save_money: 6, environment: 9, health: 5 }
    };

    const domainGoal = goalScores[metadata.domain] ?? {};
    const matchingGoals = userData.userGoals
        .map(goal => domainGoal[goal])
        .filter(score => score !== undefined);

    const goalScore = matchingGoals.lenght
        ? matchingGoals.reduce((sum, score) => sum + score, 0) / matchingGoals.lenght : 5 // Neutral when we don't know enough.


    // VALUE 4 Environmental benefit: initial heuristic by domain.
    const environmentalScores = {
        energyConsumption: 8,
        plastic: 7,
        transport: 9,
        waterConsumption: 8
    };

    const environmentScore = environmentalScores[metadata.domain] ?? 5;

    //VALUE 5 Feasibility: provisional default.
    const feasibilityScores = {
        high: 6,
        moderate: 8,
        low: 9
    };

    const feasibilityScore = feasibilityScores[metadata.level] ?? 5;

    // VALUE 6 Personal feedback from the most recent interaction (interaction history).
    const candidateHistory = prevActionData.filter(
        action => action.source === candidate.metadata.source
    );

    // Assumes history is stored oldest to newest.
    const previous = candidateHistory[candidateHistory.length - 1];

    // console.log(previous);

    let feedbackScore = 5; // Neutral when no feedback exists.

    if (previous?.feedback) { //<- optional chaining syntax, prevent app crashing if previous is null/undefined
        const feedback = previous.feedback;
        const signals = [];

        if (feedback.relevance === "high") signals.push(9);
        else if (feedback.relevance === "low") signals.push(2);

        if (feedback.difficulty === "easy") signals.push(9);
        else if (feedback.difficulty === "medium") signals.push(6);
        else if (feedback.difficulty === "hard") signals.push(3);

        if (feedback.willingToContinue === true) signals.push(9);
        else if (feedback.willingToContinue === false) signals.push(2);

        if (signals.length) {
            feedbackScore = signals.reduce((sum, score) => sum + score, 0) / signals.length;
        }
    }
    // console.log(feedbackScore);
    //SCORE CALC Weighted sum - each factor is from 0 to 10.
    //S = 3B + 2G + 1.5En + 1.5Fnc + 0.5F + 1.5Fb
    const score =
        behavioralScore * 3 +
        goalScore * 2 +
        environmentScore * 1.5 +
        financialScore * 1.5 +
        feasibilityScore * 0.5 +
        feedbackScore * 1.5;

    return {
        ...candidate,
        metadata: {
            ...metadata,
            estimatedMonthlySavings: monthlySavings,
            score: Number(score.toFixed(2))
        }
    };
}

//*****************************************************************************/

function selectCandidates(rankedCandidates, interactionHistory) {
    if (rankedCandidates.length < 3) {
        return [...rankedCandidates];
    }

    const candidatesFilteredByDate = [];

    // Calculate the date 21 days ago.
    const comparisonDate = new Date();
    comparisonDate.setDate(comparisonDate.getDate() - 21);

    // Check each candidate only once.
    for (const candidate of rankedCandidates) {
        let recentlySuggested = false;

        for (const interaction of interactionHistory) {
            if (interaction.source === candidate.metadata.source) {
                const lastDateAssigned = new Date(interaction.assignedAt);

                if (lastDateAssigned > comparisonDate) {
                    recentlySuggested = true;
                    break;
                }
            }
        }

        if (!recentlySuggested) {
            candidatesFilteredByDate.push(candidate);
        }
    }
    // console.log(candidatesFilteredByDate);
    // console.log(candidatesFilteredByDate.length);

    const selectedCandidates = candidatesFilteredByDate.slice(0, 3);
    const todayDate = new Date();
    for (let candidate of selectedCandidates) {
        candidate.metadata.assignedAt = todayDate;
    }

    return selectedCandidates;
}

// console.log(selectCandidates(rankedCandidates, interactionHistory));

//ATTENTION           !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// we did a mistake in our ranking related with interaction history
// we are checking history though id that is inefficient because the id might not be the same after completing the challenge ex- id: "transport_car_reduction_moderate", id: "transport_car_reduction_low" etc
// instead we should search by source and pick the latest interection.feedback for better recommendation

//possible improvments - fix result (hard limit 3) -> then how would the model know which recommendation it already suggested and which are filtered previously, interactionHistory?
//we would have to use user preferences, occupation and peprsonal in task selection for better intelligence and personalization for example if user goal include money then increase weight for task that save higher money but how do we know which task save how much money? we need number.