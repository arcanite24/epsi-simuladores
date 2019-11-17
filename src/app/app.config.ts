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
