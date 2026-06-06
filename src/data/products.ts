export interface Product {
  id: string;
  title: string;
  category: string;
  brand: string;
  authorizedDealer: boolean;
  description: string;
  longDescription?: string;
  images: string[];
  features: string[];
  specifications: Record<string, string>;
}

export const productsData: Product[] = [
  {
    "id": "infivision-et1000",
    "title": "Infivision ET1000",
    "category": "Critical Care",
    "brand": "Infivision",
    "authorizedDealer": true,
    "description": "Electrical Impedance Tomography system by Infivision.",
    "longDescription": "The Infivision ET1000 is a premium Electrical Impedance Tomography solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/infivision_et1000.jpeg"
    ],
    "features": [
      "Bedside, non invasive and radiation free lung monitoring",
      "Quick assessment of ventilation and perfusion",
      "Continuous monitoring with visual analysis tools",
      "Supports individualized respiratory management",
      "Useful for pneumonia, ARDS, COPD, pleural effusion/hemothorax, pneumothorax, pulmonary embolism, pulmonary hypertension, PEEP titration, prone positioning, weaning and HFNC assessment"
    ],
    "specifications": {
      "Imaging Technology": "Electrical Impedance Tomography",
      "Radiation": "Zero (non invasive)",
      "Assessment": "Quick Ventilation & Perfusion",
      "Applications": "ARDS, COPD, PEEP titration, Prone Position",
      "Continuous Monitoring": "Yes",
      "Brochure Reference": "Page(s): 1,3,4,5,6"
    }
  },
  {
    "id": "prunus-boaray-600",
    "title": "Prunus Boaray 600",
    "category": "Critical Care",
    "brand": "Prunus",
    "authorizedDealer": true,
    "description": "Anaesthesia Workstation system by Prunus.",
    "longDescription": "The Prunus Boaray 600 is a premium Anaesthesia Workstation solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/prunus_boaray_600.jpeg"
    ],
    "features": [
      "15-inch color touch screen",
      "3-gas system with 6 tube rotameter",
      "2 vaporizers",
      "Upgradeable for Masimo AGMs",
      "Displays 4 waveforms, 2 loops and 20+ parameters",
      "Supports SpO2 monitoring"
    ],
    "specifications": {
      "Display": "15-inch color touch screen",
      "Vaporizers": "Supported (2 mounts)",
      "Monitoring Modes": "VCV, PCV, SIMV, PSV",
      "Gas Systems": "O2, N2O, Air",
      "Flow Parameters": "Digital & mechanical flow meters",
      "Display Output": "15-inch color touch screen",
      "Brochure Reference": "Page(s): 1,9"
    }
  },
  {
    "id": "prunus-boaray-700",
    "title": "Prunus Boaray 700",
    "category": "Critical Care",
    "brand": "Prunus",
    "authorizedDealer": true,
    "description": "Anaesthesia Workstation system by Prunus.",
    "longDescription": "The Prunus Boaray 700 is a premium Anaesthesia Workstation solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/prunus_boaray_700.jpeg"
    ],
    "features": [
      "plug and play monitoring module design",
      "Digital flow meter",
      "Supports SpO2 monitoring",
      "More high performance accessories available such as gas vaporizer, AGSS and ACGO",
      "15-inch color touch screen",
      "Displays 4 waveforms, 2 loops and 20+ parameters"
    ],
    "specifications": {
      "Display": "15-inch color touch screen",
      "Vaporizers": "Supported (2 mounts)",
      "Monitoring Modes": "VCV, PCV, SIMV, PSV",
      "Gas Systems": "O2, N2O, Air",
      "Flow Parameters": "Digital & mechanical flow meters",
      "Display Output": "15-inch color touch screen",
      "Brochure Reference": "Page(s): 9"
    }
  },
  {
    "id": "surgnova-sonicure-sc100e",
    "title": "Surgnova SoniCure SC100E",
    "category": "Critical Care",
    "brand": "Surgnova",
    "authorizedDealer": true,
    "description": "Ultrasonic Scalpel System system by Surgnova.",
    "longDescription": "The Surgnova SoniCure SC100E is a premium Ultrasonic Scalpel System solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/surgnova_sonicure_sc100e.jpeg"
    ],
    "features": [
      "high speed frequency tracking",
      "Superior dissection speed",
      "Less thermal damage",
      "Intelligent transection sensing technology",
      "Indicated for sealing vessels up to 7 mm",
      "Multiple shaft lengths for open and laparoscopic surgery"
    ],
    "specifications": {
      "Surgical Modality": "Ultrasonic Scalpel",
      "Frequency Tracking": "high speed 55.5 kHz",
      "Tissue Effect": "Simultaneous Cutting and Coagulation",
      "Vessel Sealing": "Seal vessels up to 7mm",
      "Procedures": "Open & Laparoscopic surgeries",
      "Thermal Damage": "Minimal lateral thermal spread",
      "Brochure Reference": "Page(s): 2,12"
    }
  },
  {
    "id": "led-surtron-400-hp",
    "title": "LED Surtron 400 HP",
    "category": "Critical Care",
    "brand": "LED",
    "authorizedDealer": true,
    "description": "Electrosurgical Unit system by LED.",
    "longDescription": "The LED Surtron 400 HP is a premium Electrosurgical Unit solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/led_surtron_400_hp.jpeg"
    ],
    "features": [
      "Underwater cutting and coagulation",
      "Double operational activity",
      "Controlled cutting procedures",
      "Double controlled coagulation procedures",
      "Wide bipolar features",
      "Argon compatible"
    ],
    "specifications": {
      "Device Type": "high frequency Electrosurgical Unit",
      "Functions": "Monopolar / Bipolar Cut & Coagulation",
      "Vessel Sealing": "Up to 7mm diameter",
      "Argon Compatibility": "Integrated / Compatible",
      "Underwater Procedure": "Supported",
      "Brochure Reference": "Page(s): 11"
    }
  },
  {
    "id": "led-surtron-200-hp",
    "title": "LED Surtron 200 HP",
    "category": "Critical Care",
    "brand": "LED",
    "authorizedDealer": true,
    "description": "Electrosurgical Unit system by LED.",
    "longDescription": "The LED Surtron 200 HP is a premium Electrosurgical Unit solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/led_surtron_200_hp.jpeg"
    ],
    "features": [
      "Underwater cutting and coagulation",
      "Double operational activity",
      "Controlled cutting procedures",
      "Double controlled coagulation procedures",
      "Wide bipolar features",
      "Argon compatible"
    ],
    "specifications": {
      "Device Type": "high frequency Electrosurgical Unit",
      "Functions": "Monopolar / Bipolar Cut & Coagulation",
      "Vessel Sealing": "Up to 7mm diameter",
      "Argon Compatibility": "Integrated / Compatible",
      "Underwater Procedure": "Supported",
      "Brochure Reference": "Page(s): 11"
    }
  },
  {
    "id": "led-surtron-400-touch",
    "title": "LED Surtron 400 Touch",
    "category": "Critical Care",
    "brand": "LED",
    "authorizedDealer": true,
    "description": "Electrosurgical Unit system by LED.",
    "longDescription": "The LED Surtron 400 Touch is a premium Electrosurgical Unit solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/led_surtron_400_touch.jpeg"
    ],
    "features": [
      "9-inch capacitive glass touchscreen",
      "Double simultaneous monopolar supply",
      "Contemporary dual bipolar supply",
      "Sealing vessel for vessels up to 7 mm",
      "TUR saline cutting function",
      "Memory of working conditions",
      "Integrated argon unit"
    ],
    "specifications": {
      "Device Type": "high frequency Electrosurgical Unit",
      "Functions": "Monopolar / Bipolar Cut & Coagulation",
      "Vessel Sealing": "Up to 7mm diameter",
      "Interface": "9-inch capacitive glass touchscreen",
      "Argon Compatibility": "Integrated / Compatible",
      "Underwater Procedure": "Supported",
      "Display Output": "9-inch capacitive glass touchscreen",
      "Brochure Reference": "Page(s): 2,11"
    }
  },
  {
    "id": "led-surtron-200-touch",
    "title": "LED Surtron 200 Touch",
    "category": "Critical Care",
    "brand": "LED",
    "authorizedDealer": true,
    "description": "Electrosurgical Unit system by LED.",
    "longDescription": "The LED Surtron 200 Touch is a premium Electrosurgical Unit solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/led_surtron_200_touch.jpeg"
    ],
    "features": [
      "high frequency electrosurgical unit",
      "user friendly operation",
      "Vessel sealing function",
      "Underwater bipolar cut",
      "Split return electrode use allowed",
      "Minimally invasive surgical treatment"
    ],
    "specifications": {
      "Device Type": "high frequency Electrosurgical Unit",
      "Functions": "Monopolar / Bipolar Cut & Coagulation",
      "Vessel Sealing": "Up to 7mm diameter",
      "Interface": "9-inch capacitive glass touchscreen",
      "Argon Compatibility": "Integrated / Compatible",
      "Underwater Procedure": "Supported",
      "Brochure Reference": "Page(s): 2,11"
    }
  },
  {
    "id": "ababil-s1-cpap",
    "title": "Ababil S1 CPAP",
    "category": "Critical Care",
    "brand": "Ababil",
    "authorizedDealer": true,
    "description": "Respiratory Therapy system by Ababil.",
    "longDescription": "The Ababil S1 CPAP is a premium Respiratory Therapy solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/ababil_s1_cpap.jpeg"
    ],
    "features": [
      "Auto-fix / comfort focused algorithm",
      "low noise operation",
      "Optional wireless SpO2 support",
      "Automatic ramp",
      "Intelligent heating",
      "Smart start/stop",
      "Automatic leak compensation",
      "Automatic humidity"
    ],
    "specifications": {
      "Therapy Type": "non invasive Ventilation (CPAP/BiPAP)",
      "Operation Noise": "Ultra-low noise operation",
      "Humidification": "Intelligent heating and humidity",
      "Leak Compensation": "Automatic dynamic leak compensation",
      "Algorithm": "comfort focused auto-fix",
      "Brochure Reference": "Page(s): 7,8"
    }
  },
  {
    "id": "ababil-s2-bipap",
    "title": "Ababil S2 BiPAP",
    "category": "Critical Care",
    "brand": "Ababil",
    "authorizedDealer": true,
    "description": "Respiratory Therapy system by Ababil.",
    "longDescription": "The Ababil S2 BiPAP is a premium Respiratory Therapy solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/ababil_s2_bipap.jpeg"
    ],
    "features": [
      "Auto-fix / comfort focused algorithm",
      "low noise operation",
      "Optional wireless SpO2 support",
      "Automatic ramp",
      "Intelligent heating",
      "Smart start/stop",
      "Automatic leak compensation",
      "Automatic humidity",
      "BiPAP therapy"
    ],
    "specifications": {
      "Therapy Type": "non invasive Ventilation (CPAP/BiPAP)",
      "Operation Noise": "Ultra-low noise operation",
      "Humidification": "Intelligent heating and humidity",
      "Leak Compensation": "Automatic dynamic leak compensation",
      "Algorithm": "comfort focused auto-fix",
      "Brochure Reference": "Page(s): 7,8"
    }
  },
  {
    "id": "biolight-p22",
    "title": "Biolight P22",
    "category": "Critical Care",
    "brand": "Biolight",
    "authorizedDealer": true,
    "description": "Patient Monitor system by Biolight.",
    "longDescription": "The Biolight P22 is a premium Patient Monitor solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/biolight_p22.jpeg"
    ],
    "features": [
      "High-end modular patient monitor family",
      "12.1-inch to 22-inch TFT LCD options across the P series family",
      "Supports diagnostic gases (CO2, O2, AG)",
      "Respiratory mechanics and 6-slot modular frame",
      "CNS activity monitoring, BIS, EEG and rSO2",
      "12-lead ECG, ARR/ST/QT/QTc",
      "NMT and TOF neuromuscular monitoring"
    ],
    "specifications": {
      "Display Types": "10.4-inch up to 22-inch TFT LCD",
      "Core Parameters": "12-lead ECG, NIBP, SpO2, TEMP, RESP, PR",
      "Advanced Parameters": "Diagnostic gases (CO2, O2, AG), IBP",
      "Specialized Monitoring": "Bispectral Index (BIS), EEG, NMT, TOF",
      "Connectivity": "Central Monitoring System (CMS), bed-to-bed review",
      "Brochure Reference": "Page(s): 13,14"
    }
  },
  {
    "id": "biolight-p18",
    "title": "Biolight P18",
    "category": "Critical Care",
    "brand": "Biolight",
    "authorizedDealer": true,
    "description": "Patient Monitor system by Biolight.",
    "longDescription": "The Biolight P18 is a premium Patient Monitor solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/biolight_p18.jpeg"
    ],
    "features": [
      "High-end modular patient monitor family",
      "12.1-inch to 22-inch TFT LCD options across the P series family",
      "Supports diagnostic gases (CO2, O2, AG)",
      "Respiratory mechanics and 6-slot modular frame",
      "CNS activity monitoring, BIS, EEG and rSO2",
      "12-lead ECG, ARR/ST/QT/QTc",
      "NMT and TOF neuromuscular monitoring"
    ],
    "specifications": {
      "Display Types": "10.4-inch up to 22-inch TFT LCD",
      "Core Parameters": "12-lead ECG, NIBP, SpO2, TEMP, RESP, PR",
      "Advanced Parameters": "Diagnostic gases (CO2, O2, AG), IBP",
      "Specialized Monitoring": "Bispectral Index (BIS), EEG, NMT, TOF",
      "Connectivity": "Central Monitoring System (CMS), bed-to-bed review",
      "Brochure Reference": "Page(s): 13,14"
    }
  },
  {
    "id": "biolight-p15",
    "title": "Biolight P15",
    "category": "Critical Care",
    "brand": "Biolight",
    "authorizedDealer": true,
    "description": "Patient Monitor system by Biolight.",
    "longDescription": "The Biolight P15 is a premium Patient Monitor solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/biolight_p15.jpeg"
    ],
    "features": [
      "High-end modular patient monitor family",
      "12.1-inch to 22-inch TFT LCD options across the P series family",
      "Supports diagnostic gases (CO2, O2, AG)",
      "Respiratory mechanics and 6-slot modular frame",
      "CNS activity monitoring, BIS, EEG and rSO2",
      "12-lead ECG, ARR/ST/QT/QTc",
      "NMT and TOF neuromuscular monitoring"
    ],
    "specifications": {
      "Display Types": "10.4-inch up to 22-inch TFT LCD",
      "Core Parameters": "12-lead ECG, NIBP, SpO2, TEMP, RESP, PR",
      "Advanced Parameters": "Diagnostic gases (CO2, O2, AG), IBP",
      "Specialized Monitoring": "Bispectral Index (BIS), EEG, NMT, TOF",
      "Connectivity": "Central Monitoring System (CMS), bed-to-bed review",
      "Brochure Reference": "Page(s): 13,14"
    }
  },
  {
    "id": "biolight-p12",
    "title": "Biolight P12",
    "category": "Critical Care",
    "brand": "Biolight",
    "authorizedDealer": true,
    "description": "Patient Monitor system by Biolight.",
    "longDescription": "The Biolight P12 is a premium Patient Monitor solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/biolight_p12.jpeg"
    ],
    "features": [
      "High-end modular patient monitor family",
      "12.1-inch to 22-inch TFT LCD options across the P series family",
      "Supports diagnostic gases (CO2, O2, AG)",
      "Respiratory mechanics and 6-slot modular frame",
      "CNS activity monitoring, BIS, EEG and rSO2",
      "12-lead ECG, ARR/ST/QT/QTc",
      "NMT and TOF neuromuscular monitoring"
    ],
    "specifications": {
      "Display Types": "10.4-inch up to 22-inch TFT LCD",
      "Core Parameters": "12-lead ECG, NIBP, SpO2, TEMP, RESP, PR",
      "Advanced Parameters": "Diagnostic gases (CO2, O2, AG), IBP",
      "Specialized Monitoring": "Bispectral Index (BIS), EEG, NMT, TOF",
      "Connectivity": "Central Monitoring System (CMS), bed-to-bed review",
      "Brochure Reference": "Page(s): 13,14"
    }
  },
  {
    "id": "biolight-m12",
    "title": "Biolight M12",
    "category": "Critical Care",
    "brand": "Biolight",
    "authorizedDealer": true,
    "description": "Compact Non-Touch Patient Monitor system by Biolight.",
    "longDescription": "The Biolight M12 is a premium Compact Non-Touch Patient Monitor solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/biolight_m12.jpeg"
    ],
    "features": [
      "12-inch high-definition screen",
      "Large-capacity data storage",
      "EWS and GCS available",
      "Portable 3 kg design",
      "Suitable for bed, transport and vehicle use",
      "Optional drip monitor"
    ],
    "specifications": {
      "Display Types": "10.4-inch up to 22-inch TFT LCD",
      "Core Parameters": "12-lead ECG, NIBP, SpO2, TEMP, RESP, PR",
      "Advanced Parameters": "Diagnostic gases (CO2, O2, AG), IBP",
      "Specialized Monitoring": "Bispectral Index (BIS), EEG, NMT, TOF",
      "Connectivity": "Central Monitoring System (CMS), bed-to-bed review",
      "Display Output": "12-inch high-definition screen",
      "Brochure Reference": "Page(s): 15"
    }
  },
  {
    "id": "biolight-m10",
    "title": "Biolight M10",
    "category": "Critical Care",
    "brand": "Biolight",
    "authorizedDealer": true,
    "description": "Compact Non-Touch Patient Monitor system by Biolight.",
    "longDescription": "The Biolight M10 is a premium Compact Non-Touch Patient Monitor solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/biolight_m10.jpeg"
    ],
    "features": [
      "10-inch high-definition screen",
      "Large-capacity data storage",
      "EWS and GCS available",
      "Portable 3 kg design",
      "Suitable for bed, transport and vehicle use",
      "Optional drip monitor"
    ],
    "specifications": {
      "Display Types": "10.4-inch up to 22-inch TFT LCD",
      "Core Parameters": "12-lead ECG, NIBP, SpO2, TEMP, RESP, PR",
      "Advanced Parameters": "Diagnostic gases (CO2, O2, AG), IBP",
      "Specialized Monitoring": "Bispectral Index (BIS), EEG, NMT, TOF",
      "Connectivity": "Central Monitoring System (CMS), bed-to-bed review",
      "Display Output": "10-inch high-definition screen",
      "Brochure Reference": "Page(s): 15"
    }
  },
  {
    "id": "biolight-s12",
    "title": "Biolight S12",
    "category": "Critical Care",
    "brand": "Biolight",
    "authorizedDealer": true,
    "description": "Compact Touch Patient Monitor system by Biolight.",
    "longDescription": "The Biolight S12 is a premium Compact Touch Patient Monitor solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/biolight_s12.jpeg"
    ],
    "features": [
      "Real-time vital sign detection",
      "Glasgow coma scale and EWS",
      "12.1-inch 10.4-inch full capacitive touchscreen",
      "Optional mainstream/microflow CO2, C.O. and IBP measurement",
      "Drip monitor",
      "Bed-to-bed review"
    ],
    "specifications": {
      "Display Types": "10.4-inch up to 22-inch TFT LCD",
      "Core Parameters": "12-lead ECG, NIBP, SpO2, TEMP, RESP, PR",
      "Advanced Parameters": "Diagnostic gases (CO2, O2, AG), IBP",
      "Specialized Monitoring": "Bispectral Index (BIS), EEG, NMT, TOF",
      "Connectivity": "Central Monitoring System (CMS), bed-to-bed review",
      "Display Output": "12.1-inch 10.4-inch full capacitive touchscreen",
      "Brochure Reference": "Page(s): 15"
    }
  },
  {
    "id": "biolight-s10",
    "title": "Biolight S10",
    "category": "Critical Care",
    "brand": "Biolight",
    "authorizedDealer": true,
    "description": "Compact Touch Patient Monitor system by Biolight.",
    "longDescription": "The Biolight S10 is a premium Compact Touch Patient Monitor solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/biolight_s10.jpeg"
    ],
    "features": [
      "Real-time vital sign detection",
      "Glasgow coma scale and EWS",
      "12.1-inch 10.4-inch full capacitive touchscreen",
      "Optional mainstream/microflow CO2, C.O. and IBP measurement",
      "Drip monitor",
      "Bed-to-bed review"
    ],
    "specifications": {
      "Display Types": "10.4-inch up to 22-inch TFT LCD",
      "Core Parameters": "12-lead ECG, NIBP, SpO2, TEMP, RESP, PR",
      "Advanced Parameters": "Diagnostic gases (CO2, O2, AG), IBP",
      "Specialized Monitoring": "Bispectral Index (BIS), EEG, NMT, TOF",
      "Connectivity": "Central Monitoring System (CMS), bed-to-bed review",
      "Display Output": "12.1-inch 10.4-inch full capacitive touchscreen",
      "Brochure Reference": "Page(s): 15"
    }
  },
  {
    "id": "biolight-v6",
    "title": "Biolight V6",
    "category": "Critical Care",
    "brand": "Biolight",
    "authorizedDealer": true,
    "description": "Vital Sign Monitor system by Biolight.",
    "longDescription": "The Biolight V6 is a premium Vital Sign Monitor solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/biolight_v6.jpeg"
    ],
    "features": [
      "Standard NIBP, BLT digital SpO2 and PR",
      "Lithium battery",
      "Optional Masimo SpO2, Nellcor SpO2 and Micro-stream EtCO2",
      "Instant infra-red thermometer and barcode scanner options",
      "Touch screen",
      "FDA certificate approved"
    ],
    "specifications": {
      "Form Factor": "Compact Handheld / Vital Signs",
      "Parameters": "NIBP, SpO2, PR, Option ETCO2",
      "Display": "Compact LCD display",
      "Battery": "Rechargeable Lithium Battery",
      "Battery Features": "Lithium battery",
      "Display Output": "Touch screen",
      "Brochure Reference": "Page(s): 16"
    }
  },
  {
    "id": "biolight-e65",
    "title": "Biolight E65",
    "category": "Critical Care",
    "brand": "Biolight",
    "authorizedDealer": true,
    "description": "ECG Machine system by Biolight.",
    "longDescription": "The Biolight E65 is a premium ECG Machine solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/biolight_e65.jpeg"
    ],
    "features": [
      "8-inch color widescreen LCD",
      "12-channel synchronous display",
      "Computer keyboard input and full-screen touch operation",
      "High-definition low noise thermal recorder",
      "Supports external USB printer and barcode scanner"
    ],
    "specifications": {
      "Form Factor": "Desktop / Portable",
      "Parameters": "ECG, SpO2, RESP, EtCO2",
      "Display": "8-inch color LCD",
      "Battery": "Rechargeable Lithium Battery",
      "Display Output": "8-inch color widescreen LCD",
      "Brochure Reference": "Page(s): 16"
    }
  },
  {
    "id": "biolight-m850",
    "title": "Biolight M850",
    "category": "Critical Care",
    "brand": "Biolight",
    "authorizedDealer": true,
    "description": "Handheld Patient Monitor system by Biolight.",
    "longDescription": "The Biolight M850 is a premium Handheld Patient Monitor solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/biolight_m850.jpeg"
    ],
    "features": [
      "ECG, SpO2 and RESP monitoring",
      "Portable handheld format"
    ],
    "specifications": {
      "Form Factor": "Compact Handheld / Vital Signs",
      "Parameters": "ECG, SpO2, RESP, EtCO2",
      "Display": "Compact LCD display",
      "Battery": "Rechargeable Lithium Battery",
      "Brochure Reference": "Page(s): 16"
    }
  },
  {
    "id": "biolight-m860",
    "title": "Biolight M860",
    "category": "Critical Care",
    "brand": "Biolight",
    "authorizedDealer": true,
    "description": "Handheld Patient Monitor system by Biolight.",
    "longDescription": "The Biolight M860 is a premium Handheld Patient Monitor solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/biolight_m860.jpeg"
    ],
    "features": [
      "NIBP, SpO2 and RESP monitoring",
      "Portable handheld format"
    ],
    "specifications": {
      "Form Factor": "Compact Handheld / Vital Signs",
      "Parameters": "ECG, SpO2, RESP, EtCO2",
      "Display": "Compact LCD display",
      "Battery": "Rechargeable Lithium Battery",
      "Brochure Reference": "Page(s): 16"
    }
  },
  {
    "id": "biolight-m880",
    "title": "Biolight M880",
    "category": "Critical Care",
    "brand": "Biolight",
    "authorizedDealer": true,
    "description": "Handheld Patient Monitor system by Biolight.",
    "longDescription": "The Biolight M880 is a premium Handheld Patient Monitor solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/biolight_m880.jpeg"
    ],
    "features": [
      "ETCO2, SpO2 and RESP monitoring",
      "Portable handheld format"
    ],
    "specifications": {
      "Form Factor": "Compact Handheld / Vital Signs",
      "Parameters": "ECG, SpO2, RESP, EtCO2",
      "Display": "Compact LCD display",
      "Battery": "Rechargeable Lithium Battery",
      "Brochure Reference": "Page(s): 16"
    }
  },
  {
    "id": "biolight-m800",
    "title": "Biolight M800",
    "category": "Critical Care",
    "brand": "Biolight",
    "authorizedDealer": true,
    "description": "Handheld Patient Monitor system by Biolight.",
    "longDescription": "The Biolight M800 is a premium Handheld Patient Monitor solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/biolight_m800.jpeg"
    ],
    "features": [
      "SpO2, Adult/PED/NEO options",
      "Portable handheld format"
    ],
    "specifications": {
      "Form Factor": "Compact Handheld / Vital Signs",
      "Parameters": "ECG, SpO2, RESP, EtCO2",
      "Display": "Compact LCD display",
      "Battery": "Rechargeable Lithium Battery",
      "Brochure Reference": "Page(s): 16"
    }
  },
  {
    "id": "ababil-d7-defibrillator",
    "title": "Ababil D7 Defibrillator",
    "category": "Critical Care",
    "brand": "Ababil",
    "authorizedDealer": true,
    "description": "Defibrillator system by Ababil.",
    "longDescription": "The Ababil D7 Defibrillator is a premium Defibrillator solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/ababil_d7_defibrillator.jpeg"
    ],
    "features": [],
    "specifications": {
      "Waveform": "Biphasic Truncated Exponential",
      "Modes": "Manual, Advisory (AED), Semi-automatic",
      "Display": "7-inch TFT LCD color display",
      "Data Storage": "Up to 300 hours of ECG data natively",
      "Weight": "Compact 5.5 kg",
      "Brochure Reference": "Page(s): 10"
    }
  },
  {
    "id": "medcaptain-mp-30",
    "title": "Medcaptain MP-30",
    "category": "Critical Care",
    "brand": "Medcaptain",
    "authorizedDealer": true,
    "description": "Syringe Pump / Infusion Pump system by Medcaptain.",
    "longDescription": "The Medcaptain MP-30 is a premium Syringe Pump / Infusion Pump solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/medcaptain_mp_30.jpeg"
    ],
    "features": [
      "Lightweight and easy to carry",
      "2.4-inch medical-grade display",
      "Optional nurse call function and LAN/Wi-Fi",
      "CMS connectivity",
      "Multiple infusion modes including rate, time, weight, drip, trapezia, sequence, TIVA and micro mode",
      "Alarm, purge, bolus and titration functions"
    ],
    "specifications": {
      "Pump Type": "Syringe Pump",
      "Supported Syringes": "1, 2, 5, 10, 20, 30, 50, 60 mL",
      "Delivery Modes": "Rate, Time, Weight, Sequence, Micro, Trapezia",
      "Display": "2.4-inch medical display",
      "Alarms": "Occlusion, Air-in-line, Low Battery, Purge",
      "Brochure Reference": "Page(s): 17,18"
    }
  },
  {
    "id": "medcaptain-mp-60",
    "title": "Medcaptain MP-60",
    "category": "Critical Care",
    "brand": "Medcaptain",
    "authorizedDealer": true,
    "description": "Syringe Pump / Infusion Pump system by Medcaptain.",
    "longDescription": "The Medcaptain MP-60 is a premium Syringe Pump / Infusion Pump solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/medcaptain_mp_60.jpeg"
    ],
    "features": [
      "Lightweight and easy to carry",
      "2.4-inch medical-grade display",
      "Optional nurse call function and LAN/Wi-Fi",
      "CMS connectivity",
      "Multiple infusion modes including rate, time, weight, drip, trapezia, sequence, TIVA and micro mode",
      "Alarm, purge, bolus and titration functions"
    ],
    "specifications": {
      "Pump Type": "Volumetric Infusion Pump",
      "Supported Syringes": "1, 2, 5, 10, 20, 30, 50, 60 mL",
      "Delivery Modes": "Rate, Time, Weight, Sequence, Micro, Trapezia",
      "Display": "2.4-inch medical display",
      "Alarms": "Occlusion, Air-in-line, Low Battery, Purge",
      "Brochure Reference": "Page(s): 17,18"
    }
  },
  {
    "id": "medcaptain-hp-30",
    "title": "Medcaptain HP-30",
    "category": "Critical Care",
    "brand": "Medcaptain",
    "authorizedDealer": true,
    "description": "Syringe Pump / Infusion Pump system by Medcaptain.",
    "longDescription": "The Medcaptain HP-30 is a premium Syringe Pump / Infusion Pump solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/medcaptain_hp_30.jpeg"
    ],
    "features": [
      "Supports 1/2/5/10/20/30/50/60 mL syringes",
      "Medical-grade touchscreen",
      "Multiple infusion modes",
      "Plug-in modular design for 2 to 16 pumps",
      "Automated syringe installation mode",
      "Battery backup up to 9 to 11 hours"
    ],
    "specifications": {
      "Pump Type": "Syringe Pump",
      "Supported Syringes": "1, 2, 5, 10, 20, 30, 50, 60 mL",
      "Delivery Modes": "Rate, Time, Weight, Sequence, Micro, Trapezia",
      "Display": "Medical-grade capacitive touch",
      "Alarms": "Occlusion, Air-in-line, Low Battery, Purge",
      "Battery Features": "Battery backup up to 9 to 11 hours",
      "Display Output": "Medical-grade touchscreen",
      "Brochure Reference": "Page(s): 19"
    }
  },
  {
    "id": "medcaptain-hp-60",
    "title": "Medcaptain HP-60",
    "category": "Critical Care",
    "brand": "Medcaptain",
    "authorizedDealer": true,
    "description": "Syringe Pump / Infusion Pump system by Medcaptain.",
    "longDescription": "The Medcaptain HP-60 is a premium Syringe Pump / Infusion Pump solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/medcaptain_hp_60.jpeg"
    ],
    "features": [
      "Supports 1/2/5/10/20/30/50/60 mL syringes",
      "Medical-grade touchscreen",
      "Multiple infusion modes",
      "Plug-in modular design for 2 to 16 pumps",
      "Automated syringe installation mode",
      "Battery backup up to 9 to 11 hours"
    ],
    "specifications": {
      "Pump Type": "Volumetric Infusion Pump",
      "Supported Syringes": "1, 2, 5, 10, 20, 30, 50, 60 mL",
      "Delivery Modes": "Rate, Time, Weight, Sequence, Micro, Trapezia",
      "Display": "Medical-grade capacitive touch",
      "Alarms": "Occlusion, Air-in-line, Low Battery, Purge",
      "Battery Features": "Battery backup up to 9 to 11 hours",
      "Display Output": "Medical-grade touchscreen",
      "Brochure Reference": "Page(s): 19"
    }
  },
  {
    "id": "medcaptain-video-laryngoscope",
    "title": "Medcaptain Video Laryngoscope",
    "category": "Critical Care",
    "brand": "Medcaptain",
    "authorizedDealer": true,
    "description": "Video Laryngoscope system by Medcaptain.",
    "longDescription": "The Medcaptain Video Laryngoscope is a premium Video Laryngoscope solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/medcaptain_video_laryngoscope.png"
    ],
    "features": [
      "IP66 waterproof design",
      "Instant anti-fog, no heating required",
      "3.5-inch HD touchscreen",
      "Horizontal rotation 0 to 270 degrees",
      "Vertical rotation 0 to 140 degrees",
      "Multiple blade models",
      "Teaching and multimedia functions"
    ],
    "specifications": {
      "Device Specialty": "Intubation Airway Management",
      "Features": "Anti-fog, waterproof blade, 3.5-inch HD touch",
      "Display Output": "3.5-inch HD touchscreen",
      "Brochure Reference": "Page(s): 20"
    }
  },
  {
    "id": "medcaptain-enteral-feeding-pump",
    "title": "Medcaptain Enteral Feeding Pump",
    "category": "Critical Care",
    "brand": "Medcaptain",
    "authorizedDealer": true,
    "description": "Enteral Feeding Pump system by Medcaptain.",
    "longDescription": "The Medcaptain Enteral Feeding Pump is a premium Enteral Feeding Pump solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/medcaptain_enteral_feeding_pump.jpeg"
    ],
    "features": [
      "Auto anti-occlusion",
      "4.0-inch touchscreen",
      "Optional heater",
      "Compact 1.2 kg design",
      "±5% infusion accuracy",
      "1-1200 mL/h infusion rate",
      "22-hour battery life"
    ],
    "specifications": {
      "Pump Type": "Volumetric Infusion Pump",
      "Supported Syringes": "1, 2, 5, 10, 20, 30, 50, 60 mL",
      "Delivery Modes": "Rate, Time, Weight, Sequence, Micro, Trapezia",
      "Display": "2.4-inch medical display",
      "Alarms": "Occlusion, Air-in-line, Low Battery, Purge",
      "Battery Features": "22-hour battery life",
      "Display Output": "4.0-inch touchscreen",
      "Brochure Reference": "Page(s): 20"
    }
  },
  {
    "id": "suntech-oscar-2",
    "title": "Suntech Oscar 2",
    "category": "Critical Care",
    "brand": "Suntech",
    "authorizedDealer": true,
    "description": "ABPM system by Suntech.",
    "longDescription": "The Suntech Oscar 2 is a premium ABPM solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/suntech_oscar_2.jpeg"
    ],
    "features": [
      "Motion tolerance",
      "Clinical validations: BHS, ESH, AAMI, SP10 and ISO 81060-2",
      "Patented cuffs",
      "SphygmoCor Inside optional",
      "Patented sub-diastolic waveform measurement optional",
      "Bluetooth with True24 optional"
    ],
    "specifications": {
      "Measurement Technology": "AdvantAge Clinical-Grade BP",
      "Applications": "Ambulatory Blood Pressure (ABPM)",
      "Motion Tolerance": "High interference rejection algorithms",
      "Clinical Validations": "BHS, ESH, AAMI, ISO 81060-2 listed",
      "Brochure Reference": "Page(s): 21"
    }
  },
  {
    "id": "suntech-tango-m2",
    "title": "Suntech Tango M2",
    "category": "Critical Care",
    "brand": "Suntech",
    "authorizedDealer": true,
    "description": "Stress BP Monitor system by Suntech.",
    "longDescription": "The Suntech Tango M2 is a premium Stress BP Monitor solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/suntech_tango_m2.jpeg"
    ],
    "features": [
      "Seamless integration with verified measurements",
      "Non-exercise BP mode",
      "Stat mode",
      "7-inch color LCD display",
      "Data retrieval and field upgrades"
    ],
    "specifications": {
      "Measurement Technology": "AdvantAge Clinical-Grade BP",
      "Applications": "Stress Procedure BP",
      "Motion Tolerance": "High interference rejection algorithms",
      "Clinical Validations": "BHS, ESH, AAMI, ISO 81060-2 listed",
      "Brochure Reference": "Page(s): 21"
    }
  },
  {
    "id": "suntech-ct-40",
    "title": "Suntech CT-40",
    "category": "Critical Care",
    "brand": "Suntech",
    "authorizedDealer": true,
    "description": "spot check Device system by Suntech.",
    "longDescription": "The Suntech CT-40 is a premium spot check Device solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/suntech_ct_40.jpeg"
    ],
    "features": [
      "Clinical-grade AdvantAge BP technology",
      "Manual SphygmoMode for real-time verification",
      "Customizable BP averaging",
      "Connectivity via HL7 messaging protocols"
    ],
    "specifications": {
      "Measurement Technology": "AdvantAge Clinical-Grade BP",
      "Applications": "spot check Ward Operations",
      "Motion Tolerance": "High interference rejection algorithms",
      "Clinical Validations": "BHS, ESH, AAMI, ISO 81060-2 listed",
      "Brochure Reference": "Page(s): 21"
    }
  },
  {
    "id": "sleepnet-veraseal-2",
    "title": "Sleepnet Veraseal 2",
    "category": "Consumables",
    "brand": "Sleepnet",
    "authorizedDealer": true,
    "description": "Full Face Mask mask by Sleepnet.",
    "longDescription": "The Sleepnet Veraseal 2 is a premium Full Face Mask solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/sleepnet_veraseal_2.jpeg"
    ],
    "features": [
      "AIRgel cushion technology",
      "Advanced cushion technology",
      "Lightweight frame",
      "Forehead adjustment knob",
      "Quick release headgear",
      "360-degree rotating swivel"
    ],
    "specifications": {
      "Mask Classification": "Full Face NIV / CPAP Mask",
      "Cushion Technology": "Patented AIR°gel® technology",
      "Adjustment Mechanisms": "Forehead dial matching, Quick-release straps",
      "Usage Applications": "Continuous Positive Airway Pressure (CPAP), Bi-Level",
      "Brochure Reference": "Page(s): 22"
    }
  },
  {
    "id": "sleepnet-veraseal-3",
    "title": "Sleepnet Veraseal 3",
    "category": "Consumables",
    "brand": "Sleepnet",
    "authorizedDealer": true,
    "description": "Full Face Mask mask by Sleepnet.",
    "longDescription": "The Sleepnet Veraseal 3 is a premium Full Face Mask solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/sleepnet_veraseal_3.jpeg"
    ],
    "features": [
      "AIRgel cushion technology",
      "Advanced cushion technology",
      "Lightweight frame",
      "Forehead adjustment knob",
      "Quick release headgear",
      "360-degree rotating swivel"
    ],
    "specifications": {
      "Mask Classification": "Full Face NIV / CPAP Mask",
      "Cushion Technology": "Patented AIR°gel® technology",
      "Adjustment Mechanisms": "Forehead dial matching, Quick-release straps",
      "Usage Applications": "Continuous Positive Airway Pressure (CPAP), Bi-Level",
      "Brochure Reference": "Page(s): 22"
    }
  },
  {
    "id": "sleepnet-mojo-2",
    "title": "Sleepnet Mojo 2",
    "category": "Consumables",
    "brand": "Sleepnet",
    "authorizedDealer": true,
    "description": "Full Face Mask mask by Sleepnet.",
    "longDescription": "The Sleepnet Mojo 2 is a premium Full Face Mask solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/sleepnet_mojo_2.jpeg"
    ],
    "features": [
      "AIRgel cushion technology",
      "Custom fit technology",
      "Flex-Fit comfort design",
      "Forehead cushion",
      "Forehead adjustment knob",
      "Magnetic headgear connectors"
    ],
    "specifications": {
      "Mask Classification": "Full Face NIV / CPAP Mask",
      "Cushion Technology": "Patented AIR°gel® technology",
      "Adjustment Mechanisms": "Forehead dial matching, Quick-release straps",
      "Usage Applications": "Continuous Positive Airway Pressure (CPAP), Bi-Level",
      "Brochure Reference": "Page(s): 22"
    }
  },
  {
    "id": "sleepnet-ascend",
    "title": "Sleepnet Ascend",
    "category": "Consumables",
    "brand": "Sleepnet",
    "authorizedDealer": true,
    "description": "Full Face Mask & Nasal Mask mask by Sleepnet.",
    "longDescription": "The Sleepnet Ascend is a premium Full Face Mask & Nasal Mask solution designed for optimal performance and reliability in clinical settings.",
    "images": [
      "/images/products/sleepnet_ascend.jpeg"
    ],
    "features": [
      "AIRgel cushion technology",
      "Replaceable cushion",
      "Advanced cushion technology (A.C.T.)",
      "Touchless spacer",
      "Active headgear connector",
      "360-degree rotating swivel"
    ],
    "specifications": {
      "Mask Classification": "Full Face / Nasal Combo",
      "Cushion Technology": "Patented AIR°gel® technology",
      "Adjustment Mechanisms": "Forehead dial matching, Quick-release straps",
      "Usage Applications": "Continuous Positive Airway Pressure (CPAP), Bi-Level",
      "Brochure Reference": "Page(s): 22"
    }
  }
];
