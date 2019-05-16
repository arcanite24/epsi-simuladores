import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Collections, Exam, ExamResults, ExamTypes, User} from "../../app.models";
import {StatsService} from "../../services/stats.service";
import {sortBy} from 'lodash';
import {ActivatedRoute} from "@angular/router";
import {delay} from "rxjs/operators";
const { parse } = require('json2csv');

@Component({
  selector: 'epsi-user-promedios-table',
  templateUrl: './user-promedios-table.component.html',
  styleUrls: ['./user-promedios-table.component.scss']
})
export class UserPromediosTableComponent implements OnInit {

  public mode: string = this.route.snapshot.paramMap.get('mode');

  public text = '';
  public output = [];
  public tempH: string[] = [
    'IGNORE|||id',
    'IGNORE|||name',
    'IGNORE|||promedio',
  ]

  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers: [],
    showTitle: true,
    title: 'user-promedios-table',
    useBom: false,
    removeNewLines: true,
    keys: [],
  };

  constructor(
    private data: DataService,
    private stats: StatsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    if (this.mode === 'default') this.loadTable();
    if (this.mode === 'presenciales') this.loadTablePresenciales();

  }

  async loadTablePresenciales() {

    const start = Date.now();

    const tags = await this.stats.getAllTagPresenciales();
    const _users = await this.data.getCollectionAlt<User>(Collections.USER)
    const users = _users.filter((u: User) => u.isPresencial || u.is3602019);

    const generales = []

    for (let user of users) {

      let payload = {
        id: user.uid,
        name: user.displayName,
        promedio: '-',
      };

      this.text = 'calculando promedio general: ' + user.displayName;
      let average = 0;
      /*const promedio = await this.stats.computeUserAverage(user.uid, false);
      payload.promedio = promedio.toString();*/

      for (let tag of tags) {

        this.text = 'calculando ' + tag + ' para ' + user.displayName

        const key = `---|||${tag}`
        if (!this.tempH.includes(key)) this.tempH.push(key)

        /*const promedio_del_tag = Math.random() * 100;*/
        const promedio_del_tag = await this.stats.computeUserTagAverage(tag.toString(), user.uid);

        payload[key] = promedio_del_tag;
        average += promedio_del_tag;

        await this.delay(Math.random() * 1000);

      }

      payload.promedio = (average / tags.length).toString();
      this.output.push(payload);

    }

    /*console.log(generales)*/
    this.text = `completado en: ${(Date.now() - start) / 1000 / 60} minutos;`

  }

  private delay(duration: number) {
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve();
      }, duration)
    });
  }

  async loadTable() {

    const start = Date.now();

    const _exams = await this.data.getCollectionAlt<Exam>(Collections.EXAM)
    const _users = await this.data.getCollectionAlt<User>(Collections.USER)

    const users = _users.filter((u: User) => u.isPresencial || u.is3602019);
    const exams = _exams.filter((e: Exam) => e.type == ExamTypes.SIMULADOR && e.isPresencial);

    const generales = []

    for (let user of users) {

      let payload = {
        id: user.uid,
        name: user.displayName,
        promedio: '-',
      };

      this.text = 'calculando promedio general: ' + user.displayName;
      let average = 0;
      /*const promedio = await this.stats.computeUserAverage(user.uid, false);
      payload.promedio = promedio.toString();*/

      for (let exam of exams) {

        this.text = 'calculando ' + exam.name + ' para ' + user.displayName
        const result = await this.data.getCollectionQuery<ExamResults>(Collections.EXAM_RESULT, ref => ref
          .orderBy('date', 'asc')
          .where('exam', '==', exam.id)
          .where('user', '==', user.uid))

        const key = `${exam.id}|||${exam.name}`
        if (!this.tempH.includes(key)) this.tempH.push(key)
        payload[key] = result && result.length > 0 ? result[0].promedio * 100 : '-'
        average += result && result.length > 0 ? result[0].promedio : 0;
      }

      payload.promedio = (average / exams.length * 100).toString();
      this.output.push(payload);

    }

    /*console.log(generales)*/
    this.text = `completado en: ${(Date.now() - start) / 1000 / 60} minutos;`
    /*this.output = generales;*/

  }

  public get headers() {
    return this.tempH;
    /*if (!this.output && !this.tempH) return []
    if (!this.output && this.tempH)
    return Object.keys(this.output);*/
  }

  public getValues(user) {
    return Object.values(user);
  }

  public exportToCSV() {

    this.options.headers = Object.keys(this.output[0])

    const csv = parse(this.output, {
      fields: this.options.headers
    })

    console.log(csv);
    const uri = this.makeTextFile(csv);
    this.downloadURI(uri, this.mode === 'default' ? 'user-promedios-table.csv': 'presenciales-tags-table.csv');

  }

  private makeTextFile(text) {
    var textFile = null
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    // returns a URL you can use as a href
    return textFile;
  }

  private downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  sortOutput(output: any[]) {
    return sortBy(output, 'promedio');
  }

}
