import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { SignupService } from '../shared/signup.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  @Input()
  formModel: FormGroup

  private regions: string[] = []

  private errorIconHide: boolean = false
  private errorMessage: boolean = true

  // get country list from a public api
  constructor(private signupService: SignupService) { }
  ngOnInit() {
    this.signupService.getRegions().subscribe(
      rep => {
        rep.result.map(group => {
          this.regions.push(group.name)
        })
        this.regions.sort()
      }
    )
  }
}
