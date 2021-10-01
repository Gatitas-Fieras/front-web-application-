import { Component} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-tuthor-register',
  templateUrl: './tuthor-register.component.html',
  styleUrls: ['./tuthor-register.component.css']
})
export class TuthorRegisterComponent{

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
