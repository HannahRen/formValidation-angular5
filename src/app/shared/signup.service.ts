import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { FormGroup } from '@angular/forms';

@Injectable()
export class SignupService {

  constructor(private http: Http) { }

  getRegions() : Observable<any> {
    return this.http.get('/countries').map(res => res.json())
  }

  postForm(formModel: FormGroup) : Observable<any> {
    return this.http.post('https://reqres.in/api/users', formModel.value).map(res => res.json())
  }
}
