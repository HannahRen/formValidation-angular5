import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fullname',
  templateUrl: './fullname.component.html',
  styleUrls: ['./fullname.component.css']
})
export class FullnameComponent implements OnInit {

  @Input()
  formModel: FormGroup

  private fRequiredError: boolean = true
  private lRequiredError: boolean = true

  private fMismatchError: boolean = true
  private lMismatchError: boolean = true

  private fErrorIconHide: boolean = false
  private lErrorIconHide: boolean = false

  constructor() { }

  ngOnInit() { }

  showErrorMessage(tag: boolean, required: boolean, mismatch: boolean) {
    if(required) {
      tag ? this.fRequiredError = false : this.lRequiredError = false
      return
    }
    mismatch ? (tag ? this.fMismatchError = false : this.lMismatchError = false) : ''
  }

  hideErrorMessage() {
    this.fRequiredError = true
    this.lRequiredError = true
    this.fMismatchError = true
    this.lMismatchError = true
  }

}
