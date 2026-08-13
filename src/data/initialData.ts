import { Campaign, FinancialReport } from '../types';

export const INITIAL_CAMPAIGNS: Campaign[] = [
  {
    id: 'c1',
    title: 'Rural Literacy Initiative',
    category: 'Education',
    description: 'Providing essential reading materials, solar lamps, and building mobile libraries for remote village schools across Uttar Pradesh and Bihar to ensure children have access to quality education.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4U0qyMx-vSpvIu-zL8fqqooEIvfEpNsJKkKCrzqsuSLBsWnQ0IQz0Oj2ztFdeDgQQ_6GOaa4uVFE8frDeWEqPPEtxSofo-6g9U60NcKJIx_5DrH02jpzXrF5wGr3Ltke-Xcqnycqz56ZHM4P8iyZi-ymA5__fY4q2QqCFQYIy1HVnNU12tCpDN88rjtn5XbJE_u8NrN9EnoJ_NcCzC_48vqDnaapKelOWf1yjzFx9b1glULvAX5M',
    imageAlt: 'Indian village school children reading books in classroom',
    goalAmount: 1000000,
    raisedAmount: 750000,
    percentage: 75,
    donorsCount: 420,
    location: 'UP & Bihar Rural Belt'
  },
  {
    id: 'c2',
    title: 'Clean Water & Handpump Access',
    category: 'Health',
    description: 'Installing sustainable solar water pumps and filtration units in drought-affected villages across Bundelkhand and Rajasthan to prevent waterborne diseases.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCRZtKUrqwRj8g23JGrWOeGmkO8UhQYmpe8HiHYG0L9nEeR6oyUyOuamnilyDZJgY5vcdb2uOA9xajJrcxgpMgiv73gVlUfKo_xYDWxANe1-lKBXApVozDkb3rsIp7xixv2VaEIUDexbkTSfZehgQxvdf02hEkyVAsgVKd31YYFey9eQ-Sm6hyCxVVLb3C2vTGBYsdSflXDf4ii_AHsliSu-TBknqeATIPVJZTDIIZ3r2BqLf6uN0',
    imageAlt: 'Clean water handpump in rural Indian village',
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
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQpDe8z_ql-JNaG0ty2rKS2g8B7iO4p5zgD-VrHoz_sl3bsDdeHnLwwy3MImh_3VFBQgnsVHkFaOf6knrB5Jp3ZT-HkVE9R2p2KzxlVBa0smqvbKD6DRzKTNAfjqO6YLdMFJY46JJUazIfhbFLKXkEp_TAAFTij_C4dJvCtulcM5iGxIqtFguMRA2YeGne2CkZnK4Yq9snLsFxQULi8cLg5Bq6djr20cWUfnOTQ7Dz8SwRYrgZg0g',
    imageAlt: 'Volunteers planting saplings during tree plantation drive in India',
    goalAmount: 800000,
    raisedAmount: 720000,
    percentage: 90,
    donorsCount: 580,
    location: 'NCR, Bengaluru & Pune Metro Zones'
  },
  {
    id: 'c4',
    title: 'Youth Vocational Skill Centers',
    category: 'Livelihood',
    description: 'Establishing skill training hubs offering digital literacy, solar technician certification, and sustainable handicraft production for unemployed youth in Odisha and Jharkhand.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCinQPupvwxYSbjMG2McUC9ptmvI6YbxQ-TeB7iL45jtTaBSQvN9Q7s7TyMXgQ0TnsOPaNLhwWYyCrQ_ml5DAH8-hiJ_-FP7Km5P-VCFks43A8MrKIQt9_dwOnQIM2m0iKeOpHSS8OBXtI-MmQGyxI_zwo_4Kb0WZMMFMgMvzaMuhmRHSa907C43QcBwEnfriG1fpc9o2O2GX73Xz1hGAaBIQ9AUuUS6M1djtiyuVR8iug0DRCQa50',
    imageAlt: 'Indian youth attending vocational workshop center',
    goalAmount: 1200000,
    raisedAmount: 300000,
    percentage: 25,
    donorsCount: 190,
    location: 'Odisha & Jharkhand Skill Hubs'
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

