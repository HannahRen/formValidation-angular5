import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {

  @Input()
  formModel: FormGroup

  private requiredError: boolean = true
  private mismatchError: boolean = true
  private errorIconHide: boolean = false

  constructor() { }

  ngOnInit() {
  }

  showErrorMessage(required: boolean, mismatch: boolean) {
    if(required) {
      this.requiredError = false
      return
    }
    mismatch ? this.mismatchError = false : ''
  }

  hideErrorMessage() {
    this.requiredError = true
    this.mismatchError = true
  }
}
