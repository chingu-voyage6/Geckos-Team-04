function splitServices(service) {
  return service.split('\n');
}

export const wellness = {
  heroImgUrl:
    'https://images.unsplash.com/photo-1533323905636-7f0bfa0ba5ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3905b67517b7ab7ad65ad3d740019515&auto=format&fit=crop&w=1350&q=80',
  pageTitle: 'Wellness',
  pageSlogan: 'Improve your well-being. Get introduced to experienced wellness professionals.',
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
