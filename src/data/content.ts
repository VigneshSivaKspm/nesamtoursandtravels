export const COMPANY = {
  name: 'Nesam Tours & Travels Pvt Ltd',
  shortName: 'Nesam Tours & Travels',
  tagline: 'Book Best Drop Taxi in Chennai',
  phone: '+91 8148 999 303',
  phoneHref: 'tel:+918148999303',
  email: 'Booking@nesamtoursandtravels.com',
  supportEmail: 'support@nesamtoursandtravels.com',
  copyright: 'Copyrights NESAM TOURS & TRAVELS PVT LTD 2023.',
  headOffice:
    'Plot No: 1587, 6th Ave, P Block, Vasantham Colony, Anna Nagar, Chennai, Tamil Nadu 600040',
  branchOffice:
    'No.77 A1/W4, East Street, Koduvilarpatti, Veerapandi, Theni, Tamil Nadu, 625534.',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61555524722797',
    instagram: 'https://www.instagram.com/nesamtourstravelschennai/',
  },
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Attach Vehicle', href: '/attach-vehicle' },
  { label: 'Feedback', href: '/feedback' },
  { label: 'Contact Us', href: '/contact' },
] as const

export const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cancellation Policy', href: '/cancellation-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
] as const

export const FEATURES = [
  {
    title: 'Super & Reliable Services',
    description:
      'Trusted by thousands of travelers across South India with on-time pickups and professional drivers.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Large Range Of Car Models',
    description:
      'From hatchbacks to Innova and Tempo Traveler — choose the perfect vehicle for your journey.',
    icon: 'Car',
  },
  {
    title: 'Powerful Security Service',
    description:
      'All vehicles are regularly checked, maintained, and driven by trained, verified professionals.',
    icon: 'Lock',
  },
  {
    title: '24×7 Customer Support',
    description:
      'Round-the-clock assistance for bookings, trip updates, and emergency support whenever you need.',
    icon: 'Headphones',
  },
  {
    title: 'GPS Tracking And Help',
    description:
      'Real-time tracking and state-of-the-art systems to monitor every trip for your peace of mind.',
    icon: 'MapPin',
  },
  {
    title: 'Lowest Fare In Market',
    description:
      'Transparent pricing with GST-inclusive estimates and no hidden charges on base fares.',
    icon: 'IndianRupee',
  },
] as const

export const VEHICLES = [
  {
    id: 'hatchback',
    name: 'Hatchback',
    models: 'Indica, Swift, Figo',
    baseFare: 14,
    driverBata: 300,
    capacity: 4,
  },
  {
    id: 'sedan',
    name: 'Sedan',
    models: 'Etios, Desire, Indigo, Fiesta',
    baseFare: 16,
    driverBata: 400,
    capacity: 4,
  },
  {
    id: 'xuv',
    name: 'SUV / XUV',
    models: 'Innova, Xylo, Tavera, Tempo Traveler',
    baseFare: 20,
    driverBata: 500,
    capacity: 7,
  },
] as const

export const FLOOR_OPTIONS = [
  'Ground - Ground',
  'Ground - Upper / Upper - Ground',
] as const

export const POPULAR_TRIPS = [
  {
    id: 1,
    from: 'Chennai',
    to: 'Ooty',
    price: 4500,
    image:
      'https://images.unsplash.com/photo-1593693397649-652e145398a6?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    from: 'Chennai',
    to: 'Coimbatore',
    price: 7722,
    image:
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    from: 'Chennai',
    to: 'Vellore',
    price: 2099,
    image:
      'https://images.unsplash.com/photo-1564501049422-265c7824498e?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    from: 'Chennai',
    to: 'Trichy',
    price: 5137,
    image:
      'https://images.unsplash.com/photo-1524492412937-b28087a10dae?w=600&h=400&fit=crop',
  },
] as const

