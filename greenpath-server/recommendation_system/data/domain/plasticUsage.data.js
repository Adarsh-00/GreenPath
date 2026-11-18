const plastic = {
    generals: {
        envEffects: ["ocean pollution", "microplastic buildup", "landfill accumulation", "harm to wildlife"],
        personalBenefits: ["save money on single-use items", "reduce clutter", "cleaner living environment"],
        envBenefits: ["less plastic waste in oceans", "conserved petroleum resources", "reduced carbon footprint"],
        generalInterventions: "avoid single-use plastic items whenever possible and choose reusable alternatives, and don't throw plastic into open area and in water"
    },
    sources: {
        bottles: {
            usageLevel: {
                high: {
                    id: "bottles_usage_high",
                    metadata: {
                        score: 0,
                        source: "bottles",
                        domain: "plastic",
                        level: "high"
                    },
                    interventions: "switch to a reusable water bottle and carry it with you daily"
                },
                moderate: {
                    id: "bottles_usage_moderate",
                    metadata: {
                        score: 0,
                        source: "bottles",
                        domain: "plastic",
                        level: "moderate"
                    },
                    interventions: "refill your bottle instead of buying new bottled drinks on the go"
                },
                low: {
                    id: "bottles_usage_low",
                    metadata: {
                        score: 0,
                        source: "bottles",
                        domain: "plastic",
                        level: "low"
                    },
                    interventions: "keep up the great habit of using reusable bottles"
                }
            }
        },
        containers: {
            usageLevel: {
                high: {
                    id: "containers_usage_high",
                    metadata: {
                        score: 0,
                        source: "containers",
                        domain: "plastic",
                        level: "high"
                    },
                    interventions: "replace plastic food containers with glass, metal, or silicone alternatives"
                },
                moderate: {
                    id: "containers_usage_moderate",
                    metadata: {
                        score: 0,
                        source: "plastic",
                        domain: "plastic",
                        level: "moderate"
                    },
                    interventions: "reuse take-out containers multiple times before recycling them"
                },
                low: {
                    id: "containers_usage_low",
                    metadata: {
                        score: 0,
                        source: "containers",
                        domain: "plastic",
                        level: "low"
                    },
                    interventions: "continue maintaining your eco-friendly container storage choices"
                }
            }
        },
        bags: {
            usageLevel: {
                high: {
                    id: "bags_usage_high",
                    metadata: {
                        score: 0,
                        source: "bags",
                        domain: "plastic",
                        level: "high"
                    },
                    interventions: "keep cloth shopping bags handy in your bag or car for every trip"
                },
                moderate: {
                    id: "bags_usage_moderate",
                    metadata: {
                        score: 0,
                        source: "bags",
                        domain: "plastic",
                        level: "moderate"
                    },
                    interventions: "reuse plastic grocery bags multiple times before tossing them"
                },
                low: {
                    id: "bags_usage_low",
                    metadata: {
                        score: 0,
                        source: "bags",
                        domain: "plastic",
                        level: "low"
                    },
                    interventions: "great job avoiding plastic bags during your shopping trips"
                }
            }
        },
        singleUsedPlastic: {
            usageLevel: {
                high: {
                    id: "single_used_plastic_usage_high",
                    metadata: {
                        score: 0,
                        source: "singleUsedPlastic",
                        domain: "plastic",
                        level: "high"
                    },
                    interventions: "say no to plastic straws, cutlery, and cups when ordering food or dining out"
                },
                moderate: {
                    id: "single_used_plastic_usage_moderate",
                    metadata: {
                        score: 0,
                        source: "singleUsedPlastic",
                        domain: "plastic",
                        level: "moderate"
                    },
                    interventions: "opt for package-free products or items with minimal plastic wrapping"
                },
                low: {
                    id: "single_used_plastic_usage_low",
                    metadata: {
                        score: 0,
                        source: "singleUsedPlastic",
                        domain: "plastic",
                        level: "low"
                    },
                    interventions: "keep up the excellent work avoiding unnecessary single-use plastics"
                }
            }
        }
    }
};

export default plastic;