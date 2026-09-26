import coldRoomUnit from './cold_room_unit_1789217718166.webp';
import acCassetteUnit from './ac_cassette_unit_1789217796731.webp';
import rooftopChiller from './rooftop_chiller_1789217809923.webp';
import heroBrightHvac from './hero_bright_hvac_1789333132812.webp';
import heroDaylightHvac from './hero_daylight_hvac.webp';
import torontoSkylinePanorama from './toronto_skyline_panorama_1789333115711.webp';
import awcomfortServiceVan from './awcomfort_service_van_1789333374804.webp';
import restaurantPizzaOven from './restaurant_pizza_oven_1789333396402.webp';
import serviceFurnace from './service_furnace_1789333419183.webp';
import serviceCommHvac from './service_comm_hvac_1789333473666.webp';
import serviceGasPipe from './service_gas_pipe_1789333509195.webp';
import aboutTechHvac from './about_tech_hvac_1789333563453.webp';
import aboutPizzaChef from './about_pizza_chef_1789333581892.webp';
import aboutKitchenTrust from './about_kitchen_trust_1789333600463.webp';
import awComfortTeam from './aw_comfort_team.webp';

// Regional city area images
import cityMississauga from './city_mississauga.webp';
import cityBrampton from './city_brampton.webp';
import cityTorontoEtobicoke from './city_toronto_etobicoke.webp';
import cityOakvilleBurlington from './city_oakville_burlington.webp';
import cityMiltonHalton from './city_milton_halton.webp';
import cityVaughanMarkham from './city_vaughan_markham.webp';

export const CITY_IMAGES = {
  mississauga: cityMississauga,
  brampton: cityBrampton,
  torontoEtobicoke: cityTorontoEtobicoke,
  oakvilleBurlington: cityOakvilleBurlington,
  miltonHalton: cityMiltonHalton,
  vaughanMarkham: cityVaughanMarkham,
};

export const AUTHENTIC_WORK_IMAGES = {
  pizzaOvenFlame: '/images/pizza-oven-flame.webp',
  bakersPrideOven: '/images/bakers-pride-oven.webp',
  bakersPrideDoubleDeck: '/images/bakers-pride-double-deck.webp',
  rooftopExhaustDuctwork: '/images/rooftop-exhaust-ductwork.webp',
  pizzaBakingHearth: '/images/pizza-baking-hearth.webp',
  commercialKitchenHood: '/images/commercial-kitchen-hood.webp',
  acRefrigerantDiagnostics: '/images/ac-refrigerant-diagnostics.webp',
};

export const HVAC_IMAGES = {
  heroTechnician: heroDaylightHvac,
  heroBrightHvac: heroDaylightHvac,
  heroDaylightHvac,
  torontoSkyline: torontoSkylinePanorama,
  torontoSkylinePanorama,
  awcomfortServiceVan,
  restaurantPizzaOven,
  serviceFurnace,
  serviceAcCondenser: AUTHENTIC_WORK_IMAGES.acRefrigerantDiagnostics,
  serviceHeatPump: '/heat-pumps.webp',
  serviceCommHvac,
  serviceAppliances: AUTHENTIC_WORK_IMAGES.commercialKitchenHood,
  serviceGasPipe,
  servicePizzaOven: AUTHENTIC_WORK_IMAGES.bakersPrideOven,
  serviceVentDuct: AUTHENTIC_WORK_IMAGES.rooftopExhaustDuctwork,
  aboutTechHvac,
  aboutPizzaChef,
  aboutKitchenTrust,
  awComfortTeam,
  pizzaOvenInstallation: AUTHENTIC_WORK_IMAGES.pizzaBakingHearth,
  airConditioning: AUTHENTIC_WORK_IMAGES.acRefrigerantDiagnostics,
  heatPumps: '/heat-pumps.webp',
  coldRoom: coldRoomUnit,
  commercialKitchen: AUTHENTIC_WORK_IMAGES.commercialKitchenHood,
  hvacDiagnostics: AUTHENTIC_WORK_IMAGES.acRefrigerantDiagnostics,
  acCassette: acCassetteUnit,
  rooftopChiller: rooftopChiller,
  // User uploaded gallery items
  pizzaOvenFlame: AUTHENTIC_WORK_IMAGES.pizzaOvenFlame,
  bakersPrideOven: AUTHENTIC_WORK_IMAGES.bakersPrideOven,
  bakersPrideDoubleDeck: AUTHENTIC_WORK_IMAGES.bakersPrideDoubleDeck,
  rooftopExhaustDuctwork: AUTHENTIC_WORK_IMAGES.rooftopExhaustDuctwork,
  pizzaBakingHearth: AUTHENTIC_WORK_IMAGES.pizzaBakingHearth,
  commercialKitchenHood: AUTHENTIC_WORK_IMAGES.commercialKitchenHood,
  acRefrigerantDiagnostics: AUTHENTIC_WORK_IMAGES.acRefrigerantDiagnostics,
};