export const TESTIMONIALS = [
  {
    id: 1,
    text: 'When the right driver showed up, he had my name. Thanks for your service, it made our last day in India a lot less stressful.',
    author: 'International Traveler',
    service: 'One Way Taxi',
    rating: 5,
  },
  {
    id: 2,
    text: 'Excellent Out Station Taxi service at really short notice. Email confirmations were sent. Driver was waiting 15 mins early. Excellent service all round.',
    author: 'Satisfied Customer',
    service: 'Online Cab Booking',
    rating: 5,
  },
  {
    id: 3,
    text: "We're satisfied. The driver was nice and both times on time. He listened and dropped us at terminal 2, plenty in time.",
    author: 'Family Traveler',
    service: 'Airport Transfer',
    rating: 5,
  },
] as const

export const LOCAL_TAXI_DESTINATIONS = [
  'Ariyalur',
  'Chengalpattu',
  'Cuddalore',
  'Dharmapuri',
  'Erode',
  'Kallakurichi',
  'Kanchipuram',
  'Kanyakumari',
  'Karur',
  'Kodaikanal',
  'Krishnagiri',
  'Mayiladuthurai',
  'Nagapattinam',
  'Nagercoil',
  'Namakkal',
  'Nilgiris',
  'Ooty',
  'Perambalur',
  'Pudukkottai',
  'Ramanathapuram',
  'Ranipet',
  'Sivagangai',
  'Tenkasi',
  'Thanjavur',
  'Theni',
  'Thiruvallur',
  'Thiruvarur',
  'Thoothukudi',
  'Tirupathur',
  'Tiruppur',
  'Tiruvannamalai',
  'Viluppuram',
  'Dindigul',
] as const

export const AIRPORT_TAXI = [
  'Salem Airport Taxi',
  'Madurai Airport Taxi',
  'Trichy Airport Taxi',
  'Coimbatore Airport Taxi',
  'Chennai Airport Taxi',
] as const

export const SERVICE_CATEGORIES = [
  'Madurai',
  'Trichy',
  'Bangalore',
  'Coimbatore',
  'Chennai Taxi',
  'Drop Taxi',
  'Outstation Taxi',
] as const

export const VEHICLE_FLEET = [
  'Indica',
  'Eeco',
  'Figo',
  'Indigo',
  'Logan',
  'Ford Fiesta',
  'Icon',
  'Swift',
  'Desire',
  'Etios',
  'Tavera',
  'Grande',
  'Innova',
  'Xylo',
  'Tempo Traveler',
] as const

export const ABOUT_CONTENT = {
  title: 'About Us',
  paragraphs: [
    'Nesam Tours & Travels Pvt Ltd., Chennai is one of the leading travel service providers in South India. It has been offering excellent customer service to its patrons since years. The company has state-of-the-art technical systems that help in tracking various operations. One can book taxi by simply visiting their office or by calling on their phone number. Online booking is also available.',
    'The company offers a diverse range of vehicles. The range of transport includes Indica, Eeco, Figo, Indigo, Logan, Ford, Fiesta, Icon, Swift, Desire, Etios, Tavera, Grande, Innova, Xylo and Tempo Traveler. All the vehicles are luxurious and offer a comfortable journey. The services are available for 24×7 hours.',
    'The company provides safe vehicles. All the vehicles are checked regularly and maintained well. The drivers are well experienced, properly trained, neatly groomed and polite towards the customers. They have a good knowledge of all the routes that cover the city. Drivers ensure that every passenger enjoys a peaceful journey.',
    'Passengers are offered printed bills which are generated by the automatic meter. The fare is calculated according to the distance traveled. Bill can be paid in cash or via ATM card. Every taxi consists of a Credit Card Swiping Machine. Passengers can use ATM Debit / Credit cards.',
  ],
} as const

export const PRIVACY_POLICY = {
  intro:
    'Nesam Tours & Travels values all customers of this site. We value your privacy and trust. This policy explains the information we collect from you, how we collect this information, and how we use it. By using this website, you are accepting the practices explained in this policy document.',
  sections: [
    {
      title: 'What information Nesam Tours & Travels collects from customers?',
      content:
        'We collect very basic personal information like name, address, email, phone number. We do not collect any bank account details or credit card information or any other financial data.',
    },
    {
      title: 'When does Nesam Tours & Travels collect this information?',
      content:
        'We collect this information while you register with us as a customer. You must register with us if you want to book your travel either online or over phone.',
    },
    {
      title:
        "Whether Nesam Tours & Travels discloses customer's information to third parties?",
      content:
        "Nesam Tours & Travels collects customer's information only for the internal use like processing of bookings and delivery. Nesam Tours & Travels will not disclose any of the personal information of customers to third parties.",
    },
    {
      title: "Does Nesam Tours & Travels protect customer's information?",
      content:
        'Yes. Nesam Tours & Travels protect it from unauthorized access or disclosure to the extent possible.',
    },
    {
      title: 'Policy Updates',
      content:
        'This privacy policy is subject to change and we will intimate on the home page, whenever there is a change in the privacy policy.',
    },
  ],
} as const

