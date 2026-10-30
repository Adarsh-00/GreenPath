let obj = {
    id: 'plastic_bottles_reduction_high',
    metadata: {
        score: 73,
        cost: 4.5,
        source: 'bottles',
        domain: 'plastic',
        level: 'high',
        estimatedMonthlySavings: 300,
        assignedAt: "2026-10-27T11:51:18.936Z"
    },
    interventions: [
        'Invest in a high-quality reusable water bottle to drastically cut down on daily plastic waste.'
    ],
    knowledge: {
        envEffects: ["landfill overflow", "microplastic contamination", "water pollution", "soil degradation"],
        personalBenifits: ["save money", "microplastic-free food and water", "decluttered home"],
        envBenifits: ["reduced landfill mass", "cleaner oceans", "protection of marine wildlife"]
    }
};

const strigyfyObj = JSON.stringify(obj);
// console.log(obj)
// console.log(strigyfyObj);
console.log(JSON.stringify(obj, null, 2));