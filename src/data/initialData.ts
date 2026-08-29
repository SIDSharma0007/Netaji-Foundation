import { Campaign } from '../types';

export const INITIAL_CAMPAIGNS: Campaign[] = [
  {
    id: 'c1',
    title: 'Rural Literacy Initiative',
    category: 'Education',
    description: 'Providing essential reading materials, solar lamps, and building mobile libraries for remote village schools across Uttar Pradesh and Bihar to ensure children have access to quality education.',
    imageUrl: '/images/rural-literacy.jpg',
    imageAlt: 'Indian village school children reading illustrated books in rural classroom',
    goalAmount: 1000000,
    raisedAmount: 750000,
    percentage: 75,
    donorsCount: 420,
    location: 'UP & Bihar Rural Belt'
  },
  {
    id: 'c2',
    title: 'Clean Water & Filtration Access',
    category: 'Health',
    description: 'Installing sustainable solar water filtration units and community taps in drought-affected villages across Bundelkhand and Rajasthan to prevent waterborne diseases.',
    imageUrl: '/images/clean-water-access.jpg',
    imageAlt: 'Mother and school girl filling clean water container from village filtration tap',
    goalAmount: 1500000,
    raisedAmount: 600000,
    percentage: 40,
    donorsCount: 310,
    location: 'Bundelkhand & Rajasthan Arid Belt'
  },
  {
    id: 'c3',
    title: 'Urban Forestry & Green Zones',
    category: 'Environment',
    description: 'Transforming degraded urban lands into thriving Miyawaki forests and community gardens in NCR, Bengaluru, and Pune to improve air quality and urban ecology.',
    imageUrl: '/images/urban-forestry.jpg',
    imageAlt: 'Youth environmental volunteers planting tree saplings during community greening drive',
    goalAmount: 800000,
    raisedAmount: 720000,
    percentage: 90,
    donorsCount: 580,
    location: 'NCR, Bengaluru & Pune Metro Zones'
  },
  {
    id: 'c4',
    title: 'Disability & Vulnerable Community Aid',
    category: 'Livelihood',
    description: 'Providing essential nutritional sustenance, mobility support, and emergency door-to-door relief to persons with disabilities and marginalized families in local neighborhoods.',
    imageUrl: '/images/disability-community-aid.jpg',
    imageAlt: 'Netaji Foundation volunteers providing doorstep relief to differently-abled community member',
    goalAmount: 1200000,
    raisedAmount: 780000,
    percentage: 65,
    donorsCount: 410,
    location: 'Jamshedpur & Jharkhand Belt'
  }
];