export interface HvacProjectItem {
  id: string;
  title: string;
  category: 'Air Conditioning' | 'Commercial Refrigeration' | 'Industrial Cooling';
  description: string;
  specs: string;
  image: string;
}

export const HVAC_SHOWCASE: HvacProjectItem[] = [
  {
    id: 'bakers-pride-pizza-oven',
    title: 'Commercial Deck Pizza Oven Commissioning',
    category: 'Commercial Refrigeration',
    description: 'Bakers Pride double deck pizza oven installation, certified high-BTU gas supply manifold, and safety interlock wiring for a GTA trattoria.',
    specs: '750°F+ Hearth Rating • TSSA Tagged • Balanced Gas Pressure',
    image: AUTHENTIC_WORK_IMAGES.bakersPrideDoubleDeck,
  },
  {
    id: 'rooftop-kitchen-exhaust',
    title: 'Restaurant Rooftop Exhaust & Flue Ducting',
    category: 'Industrial Cooling',
    description: 'Commercial rooftop upblast grease exhaust fan mounting, welded stainless steel ductwork, and curb vibration isolation.',
    specs: 'NFPA 96 Fire Standard • High CFM Extraction • Weatherproof Flue',
    image: AUTHENTIC_WORK_IMAGES.rooftopExhaustDuctwork,
  },
  {
    id: 'ac-refrigerant-diagnostics',
    title: 'Digital Manifold Refrigerant Diagnostics',
    category: 'Air Conditioning',
    description: 'Precision Appion digital manifold evacuation, micron vacuum verification, and eco-refrigerant recovery and charging on residential condenser.',
    specs: 'ODP / F-Gas Certified • Subcooling & Superheat Tuning • Leak Sealed',
    image: AUTHENTIC_WORK_IMAGES.acRefrigerantDiagnostics,
  },
  {
    id: 'kitchen-ventilation-hood',
    title: 'Commercial Cooking Line Ventilation Hood',
    category: 'Commercial Refrigeration',
    description: 'Stainless steel Type 1 kitchen canopy hood installation with baffle grease filtration and make-up air balancing.',
    specs: '100% Stainless Steel • Integrated Fire Suppression Link • Low Sones',
    image: AUTHENTIC_WORK_IMAGES.commercialKitchenHood,
  },
  {
    id: 'pizza-oven-flame-test',
    title: 'High-Temperature Hearth Burner Calibration',
    category: 'Commercial Refrigeration',
    description: 'Combustion tuning, burner orifice cleanout, and high-heat flame wall balance test inside active commercial stone deck pizza oven.',
    specs: 'Clean Combustion Analysis • Uniform Deck Heat • Zero Soot',
    image: AUTHENTIC_WORK_IMAGES.pizzaOvenFlame,
  },
  {
    id: 'rooftop-hvac',
    title: 'Commercial HVAC & Chiller Systems',
    category: 'Industrial Cooling',
    description: 'High-efficiency multi-stage rooftop chillers, air handling units (AHU), and central climate infrastructure for commercial premises.',
    specs: 'R32 / R410A Systems • Inverter Compressors • BMS Integrated',
    image: rooftopChiller,
  },
];
