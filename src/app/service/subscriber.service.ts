import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscriber } from 'src/app/model/subscriber.model';
@Injectable({
  providedIn: 'root'
})
export class SubscriberService {
  private baseUrl = 'http://localhost:8080/subscriber';

  constructor(private http: HttpClient) { }

  addSubscriber(subscriber: Subscriber): Observable<Subscriber> {
    return this.http.post<Subscriber>(`${this.baseUrl}/add`, subscriber);
  }

  sendYourDishes(author: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('author', author);
    formData.append('file', file);

    return this.http.post(`${this.baseUrl}/your-dishes`, formData);
  }
}