export const CANCELLATION_POLICY = {
  intro:
    'The trips booked through Nesam Tours & Travels can be cancelled under the following conditions:',
  sections: [
    {
      title: 'General Cancellation',
      content:
        'There are no cancellation fees except in such cases where the Taxi has already arrived at customer\'s location. In such cases Rs.250 as one time cancellation fee has to be paid to the driver.',
    },
    {
      title: '24-Hour Prior Cancellation',
      content:
        'You may cancel the booking 24 hours prior to the time of journey, without any cancellation charges for all services.',
    },
    {
      title: 'Within 24 Hours of Pick-up',
      content:
        'In case cancellation or shortening of the trip is requested within 24 hours of the pick-up time, the following rules will apply:',
      list: [
        'Multi Day trip: The charge for the first day would be deducted from the total amount and refund will be issued to the user.',
        'Single Day trip / Drop Trip: Refund will be issued to the user only if the reason is genuine / satisfied.',
        'Airport transfer: No Cancellation Charges if Cancelled at least 4 hours prior of pickup time.',
        'If you canceled the trip before 8 hours, amount will be refundable.',
      ],
    },
  ],
} as const

export const TERMS_CONDITIONS = {
  intro:
    'Specially for Tamil Nadu, Pondicherry, Kerala, Karnataka, Andhra Pradesh',
  items: [
    'Chennai-Pondicherry-Chennai Airport Parking applicable (If Any)',
    'Pondicherry Airport / Bus Stand pick up is inclusive of all (10 Kms / 1 Hrs)',
    'Time & Kms will be from (Customer Source to Destination)',
    'Additional passengers should not be allowed.',
    'Trip will be confirmed only after receiving 1/3 of payment in advance',
    'After 1/3 of Payment if we cancel your ride we will pay you double of your deposit amount or will arrange alternate Cab for whatever the amount.',
    'Rates are inclusive of Fuel',
    'Toll, State Tax (If any), Permit & Parking Charges Extra',
    'Payment will be accepted by Cash and Online Transfer only at the end of the trip.',
  ],
} as const

export const BOOKING_NOTE =
  'The actual bill might differ based on actual KMs travelled, waiting time (for drop trips only), hill-station charges, & inter-state permits etc.'

export const ESTIMATE_DISCLAIMERS = [
  'This estimate is inclusive of GST.',
  'This estimate is exclusive of Toll Charges.',
] as const

// Approximate distances for demo fare calculation (km)
export const ROUTE_DISTANCES: Record<string, number> = {
  'Chennai-Ooty': 555,
  'Chennai-Coimbatore': 495,
  'Chennai-Vellore': 140,
  'Chennai-Trichy': 330,
  'Chennai-Bangalore': 345,
  'Chennai-Madurai': 460,
  'Chennai-Pondicherry': 160,
  'Chennai-Kodaikanal': 520,
  'Chennai-Kanyakumari': 705,
  'Chennai-Erode': 400,
  'Chennai-Salem': 340,
  'Chennai-Tirupati': 135,
  'Chennai-Mahabalipuram': 60,
}

export const COMMON_LOCATIONS = [
  'Chennai',
  'Coimbatore',
  'Madurai',
  'Trichy',
  'Bangalore',
  'Ooty',
  'Vellore',
  'Salem',
  'Erode',
  'Pondicherry',
  'Kodaikanal',
  'Kanyakumari',
  'Tirupati',
  'Mahabalipuram',
  'Thanjavur',
  'Nagercoil',
  'Dindigul',
  'Theni',
  'Krishnagiri',
  'Hosur',
] as const
