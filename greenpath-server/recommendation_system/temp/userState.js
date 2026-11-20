const userState = {
    userId: "#firstuser01",
//USER MAY NOT KNOW IF THE SOURCE HE USING IS HIGH OR LOW OR MODERATE LEVEL IN TERMS OF USAGELEVEL
// WE WOULD HAVE TO CALCULATE IT AT FROTEND LEVEL FROM INFORMATION/BEHAVIOUR THEY PROVIDE
// AND EMBED IT AND SEND TO BACKEND.
    behaviours: {
        energyConsumption: {
            ac: { usageLevel: "high", frequency: 8 },
            fridge: { usageLevel: "moderate", frequency: 24 },
            heater: { usageLevel: "low", frequency: 2 }
        },

        plasticUsage: {
            // packaging: { usageLevel: "low", frequency: 1 },
            bottles: { usageLevel: "high", frequency: 5 },
            bags: { usageLevel: "moderate", frequency: 3 },
        },

        transport: {
            bike: {
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
            waterWaste: { usageLevel: "high", reason: "broken pipe"}, //I don't think we should take such high personal and subjective data
            // laundry: { usageLevel: "moderate", frequency: 3 }
        }
    },

    userGoals: ["save_money", "environment", "health"],
    userLocation: "tire2"
}

export default userState;