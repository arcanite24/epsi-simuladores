import { Roles } from './app.models';

/*
  Epsi Simuladores
    Main Config File

  Here you need to customize almost every parameter in this file before compiling and deploying

*/

// Core
export const functionsEndpoint = 'https://us-central1-epsi-simuladores.cloudfunctions.net';

// Content
export const contentHierarchy: string[] = [
  'materia',
  'bloque',
  'tema',
  'subtema'
];

export const contentRatings: {key: string, label: string, max: number}[] = [
  {key: 'content', label: 'Contenido', max: 5},
  {key: 'design', label: 'Diseño', max: 5},
  {key: 'understandable', label: 'Agradable/Entendible', max: 5},
];

// Payment
export const modularUrl = '/pagar-alt/modular';

// Statistics

// General Average content type calculation. If false it will take all ExamResults associated with the user
export const generalAverageTypes: string[] | false = false;

// Average Multiplier, normally the average is calculated in a model like x out of 1
export const averageMultiplier = 100;

// Milliseconds to wait after each refresh
export const statRefreshTimeout = 10000;

// Stat Performance Tags to use for the plot
export const performancePlotTags: string[] = [
  'Vue',
  'Angular',
  'React'
];

/* Modular */
// Modular roles
export const ModularRoles = [
  Roles.isMedicinaInterna2020,
  Roles.isCirugia2020,
  Roles.isGineco2020,
  Roles.isPediatria2020,
  Roles.isUrgencias2020,
];

// Tags by role
export const TagsByRole = {
  [Roles.isMedicinaInterna2020]: [
    'Medicina Interna',
    'Endocrinología',
    'Hematología',
    'Dermatología',
    'Geriatría',
    'Gastroenterología',
    'Infectología ',
    'Neumología',
    'Neurología',
    'Inmunología y Alergia',
    'Nefrología',
    'Oftalmología',
    'Psiquiatría',
    'Oncología',
    'OTL',
    'Cardiología',
    'Reumatología',
    'Epidemiología',
  ],
  [Roles.isCirugia2020]: [
    'Cirugía',
    'Cirugía General',
    'Trauma y Ortopedia',
    'Urología',
    'Angiología',
  ],
  [Roles.isGineco2020]: [
    'Ginecología Y Obstetricia',
    'Ginecología',
    'Obstetricia',
  ],
  [Roles.isPediatria2020]: [
    'Pediatría y Neonatología',
    'Pediatría',
    'Neonatología',
  ],
  [Roles.isUrgencias2020]: [
    'Urgencias y Medicina Crítica',
    'Urgencias',
    'Medicina Crítica',
  ]
};

// Light Package
export const MAX_PURCHASABLE_LIGHT_MONTHS = 3; // Cuantos meses maximo se pueden comprar de Light