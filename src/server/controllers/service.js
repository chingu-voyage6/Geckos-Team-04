const faker = require('mongoose-fakery');
const Services = require('../models/Service');
const { serviceList } = require('./_serviceData');

const urlify = name => name.toLowerCase().replace(/ /g, '-');

/**
 * This is a stub function (for now)
 * Given a serviceId and locationId, get the number of
 * pros that are presently located in that provide that service.
 * Assign a popularity score between 1 and 5 (most popular).
 */
const calculatePopularityIndex = (serviceId, locationId) => Math.floor(Math.random() * 5);

const generateServiceData = itemList => {
  const entries = [];
  itemList.forEach((entry, index) => {
    entries.push(
      Object.assign(entry, {
        pros: Math.floor(Math.random() * 20000),
        url: urlify(entry.name),
        popularity: calculatePopularityIndex(index, index),
      })
    );
  });
  return entries;
};

/*
 * This is a stub function (for now)
 * Given a locationId, return an array of the most popular services 
 * in that location. If no locationId is provided, return the most
 * popular services in general
 */
const popularServices = locationId => {
  const popular = [];
  for (let i = 0; i < 5; i += 1) {
    const index = Math.floor(Math.random() * serviceList.length);
    popular.push(serviceList[index]);
  }
  return generateServiceData(popular);
};

const services = generateServiceData(serviceList);
const servicesFaker = faker.fake('services', Services, services);

module.exports = {
  services,
  servicesFaker,
  popularServices,
};
