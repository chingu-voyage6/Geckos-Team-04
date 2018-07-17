import * as services from './servicesData';
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

function splitServices(service) {
  return service.split('\n');
}
export const categories = [
  {
    icon: HomeImprovementIcon,
    categoryId: 'category-group-home-improvement',
    categoryTitle: 'Home Improvement',
    categoryServices: splitServices(services.homeImprovementServices),
    cards: [
      {
        title: 'House Cleaning',
        imgUrl: 'https://d1vg1gqh4nkuns.cloudfront.net/i/318793008367067357/small/standard/hero',
        to: '/',
      },
      {
        title: 'Lawn Mowing and Trimming',
        imgUrl: 'https://d1vg1gqh4nkuns.cloudfront.net/i/327896627728072894/small/standard/hero',
        to: '/',
      },
      {
        title: 'Interior Design',
        imgUrl: 'https://d1vg1gqh4nkuns.cloudfront.net/i/323484759907016831/small/standard/hero',
        to: '/',
      },
      {
        title: 'Handyman',
        imgUrl: 'https://d1vg1gqh4nkuns.cloudfront.net/i/323489611327971335/small/standard/hero',
        to: '/',
      },
      {
        title: 'Roof Repair or Maintenance',
        imgUrl: 'https://d1vg1gqh4nkuns.cloudfront.net/i/323302369127555169/small/standard/hero',
        to: '/',
      },
      {
        title: 'General Contracting',
        imgUrl: 'https://d1vg1gqh4nkuns.cloudfront.net/i/323300767250423877/small/standard/hero',
        to: '/',
      },
    ],
  },
  {
    icon: WellnessIcon,
    categoryId: 'category-group-wellness',
    categoryTitle: 'Wellness',
    categoryServices: splitServices(services.wellnessServices),
  },
  {
    icon: PetsIcon,
    categoryId: 'category-group-pets',
    categoryTitle: 'Pets',
    categoryServices: splitServices(services.petsServices),
    cards: [
      {
        title: 'Dog Walking',
        imgUrl: 'https://d1vg1gqh4nkuns.cloudfront.net/i/323233931878015045/small/standard/hero',
        to: '/',
      },
      {
        title: 'Aquarium Services',
        imgUrl: 'https://d1vg1gqh4nkuns.cloudfront.net/i/323484883825975401/small/standard/hero',
        to: '/',
      },
      {
        title: 'Cat Grooming',
        imgUrl: 'https://d1vg1gqh4nkuns.cloudfront.net/i/323233515756093545/small/standard/hero',
        to: '/',
      },
    ],
  },
  {
    icon: BusinessIcon,
    categoryId: 'category-group-business',
    categoryTitle: 'Business',
    categoryServices: splitServices(services.businessServices),
  },
  {
    icon: EventsIcon,
    categoryId: 'category-group-events',
    categoryTitle: 'Events',
    categoryServices: splitServices(services.eventsServices),
  },
  {
    icon: LessonsIcon,
    categoryId: 'category-group-lessons',
    categoryTitle: 'Lessons',
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
