function splitServices(service) {
  return service.split('\n');
}

export const lessons = {
  heroImgUrl:
    'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=954560871844da528c60343dc344ccbf&auto=format&fit=crop&w=1350&q=80',
  pageTitle: 'Lessons',
  pageSlogan: 'Lessons Improve your skills. Get introduced to the right teachers.',
  subcategories: [
    {
      subcategorieTitle: 'Academic Tutoring',
      subcategorieServices: ['Home Modification for Accessibility'],
    },
    {
      subcategorieTitle: 'Additions and Remodels',
      subcategorieServices: splitServices(`College Admissions Counseling
      Math Tutoring
      Reading and Writing Tutoring
      Science Tutoring
      Social Sciences Tutoring
      Test Prep Services`),
    },
    {
      subcategorieTitle: 'Cooking',
      subcategorieServices: ['Private Cooking Lessons'],
    },
    {
      subcategorieTitle: 'Dancing',
      subcategorieServices: ['Private Dance Lessons (for me or my group)'],
    },
    {
      subcategorieTitle: 'Fitness',
      subcategorieServices: splitServices(`Golf Lessons
      Private Horseback Riding Lessons
      Private Swim Lessons
      Private Tennis Instruction (for me or my group)
      Volleyball Lessons`),
    },
    {
      subcategorieTitle: 'Language',
      subcategorieServices: splitServices(`Arabic Lessons
      ESL (English as a Second Language) Lessons
      French Lessons
      German Lessons
      Italian Lessons
      Japanese Lessons
      Korean Lessons
      Mandarin Lessons
      Portuguese Lessons
      Sign Language Lessons
      Spanish Lessons`),
    },
    {
      subcategorieTitle: 'Music',
      subcategorieServices: splitServices(`EBanjo Lessons
      Bass Guitar Lessons
      Cello Lessons
      Drum Lessons
      Flute Lessons
      Guitar Lessons
      Music Theory Lessons
      Piano Lessons
      Piano Tuning
      Saxophone Lessons
      Singing Lessons
      Violin Lessons`),
    },
    {
      subcategorieTitle: 'Skill',
      subcategorieServices: splitServices(`Acting Lessons
      Audio Production Lessons
      CPR and First Aid Training
      Chess Lessons
      Computer Lessons
      Drawing Lessons
      Driving Lessons
      Filmmaking Lessons
      Graphic Design Instruction
      Makeup Artistry Lessons
      Painting Lessons
      Photography Lessons
      Private Self Defense Lessons
      Public Speaking Lessons
      Reiki Lessons
      Sculpting Lessons
      Sewing Lessons
      Voice Over Lessons`),
    },
    {
      subcategorieTitle: 'Sports',
      subcategorieServices: splitServices(`Baseball Lessons
      Basketball Lessons
      Soccer Lessons
      Softball Lessons`),
    },
  ],
};
