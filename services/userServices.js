const {REQUIRED_FIELDS} = require('../constants');

// Function to map updateFields keys to their database counterparts
module.exports.mapFieldsToDb = (fields) => {
    return Object.keys(fields).reduce((acc, key) => {
        // Use the mapped key if it exists, otherwise use the original key
        const mappedKey = REQUIRED_FIELDS[key] || key;
        acc[mappedKey] = fields[key];
        return acc;
    }, {});
};