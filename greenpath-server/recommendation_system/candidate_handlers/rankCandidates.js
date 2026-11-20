//function to calculate and assing a score value to each candidates
//the score is calculated based on 6 parameters - behavioral, goal, environment, finecial, feasibility and feedback
//huristic (outof 100) - S = 3B + 2G + 1.5En + 1.5Fnc + 0.5F + 1.5Fb (parms x weights)

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