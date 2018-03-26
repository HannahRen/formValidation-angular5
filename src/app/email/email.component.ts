import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

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
