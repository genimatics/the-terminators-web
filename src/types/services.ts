export type Service = {
  id: number;
  slug: string;
  title: string;
  shortDesc: string;
  icon: string;
  category: string;
  details: {
    description: string;
    overview: string;

    activities: string[];
    features: string[];
  };
};

export type ServicesData = {
  services: Service[];
  categories: string[];
};

const servicesData = {
  services: [
    {
      id: 1,
      slug: 'power-generation',
      title: 'Power Generation',
      shortDesc: 'Diesel Engines, Gas Engines, Solar PV Systems. Sizing according to customer\'s need. Technical & Financial Proposal.',
      icon: '/assets/terminator-images/home/section-one/section-icon1.gif',
      category: 'core',
      details: {
        description: 'Complete power generation solutions including diesel engines, gas engines, and solar PV systems.',
        overview: 'The Terminators have installed and commissioned many Gas Engine and Diesel Engine generators & plants from a few kilo Watts to 5 Mega Watts. The jobs included all aspects of civil construction, Electrical & Mechanical installation, and commissioning. Our team of experienced engineers and technicians ensures that all projects are completed to the highest standards of quality and safety, adhering to international regulations and best practices.',
        activities: [
          'Diesel Engines, Gas Engines, Solar PV Systems',
          'Sizing according to customer\'s need',
          'Technical & Financial Proposal',
          'Procurement/resourcing all material',
          'Installation, testing & Commissioning',
          'Preparing \'As built drawings\'',
        ],
        features: [
          'Custom sizing based on requirements',
          'End-to-end project management',
          'Compliance with international standards',
        ],
        benefits: [
          'Reliable power supply',
          'Reduced operational costs',
          'Scalable solutions for future expansion',
        ],
      },
    },
    {
      id: 2,
      slug: 'earthing-grounding-lightning-protection-systems',
      title: 'Earthing (Grounding) & Lightning Protection Systems',
      shortDesc: 'Protective earthing, Lightning protection assessment, designing and installation, Explosion proof Electrical fittings',
      icon: '/assets/terminator-images/home/section-one/section-icon2.gif',
      category: 'safety',
      details: {
        description: 'Comprehensive earthing and lightning protection systems for safety and compliance.',
        overview: 'The Terminators have designed and implemented several lightning protection systems and made several hundred earthing stations INCLUDING copper plate, rod, pipe, and Chemical Electrodes Earthings. Most of the world-renowned brands like Furse, DEHN, Erico, Cooper etc. have been dealt with.\n\nEarthing (also known as grounding) refers to making Electrical contact with the Earth\'s surface/mass. The Earth is always at Zero potential and is always willing to absorb any quantum of current impressed on it by nature (like Lightning bolts) or by manmade means like a live Electric conductor touching the ground. Through earthing, a conductive path is provided to absorb all electrical potential that either accidentally encounters the mechanical frame of power equipment/housing or is intentionally connected to establish a zero-reference level in case of power generation/distribution. A lightning protection system diverts all incoming lightning strokes into the ground.',
        activities: [
          'Protective earthing',
          'Lightning protection assessment, designing and installation',
          'Explosion proof Electrical fittings for Hazardous/classified areas',
          'Sizing according to customer\'s need',
          'Technical & Financial Proposal',
          'Procurement/assisting client in resourcing all material',
          'Installation, testing & Commissioning',
          'Preparing \'As built drawings\'',
        ],
        features: [
          'Protection against electrical hazards',
          'Lightning strike prevention',
          'Hazardous area compliance',
        ],
        benefits: [
          'Enhanced safety for personnel',
          'Equipment protection',
          'Regulatory compliance',
        ],
      },
    },
    {
      id: 3,
      slug: 'industrial-electrifications',
      title: 'Industrial Electrifications',
      shortDesc: 'Calculation of Lighting level, Suggestions according to site requirements, Sizing according to customer\'s need',
      icon: '/assets/terminator-images/home/section-one/section-icon3.gif',
      category: 'industrial',
      details: {
        description: 'Complete industrial electrification solutions with precise lighting calculations.',
        overview: 'Industrial units and office buildings rely on an efficient flow of electricity for production and management operations. The power supplied to different functionary units varies as per the power availability in the system. Certain units/facilities require uninterrupted power i.e., backed by UPS. We at The Terminators have completed the installation, testing, and commissioning of several power distribution systems in various Industries and buildings.',
        activities: [
          'Calculation of Lighting level',
          'Suggestions according to site requirements',
          'Sizing according to customer\'s need',
          'Technical & Financial Proposal',
          'Procurement/resourcing all material',
          'Installation, testing & Commissioning',
          'Preparing \'As built drawings\'',
        ],
        features: [
          'Precise lighting calculations',
          'Customized solutions',
          'End-to-end project execution',
        ],
        benefits: [
          'Efficient power distribution',
          'Reliable operations',
          'Optimized energy consumption',
        ],
      },
    },
    {
      id: 4,
      slug: 'ht-lt-cable-laying-jointing-termination',
      title: 'HT & LT Cable Laying, Jointing & Termination',
      shortDesc: 'Sizing of Cable ladder/trays, Cable trench sizing, Technical & Financial Proposal, Installation & Commissioning',
      icon: '/assets/terminator-images/home/section-one/section-icon4.gif',
      category: 'cable',
      details: {
        description: 'Professional cable installation and termination services for HT & LT systems.',
        overview: 'A cable is an electrical conductor used to carry electrical currents. Cables come in a host of varieties according to application and usage like Voltage levels, service requirements, protection, and safety requirements. Different types of cables employ different installation, laying, and connecting protocols. The Terminators excel in all such services, whether underground cable laying by excavation or by pulling in ducts, channels, pipes, or cable trays. Accordingly, cable jointing and terminations are made in highly professional ways. The Terminators also provide cable fault/ route location services for subsoil-buried vintage cables.',
        activities: [
          'Sizing of Cable ladder/trays according to customer need',
          'Sizing of cable trench for subsoil/buried cabling',
          'Technical & Financial Proposal',
          'Procurement/resourcing all material',
          'Installation & Commissioning of Cable trays/ladders',
          'Excavation of cable trenches, surfacing, bracketing etc.',
          'Cable Laying as per IEC standards, jointing where required',
          'Markings/warnings/grounding tags',
          'Insulation testing (Meggaring)',
          'Hi-Pot testing where required',
          'Cable fault location/mapping of existing/buried cables',
          'Repairing, Jointing, Terminations',
          'Preparing \'As built drawings\'',
        ],
        features: [
          'IEC standard compliance',
          'Advanced testing equipment',
          'Expert fault diagnosis',
        ],
        benefits: [
          'Reliable cable installation',
          'Professional jointing and termination',
          'Accurate fault detection',
        ],
      },
    },
    {
      id: 5,
      slug: 'lt-panels-pfi-panels-motor-control-centers',
      title: 'LT panels, PFI Panels, Motor Control Centers',
      shortDesc: 'Sizing of panels according to load and customer\'s need, Technical & Financial Proposal, Installation, testing & Commissioning',
      icon: '/assets/terminator-images/home/section-one/section-icon5.gif',
      category: 'control',
      details: {
        description: 'Design and installation of LT panels, power factor improvement panels, and motor control centers.',
        overview: 'LT Panel is an electrical distribution board and the main component of the power distribution system in an industry or building. LT Panels and motor control centers are used with low-tension cables to obtain power from the generator or transformer and distribute electricity to various electrical devices like motors, pumps, plants, and other smaller distribution boards. These panels are designed and fabricated according to the needs/demands of any user entity. The Terminators have designed, fabricated, and installed several such units in large industries and commercial buildings.',
        activities: [
          'Sizing of panels according to load and customer\'s need',
          'Technical & Financial Proposal',
          'Procurement/resourcing all material',
          'Installation, testing & Commissioning',
          'Preparing \'As built drawings\'',
        ],
        features: [
          'Custom panel design',
          'Power factor optimization',
          'Efficient motor control',
        ],
        benefits: [
          'Improved power factor',
          'Efficient motor control',
          'Customized solutions',
        ],
      },
    },
    {
      id: 6,
      slug: 'ht-lt-switchgear',
      title: 'H.T & L.T Switchgear',
      shortDesc: 'Sizing of Equipment\'s & safeties according to load and customer\'s need, Technical & Financial Proposal',
      icon: '/assets/terminator-images/home/section-one/section-icon6.gif',
      category: 'power',
      details: {
        description: 'Complete solutions for HT & LT switchgear installation and commissioning.',
        overview: 'In an electric power system, switchgear is composed of electrical disconnect switches, fuses, or circuit breakers used to control, protect, and isolate electrical equipment. Switchgear is used both to de-energize equipment to allow work to be done and to clear faults downstream. Besides being an integral part of any substation, Certain switchgear equipment is provided and installed as stand-alone units like power distribution boxes in houses, offices, and shops and feeder pillars in the street light system and residential complexes. Many such installations are on The Terminators credit.',
        activities: [
          'Sizing of Equipment\'s & safeties according to load and customer\'s need',
          'Technical & Financial Proposal',
          'Procurement/resourcing all material',
          'Installation, testing & commissioning according to design/placement plan',
          'Preparing \'As built drawings\'',
        ],
        features: [
          'High voltage expertise',
          'Safety-first approach',
          'Comprehensive installation',
        ],
        benefits: [
          'Reliable power control',
          'Enhanced safety',
          'Customized solutions',
        ],
      },
    },
    {
      id: 7,
      slug: 'power-distribution-transformers',
      title: 'Power/ Distribution Transformers',
      shortDesc: 'Sizing of Equipment\'s & safeties according to load and customer\'s need, Technical & Financial Proposal',
      icon: '/assets/terminator-images/home/section-one/section-icon1.gif',
      category: 'power',
      details: {
        description: 'Installation, maintenance, and replacement of power and distribution transformers.',
        overview: 'Usually, power transformers are ingredients of a substation where they take high-voltage electricity with a small current and change it into low-voltage electricity with a large current, or vice versa; and are connected with protection and distribution switchgear. At times these are required to be maintained for Oil testing and refilling, repair of bushings and coils, etc. Also, in the event of an increase in load, these are replaced by more heavier units. The Terminators have replaced, repaired, and reinstalled several Power/distribution transformers in substations and at pole-mounted stations for various Industries.',
        activities: [
          'Sizing of Equipment\'s & safeties according to load and customer\'s need',
          'Technical & Financial Proposal',
          'Procurement/resourcing all material',
          'Installation, testing & commissioning according to design/placement plan',
          'Preparing \'As built drawings\'',
        ],
        features: [
          'Transformer expertise',
          'Maintenance services',
          'Replacement solutions',
        ],
        benefits: [
          'Reliable power transformation',
          'Expert maintenance',
          'Load optimization',
        ],
      },
    },
    {
      id: 8,
      slug: 'construction-sub-stations-switchyards-grids',
      title: 'Construction of Sub-Stations, Switchyards & Grids',
      shortDesc: 'Sizing of Equipment\'s & safeties according to load and customer\'s need, Technical & Financial Proposal',
      icon: '/assets/terminator-images/home/section-one/section-icon2.gif',
      category: 'infrastructure',
      details: {
        description: 'Complete construction of electrical substations, switchyards, and grids.',
        overview: 'The role of a substation is to step down high voltage electricity from the transmission system e.g., 11,000 Volts to lower voltage electricity viz 415/220 V so it can be easily supplied to homes and businesses through our street distribution lines. Accordingly, the substation houses Power transformers, HT and LT switchgear and interconnecting cables. Several substations have been installed and commissioned by The Terminators.',
        activities: [
          'Sizing of Equipment\'s & safeties according to load and customer\'s need',
          'Technical & Financial Proposal',
          'Procurement/resourcing all material',
          'Installation, testing & commissioning according to design/placement plan',
          'Preparing \'As built drawings\'',
        ],
        features: [
          'Turnkey solutions',
          'Grid expertise',
          'Comprehensive construction',
        ],
        benefits: [
          'Reliable power distribution',
          'Grid stability',
          'Customized solutions',
        ],
      },
    },
    {
      id: 9,
      slug: 'indoor-outdoor-lighting',
      title: 'Indoor & Outdoor Lighting',
      shortDesc: 'Security lights installation, Watch and ward service lighting, Area lighting solutions, Energy-efficient lighting design',
      icon: '/assets/terminator-images/home/section-one/section-icon3.gif',
      category: 'lighting',
      details: {
        description: 'Professional lighting solutions for indoor and outdoor applications including hazardous areas.',
        overview: 'The lighting needs of clients are customized according to the specific need of luminance level required at a particular location. Software-based designs are employed to assure optimum lighting while focusing on energy conservation, human need, and ambiance.\n\nAt certain classified areas and zones where there is a danger of fire or explosion due to the heat generated by lamps or arching in contacts of a switching device, the Code determines and demands various safety measures and categorizes the areas to be protected against such risks by employing Explosion-proof wiring, fittings, power devices, and lights. The Terminators have supplied and installed many such systems for our valued clients in the Petrochemical industry.\n\nA lighting pole or mast or bracket is a lamp post, mounted to provide a raised source of light on the edge of a road, wall or path, or any area / Arena. Usually, it is a fabricated metallic structure of desired size and shape protected and coated to withstand weather harshness. The Terminators have supplied and installed several such poles and masts.',
        activities: [
          'Security lights installation',
          'Watch and ward service lighting',
          'Area lighting solutions',
          'Energy-efficient lighting design',
          'Explosion-proof wiring, lights, and power equipment for classified areas',
        ],
        features: [
          'Energy efficient solutions',
          'Enhanced security lighting',
          'Explosion-proof systems for hazardous areas',
        ],
        benefits: [
          'Optimal illumination',
          'Energy savings',
          'Enhanced safety in hazardous areas',
        ],
      },
    },
    {
      id: 10,
      slug: 'telecommunications-towers-masts-poles',
      title: 'Telecommunications Towers, Masts, and Poles',
      shortDesc: 'Telecommunication Towers, Guy Mast Towers, Antennae brackets and customized support structures',
      icon: '/assets/terminator-images/home/section-one/section-icon4.gif',
      category: 'telecom',
      details: {
        description: 'Design, fabrication, and installation of telecommunication infrastructure.',
        overview: 'Telecommunications Towers, Masts, and poles are simply mechanical structures designed and fabricated to raise the antennae up high enough to send and receive radio signals. Several types of such structures have been designed, fabricated, assembled, and installed by The Terminators for Cellular mobile companies in Pakistan.',
        activities: [
          'Telecommunication Towers',
          'Guy Mast Towers',
          'Antennae brackets and customized support structures',
        ],
        features: [
          'Custom fabrication',
          'Structural engineering',
          'Complete installation',
        ],
        benefits: [
          'Reliable signal transmission',
          'Custom designed structures',
          'Durable construction',
        ],
      },
    },
    {
      id: 11,
      slug: 'transmission-lines-poles-towers',
      title: 'Transmission Lines, Poles & Towers',
      shortDesc: 'Street lights, Transmission lines, stringing services & Installation, HT & LT service poles and support structures',
      icon: '/assets/terminator-images/home/section-one/section-icon5.gif',
      category: 'infrastructure',
      details: {
        description: 'Fabrication and installation of transmission infrastructure including poles, towers, and street lighting.',
        overview: 'We offer comprehensive capabilities in the fabrication and installation of street light poles, transmission line structures, and HT & LT service poles, supported by robust engineering and quality control processes. Our services include precision fabrication of poles and support structures, along with complete installation, erection, and alignment at site. We also provide reliable transmission line stringing and installation services, ensuring safe handling, accurate tensioning, and compliance with industry standards. With experienced teams and modern equipment, we deliver durable, efficient, and timely solutions tailored to project requirements.',
        activities: [
          'Street lights',
          'Transmission lines, stringing services & Installation',
          'HT & LT service poles and support structures',
        ],
        features: [
          'Precision fabrication',
          'Industry standard compliance',
          'Complete installation services',
        ],
        benefits: [
          'Reliable transmission network',
          'Weather-resistant structures',
          'Timely project delivery',
        ],
      },
    },
    {
      id: 12,
      slug: 'radio-base-transmission-stations-data-switching-centers',
      title: 'Radio/Base transmission Stations, Data & Switching centers',
      shortDesc: 'Design & sizing, Raised false flooring, Air conditioning, Fire Alarm systems, Un-interrupted power supply',
      icon: '/assets/terminator-images/home/section-one/section-icon6.gif',
      category: 'telecom',
      details: {
        description: 'Complete solutions for data centers and transmission stations with all supporting systems.',
        overview: 'A data Centre is a building, a dedicated space within a building, or a group of buildings used to house computer systems and associated components, such as telecommunications / transmission systems and data storage systems.\n\nIt is essentially a facility that centralizes an organization\'s shared IT operations and equipment for the purposes of storing, processing, and disseminating data and applications. Because they house an organization\'s most critical and proprietary assets, data centers are vital to the continuity of daily operations. As such, the area demands high-level utility provisions, safeties, and securities. We have established data centers for many organizations and equipped these with Uninterrupted power supply, raised flooring, cable tray network, Air-conditioning, dehumidification, Automatic Fire detection & Extinguishing system, access control, EM Shielding, Earthing and Lightning protection systems...',
        activities: [
          'Design & sizing',
          'Raised false flooring',
          'False ceilings',
          'Air conditioning',
          'Fire Alarm, warning & extinguishing systems',
          'Dehumidification',
          'Intrusion alarm/warning',
          'Lighting & Controls',
          'Un-interrupted power supply system',
          'Hybrid power systems',
          'Placement & mounting of Data equipment and accessories',
          'Standby generator – Canopy/Shelter',
        ],
        features: [
          'Mission-critical infrastructure',
          'Redundant systems',
          'High security standards',
        ],
        benefits: [
          'Reliable data center operations',
          'High level of security',
          'Redundant power systems',
        ],
      },
    },
    {
      id: 13,
      slug: 'safety-and-security',
      title: 'Safety and Security',
      shortDesc: 'Fire Alarm, warning & extinguishing systems, Intrusion alarm/warning, Emergency shutdown systems',
      icon: '/assets/terminator-images/home/section-one/section-icon1.gif',
      category: 'safety',
      details: {
        description: 'Comprehensive safety and security systems for various facilities.',
        overview: 'A fire alarm system has a number of devices working together to detect and warn people through visual and audio appliances when smoke, fire, carbon monoxide, or other emergencies are present. If coupled with a network of cylinders, tanks, pipes, and valves to automatically terminate fire, it becomes Fire Alarm & Extinguishing system. Automatic fire extinguishing systems are usually employed in sensitive and remote installations with minimum or no human attendance. The Terminators have installed and commissioned several such systems in Cellular mobile base stations, Data centers, testing facilities/laboratories, and switch rooms.',
        activities: [
          'Fire Alarm, warning & extinguishing systems',
          'Intrusion alarm/warning',
          'Emergency shutdown systems',
        ],
        features: [
          'Automatic fire detection',
          'Integrated security systems',
          'Remote monitoring capability',
        ],
        benefits: [
          'Enhanced safety',
          'Property protection',
          'Regulatory compliance',
        ],
      },
    },
    {
      id: 14,
      slug: 'solar-power-systems',
      title: 'Solar Power Systems',
      shortDesc: 'System sizing according to customer\'s need, Selection of Solar panels, inverters and accessories, Battery bank sizing',
      icon: '/assets/terminator-images/home/section-one/section-icon2.gif',
      category: 'renewable',
      details: {
        description: 'End-to-end solar power system solutions for residential and commercial applications.',
        overview: 'We provide end-to-end capabilities for the fabrication and installation of solar power systems, tailored to meet each customer\'s specific energy requirements. Our services include accurate system sizing based on load analysis, careful selection of high-quality solar panels, inverters, and associated accessories, and precise battery bank sizing to ensure reliable backup and optimal performance. From design to complete installation and commissioning, our experienced team delivers efficient, safe, and sustainable solar solutions built to industry standards.\n\nMany domestic Solar power generation units (Off grid) have been supplied and installed up to 10 kW. We excel in repairing and restoring any existing faulty systems.',
        activities: [
          'System sizing according to customer\'s need',
          'Selection of Solar panels, inverters and accessories',
          'Battery bank sizing',
          'Installation of system',
        ],
        features: [
          'End-to-end solutions',
          'High-quality components',
          'Professional installation',
        ],
        benefits: [
          'Clean energy generation',
          'Reduced electricity costs',
          'Environmentally friendly',
        ],
      },
    },
    {
      id: 15,
      slug: 'customized-test-benches-panels',
      title: 'Customized Test Benches and Panels',
      shortDesc: 'Test benches, Mimic panels for specific testing requirements',
      icon: '/assets/terminator-images/home/section-one/section-icon3.gif',
      category: 'testing',
      details: {
        description: 'Custom designed test benches and panels for specific client testing needs.',
        overview: 'The Terminators have Indigenously designed several test benches and panels to meet the specific needs of its clients. A test bench was designed and developed to provide factory-level testing of transformers for K-Electric, once the burnt or damaged transformers are repaired and re-winded at the KE transformer repair factory. Besides, we have completed some similar projects for our valued clients in cable manufacturing industry.',
        activities: [
          'Test benches',
          'Mimic panels',
        ],
        features: [
          'Custom solutions',
          'Precision testing equipment',
          'Industry-specific designs',
        ],
        benefits: [
          'Customized testing solutions',
          'Accurate test results',
          'Industry-specific designs',
        ],
      },
    },
    {
      id: 16,
      slug: 'remodeling-relocation-setting-inspection-services',
      title: 'Remodeling, Relocation, Setting and Inspection services',
      shortDesc: 'Removal of existing electrical switchgear, Shifting to new locations, Load Enhancement, Inspection & valuation',
      icon: '/assets/terminator-images/home/section-one/section-icon4.gif',
      category: 'maintenance',
      details: {
        description: 'Professional services for remodeling, relocation, and inspection of electrical systems.',
        overview: 'We offer comprehensive remodeling, relocation, setting, and inspection services for electrical facilities, ensuring safe upgrades and efficient reuse of assets. Our capabilities include the removal and assessment of existing, old, or faulty electrical switchgear, careful shifting of serviceable switchgear and cables to new locations, and the integration of new equipment to expand or modernize facilities. We also support load enhancement projects through proper resizing of switchgear and plant, along with detailed inspection and valuation of equipment damaged by fire or accidents, providing reliable technical assessments and practical solutions.',
        activities: [
          'Removal of existing /old/ faulty Electrical switchgear and assessment',
          'Shifting of useable Electrical switchgear and cables to new locations',
          'Addition of new equipment to expand existing facilities',
          'Load Enhancement and resizing of switchgear/plant',
          'Inspection & valuation of faulty equipment damaged by fire/accidents',
        ],
        features: [
          'Minimal downtime',
          'Expert assessment',
          'Safe relocation procedures',
        ],
        benefits: [
          'Efficient system upgrades',
          'Minimal operational disruption',
          'Expert equipment assessment',
        ],
      },
    },
    {
      id: 17,
      slug: 'annual-maintenance-contracts',
      title: 'Annual maintenance Contracts (Office buildings/factories/remote locations)',
      shortDesc: 'One-time Maintenance visits, Routine maintenance with deployed staff, Turnkey solutions with provision of consumables',
      icon: '/assets/terminator-images/home/section-one/section-icon5.gif',
      category: 'maintenance',
      details: {
        description: 'Annual maintenance contracts for offices, factories, and remote locations covering multiple disciplines.',
        overview: 'We provide comprehensive Annual Maintenance Contract (AMC) services covering electrical, plumbing, power generation, and civil maintenance for office buildings, factories, and remote locations. Our capabilities include one-time maintenance visits with thorough testing and inspections, routine preventive maintenance supported by deployed technical staff, and complete turnkey solutions. We also manage the supply and replacement of required consumables, electrical, mechanical, and civil fittings and fixtures, ensuring reliable operations, reduced downtime, and well-maintained facilities year-round.',
        activities: [
          'One-time Maintenance visits, testing/inspection',
          'Routine maintenance with deployed staff',
          'Turnkey solutions with provision of consumables/Electrical fittings & Fixtures',
        ],
        features: [
          'Regular maintenance schedules',
          'Emergency response',
          'Multi-discipline coverage',
        ],
        benefits: [
          'Proactive maintenance',
          'Reduced breakdowns',
          'Cost-effective operations',
        ],
      },
    },
  ],
  categories: [
    'core',
    'safety',
    'industrial',
    'lighting',
    'cable',
    'control',
    'power',
    'infrastructure',
    'telecom',
    'testing',
    'renewable',
    'maintenance',
  ],
};

export function getAllServices(): Service[] {
  return servicesData.services;
}

export function getServiceBySlug(slug: string) {
  // console.log({ slug });

  return servicesData.services.find(service => service.slug === slug);
}

export function getFeaturedServices(limit: number = 6): Service[] {
  return servicesData.services.slice(0, limit);
}

export function getServicesByCategory(category: string): Service[] {
  return servicesData.services.filter(service => service.category === category);
}
