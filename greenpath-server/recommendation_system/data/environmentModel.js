import energyConsumption from './domain/energyconsumption.data.js';
import foodWaste from './domain/foodWaste.data.js';
import householdWaste from './domain/householdwaste.data.js';
import plasticUsage from './domain/plasticUsage.data.js';
import textile from './domain/textile.data.js';
import transport from './domain/transport.data.js';
import waterConsumption from './domain/waterconsumption.data.js';

const environmentDomainModel = {
    domains: {
        energyConsumption,
        foodWaste,
        householdWaste,
        plasticUsage,
        textile,
        transport,
        waterConsumption
    }
};

export default environmentDomainModel