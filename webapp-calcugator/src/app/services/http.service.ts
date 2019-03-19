import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, timer} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Injectable()
export class HttpService
{
  baseURL: string = ''; // can be implemented with config json for non-dev environments

  constructor(private http: HttpClient)
  {

  }

  performPutRequest<T>(path: string, body: any) : Observable<T>
  {
    return this.http.put(this.baseURL + path, body)
      .pipe(takeUntil(timer(60000))) as Observable<T>;
  }
}
