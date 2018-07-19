const categoryList = [
  { id: 0, name: 'Home Improvement' },
  { id: 1, name: 'Wellness' },
  { id: 2, name: 'Pets' },
  { id: 3, name: 'Business' },
  { id: 4, name: 'Events' },
  { id: 5, name: 'Lessons' },
  { id: 6, name: 'Crafts' },
  { id: 7, name: 'Design and Web' },
  { id: 8, name: 'Legal' },
  { id: 9, name: 'Personal' },
  { id: 10, name: 'Photography' },
  { id: 11, name: 'Tech Repair' },
];

const serviceList = [
  {
    name: 'House Cleaning',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[0],
  },
  {
    name: 'Dog Grooming',
    image: 'https://unsplash.com/photos/TTGSZSElkOI',
    category: categoryList[0],
  },
  {
    name: 'Lawn Mowing & Trimming',
    image: 'https://unsplash.com/photos/LlHgaeBwYVE',
    category: categoryList[0],
  },
  {
    name: 'Interior Cleaning',
    image: 'https://unsplash.com/photos/cpIgNaazQ6w',
    category: categoryList[0],
  },
  {
    name: 'General Contracting',
    image: 'https://unsplash.com/photos/HtBlQdxfG9k',
    category: categoryList[0],
  },
  {
    name: 'Personal Training',
    image: 'https://unsplash.com/photos/EkwOre9Oqhc',
    category: categoryList[1],
  },
  {
    name: 'Massage Therapy',
    image: 'https://unsplash.com/photos/yfmjALh1S6s',
    category: categoryList[1],
  },
  {
    name: 'Life Coaching',
    image: 'https://unsplash.com/photos/LlHgaeBwYVE',
    category: categoryList[1],
  },
  {
    name: 'Private Yoga Instruction',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[1],
  },
  {
    name: 'Nutritionist',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[1],
  },
  {
    name: 'Dog Walking',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[2],
  },
  {
    name: 'Aquariam Services',
    image: 'https://unsplash.com/photos/TTGSZSElkOI',
    category: categoryList[2],
  },
  {
    name: 'Cat Grooming',
    image: 'https://unsplash.com/photos/LlHgaeBwYVE',
    category: categoryList[2],
  },
  {
    name: 'Accounting',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[3],
  },
  {
    name: 'Logo Design',
    image: 'https://unsplash.com/photos/TTGSZSElkOI',
    category: categoryList[3],
  },
  {
    name: 'Computer Repair',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[3],
  },
  {
    name: 'Paranormal Investigation',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[3],
  },
  { name: 'DJ', image: 'https://unsplash.com/photos/uSFYHjmqPAE/', category: categoryList[4] },
  {
    name: 'Wedding Officiant',
    image: 'https://unsplash.com/photos/TTGSZSElkOI',
    category: categoryList[4],
  },
  {
    name: 'Wedding and Event Catering',
    image: 'https://unsplash.com/photos/LlHgaeBwYVE',
    category: categoryList[4],
  },
  {
    name: 'Wedding and Event Makeup',
    image: 'https://unsplash.com/photos/LlHgaeBwYVE',
    category: categoryList[4],
  },
  {
    name: 'Photo Booth Rental',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[4],
  },
  {
    name: 'Bartending',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[4],
  },
  {
    name: 'Singing Lessons',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[5],
  },
  {
    name: 'Piano Lessons',
    image: 'https://unsplash.com/photos/TTGSZSElkOI',
    category: categoryList[5],
  },
  {
    name: 'Private Self Defense Lessons',
    image: 'https://unsplash.com/photos/LlHgaeBwYVE',
    category: categoryList[5],
  },
  {
    name: 'Reading and Writing Lessons',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[5],
  },
  {
    name: 'Math Tutoring',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[5],
  },
  {
    name: 'Private Yoga Instrution',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[5],
  },
  {
    name: 'House Cleaning',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[6],
  },
  {
    name: 'Dog Grooming',
    image: 'https://unsplash.com/photos/TTGSZSElkOI',
    category: categoryList[6],
  },
  {
    name: 'Lawn Mowing & Trimming',
    image: 'https://unsplash.com/photos/LlHgaeBwYVE',
    category: categoryList[6],
  },
  {
    name: 'Interior Cleaning',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[6],
  },
  {
    name: 'General Contracing',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[6],
  },
  {
    name: 'House Cleaning',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[7],
  },
  {
    name: 'Dog Grooming',
    image: 'https://unsplash.com/photos/TTGSZSElkOI',
    category: categoryList[7],
  },
  {
    name: 'Lawn Mowing & Trimming',
    image: 'https://unsplash.com/photos/LlHgaeBwYVE',
    category: categoryList[7],
  },
  {
    name: 'Interior Cleaning',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[7],
  },
  {
    name: 'General Contracing',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[7],
  },
  {
    name: 'House Cleaning',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[8],
  },
  {
    name: 'Dog Grooming',
    image: 'https://unsplash.com/photos/TTGSZSElkOI',
    category: categoryList[8],
  },
  {
    name: 'Lawn Mowing & Trimming',
    image: 'https://unsplash.com/photos/LlHgaeBwYVE',
    category: categoryList[8],
  },
  {
    name: 'Interior Cleaning',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[8],
  },
  {
    name: 'General Contracing',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[8],
  },
  {
    name: 'House Cleaning',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[9],
  },
  {
    name: 'Dog Grooming',
    image: 'https://unsplash.com/photos/TTGSZSElkOI',
    category: categoryList[9],
  },
  {
    name: 'Lawn Mowing & Trimming',
    image: 'https://unsplash.com/photos/LlHgaeBwYVE',
    category: categoryList[9],
  },
  {
    name: 'Interior Cleaning',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[9],
  },
  {
    name: 'General Contracing',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[9],
  },
  {
    name: 'House Cleaning',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[10],
  },
  {
    name: 'Dog Grooming',
    image: 'https://unsplash.com/photos/TTGSZSElkOI',
    category: categoryList[10],
  },
  {
    name: 'Lawn Mowing & Trimming',
    image: 'https://unsplash.com/photos/LlHgaeBwYVE',
    category: categoryList[10],
  },
  {
    name: 'Interior Cleaning',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[10],
  },
  {
    name: 'General Contracing',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[10],
  },
  {
    name: 'House Cleaning',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[11],
  },
  {
    name: 'Dog Grooming',
    image: 'https://unsplash.com/photos/TTGSZSElkOI',
    category: categoryList[11],
  },
  {
    name: 'Lawn Mowing & Trimming',
    image: 'https://unsplash.com/photos/LlHgaeBwYVE',
    category: categoryList[11],
  },
  {
    name: 'Interior Cleaning',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[11],
  },
  {
    name: 'General Contracing',
    image: 'https://unsplash.com/photos/uSFYHjmqPAE/',
    category: categoryList[11],
  },
];

module.exports = {
  categoryList,
  serviceList,
};
