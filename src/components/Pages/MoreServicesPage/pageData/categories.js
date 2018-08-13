import * as services from './servicesData';
import { cardContent } from '../../../Shared/Cards/card-data';

import {
  HomeImprovementIcon,
  WellnessIcon,
  PetsIcon,
  BusinessIcon,
  EventsIcon,
  LessonsIcon,
  LegalIcon,
  CraftsIcon,
  WebDesignIcon,
  PersonalIcon,
  PhotographyIcon,
  RepairIcon,
  WritingIcon,
} from '../../../Shared/Icon/Icon';

function getCategoryItems(items, categoryName) {
  return items.filter(({ category }) => category === categoryName);
}

function splitServices(service) {
  return service.split('\n');
}
export const categories = [
  {
    icon: HomeImprovementIcon,
    categoryId: 'category-group-home-improvement',
    categoryTitle: 'Home Improvement',
    categoryServices: splitServices(services.homeImprovementServices),
    cards: getCategoryItems(cardContent, 'Home'),
  },
  {
    icon: WellnessIcon,
    categoryId: 'category-group-wellness',
    categoryTitle: 'Wellness',
    categoryServices: splitServices(services.wellnessServices),
    cards: getCategoryItems(cardContent, 'Wellness'),
  },
  {
    icon: PetsIcon,
    categoryId: 'category-group-pets',
    categoryTitle: 'Pets',
    categoryServices: splitServices(services.petsServices),
    cards: getCategoryItems(cardContent, 'Pets'),
  },
  {
    icon: BusinessIcon,
    categoryId: 'category-group-business',
    categoryTitle: 'Business',
    cards: getCategoryItems(cardContent, 'Business'),
    categoryServices: splitServices(services.businessServices),
  },
  {
    icon: EventsIcon,
    categoryId: 'category-group-events',
    categoryTitle: 'Events',
    cards: getCategoryItems(cardContent, 'Events'),
    categoryServices: splitServices(services.eventsServices),
  },
  {
    icon: LessonsIcon,
    categoryId: 'category-group-lessons',
    categoryTitle: 'Lessons',
    cards: getCategoryItems(cardContent, 'Lessons'),
    categoryServices: splitServices(services.lessonsServices),
  },

  {
    icon: CraftsIcon,
    categoryId: 'category-group-crafts',
    categoryTitle: 'Crafts',
    categoryServices: splitServices(services.craftsServices),
  },

  {
    icon: WebDesignIcon,
    categoryId: 'category-group-designWeb',
    categoryTitle: 'Design and Web',
    categoryServices: splitServices(services.designAndWebServices),
  },
  {
    icon: LegalIcon,
    categoryId: 'category-group-legal',
    categoryTitle: 'Legal',
    categoryServices: splitServices(services.legalServices),
  },
  {
    icon: PersonalIcon,
    categoryId: 'category-group-personal',
    categoryTitle: 'Personal',
    categoryServices: splitServices(services.personalServices),
  },
  {
    icon: PhotographyIcon,
    categoryId: 'category-group-photography',
    categoryTitle: 'Photography',
    categoryServices: splitServices(services.personalServices),
  },
  {
    icon: RepairIcon,
    categoryId: 'category-group-repairSupport',
    categoryTitle: 'Repair and technical support',
    categoryServices: splitServices(services.repairServices),
  },
  {
    icon: WritingIcon,
    categoryId: 'category-group-writingTranslation',
    categoryTitle: 'Writing, translation, and transcription',
    categoryServices: splitServices(services.writingServices),
  },
];
