import { HVAC_IMAGES, AUTHENTIC_WORK_IMAGES } from '../assets/images';

export interface DetailedService {
  id: string;
  slug: string;
  title: string;
  category: 'Heating & Cooling' | 'Commercial Kitchen' | 'Gas & Piping' | 'Ventilation';
  subtitle: string;
  description: string;
  heroImage: string;
  iconName: string;
  pricingEstimate: string;
  dispatchTime: string;
  warranty: string;
  benefits: string[];
  gallery?: {
    title: string;
    image: string;
    caption: string;
  }[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  commonIssues: string[];
  equipmentHandled: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const DETAILED_SERVICES: Record<string, DetailedService> = {
  'furnace-heating': {
    id: 'furnace-heating',
    slug: 'furnace-heating',
    title: 'Furnace & Heating Systems',
    category: 'Heating & Cooling',
    subtitle: 'High-Efficiency Furnace Installation, Seasonal Tune-Ups & 24/7 Emergency Repairs in Mississauga & GTA',
    description: 'Keep your property warm and safe throughout harsh Canadian winters. Our TSSA-registered technicians handle gas furnaces, boilers, heat exchangers, smart thermostat integrations, and emergency no-heat calls with rapid dispatch across the Greater Toronto Area.',
    heroImage: HVAC_IMAGES.serviceFurnace,
    iconName: 'Flame',
    pricingEstimate: 'Free Diagnostics with Repair • Transparent Upfront Quotes',
    dispatchTime: '30–60 Min Emergency Dispatch',
    warranty: '10-Year Heat Exchanger & 1-Year Labor Guarantee',
    benefits: [
      'TSSA-Registered Gas Technicians (G1/G2 licensed)',
      'Up to 98% AFUE high-efficiency furnace installations',
      '24/7 emergency heat restoration for freezing temperatures',
      'Carbon monoxide leak detection and safety combustion analysis',
      'Eligible for Ontario energy efficiency rebate programs'
    ],
    keyFeatures: [
      {
        title: 'Complete Combustion Analysis',
        description: 'Using digital flue gas analyzers, we test draft, gas pressure, and carbon monoxide levels to guarantee maximum heating efficiency and family safety.'
      },
      {
        title: 'Blower Motor & Inducer Overhauls',
        description: 'We replace and tune variable-speed ECM blower motors, draft inducer assemblies, and pressure switches for quiet, reliable operation.'
      },
      {
        title: 'Heat Exchanger Inspections',
        description: 'Thorough camera and static pressure inspections to verify zero hairline fractures or dangerous gas leaks before the winter peak.'
      },
      {
        title: 'Smart Climate Automation',
        description: 'Integration of Ecobee, Google Nest, and Honeywell commercial smart thermostats for remote zoning and energy bill reductions.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Instant Dispatch & Arrival',
        description: 'Our mobile van arrives fully equipped with diagnostic meters, universal ignition controls, and OEM replacement parts.'
      },
      {
        step: '02',
        title: 'Full-System Diagnostic Check',
        description: 'We inspect the flame sensor, ignitor, gas manifold pressure, safety switches, and thermostat signals.'
      },
      {
        step: '03',
        title: 'Written Upfront Quotation',
        description: 'You receive clear repair options and pricing before any work begins. No hidden overtime fees.'
      },
      {
        step: '04',
        title: 'TSSA-Compliant Repair & Testing',
        description: 'Execution of certified repair, full flame cycle verification, temperature rise test, and digital service documentation.'
      }
    ],
    commonIssues: [
      'Furnace blowing cold air or cycling on and off rapidly (short cycling)',
      'Loud humming, squealing, or rattling noises from blower housing',
      'Yellow or flickering burner flame instead of a steady crisp blue',
      'Faulty hot surface ignitor or clogged condensation drain lines',
      'Thermostat not communicating with main control board'
    ],
    equipmentHandled: [
      'Lennox, Carrier, Trane, Keeprite, York, Goodman & Rheem Furnaces',
      'High-Efficiency Modulating & Two-Stage Condensing Units',
      'Commercial Unit Heaters & Infrared Tube Heaters',
      'Gas & Electric Hydronic Heating Boilers'
    ],
    faqs: [
      {
        question: 'How quickly can a technician reach my home in Mississauga or Brampton?',
        answer: 'Our headquarters at 510 Ravenstone Ct in Mississauga gives us immediate access to Highway 401, 403, and 410. Emergency calls typically receive a technician within 30 to 60 minutes.'
      },
      {
        question: 'How often should a furnace be serviced in Ontario?',
        answer: 'We recommend annual preventative maintenance every autumn. Regular tuning preserves manufacturer warranties, extends lifespan by 5–8 years, and prevents surprise mid-winter breakdowns.'
      }
    ]
  },

  'air-conditioning': {
    id: 'air-conditioning',
    slug: 'air-conditioning',
    title: 'Air Conditioning Systems',
    category: 'Heating & Cooling',
    subtitle: 'Central AC Installation, Ductless Mini-Splits & Precision Refrigerant Diagnostics',
    description: 'Beat summer heatwaves with whisper-quiet, ultra-efficient cooling. AWcomfort delivers complete central AC replacements, multi-zone ductless mini-split systems, capacitor replacements, and eco-friendly R32/R410A refrigerant recharges across Mississauga and the GTA.',
    heroImage: HVAC_IMAGES.serviceAcCondenser,
    iconName: 'Snowflake',
    pricingEstimate: 'Comprehensive Tune-up from $99 • Free Installation Estimates',
    dispatchTime: 'Same-Day Service Available',
    warranty: '10-Year Compressor Warranty & 100% Satisfaction Guarantee',
    benefits: [
      'SEER2 ratings up to 22+ for drastically lower electric bills',
      'Ultra-quiet sound dampening down to 55 dBA',
      'Multi-zone ductless split options for homes without ductwork',
      'Precision electronic micron vacuum and nitrogen pressure testing',
      'Certified F-Gas and ODP refrigerant handling compliance'
    ],
    gallery: [
      {
        title: 'Digital Manifold Pressure Diagnostics',
        image: AUTHENTIC_WORK_IMAGES.acRefrigerantDiagnostics,
        caption: 'Appion digital vacuum gauges, micron evacuation, and refrigerant diagnostics on outdoor condenser.'
      }
    ],
    keyFeatures: [
      {
        title: 'Compressor & Condenser Coil Rejuvenation',
        description: 'Chemical coil washing, fin straightening, and contactor testing to restore maximum cooling capacity during 30°C+ humid GTA days.'
      },
      {
        title: 'Ductless Multi-Zone Mini Splits',
        description: 'Ideal for custom homes, sunrooms, commercial offices, and older residential properties lacking central duct infrastructure.'
      },
      {
        title: 'Refrigerant Leak Detection',
        description: 'Electronic sniffer and UV dye leak detection followed by certified nitrogen pressure testing and proper weight-based recharges.'
      },
      {
        title: 'Airflow Optimization & TXV Valves',
        description: 'Thermostatic expansion valve (TXV) calibration and static duct pressure adjustments for balanced room-by-room temperatures.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Thermal Load Calculation',
        description: 'We perform Manual J load calculations to size the AC tonnage correctly, preventing humidity issues caused by oversized units.'
      },
      {
        step: '02',
        title: 'System Component Evaluation',
        description: 'Testing dual run capacitors, condenser fan motors, compressor start amps, and indoor evaporator coil cleanliness.'
      },
      {
        step: '03',
        title: 'Precision Servicing or Install',
        description: 'Deep evacuation using digital vacuum gauges below 500 microns to eliminate moisture and non-condensibles.'
      },
      {
        step: '04',
        title: 'Performance Verification',
        description: 'Measuring subcooling and superheat metrics to confirm peak factory operating efficiency.'
      }
    ],
    commonIssues: [
      'AC running continuously but not cooling the house below 24°C',
      'Ice forming on the outdoor copper suction line or indoor coil',
      'Water leaking from the air handler inside the basement',
      'Loud clicking or buzzing sound when the condenser tries to start',
      'High indoor humidity even while air conditioner is active'
    ],
    equipmentHandled: [
      'Central Air Conditioners (1.5 to 5.0 Ton Residential & Commercial)',
      'Mitsubishi, Daikin & Fujitsu Ductless Mini-Splits',
      'Rooftop Packaged AC Units for Retail & Office Plazas',
      'Cased & Uncased Evaporator Coils & TXV Metering Devices'
    ],
    faqs: [
      {
        question: 'Should I repair or replace my older R-22 air conditioner?',
        answer: 'R-22 Freon is phased out and costly. If your system is over 10-12 years old and leaking, upgrading to a high-efficiency modern system pays for itself in energy savings and eliminates ozone-depleting risks.'
      }
    ]
  },

  'heat-pumps': {
    id: 'heat-pumps',
    slug: 'heat-pumps',
    title: 'Heat Pumps & Hybrid Systems',
    category: 'Heating & Cooling',
    subtitle: 'Cold-Climate Inverter Heat Pumps Engineered for Canadian Winters Down to -30°C',
    description: 'Transform your energy efficiency with modern cold-climate heat pump technology. Enjoy quiet, all-in-one heating in winter and cooling in summer with dual-fuel hybrid compatibility and substantial government rebate eligibility.',
    heroImage: HVAC_IMAGES.serviceHeatPump,
    iconName: 'Zap',
    pricingEstimate: 'Rebate Eligible • Significant Annual Carbon & Energy Savings',
    dispatchTime: 'Priority Scheduling',
    warranty: '12-Year Extended Limited Parts & Compressor Warranty',
    benefits: [
      'Cold-climate inverter operation providing full heat down to -30°C',
      'Dual-fuel hybrid setup: heat pump handles mild cold, gas furnace kicks in on extreme freezes',
      'Reduces home heating carbon footprint by up to 60-70%',
      'Cuts cooling electricity costs in summer compared to standard AC units',
      'Government and Enbridge rebate assistance provided'
    ],
    keyFeatures: [
      {
        title: 'Cold Climate Variable Speed Inverters',
        description: 'Advanced compressors ramp smoothly between 20% and 100% capacity to maintain exact target temperatures with minimal power draw.'
      },
      {
        title: 'Hybrid Dual-Fuel Integration',
        description: 'Seamless pairing with your existing high-efficiency furnace for the ultimate combination of electrical efficiency and emergency gas backup.'
      },
      {
        title: 'Intelligent Defrost Controls',
        description: 'Smart demand defrost cycles eliminate ice buildup on the outdoor coil without wasting auxiliary heating power.'
      },
      {
        title: 'Whisper-Quiet Sound Blankets',
        description: 'Engineered for close residential lot lines in Mississauga and Toronto with operating sound levels lower than a quiet conversation.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Site Energy Audit & Sizing',
        description: 'Evaluating electrical panel capacity (200A vs 100A), duct static pressure, and insulation levels.'
      },
      {
        step: '02',
        title: 'Rebate Qualification Review',
        description: 'Confirming AHRI-matched system ratings to ensure full rebate compliance under provincial clean energy grants.'
      },
      {
        step: '03',
        title: 'Professional Mechanical Installation',
        description: 'Setting outdoor unit on raised snow stands, running insulated line sets, and wiring hybrid furnace control interfaces.'
      },
      {
        step: '04',
        title: 'Smart Thermostat & Cut-Over Setup',
        description: 'Programming economic balance points so the system automatically switches fuels at the most cost-effective outdoor temperature.'
      }
    ],
    commonIssues: [
      'Auxiliary heat strips running constantly and spiking hydro bills',
      'Outdoor unit coated in thick ice that fails to defrost',
      'Thermostat not commanding heat pump vs furnace staging correctly',
      'Inverter board communication fault codes'
    ],
    equipmentHandled: [
      'Cold-Climate Air-Source Heat Pumps (ASHP)',
      'Centrally Ducted Heat Pump Air Handlers',
      'Ductless Hyper-Heat Mini-Splits',
      'Dual-Fuel Hybrid Integration Systems'
    ],
    faqs: [
      {
        question: 'Can a heat pump really heat a home during a freezing Canadian winter?',
        answer: 'Yes! Modern cold-climate heat pumps utilize vapor injection and advanced inverter compressors that extract heat from outdoor air down to -25°C and -30°C. For added peace of mind, our hybrid dual-fuel systems keep your gas furnace as a fail-safe backup.'
      }
    ]
  },

  'pizza-ovens': {
    id: 'pizza-ovens',
    slug: 'pizza-ovens',
    title: 'Commercial Pizza Oven Installation & Repairs',
    category: 'Commercial Kitchen',
    subtitle: 'Specialized Service for Deck, Conveyor, Rotating & Wood-Gas Hybrid Pizza Ovens',
    description: 'Your pizza oven is the heart of your restaurant. AWcomfort provides specialized, certified installation, gas piping, burner calibration, refractory stone restoration, and 24/7 emergency repair services for pizzerias, trattorias, and bakeries across the GTA.',
    heroImage: HVAC_IMAGES.servicePizzaOven,
    iconName: 'Flame',
    pricingEstimate: 'Commercial Service Calls with Rapid Emergency Dispatch',
    dispatchTime: '24/7 Restaurant Priority Emergency Service',
    warranty: 'Certified TSSA Gas Tagging & Workmanship Guarantee',
    benefits: [
      'Certified technicians experienced with all major Italian and North American pizza oven brands',
      'Emergency same-day and evening service to minimize dinner rush downtime',
      'TSSA-compliant gas manifold connection and pressure calibration',
      'Refractory deck stone leveling, thermopile, and flame supervision replacements',
      'Ventilation hood interlock and make-up air compliance'
    ],
    gallery: [
      {
        title: 'Stone Hearth Baking & Flame Wall',
        image: AUTHENTIC_WORK_IMAGES.pizzaBakingHearth,
        caption: '750°F active hearth baking test verifying clean burner firing and uniform stone deck heat.'
      },
      {
        title: 'Bakers Pride Commercial Pizza Oven',
        image: AUTHENTIC_WORK_IMAGES.bakersPrideOven,
        caption: 'Stacked commercial Bakers Pride deck oven installation in active GTA Italian pizzeria.'
      },
      {
        title: 'Double Deck High-Capacity System',
        image: AUTHENTIC_WORK_IMAGES.bakersPrideDoubleDeck,
        caption: 'Full double deck Bakers Pride oven system with gas manifold piping and independent thermostats.'
      },
      {
        title: 'Interior Flame Inspection & Tuning',
        image: AUTHENTIC_WORK_IMAGES.pizzaOvenFlame,
        caption: 'Calibrating burner nozzles, millivolt pilots, and refractory flame patterns to eliminate soot.'
      }
    ],
    keyFeatures: [
      {
        title: 'Precision Burner & Pilot Tuning',
        description: 'Balancing gas-air mixture for clean combustion, intense uniform floor heat, and zero carbon buildup on oven stones.'
      },
      {
        title: 'Thermostat & Safety High-Limit Calibration',
        description: 'Testing and replacing faulty thermocouples, digital temperature controllers, and safety shutoff solenoids.'
      },
      {
        title: 'TSSA High-BTU Gas Hookups',
        description: 'Full commercial line sizing, flexible stainless gas connectors, manual shutoff valves, and certified pressure drop tests.'
      },
      {
        title: 'Baking Deck Restoration & Insulation',
        description: 'Replacing broken cordierite or refractory deck stones and repairing heat-loss perimeter seals.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Urgent Dispatch to Kitchen',
        description: 'Technician arrives directly at your pizzeria with commercial gas testing instruments and universal pilot/valve parts.'
      },
      {
        step: '02',
        title: 'Combustion & Electrical Diagnostic',
        description: 'Testing millivolt output on thermopiles, spark ignitors, gas pressure regulator, and safety micro-switches.'
      },
      {
        step: '03',
        title: 'Repair Execution & Firing Test',
        description: 'Component replacement, burner tube cleanout, and high-heat firing test up to 700°F–900°F operating conditions.'
      },
      {
        step: '04',
        title: 'TSSA Safety Certification',
        description: 'Pressure testing gas connections and tagging the appliance for commercial code compliance.'
      }
    ],
    commonIssues: [
      'Oven will not reach target baking temperature (stuck at 400°F instead of 750°F)',
      'Pilot light refuses to stay lit when releasing the safety dial',
      'Uneven baking: one side burns while the other is raw',
      'Gas smell around burner controls or under the deck assembly',
      'Conveyor motor belt jammed or speed controller fluctuating'
    ],
    equipmentHandled: [
      'Moretti Forni, Cuppone, Marana Forni & Valoriani Italian Ovens',
      'Bakers Pride, Blodgett & Marsal Commercial Deck Ovens',
      'Middleby Marshall & Lincoln Impinger Conveyor Ovens',
      'Custom Wood-Fired Gas-Assist Brick Pizza Ovens'
    ],
    faqs: [
      {
        question: 'Do you offer after-hours emergency repair if our pizza oven breaks down on a Friday night?',
        answer: 'Yes! We understand that a broken oven during the weekend dinner rush halts business. Our emergency commercial technician line is active 24/7 across Mississauga, Toronto, Brampton, and the GTA.'
      }
    ]
  },

  'commercial-appliances': {
    id: 'commercial-appliances',
    slug: 'commercial-appliances',
    title: 'Commercial Kitchen Appliances & Refrigeration',
    category: 'Commercial Kitchen',
    subtitle: 'Walk-In Coolers, Commercial Freezers, Fryers, Ranges & Prep Counters',
    description: 'Keep your commercial kitchen operating at food-safe standards. AWcomfort provides comprehensive commercial refrigeration and cooking line service, preventative maintenance contracts, and rapid emergency repairs for hospitality and institutional clients.',
    heroImage: HVAC_IMAGES.serviceAppliances,
    iconName: 'UtensilsCrossed',
    pricingEstimate: 'Competitive Commercial Rates • Preventative Maintenance Plans',
    dispatchTime: '24/7 Food Safety Emergency Response',
    warranty: 'OEM Parts & Labor Warranty Included',
    benefits: [
      'Prevent catastrophic food inventory loss with rapid refrigeration response',
      'Health department temperature compliance checks & temperature calibration',
      'Commercial gas cooking line repair (ranges, fryers, griddles, combi ovens)',
      'Quarterly preventative maintenance programs for restaurants and franchises',
      'Fully insured and certified refrigeration and gas technicians'
    ],
    gallery: [
      {
        title: 'Commercial Cooking Line Ventilation Canopy',
        image: AUTHENTIC_WORK_IMAGES.commercialKitchenHood,
        caption: 'Type 1 heavy-gauge stainless steel exhaust hood canopy installed over commercial pizza ovens and cooking suite.'
      },
      {
        title: 'Commercial Pizza Baking Suite',
        image: AUTHENTIC_WORK_IMAGES.bakersPrideDoubleDeck,
        caption: 'Heavy-duty commercial kitchen baking equipment hookup with certified gas line connection.'
      }
    ],
    keyFeatures: [
      {
        title: 'Walk-In Coolers & Blast Freezers',
        description: 'Compressor changeouts, evaporator coil defrost heaters, TXV replacements, and door gasket sealing.'
      },
      {
        title: 'Commercial Gas Ranges & Flat Tops',
        description: 'Burner manifold rebuilds, thermostat replacements, pilot re-plumbing, and high-efficiency flame adjustments.'
      },
      {
        title: 'Under-Counter & Prep Tables',
        description: 'Refrigerant recharging, fan motor replacements, and electronic digital thermostat retrofits.'
      },
      {
        title: 'Deep Fryers & Steam Tables',
        description: 'Millivolt gas valve replacements, high-limit safety cutoffs, and pilot burner servicing.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Emergency Arrival',
        description: 'Immediate dispatch to avoid costly spoilage in temperature-critical walk-in coolers or hot cooking lines.'
      },
      {
        step: '02',
        title: 'Electrical & Refrigerant Diagnostics',
        description: 'Diagnosing defrost timers, compressor windings, contactors, and refrigerant pressures.'
      },
      {
        step: '03',
        title: 'High-Grade Commercial Repair',
        description: 'Replacing defective parts with genuine OEM components to preserve manufacturer reliability.'
      },
      {
        step: '04',
        title: 'Temperature Logging',
        description: 'Monitoring drawdown to required food-safe storage temperatures (+2°C to +4°C for coolers, -18°C for freezers).'
      }
    ],
    commonIssues: [
      'Walk-in cooler temperature rising above 4°C safety threshold',
      'Evaporator coil frozen solid into a block of ice',
      'Commercial fryer pilot not lighting or flame not responding to dial',
      'Water pooling beneath prep counter or reach-in refrigerator',
      'Compressor short-cycling or overheating on thermal overload'
    ],
    equipmentHandled: [
      'True, Turbo Air, Beverage-Air & Continental Refrigeration',
      'Garland, Vulcan, Southbend & Imperial Commercial Ranges',
      'Pitco, Frymaster & Dean Commercial Deep Fryers',
      'Walk-in Box Cam-Lock Cooler & Freezer Systems'
    ],
    faqs: [
      {
        question: 'Do you offer monthly or quarterly preventative maintenance for restaurants?',
        answer: 'Yes. Our Commercial Care Program includes quarterly coil deep cleans, refrigerant checks, gasket inspections, and gas safety audits to prevent expensive emergency breakdowns during rush hours.'
      }
    ]
  },

  'gas-piping': {
    id: 'gas-piping',
    slug: 'gas-piping',
    title: 'Gas Piping & TSSA Compliance',
    category: 'Gas & Piping',
    subtitle: 'TSSA Registered Commercial & Residential Gas Line Sizing, Pressure Testing & Appliance Hookups',
    description: 'Gas systems require absolute precision and uncompromised safety. AWcomfort is a TSSA-registered gas contractor providing certified black iron and CSST gas piping, appliance hookups, meter expansions, pressure testing, and red-tag clearing across the Greater Toronto Area.',
    heroImage: HVAC_IMAGES.serviceGasPipe,
    iconName: 'ShieldCheck',
    pricingEstimate: 'Free Estimates on New Piping Lines • Fully Permitted & Inspected',
    dispatchTime: 'Immediate Emergency Gas Leak Response',
    warranty: 'Lifetime Workmanship Guarantee on All Threaded Piping',
    benefits: [
      'TSSA Registered Contractor License (mandatory Ontario compliance)',
      'Licensed G1 and G2 Certified Gas Technicians on every project',
      'Emergency gas leak detection and red-tag clearance services',
      'Correct pipe volume sizing for high-BTU pizza ovens and commercial ranges',
      'Official pressure test documentation and Enbridge/utility coordination'
    ],
    keyFeatures: [
      {
        title: 'High-BTU Commercial Kitchen Manifolds',
        description: 'Custom fabricated black iron headers designed to supply multiple cookline appliances without pressure drop.'
      },
      {
        title: 'TSSA Pressure & Leak Testing',
        description: 'Hydrostatic and high-pressure nitrogen testing with certified gauges to guarantee 100% gastight seals.'
      },
      {
        title: 'Gas Red-Tag Clearance & Corrections',
        description: 'Clearing Enbridge or utility warning red-tags by bringing non-compliant venting or piping up to Ontario B149.1 code.'
      },
      {
        title: 'Residential Gas Connections',
        description: 'Running lines for gas stoves, BBQ boxes, pool heaters, patio heaters, and backup generators.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Pipe Sizing & Route Planning',
        description: 'Calculating total connected BTU loads and distance from meter to determine correct pipe diameter.'
      },
      {
        step: '02',
        title: 'Code-Compliant Installation',
        description: 'Threading schedule 40 black iron pipe with industrial sealants and seismic support brackets.'
      },
      {
        step: '03',
        title: 'TSSA Pressure Gauge Test',
        description: 'Pressurizing system to required code levels and monitoring gauge for zero pressure loss.'
      },
      {
        step: '04',
        title: 'Official Tagging & Commissioning',
        description: 'Affixing TSSA contractor tags and lighting pilot/burners for final operational check.'
      }
    ],
    commonIssues: [
      'Enbridge issued a Warning Red Tag due to improper piping or venting',
      'Faint sulfur gas odor detected near basement meter or kitchen line',
      'Low gas pressure causing commercial appliances to flicker or underperform',
      'Need to add a high-capacity pizza oven or commercial fryer to existing gas line'
    ],
    equipmentHandled: [
      'Schedule 40 Black Iron Threaded & Welded Gas Piping',
      'TracPipe & Wardflex Corrugated Stainless Steel Tubing (CSST)',
      'Commercial Pressure Regulators & Gas Solenoid Safety Valves',
      'Direct-Bury Polyethylene (PE) Underground Gas Lines for Pools & BBQs'
    ],
    faqs: [
      {
        question: 'Why is TSSA registration important when hiring a gas contractor in Ontario?',
        answer: 'In Ontario, any company performing work on fuel-burning equipment must be registered with the Technical Standards and Safety Authority (TSSA). Hiring an unregistered contractor voids your property insurance and endangers safety. AWcomfort is proud to be fully registered and compliant.'
      }
    ]
  },

  'ventilation-ductwork': {
    id: 'ventilation-ductwork',
    slug: 'ventilation-ductwork',
    title: 'Restaurant Ventilation & Ducting',
    category: 'Ventilation',
    subtitle: 'Type 1 & Type 2 Commercial Exhaust Hoods, Make-Up Air Units (MUA) & Custom Ductwork',
    description: 'Proper kitchen air exchange is essential for chef safety, fire prevention, and municipal health code compliance. AWcomfort designs, installs, balances, and maintains commercial restaurant exhaust systems and make-up air equipment across Mississauga and the GTA.',
    heroImage: HVAC_IMAGES.serviceVentDuct,
    iconName: 'Wind',
    pricingEstimate: 'Custom Ductwork Fabrication & Hood Installation Quotes',
    dispatchTime: 'Scheduled & Emergency Service',
    warranty: 'Fire-Code & Municipal Air Balance Compliant',
    benefits: [
      'NFPA 96 & Ontario Building Code compliant exhaust installations',
      'Make-up air unit (MUA) heating and air balancing for balanced kitchen pressure',
      'Custom welded grease ducting and fire-rated chase fabrication',
      'Rooftop upblast exhaust fan maintenance, belt replacement, and motor repair',
      'Airflow testing with calibrated vane anemometers'
    ],
    gallery: [
      {
        title: 'Rooftop Exhaust Fan & Flue Ducting',
        image: AUTHENTIC_WORK_IMAGES.rooftopExhaustDuctwork,
        caption: 'Commercial rooftop upblast grease exhaust fan mounting and vertical flue ductwork installation.'
      },
      {
        title: 'Commercial Kitchen Hood Canopy',
        image: AUTHENTIC_WORK_IMAGES.commercialKitchenHood,
        caption: 'Stainless steel commercial kitchen ventilation hood with baffle filters and code-compliant clearance.'
      }
    ],
    keyFeatures: [
      {
        title: 'Make-Up Air Balancing',
        description: 'Ensuring kitchen negative pressure does not suck smoke or carbon monoxide into dining rooms or cause exterior doors to stick.'
      },
      {
        title: 'Type 1 Grease Hood Exhausts',
        description: 'Heavy-gauge stainless steel hoods equipped with UL-listed baffle grease filters and automatic fire damper connections.'
      },
      {
        title: 'Upblast Exhaust Fan Overhauls',
        description: 'V-belt tensioning, high-temp bearing lubrication, and motor replacements for rooftop kitchen fans.'
      },
      {
        title: 'Custom Galvanized Sheet Metal Ductwork',
        description: 'Precision duct fabrication for high static pressure commercial and residential HVAC airflow.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'CFM Calculation & Hood Design',
        description: 'Determining necessary cubic feet per minute (CFM) based on cooking equipment thermal output.'
      },
      {
        step: '02',
        title: 'Duct Route Engineering',
        description: 'Mapping shortest cleanout access route to rooftop with liquid-tight welded seams.'
      },
      {
        step: '03',
        title: 'Rooftop Fan & MUA Installation',
        description: 'Mounting curb-mounted upblast exhaust fans and direct-fired make-up air heaters.'
      },
      {
        step: '04',
        title: 'Air Balancing & Municipal Sign-Off',
        description: 'Testing face velocity across hood aperture to guarantee smoke capture and pass municipal inspection.'
      }
    ],
    commonIssues: [
      'Kitchen fills with smoke during peak cooking hours',
      'Rooftop exhaust fan squealing, shaking, or throwing V-belts',
      'Front entry door hard to open due to extreme kitchen negative pressure',
      'Make-up air unit blowing freezing cold air in winter'
    ],
    equipmentHandled: [
      'CaptiveAire, Halton & Greenheck Commercial Hood Systems',
      'Direct-Fired & Indirect-Fired Gas Make-Up Air Units (MUA)',
      'Rooftop Upblast Grease Exhaust Centrifugal Fans',
      'Welded 16-Gauge Carbon Steel & Stainless Steel Grease Ducts'
    ],
    faqs: [
      {
        question: 'What happens if my restaurant kitchen does not have balanced make-up air?',
        answer: 'Without adequate heated make-up air, the exhaust fan starves for air, causing severe negative pressure. This pulls cold drafts into dining rooms, causes backdrafting of hazardous carbon monoxide from water heaters, and reduces exhaust hood efficiency.'
      }
    ]
  },

  'commercial-hvac': {
    id: 'commercial-hvac',
    slug: 'commercial-hvac',
    title: 'Commercial HVAC & Rooftop Units (RTU)',
    category: 'Heating & Cooling',
    subtitle: 'Packaged Rooftop Units, Commercial Chillers & Multi-Zone Building Automation',
    description: 'Reliable climate control for commercial plazas, retail chains, medical offices, and industrial buildings. AWcomfort provides comprehensive rooftop unit installation, economizer servicing, compressor overhauls, and preventative maintenance agreements.',
    heroImage: HVAC_IMAGES.serviceCommHvac,
    iconName: 'Building',
    pricingEstimate: 'Custom Plaza & Commercial Maintenance Contracts',
    dispatchTime: 'Priority Commercial Response',
    warranty: 'Commercial Extended Warranty Packages',
    benefits: [
      'Servicing 3 to 50+ Ton Commercial Packaged Rooftop Units (RTU)',
      'Preventative quarterly maintenance tailored to commercial lease terms',
      'Crane-assisted rooftop replacements with minimal business disruption',
      'Economizer troubleshooting for free natural seasonal cooling',
      'Full building automation & remote temperature telemetry support'
    ],
    keyFeatures: [
      {
        title: 'Packaged RTU Replacements & Retrofits',
        description: 'Complete changeouts including roof curb transitions, gas line hookups, and electrical disconnects.'
      },
      {
        title: 'Economizer & Damper Servicing',
        description: 'Calibrating enthalpy sensors and motorized dampers to draw in cool outdoor air and slash summer chiller bills.'
      },
      {
        title: 'Dual-Circuit Refrigeration Diagnostics',
        description: 'Independent diagnostic checks on multi-stage compressors, crankcase heaters, and thermal expansion valves.'
      },
      {
        title: 'Custom Preventative Service Agreements',
        description: 'Quarterly filter changes, coil washing, belt replacements, and compliance logs for property managers.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Building Survey & Static Assessment',
        description: 'Assessing roof load, curb dimensions, and electrical supply for optimal equipment selection.'
      },
      {
        step: '02',
        title: 'Turnkey Crane Rigging & Safety',
        description: 'Managing all municipal permits, street closures, and crane rigging for rapid rooftop placement.'
      },
      {
        step: '03',
        title: 'Gas, Duct & High-Voltage Integration',
        description: 'Re-connecting TSSA gas supplies, supply/return duct transitions, and multi-stage control wiring.'
      },
      {
        step: '04',
        title: 'Commissioning & Log Documentation',
        description: 'Full startup logging of refrigerant pressures, temperature splits, and motor amp draws.'
      }
    ],
    commonIssues: [
      'Tenant complaints about uneven heating or cooling across store zones',
      'High electricity bills due to faulty economizer stuck in 100% open mode',
      'Rooftop unit tripping main circuit breaker during hot summer afternoons',
      'Vibration noise or whistling sounds coming through ceiling diffusers'
    ],
    equipmentHandled: [
      'Carrier WeatherMaster, Trane Voyager & Lennox Landmark RTUs',
      'York, Daikin & McQuay Commercial Packaged Heat Pumps',
      'Direct-Drive Plenums & Belt-Driven Centrifugal Blowers',
      'Commercial Programmable BACnet Thermostats'
    ],
    faqs: [
      {
        question: 'Do you work with commercial property managers and retail plaza owners?',
        answer: 'Yes, we manage HVAC infrastructure for numerous retail plazas, restaurants, and medical centers across Mississauga and the GTA. We provide comprehensive quarterly maintenance logs and priority 24/7 emergency dispatch.'
      }
    ]
  }
};
