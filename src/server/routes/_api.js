const faker = require('mongoose-fakery');

const serviceList = [
  {
    name: 'Home Improvement',
    service: [
      { name: 'House Cleaning', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'Dog Grooming', image: 'https://unsplash.com/photos/TTGSZSElkOI' },
      { name: 'Lawn Mowing & Trimming', image: 'https://unsplash.com/photos/LlHgaeBwYVE' },
      { name: 'Interior Cleaning', image: 'https://unsplash.com/photos/cpIgNaazQ6w' },
      { name: 'General Contracting', image: 'https://unsplash.com/photos/HtBlQdxfG9k' },
    ],
  },
  {
    name: 'Wellness',
    service: [
      { name: 'Personal Training', image: 'https://unsplash.com/photos/EkwOre9Oqhc' },
      { name: 'Massage Therapy', image: 'https://unsplash.com/photos/yfmjALh1S6s' },
      { name: 'Life Coaching', image: 'https://unsplash.com/photos/LlHgaeBwYVE' },
      { name: 'Private Yoga Instruction', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'Nutritionist', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
    ],
  },
  {
    name: 'Pets',
    service: [
      { name: 'Dog Walking', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'Aquariam Services', image: 'https://unsplash.com/photos/TTGSZSElkOI' },
      { name: 'Cat Grooming', image: 'https://unsplash.com/photos/LlHgaeBwYVE' },
    ],
  },
  {
    name: 'Business',
    service: [
      { name: 'Accounting', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'Logo Design', image: 'https://unsplash.com/photos/TTGSZSElkOI' },
      { name: 'Computer Repair', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'Paranormal Investigation', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
    ],
  },
  {
    name: 'Events',
    service: [
      { name: 'DJ', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'Wedding Officiant', image: 'https://unsplash.com/photos/TTGSZSElkOI' },
      { name: 'Wedding and Event Catering', image: 'https://unsplash.com/photos/LlHgaeBwYVE' },
      { name: 'Wedding and Event Makeup', image: 'https://unsplash.com/photos/LlHgaeBwYVE' },
      { name: 'Photo Booth Rental', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'Bartending', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
    ],
  },
  {
    name: 'Lessons',
    service: [
      { name: 'Singing Lessons', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'Piano Lessons', image: 'https://unsplash.com/photos/TTGSZSElkOI' },
      { name: 'Private Self Defense Lessons', image: 'https://unsplash.com/photos/LlHgaeBwYVE' },
      { name: 'Reading and Writing Lessons', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'Math Tutoring', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'Private Yoga Instrution', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
    ],
  },
  {
    name: 'Crafts',
    service: [
      { name: 'House Cleaning', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'Dog Grooming', image: 'https://unsplash.com/photos/TTGSZSElkOI' },
      { name: 'Lawn Mowing & Trimming', image: 'https://unsplash.com/photos/LlHgaeBwYVE' },
      { name: 'Interior Cleaning', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'General Contracing', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
    ],
  },
  {
    name: 'Design and Web',
    service: [
      { name: 'House Cleaning', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'Dog Grooming', image: 'https://unsplash.com/photos/TTGSZSElkOI' },
      { name: 'Lawn Mowing & Trimming', image: 'https://unsplash.com/photos/LlHgaeBwYVE' },
      { name: 'Interior Cleaning', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'General Contracing', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
    ],
  },
  {
    name: 'Legal',
    service: [
      { name: 'House Cleaning', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'Dog Grooming', image: 'https://unsplash.com/photos/TTGSZSElkOI' },
      { name: 'Lawn Mowing & Trimming', image: 'https://unsplash.com/photos/LlHgaeBwYVE' },
      { name: 'Interior Cleaning', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'General Contracing', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
    ],
  },
  {
    name: 'Personal',
    service: [
      { name: 'House Cleaning', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'Dog Grooming', image: 'https://unsplash.com/photos/TTGSZSElkOI' },
      { name: 'Lawn Mowing & Trimming', image: 'https://unsplash.com/photos/LlHgaeBwYVE' },
      { name: 'Interior Cleaning', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'General Contracing', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
    ],
  },
  {
    name: 'Legal',
    service: [
      { name: 'House Cleaning', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'Dog Grooming', image: 'https://unsplash.com/photos/TTGSZSElkOI' },
      { name: 'Lawn Mowing & Trimming', image: 'https://unsplash.com/photos/LlHgaeBwYVE' },
      { name: 'Interior Cleaning', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'General Contracing', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
    ],
  },
  {
    name: 'Photography',
    service: [
      { name: 'House Cleaning', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'Dog Grooming', image: 'https://unsplash.com/photos/TTGSZSElkOI' },
      { name: 'Lawn Mowing & Trimming', image: 'https://unsplash.com/photos/LlHgaeBwYVE' },
      { name: 'Interior Cleaning', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'General Contracing', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
    ],
  },
  {
    name: 'Repair and technical support',
    service: [
      { name: 'House Cleaning', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'Dog Grooming', image: 'https://unsplash.com/photos/TTGSZSElkOI' },
      { name: 'Lawn Mowing & Trimming', image: 'https://unsplash.com/photos/LlHgaeBwYVE' },
      { name: 'Interior Cleaning', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'General Contracing', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
    ],
  },
  {
    name: 'Writing translation and transaction',
    service: [
      { name: 'House Cleaning', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'Dog Grooming', image: 'https://unsplash.com/photos/TTGSZSElkOI' },
      { name: 'Lawn Mowing & Trimming', image: 'https://unsplash.com/photos/LlHgaeBwYVE' },
      { name: 'Interior Cleaning', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
      { name: 'General Contracing', image: 'https://unsplash.com/photos/uSFYHjmqPAE/' },
    ],
  },
];

const urlify = name => name.toLowerCase().replace(/ /g, '-');

const generateServiceData = () => {
  const entries = [];
  serviceList.forEach(entry => {
    entries.push({
      name: entry.name,
      services: Object.assign({}, entry.service),
      extra: [...Array(5).keys()].map(faker.g.str(5, 10)),
      pros: Math.floor(Math.random() * 20000),
      url: urlify(entry.name),
    });
  });
  return entries;
};

const services = generateServiceData();

module.exports = {
  services,
};
