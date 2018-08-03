function splitServices(service) {
  return service.split('\n');
}

export const events = {
  heroImgUrl: 'https://source.unsplash.com/random',
  pageTitle: 'Events',
  pageSlogan: 'Throw the perfect event. Get introduced to the right event professionals',
  popularServices: [
    {
      title: 'DJ',
      name: 'djs',
    },
    {
      title: 'Wedding Officants',
      name: 'wedding-officants',
    },
    {
      title: 'Magician',
      name: 'magicians',
    },
    {
      title: 'Bartending',
      name: 'bartenders',
    },
  ],
  subcategories: [
    {
      subcategorieTitle: 'Driver',
      subcategorieServices: splitServices(`Charter Bus Rental
      Limousine and Chauffeur Services
      Party Bus Rental`),
    },
    {
      subcategorieTitle: 'Entertainment Services',
      subcategorieServices: splitServices(`Entertainment
      Tarot and Psychic Reader Entertainment`),
    },
    {
      subcategorieTitle: 'Event Services',
      subcategorieServices: splitServices(`Astrology Reading
      Balloon Twisting
      Body Painting
      Caricaturing
      Event Florist
      Face Painting
      Henna Tattooing
      Palm Reading
      Portrait Artistry
      Scrapbooking
      Tarot Card Reading
      Temporary Tattoo Artistry
      Valet Parking`),
    },
    {
      subcategorieTitle: 'Food',
      subcategorieServices: splitServices(`Barbecue and Grill Services
      Candy Buffet Services
      Food Truck or Cart Services
      Games and Concession Rental
      Pastry Chef and Cake Making Services
      Personal Chef
      Wedding and Event Catering
      Wine Tastings and Tours`),
    },
    {
      subcategorieTitle: 'Videography',
      subcategorieServices: splitServices(`Video Editing
      Video Production
      Video Streaming and Webcasting Services
      Video Transfer Services
      Wedding and Event Videography`),
    },
    {
      subcategorieTitle: 'Planning',
      subcategorieServices: splitServices(`Balloon Decorations
      Calligraphy
      Event Planning
      Fishing Trip Guide Services
      Party Favors
      Wedding and Event Decorating
      Wedding and Event Invitations
      Wedding and Event Venue Rental`),
    },
  ],
};
