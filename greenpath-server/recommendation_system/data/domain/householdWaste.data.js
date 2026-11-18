const householdWaste = {
    generals: {
        envEffects: ["methane gas in landfills", "toxic e-waste leaching", "soil contamination", "resource depletion"],
        personalBenefits: ["cleaner home environment", "recover valuable raw materials", "reduce pest attraction"],
        envBenefits: ["reduced landfill volume", "prevented toxic heavy metal pollution", "promoted recycling"],
        generalInterventions: "properly sort your daily household waste into organic, recyclable, and electronic streams"
    },
    sources: {
        organic: {
            usageLevel: {
                high: {
                    id: "organic_waste_high",
                    metadata: {
                        score: 0,
                        source: "organic",
                        domain: "householdWaste",
                        level: "high"
                    },
                    interventions: "start composting food scraps at home or use a community organic waste drop-off"
                },
                moderate: {
                    id: "organic_waste_moderate",
                    metadata: {
                        score: 0,
                        source: "organic",
                        domain: "householdWaste",
                        level: "moderate"
                    },
                    interventions: "separate food peels and leftovers neatly to keep them ready for composting"
                },
                low: {
                    id: "organic_waste_low",
                    metadata: {
                        score: 0,
                        source: "organic",
                        domain: "householdWaste",
                        level: "low"
                    },
                    interventions: "great job managing and composting your organic waste efficiently"
                }
            }
        },
        electronic: {
            usageLevel: {
                high: {
                    id: "electronic_waste_high",
                    metadata: {
                        score: 0,
                        source: "electronic",
                        domain: "householdWaste",
                        level: "high"
                    },
                    interventions: "collect old and broken gadgets and drop them off at certified e-waste recycling centers"
                },
                moderate: {
                    id: "electronic_waste_moderate",
                    metadata: {
                        score: 0,
                        source: "electronic",
                        domain: "householdWaste",
                        level: "moderate"
                    },
                    interventions: "store unused electronics safely or donate working devices before they become obsolete"
                },
                low: {
                    id: "electronic_waste_low",
                    metadata: {
                        score: 0,
                        source: "electronic",
                        domain: "householdWaste",
                        level: "low"
                    },
                    interventions: "excellent job keeping your electronic waste responsibly recycled and minimized"
                }
            }
        }
    }
};

export default householdWaste;