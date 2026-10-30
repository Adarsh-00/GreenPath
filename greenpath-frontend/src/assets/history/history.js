import Hadean_Earth from './Hadean_Earth.png';
import surface_hadean from './surface_hadeanearth.png';
import archean_earth from './archean_earth.jpg';
import archean_surface from './archean_surface.png';
import protozoic_info from './Proterozoic_collage.png';
import gondawana from './gondwana_south.png';
import paleozoic_earth from './paleozoic_earth.png';
import trilobites from './trilobites.jpg';
import devonianscene_green from './devonianscene_green.jpg'
import dinorsurs from './dinosaurs_mesozoic.jpg';
import mammals from './early_mammals.jpg';
import flying_raptiles from './flying_reptiles.jpg';
import cenozoic_mammals from './Cenozoic_era.png';
import early_humans from './early_humans.jpg';
import humans from './humans_settlement.png'
import city from './modern_city.png';
import pollution from './pollution.png';
import capilelism from './capilelism.png';
import trash_mountain from './trash_mountains.jpeg';

export const erasData = [
    {
        id: 1,
        name: "The Hadean Era",
        period: "4.6–4.0 billion years ago",
        color: "from-red-600 to-orange-500",
        images: [
            { src: Hadean_Earth, alt: "Molten Earth formation" },
            { src: surface_hadean, alt: "Early volcanic activity" },
        ],
        description: "This is how our home began — not as the blue planet we love today, but as a molten world of fire. A place where oceans were steam, the sky was toxic, and the ground itself was liquid rock. It's impossible to imagine intelligence existing here. Even surviving for a single second would be impossible. Yet this was the first chapter of our home — a violent beginning for a peaceful future."
    },
    {
        id: 2,
        name: "The Archean Era",
        period: "4.0–2.5 billion years ago",
        color: "from-blue-600 to-cyan-500",
        images: [
            { src:archean_earth, alt: "Earth from Space during Archean Era" },
            { src: archean_surface, alt: "Ocean formation with early microbial life" }
        ],
        description: "Earth slowly cooled. Water vapor condensed and the first oceans formed — dark, hot, and full of dissolved minerals. In these oceans, something extraordinary happened: life appeared. Not animals, not plants, not anything we can see. Just tiny microscopic cells — the first living beings. They couldn't move, couldn't think, couldn't see. But they started something no one expected: they began changing the planet."
    },
    {
        id: 3,
        name: "The Proterozoic Era",
        period: "2.5 billion–541 million years ago",
        color: "from-green-600 to-emerald-500",
        images: [
            { src: gondawana, alt: "Gondwana supercontinent, south pole" },
            { src: protozoic_info, alt: "First complex cells" }
        ],
        description: "These tiny life forms learned a trick that would change everything: photosynthesis. They released oxygen — slowly, silently, for millions of years. The sky turned blue. The oceans changed color. Life began breathing for the first time. And then came one of the greatest revolutions in history: cells joined together to form complex organisms. The first multicellular life… The first hint that someday, intelligence would walk the planet."
    },
    {
        id: 4,
        name: "The Paleozoic Era",
        period: "541–252 million years ago",
        color: "from-purple-600 to-pink-500",
        images: [
            { src: paleozoic_earth, alt: "Cambrian explosion life" },
            { src: devonianscene_green, alt: "Early land plants" },
            { src: trilobites, alt: "Trilobites and sea creatures" }
        ],
        description: "Life exploded. Literally. Scientists call it the Cambrian Explosion — the moment when the oceans suddenly filled with strange and beautiful creatures. This was the era of trilobites, giant sea scorpions, the first fish, and eventually the first plants on land. Earth was becoming green. Forests started spreading. Land animals followed. The world was transforming into something alive. But nature is never gentle — this era ended with the largest mass extinction ever, wiping out nearly 90% of life. Still, life found a way."
    },
    {
        id: 5,
        name: "The Mesozoic Era",
        period: "252–66 million years ago",
        color: "from-amber-600 to-yellow-500",
        images: [
            { src: dinorsurs, alt: "Dinosaurs roaming" },
            { src: mammals, alt: "Mammals during mesozoic era" },
            { src: flying_raptiles, alt: "flying reptiles" }
        ],
        description: "The age of dinosaurs. The era everyone knows, but only a small part of Earth's long story. This is when the first mammals appeared, the first birds took flight, flowering plants evolved, and continents began shaping into what we recognize today. Dinosaurs ruled for over 160 million years — longer than humans can even imagine. But a single asteroid ended their reign. A reminder that nothing, not even giants, are permanent."
    },
    {
        id: 6,
        name: "The Cenozoic Era",
        period: "66 million years ago–present",
        color: "from-teal-600 to-blue-500",
        images: [
            { src: cenozoic_mammals, alt: "Mammal evolution" },
            { src: early_humans, alt: "Early human ancestors" },
            { src: humans, alt: "Human civilization" }
        ],
        description: "After the dinosaurs fell, Earth entered the age of mammals. Tiny furry creatures slowly evolved into countless forms — some becoming whales, some elephants, some apes. And from those apes, something entirely new emerged: a species with memory, imagination, language, curiosity… humans. We learned to build tools. We painted caves. We created music, stories, and civilizations. Earth, once a burning molten rock, now had a species capable of looking back at the stars and asking: 'Where did we come from?'"
    },
    {
        id: 7,
        name: "The Anthropocene",
        period: "The Human Age",
        color: "from-gray-600 to-slate-500",
        images: [
            { src: city, alt: "Modern cities and technology" },
            { src: pollution, alt: "Environmental impact" },
            { src: capilelism, alt: "you are paying for clean air and water, why?" },
            { src: trash_mountain, alt: "The mountain of trash" }
        ],
        description: "This chapter is still being written. For the first time in 4.5 billion years, the destiny of an entire planet is shaped by one species. We changed rivers. We lit up the night sky. We built machines, cities, and technology. But we also warmed the atmosphere, polluted the oceans, destroyed forests, and pushed species to extinction. The same intelligence that once admired the Earth… is now threatening it. Yet, the story is not over. We still have time to decide how this chapter ends."
    }
];