import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TopicsApiService} from "../../core/services/topics-api.service";
import {LanguagesApiService} from "../../core/services/languages-api.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SessionApiService} from "../../core/services/session-api.service";
import {SessionInput} from "../../core/models/inputs/session-input";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  newSessionFormat: any;
  topicCreatedSuccesfully: boolean = false;
  loading: boolean = false;
  form: FormGroup;
  createNewSesion: boolean = false;
  topics: any[] = [];
  languages: any[] = [];
  newTopicNameValue: [] | undefined;

  constructor(private fb: FormBuilder,private router: Router, private topicsApi: TopicsApiService, private languageApi: LanguagesApiService, private sessionApi: SessionApiService, private _snackBar: MatSnackBar) {
    this.topics = [];
    this.languages = [];
    this.form = this.fb.group({
      newTopicName: '',
      topic: [[]],
      language: [[], Validators.required],
      initialDate: [Date, Validators.required],
      endDate: [Date, Validators.required],
      info: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.topics.push({
      id: 0,
      name: 'Other'
    })
    this.getAllTopics();
    this.getAllLanguages();

    this.form.get('topic')?.valueChanges.subscribe(data =>  {
      console.log(data);
      if(data == 'Other'){
        this.createNewSesion = true;
      }
      console.log(this.createNewSesion);
    })
  }


  getAllTopics(): void{
    this.topicsApi.getAllTopics()
      .then((response: any) =>{
        for(let i = 0; i < response.content.length; i++){
          this.topics.push(response.content[i]);
        }
        console.log(this.topics);
      })
      .catch((error)=>console.log(error))
  }

  getAllLanguages(): void{
    this.languageApi.getAllLanguages()
      .then((response: any) =>{
        for(let i = 0; i < response.content.length; i++){
          this.languages.push(response.content[i]);
        }
        console.log(this.languages);
      })
      .catch((e) => console.log(e));
  }


  createSession(): void{
    this.loading = true;
    if(this.createNewSesion){
      // @ts-ignore
      const newTopicFormat = {name: this.form.get('newTopicName').value}

      this.topicsApi.addTopic(newTopicFormat).then(r => {

        this.topicCreatedSuccesfully = true;
        console.log(r);
        // @ts-ignore
        this.setSessionData(this.form.get('newTopicName').value);
        this.saveSessionToAPI(this.newSessionFormat);

      })
        .catch((error)=> {
          console.log(error);

        });
      // @ts-ignore
      //this.newTopicNameValue.push(this.form.get('newTopicName').value);
    }
    // @ts-ignore
    //this.newTopicNameValue.push(this.form.get('topic').value);

    // @ts-ignore
    this.setSessionData(this.form.get('topic').value);
    this.saveSessionToAPI(this.newSessionFormat);

  }


  saveSessionToAPI(newSessionFormat: any): void{
    this.sessionApi.addSession(newSessionFormat)
      .then((response) => {
        this.loading = false;
        this.createdSuccesfylly();
        console.log(response);
        this.router.navigate(['main']);
      })
      .catch((e) => {
        this.error();
        this.loading = false;
        console.log(e)
      });
  }




  setSessionData(topicName: string): void{
     this.newSessionFormat={
      // @ts-ignore
      endAt:this.form.get('endDate').value,
      // @ts-ignore
      startAt: this.form.get('initialDate').value,
      link: `www.zoom.com/${this.newTopicNameValue}`,
      state: 'active',
      topic: topicName,
      // @ts-ignore
      information: this.form.get('info').value
    }

  }



  createNewTopic(_name: string): void{
    const newTopicFormat = {name: _name}

    this.topicsApi.addTopic(newTopicFormat).then(r => {
      this.topicCreatedSuccesfully = true;
      console.log(r);

    })
      .catch((error)=> {
        console.log(error);

      });

  }

  createdSuccesfylly(){
    this._snackBar.open('Session registrated correctly','',{duration:3000,horizontalPosition : 'center', verticalPosition:'bottom'})
  }

  error(){
    this._snackBar.open('An error ocurred while registrating the session. Please try again.','',{duration:3000,horizontalPosition : 'center', verticalPosition:'bottom'})
  }







}
