// TODO: Find a better way to enumerate globally the content types
// Singletons
export const ContentTypes: string[] = [
  'materia',
  'bloque',
  'tema',
  'submtema'
]

export enum Collections {
  EXAM = 'exam',
}

export class User {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
  isAdmin: boolean;
}

// TODO: Verify if using Interfaces instead of classes works as expected
export interface Content {
  id: string
  name: string
  description: string
  type: string
  cover: string
  parent_id?: string
  parent_type?: string
}

export interface GalleryCategory {
  id: string
  name: string
  desc: string
}

export interface Gallery {
  id: string
  name: string
  desc: string
  fotos: string[]
  categoria: GalleryCategory
  cat_name: string
}

export interface MediaCategory {
  id: string
  name: string
  desc: string
}

export interface Media {
  id: string
  name: string
  desc: string
  url: string
  categoria: MediaCategory
  cat_name: string
}

export interface Question {
  id: string
  text: string
  correcta: string
  respuestas: Answer[]
}

export interface Answer {
  id: string
  text: string
  parent: string
}

export interface Exam {
  id: string
  name: string
  desc: string
  type: ExamTypes
  questions: Question[]
}

export enum ExamTypes {
  SIMULADOR = 'simulador',
  SIMULACRO = 'simulacro',
  PRECLASE = 'preclase',
  CONTENIDO = 'contenido',
}