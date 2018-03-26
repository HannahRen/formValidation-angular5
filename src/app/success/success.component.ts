import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  private id: number

  constructor(private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.queryParams["id"];

    // 3 seconds later, navigate back to signup page
    setTimeout(() => {
      this.router.navigate(['/signup']);
    }, 3000);
  }
}
