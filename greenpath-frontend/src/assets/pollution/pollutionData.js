//water pollution imgs
import microplastic from './microplastic.png';
import floating_trash from './floating_trash.jpg';
import microplastic_sediments from './microplastic_sediments.jpg';
import plastic_to_ocean from './plastic_to_ocean.png';
//air pollution imgs
import air_pollution_awareness from './air_pollution_social_awarness.png';
import acid_rain_impact from './Acid_rain_woods1.jpeg';
import enhaling_smok from './enhaling_pollution.jpg';
import death_data_air from './death_data_air.png';
//ground pollution imgs
import dirty_beach from './dirty_beach.jpg';
//light pollution imgs
import noice_pollution from './noice_pollution.png';
//light pollution imgs
import birds_flying_indark from './Birds_flying_trace.jpg';
import light_pollution from './Light_Pollution_country_versus_city.png';

export const pollutionData = {
    water: {
        title: "💧 Water Pollution",
        color: "from-blue-500 to-cyan-600",
        cardColor: "blue",
        images: [
            { source: microplastic, alt: "microplastic" },
            { source: floating_trash, alt: "polluted water" },
            { source: plastic_to_ocean, alt: "Marine life affected" },
            { source: microplastic_sediments, alt: "microplastic" }
        ],
        sources: [
            "Sewage & untreated solid waste – everything flushed or dumped eventually reaches rivers.",
            "Plastic waste – from bags to bottles to invisible microplastics.",
            "Agriculture runoff – fertilizers, pesticides, insecticides.",
            "Oil spills & industrial discharge – chemicals, heavy metals, toxins."
        ],
        contamination: [
            "Chemical contaminants (heavy metals, nitrates, phosphates)",
            "Biological contaminants (bacteria, viruses, parasites)",
            "Microplastics (the new invisible poison)",
            "Oil & synthetic compounds"
        ],
        diseases: [
            "Diarrheal diseases (cholera, dysentery)",
            "Typhoid",
            "Hepatitis A & E",
            "Hormonal imbalance",
            "Kidney damage",
            "Increased risk of cancers",
            "Microplastic-linked inflammation and potential brain-related disorders"
        ],
        points: [
            "Not even the deepest part of the Earth is safe from us. A plastic trash bag was found floating in the Mariana Trench.",
            "Microplastic is the hidden killer — found in water, salt, fish, vegetables, even in human blood and brain tissue.",
            "Microplastics can cross the blood–brain barrier, increasing risks of inflammation, brain tumors, and cancer."
        ],
        emotionalQuestions: [
            "What will you tell your child when they ask why they can't swim in the rivers you played in as a kid?",
            "Every minute, a truckload of plastic enters our oceans. How many trucks will it take before we stop?",
            "We're drinking the same water we poison. What legacy are we leaving in our own bodies?"
        ]
    },
    air: {
        title: "🌬️ Air Pollution",
        color: "from-gray-500 to-slate-600",
        cardColor: "slate",
        images: [
            { alt: "acid rain", source: acid_rain_impact},
            { alt: "death per year", source: death_data_air},
            { alt: "pollution", source: enhaling_smok},
            { alt: "Business selling oxygen", source: air_pollution_awareness}
        ],
        sources: [
            "Industries & transportation",
            "Agriculture and burning waste",
            "Household sources (cooking smoke, poor ventilation)"
        ],
        contamination: [
            "Primary pollutants – directly emitted: CO₂, CO, SO₂, NOx, PM10, PM2.5",
            "Secondary pollutants – formed by reactions like ground-level ozone (O₃)",
            "PM2.5 is the deadliest — tiny enough to enter bloodstream and brain"
        ],
        diseases: [
            "Stroke & high blood pressure",
            "Asthma, COPD, lung cancer",
            "Coronary heart disease",
            "Birth defects",
            "Dementia and other neurodegenerative diseases",
            "Depression & anxiety linked to long-term exposure"
        ],
        points: [
            "6.7 million deaths every year are linked to air pollution. Some estimates say 8.8 million.",
            "Air pollution is 100X deadlier than wars we fear.",
            "Increases 20–40% risk of stroke and cardiac arrest."
        ],
        emotionalQuestions: [
            "Currently you are paying for clean air, don't let your children pay for their breath.",
            "What would you tell a newborn in Delhi or Beijing when they ask 'Why does breathing hurt?'",
            "In high pollution areas, children have 50% higher cancer risk. What crime did they commit to deserve this?",
            "We wear masks to filter poison from air we should be breathing freely. When did survival become a privilege?"
        ]
    },
    ground: {
        title: "🌱 Ground/Soil Pollution",
        color: "from-amber-600 to-orange-600",
        cardColor: "amber",
        images: [
            { source: dirty_beach, alt: "Contaminated soil" },
            // { source: '', alt: "Plastic in farmland" },
            // { source: '', alt: "Affected crops" }
        ],
        sources: [
            "Microplastics settling into the soil",
            "Mining and extraction activities",
            "Intensive farming – pesticides, chemical fertilizers",
            "Road debris & tire particles",
            "Landfills & improper waste disposal",
            "Nuclear and industrial waste"
        ],
        contamination: [
            "Heavy metals (lead, mercury, arsenic)",
            "Persistent chemicals (PFAS, pesticides)",
            "Radioactive particles",
            "Microplastic fragments"
        ],
        diseases: [
            "Congenital disorders (birth defects)",
            "Neuromuscular blockage",
            "Kidney and liver damage",
            "Hormonal disturbances",
            "Increased cancer risks",
            "Long-term neurological effects"
        ],
        points: [
            "Soil is where life grows — but we are poisoning it faster than it can heal.",
            "Plastic lasts longer than human civilization — some types remain for 500–1000 years.",
            "Microplastics have been found in vegetables, grains, fruits, and salt.",
            "Fireflies and other insects are dying due to soil toxicity, disrupting entire ecosystems."
        ],
        emotionalQuestions: [
            "The soil that grows your food today contains plastic that will outlive your grandchildren. What are we planting?",
            "When earthworms eat microplastics, and we eat the vegetables, who's really consuming the plastic?",
            "We're sacrificing fertile ground for temporary convenience. What will we eat when the soil dies?"
        ]
    },
    noise: {
        title: "🔊 Noise Pollution",
        color: "from-purple-500 to-indigo-600",
        cardColor: "purple",
        images: [
            { type: noice_pollution, alt: "Noisy city traffic" },
            { type: "impact", alt: "Wildlife affected by noise" },
            { type: "health", alt: "Stress from noise" }
        ],
        sources: [
            "Heavy traffic",
            "Construction sites",
            "Industrial machinery",
            "Loudspeakers & urban nightlife",
            "Airports & railways"
        ],
        contamination: [
            "Noise becomes dangerous when it is persistent",
            "Above 85 dB levels",
            "Occurring near sensitive zones (schools, hospitals)"
        ],
        diseases: [
            "High blood pressure",
            "Stress and anxiety",
            "Sleep disorders",
            "Reduced learning ability in children",
            "Heart diseases",
            "Hearing loss and tinnitus"
        ],
        points: [
            "Noise pollution is an invisible stressor — you don't see it, but your body feels it continuously.",
            "Long-term exposure increases risk of hypertension, stroke, and cardiac complications.",
            "Wildlife suffers — many birds can't communicate, hunt, or mate properly due to city noise."
        ],
        emotionalQuestions: [
            "When was the last time you experienced true silence? Can your children even recognize it?",
            "Birds can't find mates because our noise drowns their songs. What love stories are we destroying?",
            "Constant noise is slowly stressing us to death. Why are we accepting this as 'normal' city life?"
        ]
    },
    light: {
        title: "💡 Light Pollution",
        color: "from-yellow-400 to-amber-500",
        cardColor: "yellow",
        images: [
            { source: birds_flying_indark, alt: "birds in night" },
            { source: light_pollution, alt: "lights" },
            // { source: plastic_to_ocean, alt: "Marine life affected" },
            // { source: microplastic_sediments, alt: "microplastic" }
        ],
        sources: [
            "Street lights",
            "Commercial lighting",
            "Residential LEDs",
            "Vehicle lights",
            "Stadiums, billboards, malls"
        ],
        contamination: [
            "Excess light disturbs night-time ecosystems",
            "Sleep cycles (melatonin suppression)",
            "Bird migration patterns",
            "Insect reproduction",
            "Astronomical observations"
        ],
        diseases: [
            "Poor sleep",
            "Depression & anxiety",
            "Headaches",
            "Hormonal imbalance",
            "Increased risk of metabolic diseases"
        ],
        points: [
            "Light pollution is the silent insect killer. Over 40% of insects are declining due to artificial light.",
            "In cities like Rio de Janeiro, birds fly in confused loops because they cannot navigate through excessive skyglow.",
            "More than 1/3rd of humanity cannot see the Milky Way anymore."
        ],
        emotionalQuestions: [
            "40% of insect species are declining because we're afraid of the dark. What ecosystem are we dismantling?",
            "Your grandchildren might never see the Milky Way. What stories of the cosmos will you tell them?",
            "We're losing the night to artificial suns. When did we decide that darkness was our enemy?"
        ]
    }
};