import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Collections, SlideCategory, Exam } from 'src/app/app.models';
import { map, take, finalize } from 'rxjs/operators';
import async from 'async'
import { AngularFireStorage } from '@angular/fire/storage';
import _ from 'lodash'

@Component({
  selector: 'epsi-admin-migration',
  templateUrl: './admin-migration.component.html',
  styleUrls: ['./admin-migration.component.scss']
})
export class AdminMigrationComponent implements OnInit {

  public l: boolean = false

  public url: string = 'https://api.zamnademy.com/api/v1/'
  public collection: string
  public appendToAll: string
  public fields: string
  public limit: number
  public offset: number
  public child_type: string
  public children_key: string
  
  private batchLimit = 20

  public data: any

  constructor(
    private http: HttpClient,
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {
  }

  async fetchData(url: string, cb?: () => void) {

    this.l = true
    if(cb) console.log('fetching data for:', this.offset)

    try {

      const data = await this.http.get<any>(url).toPromise()
      console.log(data);
      console.log(JSON.stringify(data.map(d => ({id: d.id, name: d.name}))))
      this.data = data

      this.l = false
      if(cb) cb()

    } catch (error) {
      this.l = false
    }

  }

  async migrateToFirestore() {

    this.l = true
    const startTime = Date.now()

    try {

      const appendData = JSON.parse(this.appendToAll)

      const fields = this.fields.split('\n').map(pair => {
        const newPair = pair.split('#')
        return {old_key: newPair[0], new_key: newPair[1]}
      })

      const data = this.data.map(item => {

        let _item = {}

        // Build object with new keys
        for (const field of fields) {
          _item[field.new_key] = item[field.old_key] ? item[field.old_key] : null
        }

        // Append data
        for (const [key, value] of Object.entries(appendData)) {
          _item[key] = value
        }

        return _item

      })

      console.log('final data', data)
      //console.log(data.map(d => ({id: d.id, name: d.name})))
      const batch = this.afs.firestore.batch()

      // Register data to Firestore
      for (const item of data) {
        const id = this.afs.createId()
        const ref = this.afs.doc(`${this.collection}/${id}`).ref
        batch.set(ref, {...item, id})
      }

      await batch.commit()

      console.log(`Finished adding ${data.length} items in ${(Date.now() - startTime).toFixed(2)}ms`)
      this.l = false

    } catch (error) {
      console.log(error)
      this.l = false
    }

  }

  async migrateContent() {

    this.l = true
    const startTime = Date.now()

    try {

      const appendData = JSON.parse(this.appendToAll)

      const fields = this.fields.split('\n').map(pair => {
        const newPair = pair.split('#')
        return {old_key: newPair[0], new_key: newPair[1]}
      })

      let data = []

      async.each(this.data, async (item, next) => {

        let _item = {}

        // Persist old id
        _item['id'] = item.id

        // Build object with new keys
        for (const field of fields) {
          _item[field.new_key] = item[field.old_key] ? item[field.old_key] : null
        }

        // Append data
        for (const [key, value] of Object.entries(appendData)) {
          _item[key] = value
        }

        // Assign father
        _item['parent_id'] = item.bloque.id

        // Register children
        if (item[this.children_key] && item[this.children_key].length > 0) {
          for (const child of item[this.children_key]) {

            child.description = child.desc
            child.type = this.child_type
            child.parent_id = item.id
            child.totalRatings = 0
            child.ratings = {}
            child.parent_type = 'tema'
            child.markers = child.marks ? child.marks.map(m => ({
              tag: m.text,
              time: {
                hour: m.time.HH,
                minute: m.time.mm,
                second: m.time.ss
              }
            })) : []

            data.push(child)

          }
        }

        // Format Event Tasks
        /* if (item.tareas) {
          _item['tasks'] = item.tareas.map(t => ({
            id: t.id,
            label: t.text,
            users: [],
            completed: 0
          }))
        } */

        // Format user
        /* if (item.user) {
          _item['user'] = {
            photoURL: item.user.avatar ? item.user.avatar: 'https://via.placeholder.com/128',
            displayName: item.user.name,
            email: item.user.email,
          }
        } else {
          _item['user'] = {
            photoURL: 'https://via.placeholder.com/128',
            displayName: 'Usuario no encontrado',
            email: 'soporte@epsidev.com.mx',
          }
        } */

        // Append Father
        /* if (item.categoria) {
          const father = await this.afs.collection<MediaCategory>('media-cat', ref => ref
          .where('name', '==', item.categoria.name))
          .valueChanges()
          .pipe(
            take(1),
            map(parents => parents[0])
          ).toPromise()

          _item['url'] = 'https://zamnademy.com' + item.file
          _item['categoria'] = father
          _item['cat_name'] = father.name
          _item['cat_id'] = father.id
        } */

        // Formart Markers
        _item['markers'] = item.marks ? item.marks.map(m => ({
          tag: m.text,
          time: {
            hour: m.time.HH,
            minute: m.time.mm,
            second: m.time.ss
          }
        })) : []

        data.push(_item)
        next()

      }, async () => {

        console.log('final data', data)
        //return this.l = false
        //console.log(data.map(d => ({id: d.id, name: d.name})))

        const batch = this.afs.firestore.batch()

        // Register data to Firestore
        for (const item of data) {
          //const id = this.afs.createId()
          const ref = this.afs.doc(`${this.collection}/${item.id}`).ref
          batch.set(ref, item)
        }

        await batch.commit()

        console.log(`Finished adding ${data.length} items in ${(Date.now() - startTime).toFixed(2)}ms`)
        this.l = false

      })

    } catch (error) {
      console.log(error)
      this.l = false
    }

  }

  async migrateExam() {

    this.l = true
    const startTime = Date.now()

    try {

      const appendData = JSON.parse(this.appendToAll)

      const fields = this.fields.split('\n').map(pair => {
        const newPair = pair.split('#')
        return {old_key: newPair[0], new_key: newPair[1]}
      })

      let data = []
      const batch = this.afs.firestore.batch()

      async.each(this.data, async (item, next) => {

        let _item = {}
        let _tags = []
        let questions = []

        // Keep original id
        _item['id'] = item.id

        // Build object with new keys
        for (const field of fields) {
          _item[field.new_key] = item[field.old_key] ? item[field.old_key] : null
        }

        // Append data
        for (const [key, value] of Object.entries(appendData)) {
          _item[key] = value
        }

        // Register Questions
        for (const q of item.preguntas) {

          const questionId = q.id
          const questionRef = this.afs.doc(`${Collections.QUESTION}/${questionId}`).ref
          const questionItem = {
            id: questionId,
            text: q.text,
            correcta: q.correcta,
            feedback: q.feedback ? q.feedback : null,
            img: q.img ? q.img : null,
            tags: q.tags ? q.tags : null,
            respuestas: q.respuestas.map(r => ({id: r.id, text: r.text, parent: questionId}))
          }

          _tags = [ ..._tags, ...(q.tags ? q.tags : []) ]
          batch.set(questionRef, questionItem)
          questions.push(questionItem)

        }

        _item['questions'] = questions
        _item['tags'] = _.uniq(_tags)

        data.push(_item)
        next()

      }, async () => {

        console.log('final data', data)

        // Register data to Firestore
        for (const item of data) {
          const ref = this.afs.doc(`${this.collection}/${item.id}`).ref
          batch.set(ref, item)
        }

        await batch.commit()

        console.log(`Finished adding ${data.length} items in ${(Date.now() - startTime).toFixed(2)}ms`)
        this.l = false

      })

    } catch (error) {
      console.log(error)
      this.l = false
    }

  }

  async migrateSlide(cb?: () => void) {

    this.l = true
    const startTime = Date.now()

    try {

      const appendData = JSON.parse(this.appendToAll)

      const fields = this.fields.split('\n').map(pair => {
        const newPair = pair.split('#')
        return {old_key: newPair[0], new_key: newPair[1]}
      })

      let data = []
      const batch = this.afs.firestore.batch()

      async.each(this.data, async (item, next) => {

        let _item = {}

        // Build object with new keys
        for (const field of fields) {
          _item[field.new_key] = item[field.old_key] ? item[field.old_key] : null
        }

        // Append data
        for (const [key, value] of Object.entries(appendData)) {
          _item[key] = value
        }

        // Append Father
        if (item.categoria) {
          const father = await this.afs.collection<SlideCategory>(Collections.SLIDE_CATEGORY, ref => ref
          .where('name', '==', item.categoria.name))
          .valueChanges()
          .pipe(
            take(1),
            map(parents => parents[0])
          ).toPromise()

          _item['categoria'] = father
          _item['cat_name'] = father.name
          _item['cat_id'] = father.id
        }

        _item['images'] = []

        // Upload images
        async.each(item.childs, async (child, next2) => {

          const image = await this.uploadFile(child.id + '-' +child.name, child.img)
          _item['images'].push(image)
          next2()

        }, () => {
          data.push(_item)
          next()
        })

      }, async () => {

        console.log('final data', data)

        // Register data to Firestore
        for (const item of data) {
          const id = this.afs.createId()
          const ref = this.afs.doc(`${this.collection}/${id}`).ref
          batch.set(ref, {...item, id})
        }

        await batch.commit()

        console.log(`Finished adding ${data.length} items in ${(Date.now() - startTime).toFixed(2)}ms`)
        this.l = false
        if(cb) cb()

      })

    } catch (error) {
      console.log(error)
      this.l = false
    }

  }

  async migrateExamDate() {

    this.l = true

    async.each(this.data, async (item, next) => {

      const exam = await this.afs.collection<Exam>(Collections.EXAM, ref => ref
        .where('name', '==', item.name))
        .valueChanges()
        .pipe(
          take(1),
          map(exams => exams[0])
        ).toPromise()

      console.log('updating exam', exam.name, item)

      await this.afs.doc(`${Collections.EXAM}/${exam.id}`).update({date: item.date})

      next()

    }, () => {
      this.l = false
      console.log(`updated ${this.data.length} exams date`)
    })

  }

  migrateBatch(i: number = 0) {

    if (i < this.batchLimit) {

      const url = `https://zamnademy.com/api/v1/slide?limit=${this.limit}&skip=${this.offset}`
      this.fetchData(url, () => {
        this.migrateSlide(() => {
          console.log('batch operation', this.offset, ' finished successfully')
          this.offset += this.limit
          this.migrateBatch(i + 1)
        })
      })

    } else {
      console.log(`Finished ${this.batchLimit} batch operations`)
    }

  }

  uploadFile(filename: string, data: string): Promise<string | null> {
    return new Promise((resolve, reject) => {
      const ref = this.storage.ref(`slides/${filename}`)
      const task = ref.putString(data, 'base64')
      task.snapshotChanges().pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe(url => resolve(url))
        })
      ).subscribe()
    })
  }

}
