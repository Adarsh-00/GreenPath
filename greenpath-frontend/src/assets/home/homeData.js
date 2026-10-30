import deforestation from './Deforestation.jpg';
import plastic_inOcean from './plastic_floating.png';
import airPollution from './air_pollution.jpg';
import energyConsumption from './energy_consumption.png';
import foodWaste from './food_waste.jpg';
import singleUsePlastic from './single_use_plastic.jpg';
import textileWaste from './textile_waste.png';

// Hero slider images data
export const heroSlides = [
    {
        src: deforestation,
        alt: "Deforestation impact",
        caption: "Every minute, forests the size of 40 football fields disappear"
    },
    {
        src: plastic_inOcean,
        alt: "Plastic pollution in oceans",
        caption: "By 2050, there could be more plastic than fish in our oceans"
    },
    {
        src: airPollution,
        alt: "Air pollution in cities",
        caption: "9 out of 10 people worldwide breathe polluted air"
    },
    {
        src: "/assets/hero-4.jpg",
        alt: "Wildlife affected by pollution",
        caption: "1 million species face extinction due to human activities"
    }
];

// Individual impact data
export const impactData = [
    {
        image: singleUsePlastic,
        alt: "Single-use plastic waste",
        title: "The Convenience We Can't Let Go",
        description: "Every plastic bottle, every disposable wrapper, every shopping bag - they outlive us by centuries. While we use them for minutes, they pollute our planet for generations. The average person uses 150 plastic bottles every year, most ending up in landfills or oceans.",
        stats: "150 plastic bottles per person annually"
    },
    {
        image: foodWaste,
        alt: "Food waste",
        title: "The Food We Throw Away",
        description: "One-third of all food produced globally goes to waste while millions go hungry. This wasted food in landfills produces methane, a greenhouse gas 25 times more potent than CO₂. Our plates have become symbols of both abundance and careless consumption.",
        stats: "1.3 billion tons of food wasted yearly"
    },
    {
        image: energyConsumption,
        alt: "Energy consumption",
        title: "The Energy We Leave On",
        description: "Leaving lights on, charging devices endlessly, using energy-inefficient appliances - these small habits collectively create massive carbon footprints. The electricity wasted by idle electronics in the US alone could power millions of homes.",
        stats: "10% of home energy wasted on standby power"
    },
    {
        image: textileWaste,
        alt: "Fast fashion waste",
        title: "The Clothes We Don't Wear",
        description: "Fast fashion has turned clothing into disposable items. The average person buys 60% more clothing than 15 years ago, but keeps each item for half as long. This cycle consumes enormous resources and creates textile mountains in developing countries.",
        stats: "85% of textiles end up in landfills"
    }
];

// Solution data
export const solutionData = [
    {
        image: "/assets/solution-1.jpg",
        alt: "Community cleanup",
        title: "Community Warriors",
        description: "Across the globe, ordinary people are organizing beach cleanups, tree planting drives, and awareness campaigns. From students to seniors, these heroes prove that collective action creates waves of change.",
        action: "Join local environmental groups"
    },
    {
        image: "/assets/solution-2.jpg",
        alt: "Innovative recycling",
        title: "Innovation for Change",
        description: "Scientists and entrepreneurs are developing revolutionary solutions - from ocean-cleaning arrays to plastic-eating enzymes. Technology, when guided by conscience, can heal the wounds it helped create.",
        action: "Support eco-friendly innovations"
    },
    {
        image: "/assets/solution-3.jpg",
        alt: "Sustainable farming",
        title: "Guardians of the Land",
        description: "Farmers are returning to sustainable practices, rejecting chemical pesticides, and embracing organic methods. They're proving that we can feed the world without poisoning it.",
        action: "Choose organic and local produce"
    },
    {
        image: "/assets/solution-4.jpg",
        alt: "Renewable energy projects",
        title: "Energy Revolutionaries",
        description: "Communities are taking power into their own hands - literally. Solar panels, wind turbines, and micro-grids are empowering villages and cities to break free from fossil fuels.",
        action: "Switch to renewable energy sources"
    }
];