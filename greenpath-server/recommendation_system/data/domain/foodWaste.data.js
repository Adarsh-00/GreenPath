const food = {
    generals: {
        envEffects: ["methane emissions in landfills", "wasted agricultural water", "high carbon footprint from production", "unnecessary land clearing"],
        personalBenefits: ["save money on groceries", "reduce household food budget", "better meal planning habits"],
        envBenefits: ["reduced landfill waste", "lower greenhouse gas emissions", "conserved natural resources"],
        generalInterventions: "stop throwing away good food and instead share extra meals with people in need or local animal care centers"
    },
    sources: {
        foodWaste: {
            usageLevel: {
                high: {
                    id: "food_waste_high",
                    metadata: {
                        score: 0,
                        source: "foodWaste",
                        domain: "food",
                        level: "high"
                    },
                    interventions: "buy only what you need and cook smaller portions to avoid throwing leftovers away"
                },
                moderate: {
                    id: "food_waste_moderate",
                    metadata: {
                        score: 0,
                        source: "foodWaste",
                        domain: "food",
                        level: "moderate"
                    },
                    interventions: "store food properly to keep it fresh longer and use up older items first"
                },
                low: {
                    id: "food_waste_low",
                    metadata: {
                        score: 0,
                        source: "foodWaste",
                        domain: "food",
                        level: "low"
                    },
                    interventions: "keep up the great work minimizing food waste in your daily routine"
                }
            }
        }
    }
};

export default food;