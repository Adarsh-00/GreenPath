const transport = {
    generals: {
        envEffects: ["carbon dioxide emissions", "urban air pollution and smog", "fossil fuel depletion", "traffic congestion"],
        personalBenefits: ["save money on fuel", "lower vehicle maintenance costs", "better physical health from walking or cycling"],
        envBenefits: ["cleaner local air quality", "reduced greenhouse gas emissions", "less noise pollution"],
        generalInterventions: "combine multiple errands into a single trip and choose walking, cycling, or public transit whenever possible"
    },
    sources: {
        car: {
            usageLevel: {
                high: {
                    id: "car_usage_high",
                    metadata: {
                        score: 0,
                        source: "car",
                        domain: "transport",
                        level: "high"
                    },
                    interventions: "replace solo daily fuel car commutes with public transit, carpooling, or electric options"
                },
                moderate: {
                    id: "car_usage_moderate",
                    metadata: {
                        score: 0,
                        source: "car",
                        domain: "transport",
                        level: "moderate"
                    },
                    interventions: "avoid unnecessary short trips, turn off the engine at idle, and keep tires properly inflated"
                },
                low: {
                    id: "car_usage_low",
                    metadata: {
                        score: 0,
                        source: "car",
                        domain: "transport",
                        level: "low"
                    },
                    interventions: "keep up the habit of minimizing fossil fuel vehicle use and prioritizing efficient travel"
                }
            }
        },
        bike: {
            usageLevel: {
                high: {
                    id: "bike_usage_high",
                    metadata: {
                        score: 0,
                        source: "bike",
                        domain: "transport",
                        level: "high"
                    },
                    interventions: "reduce frequent fuel-powered motorcycle use by combining trips or switching to cycling"
                },
                moderate: {
                    id: "bike_usage_moderate",
                    metadata: {
                        score: 0,
                        source: "bike",
                        domain: "transport",
                        level: "moderate"
                    },
                    interventions: "service your two-wheeler regularly for clean fuel combustion and avoid unnecessary idling"
                },
                low: {
                    id: "bike_usage_low",
                    metadata: {
                        score: 0,
                        source: "bike",
                        domain: "transport",
                        level: "low"
                    },
                    interventions: "maintain your mindful riding habits and low daily fuel consumption"
                }
            }
        },
        electric: {
            usageLevel: {
                high: {
                    id: "electric_usage_high",
                    metadata: {
                        score: 0,
                        source: "electric",
                        domain: "transport",
                        level: "high"
                    },
                    interventions: "great choice using an electric vehicle, but try to combine trips or reduce heavy daily driving to save on power"
                },
                moderate: {
                    id: "electric_usage_moderate",
                    metadata: {
                        score: 0,
                        source: "electric",
                        domain: "transport",
                        level: "moderate"
                    },
                    interventions: "awesome job driving electric; try to unplug once fully charged and practice smooth acceleration to preserve battery life"
                },
                low: {
                    id: "electric_usage_low",
                    metadata: {
                        score: 0,
                        source: "electric",
                        domain: "transport",
                        level: "low"
                    },
                    interventions: "fantastic job keeping your electric vehicle usage low and sticking to sustainable travel habits"
                }
            }
        }
    }
};

export default transport;