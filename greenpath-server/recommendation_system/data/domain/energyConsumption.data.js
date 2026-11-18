const energyConsumption = {
    generals: {
        envEffects: ["carbon emission", "high coal mining dependency", "air pollution", "grid overload"],
        personalBenefits: ["save money", "lower utility bills", "longer appliance lifespan"],
        envBenefits: ["lower carbon footprint", "reduced fossil fuel depletion"],
        generalInterventions: "unplug unused electronics and switch off appliances when leaving the house"
    },
    sources: {
        ac: {
            usageLevel: {
                high: {
                    id: "ac_high",
                    metadata: {
                        score: 0,
                        source: "ac",
                        domain: "energyConsumption",
                        level: "high"
                    },
                    interventions: "reduce daily usage slightly or raise the thermostat by a small, comfortable margin"
                },
                moderate: {
                    id: "ac_moderate",
                    metadata: {
                        score: 0,
                        source: "ac",
                        domain: "energyConsumption",
                        level: "moderate"
                    },
                    interventions: "utilize ceiling fans and natural ventilation when weather permits"
                },
                low: {
                    id: "ac_low",
                    metadata: {
                        score: 0,
                        source: "ac",
                        domain: "energyConsumption",
                        level: "low"
                    },
                    interventions: "maintain your current energy-efficient cooling habits"
                }
            }
        },
        fridge: {
            usageLevel: {
                high: {
                    id: "fridge_high",
                    metadata: {
                        score: 0,
                        source: "fridge",
                        domain: "energyConsumption",
                        level: "high"
                    },
                    interventions: "minimize door open duration and ensure proper door sealing"
                },
                moderate: {
                    id: "fridge_moderate",
                    metadata: {
                        score: 0,
                        source: "fridge",
                        domain: "energyConsumption",
                        level: "moderate"
                    },
                    interventions: "optimize internal temperature settings and keep coils reasonably clean"
                },
                low: {
                    id: "fridge_low",
                    metadata: {
                        score: 0,
                        source: "fridge",
                        domain: "energyConsumption",
                        level: "low"
                    },
                    interventions: "maintain your current efficient refrigerator setup"
                }
            }
        },
        heater: {
            usageLevel: {
                high: {
                    id: "heater_high",
                    metadata: {
                        score: 0,
                        source: "heater",
                        domain: "energyConsumption",
                        level: "high"
                    },
                    interventions: "slightly lower your thermostat setting and layer up with comfortable indoor clothing"
                },
                moderate: {
                    id: "heater_moderate",
                    metadata: {
                        score: 0,
                        source: "heater",
                        domain: "energyConsumption",
                        level: "moderate"
                    },
                    interventions: "utilize natural sunlight during the day and manage window coverings efficiently"
                },
                low: {
                    id: "heater_low",
                    metadata: {
                        score: 0,
                        source: "heater",
                        domain: "energyConsumption",
                        level: "low"
                    },
                    interventions: "maintain your efficient heating routines"
                }
            }
        }
    }
};

export default energyConsumption;