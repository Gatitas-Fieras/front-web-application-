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
  editProfile: boolean | undefined;
  editBtn: string | undefined;
  profileEdited: boolean | undefined;

  constructor(private shared: SharedsService, private userApi : UserApiService) {

   }


   getUserById(): void {
      this.userApi.getUserById(this.shared.getId()).subscribe((response: any) => {
        this.user = response.content;
        this.description = this.user?.description;
        console.log(this.user);
      })
      this.editProfile = false;
   }

  ngOnInit(): void {
    this.getUserById();
    this.editBtn = "Edit Profile";
    this.profileEdited = false;
  }

  makeEditPorfileTrue(): void {
    this.editProfile = true;
    this.editBtn = "Save"
    if(this.editBtn == "Save" && this.description != undefined) {
      console.log(this.description);
      this.editBtn="Edit Profile";
      this.editProfile = false;
    }

  }

}
