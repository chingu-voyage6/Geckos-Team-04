function splitServices(service) {
  return service.split('\n');
}

export const home = {
  heroImgUrl: 'https://source.unsplash.com/random',
  pageTitle: 'Home',
  pageSlogan: 'Complete your home improvement project with the right professionals.',
  popularServices: [
    {
      title: 'House Cleaning',
      name: 'house-cleaning',
    },
    {
      title: 'Handyman',
      name: 'handyman',
    },
    {
      title: 'General Contractors',
      name: 'general-contractors',
    },
    {
      title: 'Interior Design',
      name: 'interior-designers',
    },
    {
      title: 'Landscaping',
      name: 'landscaping',
    },
    {
      title: 'Tv Mounting',
      name: 'tv-mounting',
    },
  ],
  subcategories: [
    {
      subcategorieTitle: 'Accessibility Construction and Remodels',
      subcategorieServices: ['Home Modification for Accessibility'],
    },
    {
      subcategorieTitle: 'Additions and Remodels',
      subcategorieServices: splitServices(`Basement Finishing or Remodeling
      Bathroom Remodel
      Construction Services
      Deck Staining and Sealing
      Deck or Porch Remodel or Addition
      Deck or Porch Repair
      Demolition Services
      Foundation Repair
      Home Remodeling
      Kitchen Remodel
      New Home Construction
      Patio Remodel or Addition
      Railing Installation or Remodel
      Room Remodel
      Stair Installation, Remodel, or Repair`),
    },
    {
      subcategorieTitle: 'Appliances',
      subcategorieServices: splitServices(`Appliance Installation
      Appliance Repair or Maintenance
      Dishwasher Installation
      Garbage Disposal Installation
      Garbage Disposal Repair
      Lawn Mower Repair
      Satellite Dish Services
      `),
    },
    {
      subcategorieTitle: 'Architectural and Engineering Services',
      subcategorieServices: splitServices(`Architectural Services
      Structural Engineering Services`),
    },
    {
      subcategorieTitle: 'Carpentry and Woodworking',
      subcategorieServices: splitServices(`Cabinet Installation
      Cabinet Refinishing and Repair
      Cabinetry
      Custom Cabinet Building
      Custom Furniture Building
      Framing Carpentry
      General Carpentry
      Trim or Molding Installation`),
    },
    {
      subcategorieTitle: 'Cleaning',
      subcategorieServices: splitServices(`Asbestos Removal
      Carpet Cleaning
      Commercial Carpet Cleaning
      Commercial Cleaning
      Dumpster Rental
      Floor Cleaning
      Floor Polishing
      Garage, Basement or Attic Cleaning
      Gutter Cleaning and Maintenance
      Home Organizing
      House Cleaning
      Junk Removal
      Odor Removal
      Pressure Washing
      Roof Cleaning
      Rug Cleaning
      Solar Panel Cleaning
      Tile and Grout Cleaning
      Upholstery and Furniture Cleaning
      Water Damage Cleanup and Restoration
      Window Cleaning`),
    },
    {
      subcategorieTitle: 'Design & Decor',
      subcategorieServices: splitServices(`Home Staging
      Interior Design
      Muralist
      Picture Hanging and Art Installation
      Wallpaper Installation or Repair
      Wallpaper Removal`),
    },
    {
      subcategorieTitle: 'Site Preparation',
      subcategorieServices: splitServices(`Excavation Services
      Land Clearing
      Swimming Pool Removal`),
    },
    {
      subcategorieTitle: 'Windows',
      subcategorieServices: splitServices(`Screen Installation or Replacement
      Shutter Removal
      Window Installation
      Window Repair
      Window Tinting
      Window Treatment Installation or Repair`),
    },
    {
      subcategorieTitle: 'Lawncare',
      subcategorieServices: splitServices(`Full Service Lawn Care
      Gardening
      Lawn Mowing and Trimming
      Mulching
      Outdoor Mosquito Control Services
      Outdoor Pesticide Application
      Shrub Planting
      Shrub Trimming and Removal
      Snow Plowing
      Tree Planting
      Tree Stump Grinding and Removal
      Tree Trimming and Removal
      Weeding`),
    },
  ],
};
