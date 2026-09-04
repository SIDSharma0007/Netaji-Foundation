import { Campaign } from '../types';

export const INITIAL_CAMPAIGNS: Campaign[] = [
  {
    id: 'c1',
    title: 'Winter Blanket & Warmth Relief Drive',
    category: 'Livelihood',
    description: 'Providing high-quality winter blankets, warm clothing, and essential shelter kits to homeless and underprivileged families across Jamshedpur and surrounding rural districts during extreme cold spells.',
    imageUrl: '/images/hero-elderly-relief.jpg',
    imageAlt: 'Netaji Subhash Chandra Bose Seva Samity volunteers distributing warm blankets to elderly community members',
    location: 'Jamshedpur & East Singhbhum'
  },
  {
    id: 'c2',
    title: 'Blood Donation & TMH Patient Support',
    category: 'Health',
    description: 'Organizing voluntary blood donation camps and direct fruit/nutrition distribution for patients and attendants at Tata Main Hospital (TMH) and regional health centers.',
    imageUrl: '/images/blood-donation-tmh.jpg',
    imageAlt: 'Netaji Subhash Chandra Bose Seva Samity blood donation drive and TMH patient nutrition distribution in Jamshedpur',
    location: 'Tata Main Hospital & Jamshedpur'
  },
  {
    id: 'c3',
    title: "Underprivileged Daughters' Marriage Assistance",
    category: 'Livelihood',
    description: 'Providing crucial financial aid, household provisions, and community support for the solemn marriage ceremonies of young women from economically distressed families.',
    imageUrl: '/images/daughters-marriage-aid.jpg',
    imageAlt: 'Netaji Subhash Chandra Bose Seva Samity mass marriage assistance ceremony providing wedding provisions in Jharkhand',
    location: 'East Singhbhum & Regional Jharkhand'
  },
  {
    id: 'c4',
    title: 'Disability & Vulnerable Community Aid',
    category: 'Livelihood',
    description: 'Providing essential nutritional sustenance, mobility support, and emergency door-to-door relief to persons with disabilities and marginalized families in local neighborhoods.',
    imageUrl: '/images/disability-community-aid.jpg',
    imageAlt: 'Netaji Subhash Chandra Bose Seva Samity volunteers providing doorstep relief to differently-abled community member',
    location: 'Jamshedpur & Jharkhand Belt'
  }
];

