import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { pconfirmValidator, pcharacterValidator, pdigitValidator, emailValidator, birthdayValidator, nameValidator, psymbolValidator } from '../validator/validators';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { SignupService } from '../shared/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formModel: FormGroup;

  private id: number = -1

  constructor(@Inject(FormBuilder) fb: FormBuilder, private signupService: SignupService, private router: Router) {
    this.formModel = fb.group({
      firstName: ['', [Validators.required, nameValidator]],
      lastName: ['', [Validators.required, nameValidator]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, emailValidator]],
      birthday: ['', [Validators.required, birthdayValidator]],
      region: ['', Validators.required],
      passwordGroup: fb.group({
        password: ['', [Validators.required, Validators.minLength(6), pcharacterValidator, pdigitValidator, psymbolValidator]],
        pconfirm: ['', Validators.required]
      }, {validator: pconfirmValidator})
    })
  }

  // Validate all fields in FormGroup, and set all untouched fields to touched ones
  validateWholeForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach( controlName => {
      const fc = formGroup.get(controlName)
      if (fc instanceof FormControl) {
        fc.markAsTouched({
          onlySelf: true
        })
      } else if (fc instanceof FormGroup) {
        this.validateWholeForm(fc)
      }
    })
  }

  // Post registration result to a public api, and if successful, show the registration id.
  onSubmit() {
    if (this.formModel.valid) {
      this.signupService.postForm(this.formModel).subscribe(
        rep => {
          rep.id ? this.id = rep.id : ''
          if(this.id !== -1) {
            this.router.navigate(['/success'], { queryParams: { id: this.id } })
          } else {
            alert ("Error!")
          }
        }
      )
    } else {
      this.validateWholeForm(this.formModel)
    }
  }
  ngOnInit() {
  }

}
