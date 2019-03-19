import {Component, OnDestroy, OnInit} from '@angular/core';
import {CalculationsModel} from "./calculations.model";
import {Observable} from "rxjs";
import {HttpService} from "../services/http.service";
import {AutoUnsubscribe} from "ngx-auto-unsubscribe";

@AutoUnsubscribe()
@Component({
             selector: 'app-calculations',
             templateUrl: './calculations.component.html',
             styleUrls: ['./calculations.component.scss']
           })
export class CalculationsComponent implements OnInit, OnDestroy
{
  calculations$: Observable<CalculationsModel[]>;

  constructor(private httpService: HttpService)
  {
  }

  ngOnInit()
  {
    this.calculations$ = this.httpService.performGetRequest('api/calculations/');
  }

  ngOnDestroy(): void
  {
  }


}
