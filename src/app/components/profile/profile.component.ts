import { Component, OnInit } from '@angular/core';
import { UserOutput } from 'src/app/core/models/outputs/userOutput';
import { UserApiService } from 'src/app/core/services/user-api.service';
import { SharedsService } from 'src/app/shared/shareds.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  description: string | undefined;
  user :UserOutput | undefined;

  constructor(private shared: SharedsService, private userApi : UserApiService) {

   }


   getUserById(): void {
      this.userApi.getUserById(this.shared.getId()).subscribe((response: any) => {
        this.user = response.content;
      })
   }

  ngOnInit(): void {
    this.getUserById();
    this.description = this.user?.description;
  }

}
