const waterConsumption = {
    generals: {
        envEffects: ["groundwater depletion", "stressed local water supplies", "energy waste from water treatment", "ecosystem disruption"],
        personalBenefits: ["lower utility bills", "conserved home resources", "prevented plumbing damage"],
        envBenefits: ["preserved freshwater reserves", "reduced energy usage for pumping", "protected local aquatic habitats"],
        generalInterventions: "turn off taps while brushing teeth or scrubbing dishes and fix any leaking pipes promptly"
    },
    sources: {
        waterWaste: {
            usageLevel: {
                high: {
                    id: "water_waste_high",
                    metadata: {
                        score: 0,
                        source: "waterWaste",
                        domain: "waterConsumption",
                        level: "high"
                    },
                    interventions: "take shorter showers, fix dripping faucets, and avoid letting taps run continuously while doing chores"
                },
                moderate: {
                    id: "water_waste_moderate",
                    metadata: {
                        score: 0,
                        source: "waterWaste",
                        domain: "waterConsumption",
                        level: "moderate"
                    },
                    interventions: "be mindful of running water during hand washing, rinsing, and general cleaning tasks"
                },
                low: {
                    id: "water_waste_low",
                    metadata: {
                        score: 0,
                        source: "waterWaste",
                        domain: "waterConsumption",
                        level: "low"
                    },
                    interventions: "keep up the fantastic habits of conserving water in your daily routine"
                }
            }
        }
    }
};

export default waterConsumption;