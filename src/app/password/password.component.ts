import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  @Input()
  formModel: FormGroup

  private isVisible: boolean = false

  private requiredError: boolean = true
  private mismatchError: boolean = true
  private passwordError: boolean = true
  private errorIconHide: boolean = false

  constructor() { }

  ngOnInit() {
  }

  showErrorMessage(required: boolean, mismatch: boolean, pinvalid: boolean) {
    if(required) {
      this.requiredError = false
      return
    }
    if (mismatch) {
      this.mismatchError = false
      return
    }
    pinvalid ? this.passwordError = false : ''
  }

  hideErrorMessage() {
    this.requiredError = true
    this.mismatchError = true
    this.passwordError = true
  }

}
