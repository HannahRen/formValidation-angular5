import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  @Input()
  formModel: FormGroup

  private errorMessage: boolean = true

  constructor() { }

  ngOnInit() {
  }

}
