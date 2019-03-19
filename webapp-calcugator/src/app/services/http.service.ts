import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, timer} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Injectable()
export class HttpService
{
  private baseURL: string = ''; // can be implemented with config json for non-dev environments

  private timeout: number = 60000;

  constructor(private http: HttpClient)
  {

  }

  performPutRequest<T>(path: string, body: any) : Observable<T>
  {
    return this.http.put(this.baseURL + path, body)
      .pipe(takeUntil(timer(this.timeout))) as Observable<T>;
  }

  performGetRequest<T>(path: string) : Observable<T>
  {
    return this.http.get(this.baseURL + path)
      .pipe(takeUntil(timer(this.timeout))) as Observable<T>;
  }
}
