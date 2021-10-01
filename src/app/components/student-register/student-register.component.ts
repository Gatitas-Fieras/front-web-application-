import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {UserApiService} from "../../core/services/user-api.service";
import {LanguagesApiService} from "../../core/services/languages-api.service";
import {TopicsApiService} from "../../core/services/topics-api.service";

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
})
export class StudentRegisterComponent implements OnInit{
  loading: boolean = false;
  form: FormGroup;
  languages: any[] = [];
  topics: any[] = [];
  newUser = {};
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private fb: FormBuilder,private router: Router, private userApi: UserApiService, private languageApi: LanguagesApiService,private topicsApi: TopicsApiService) {
    this.languages = [];
    this.topics = [];
    this.form = this.fb.group({
      topic: [{}],
      username:['', Validators.required],
      password: ['', Validators.required],
      email:['', Validators.required],
      language: [[], Validators.required],
      description: ''

    })
  }

  ngOnInit(): void {
    this.getAllLanguages();
    this.getAllTopics();
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  saveUserToAPI(data: any): void{
    this.userApi.addUser(data)
      .then((response)=>{
        this.loading = false;
        console.log(response);
        this.router.navigate(['main']);
      })
      .catch((e) =>{
        console.log(e);
      })
  }

  getAllLanguages():void{
    this.languageApi.getAllLanguages()
      .then((response: any) =>{
        for(let i = 0; i < response.content.length; i++){
          this.languages.push(response.content[i]);
        }
        console.log(this.languages);
      })
      .catch((e) => console.log(e));
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

  register(): void{


     this.newUser = {
       profilePhoto: "dfdfdsfdfs",
       lastname: "pepelucho",
      // @ts-ignore
      name: this.form.get('username').value,
      // @ts-ignore
      password: this.form.get('password').value,
      // @ts-ignore
      description: this.form.get('description').value,
      // @ts-ignore
      topic: this.form.get('topic').value,
      // @ts-ignore
      language: this.form.get('language').value
      }

      this.saveUserToAPI(this.newUser);
  }
}


