import { Component, OnInit } from '@angular/core';
import { SubscriberService } from 'src/app/service/subscriber.service';
import { Subscriber } from 'src/app/model/subscriber.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriberComponent implements OnInit {

  author:string ='';
  file!: File;
  subscriber: Subscriber = new Subscriber();

  constructor(private subscriberService: SubscriberService) { }
  ngOnInit(): void {
  }
  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files) {
      this.file = input.files[0];
    }
  }
  onSubmitSubscriber() {
    this.subscriberService.addSubscriber(this.subscriber)
      .subscribe(response => {
      });
  }

  onSubmitYourDishes() {
    this.subscriberService.sendYourDishes(this.author, this.file)
      .subscribe(response => {
      });
  }
}
