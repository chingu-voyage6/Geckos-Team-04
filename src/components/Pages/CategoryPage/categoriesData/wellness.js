function splitServices(service) {
  return service.split('\n');
}

export const wellness = {
  heroImgUrl: 'https://source.unsplash.com/random',
  pageTitle: 'Wellness',
  pageSlogan: 'Improve your well-being. Get introduced to experienced wellness professionals.',
  popularServices: [
    {
      title: 'Personal Training',
      name: 'personal-trainers',
    },
    {
      title: 'Nutritionist',
      name: 'nutritionists',
    },
    {
      title: 'Pilates Training',
      name: 'pilates',
    },
    {
      title: 'Massage Therapy',
      name: 'massage',
    },
  ],
  subcategories: [
    {
      subcategorieTitle: 'Beauty Services',
      subcategorieServices: splitServices(`Hair Coloring and Highlights
      `),
    },
    {
      subcategorieTitle: 'Coaching',
      subcategorieServices: splitServices(`Health and Wellness Coaching
      Life Coaching`),
    },
    {
      subcategorieTitle: 'Counseling',
      subcategorieServices: splitServices(`Family Counseling
      Hypnotherapy
      Marriage and Relationship Counseling
      Meditation Instruction
      Therapy and Counseling`),
    },
    {
      subcategorieTitle: 'Exercise',
      subcategorieServices: splitServices(`Personal Training
      Private Pilates Instruction
      Private Tai Chi Instruction
      Private Yoga Instruction`),
    },
    {
      subcategorieTitle: 'Healing',
      subcategorieServices: splitServices(`Alternative Healing
      Physical Therapy`),
    },
  ],
};
