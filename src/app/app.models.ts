// TODO: Find a better way to enumerate globally the content types

// Singletons
export const ContentTypes: string[] = [
  'materia',
  'bloque',
  'tema',
  'submtema'
]

export enum Collections {
  // TODO: Add remaining collections
  USER = 'user',
  USER_STAT = 'user-stat',
  EXAM = 'exam',
  ASESORIA = 'livestream',
  SLIDE = 'slide',
  SLIDE_CATEGORY = 'slide-cat',
  TODO = 'todo',
  CONTENT = 'content',
  NOTE = 'note',
  COMMENT = 'comment',
  RATING = 'rating',
  SUGGESTION = 'suggestion',
  EVENT = 'event',
  GALLERY = 'gallery',
  GALLERY_CATEGORY = 'gallery-cat',
  THREAD_CATEGORY = 'thread-cat',
  THREAD = 'thread',
  THREAD_RESPONSE = 'thread-response',
  LIVESTREAM = 'livestream',
  MEDIA = 'media',
  QUESTION = 'question',
  ANSWER = 'answer',
  EXAM_RESULT = 'exam-result',
  POST = 'post',
  POST_COMMENT = 'post-comment',
  TAG = 'tag',
  STAT_VIEW = 'stat-view',
  PAYMENT_MODEL = 'payment-model',
  PAYMENT_REQUEST = 'payment-request',
  NOTIFICATION = 'notification',
  NOTIFICATION_COMMENT = 'notification-comment',
  COUPON = 'coupon',
  MERCADOPAGO_IPN = 'mercadopago-ipn',
  PROGRAMA = 'programa',
  STAT_COUNTER = 'stat-counter'
}

export enum PaymentStatus {
  Approved = 'approved',
  Failed = 'rejected',
  Pending = 'pending',
}

export enum Roles {
  Admin = 'isAdmin',
  Esencial = 'isEsencial',
  Premium = 'isPremium',
  Content = 'isContent',
  Checklist = 'isChecklist',
  Calendar = 'isCalendar',
  TopUsers = 'isTopUsers',
  Galleries = 'isGalleries',
  Simuladores = 'isSimuladores',
  Forum = 'isForum',
  Streaming = 'isStreaming',
  Media = 'isMedia',
  Slides = 'isSlides',
  Simulacros = 'isSimulacros',
  Feed = 'isFeed',
}

export class User {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
  isAdmin: boolean;
  completedTasks?: string[]

  // Zamnademy Fields
  new_email?: string
  universidad?: string
  celular?: string
  especialidad?: string
  about?: string
  lugar_origen?: string

  // Stats
  average_list?: {tag: string, promedio: number}[]
  structure?: {}
  promedio?: number

}

// TODO: Verify if using Interfaces instead of classes works as expected
export interface Content {
  id: string
  name: string
  description: string
  type: string
  cover?: string
  parent_id?: string
  parent_type?: string
  ratings?: {}
  totalRatings?: number
  video?: string
  markers?: Marker[]
  roles?: string[]
  model_slug?: string
  showChildren?: boolean
  haveChildren?: boolean
}

export interface Marker {
  time: {
    hour: number,
    minute: number,
    second: number,
  }
  tag: string,
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
  cat_id: string
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
  feedback?: string
  raw?: any
  tags?: string[]
  img?: string
  group?: string
  selectedAnswer?: string
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
  questions: Question[],
  formattedQuestions?: Question[][],
  isPool?: boolean
  isTags?: boolean
  isPrueba?: boolean
}

export enum ExamTypes {
  SIMULADOR = 'simulador',
  SIMULACRO = 'simulacro',
  PRECLASE = 'preclase',
  CONTENIDO = 'contenido',
  POOL = 'pool',
  TAGS = 'tags',
  PRUEBA = 'demo'
}

export interface Livestream {
  id: string
  name: string
  desc: string
  date: string
  url: string
}

export interface Slide {
  id: string
  name: string
  desc: string
  cat_name: string
  cat_id: string
  images: string[]
}

export interface SlideCategory {
  id: string
  name: string
  desc: string
}

export interface Todo {
  id: string
  text: string,
  completed: number
}

export interface Note {
  id: string
  title: string
  text: string
  parent_type?: string
  parent_id?: string
  content_type?: string
  user: string
}

export interface Comment {
  id: string
  text: string
  user: string
  user_name: string
  user_photo: string
  parent_type?: string
  parent_id?: string
  content_type?: string
  date: string
}

export interface Rating {
  id: string
  // TODO: Add remaining attribues to Rating Interface
}

export interface Suggestion {
  id: string
  text: string
  user: string
  user_name: string
  user_photo: string
  parent_type?: string
  parent_id?: string
  content_type?: string
  content_name?: string
  date: string
}

export interface Event {
  id: string
  title: string
  desc: string
  date: string
  start?: Date
  end?: string
  fullDay?: boolean
  tasks: EventTask[]
  // TODO: Add Event tasks
  // TODO: Add Event links
}

export interface EventTask {
  id: string
  label: string
  users: string[]
  completed: number
}

export interface ThreadCategory {
  id: string
  name: string
  desc: string
}

export interface Thread {
  id: string
  text: string
  title: string
  date: string
  cat_id: string
  cat_name: string
}

export interface ThreadResponse {
  id: string
  text: string
  user: User
  user_id: string
  thread: string
}

export interface ExamResults {
  id: string
  questions: {}
  lastIndex: number
  user: string
  exam: string
  date: string
  promedio: number,
  tags: string[]
}

export interface Post {
  id: string
  user: User
  text: string
  likes: string[]
  date: string,
  image: string
}

export interface PostComment {
  id: string
  user: User
  post: string
  date: string
  text: string
  likes: string[]
}

export interface UserStat {
  id: string
  user: string
  generalAverage?: number
  monthAverage?: number
}

export interface Tag {
  id: string
  value: string
  display: string
  selected?: boolean
}

export interface StatView {
  id: string
  name: string
  includeTags: string[]
  excludeTags: string[],
  cache?: any,
  parent?: string
  parent_name?: string
  isTimeline?: boolean
}

export interface PaymentModel {
  id: string
  name: string
  desc: string
  amount: number
  discountPrice?: number
  slug: string
  unlocks: string[],
  tags: string[],
  canCard: boolean
  canPaypal: boolean
  canStore: boolean
  canMeses: boolean
  canDiscount: boolean,
  packs?: {quantity: number, label: string, price: number}[],
  roles?: string[],
}

export interface PaymentRequest {
  id: string
  user: string
  user_name: string
  email: string
  model: PaymentModel
  status: PaymentStatus
  delivered: boolean,
  ipn: string,
  coupon?: string
}

export interface Notification {
  id: string
  title: string
  text: string
  date: Date
  isGlobal: boolean
}

export interface NotificationComment {
  id: string
  text: string
  date: Date
  user: string
  user_name: string
  user_photo: string
}

export interface Coupon {
  id: string
  code: string
  date: string
  user?: User
  used: boolean,
  value: number
}

export interface Programa {
  id: string
  name: string
  text: string
  links: {label: string, url: string}[]
  parent: Programa
  unlockedBy: string
}

export interface StatCounter {
  id: string
  key: string
  label: string
  value: string
  lastModified: string
}