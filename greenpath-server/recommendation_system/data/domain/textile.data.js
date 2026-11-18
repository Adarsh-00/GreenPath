const textile = {
    generals: {
        envEffects: ["microplastic shedding in wash cycles", "high water consumption from crop irrigation", "textile waste in landfills", "chemical dye water pollution"],
        personalBenefits: ["longer-lasting wardrobe", "breathable and skin-friendly clothing", "fewer wardrobe replacements"],
        envBenefits: ["reduced microplastic pollution", "conserved freshwater reserves", "biodegradable clothing footprint"],
        generalInterventions: "buy fewer clothes, mend torn garments, and choose durable and sustainable fabrics"
    },
    sources: {
        material: {
            usageLevel: {
                high: {
                    id: "textile_material_high",
                    metadata: {
                        score: 0,
                        source: "material",
                        domain: "textile",
                        level: "high"
                    },
                    interventions: "reduce purchases of synthetic polymer fabrics like polyester and nylon, and use microplastic-catching laundry bags"
                },
                moderate: {
                    id: "textile_material_moderate",
                    metadata: {
                        score: 0,
                        source: "material",
                        domain: "textile",
                        level: "moderate"
                    },
                    interventions: "opt for organic cotton or recycled blends to minimize water strain and chemical processing impacts"
                },
                low: {
                    id: "textile_material_low",
                    metadata: {
                        score: 0,
                        source: "material",
                        domain: "textile",
                        level: "low"
                    },
                    interventions: "keep supporting sustainable natural fabrics like khadi, hemp, linen, and ethical textiles"
                }
            }
        },
        frequency: {
            usageLevel: {
                high: {
                    id: "textile_frequency_high",
                    metadata: {
                        score: 0,
                        source: "frequency",
                        domain: "textile",
                        level: "high"
                    },
                    interventions: "avoid buying trendy fast fashion frequently and stop throwing away clothes that can still be worn or repaired"
                },
                moderate: {
                    id: "textile_frequency_moderate",
                    metadata: {
                        score: 0,
                        source: "frequency",
                        domain: "textile",
                        level: "moderate"
                    },
                    interventions: "wear your current wardrobe longer and consider swapping or second-hand shopping for new styles"
                },
                low: {
                    id: "textile_frequency_low",
                    metadata: {
                        score: 0,
                        source: "frequency",
                        domain: "textile",
                        level: "low"
                    },
                    interventions: "great job practicing mindful clothing consumption and keeping garments in use for a long time"
                }
            }
        }
    }
};

export default textile;