export const questionaire = [
  {
    professionalsToFind: 'House Cleaners',
    type: 'intro',
    nextButtons: 'next',
  },
  {
    question: 'How many bedrooms are in your home?',
    type: 'single',
    options: ['1 bedroom', '2 bedrooms', '3 bedrooms', '4 bedrooms'],
    required: 'required',
    nextButtons: 'backAndNext',
  },
  {
    question: 'Which additional services do you need, if any?',
    type: 'multi',
    options: ['Fridge cleaning', 'Oven cleaning', 'Interior window cleaning', 'Laundry'],
    required: 'optional',
    nextButtons: 'backAndNext',
  },
  {
    question: 'Anything else the house cleaner should know?',
    type: 'textarea',
    options: [],
    required: 'optional',
    nextButtons: 'backAndSkip',
  },
];
