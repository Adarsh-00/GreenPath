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

export default userState;