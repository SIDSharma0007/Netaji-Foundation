import { Campaign, FinancialReport } from '../types';

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

export const INITIAL_REPORTS: FinancialReport[] = [
  {
    id: 'r2023',
    year: 2023,
    title: '2023 Annual Financial Report',
    description: 'Comprehensive financial review, audited balance sheets, Section 80G tax filings, and field impact assessment in INR.',
    downloadCount: 1420,
    fileSize: '4.8 MB',
    url: '/reports/Netaji_Foundation_Annual_Report_2023.pdf'
  },
  {
    id: 'r2022',
    year: 2022,
    title: '2022 Annual Financial Report',
    description: 'Archived financial data, village impact metrics, and expansion reports certified by independent CAs.',
    downloadCount: 980,
    fileSize: '3.6 MB',
    url: '/reports/Netaji_Foundation_Annual_Report_2022.pdf'
  },
  {
    id: 'r2021',
    year: 2021,
    title: '2021 Annual Financial Report',
    description: 'Archived financial statement, disaster relief accounting, and foundational growth milestones.',
    downloadCount: 750,
    fileSize: '3.2 MB',
    url: '/reports/Netaji_Foundation_Annual_Report_2021.pdf'
  }
];

