import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-observable',
  templateUrl: './rxjs-observable.component.html',
  styles: [
  ]
})
export class RxjsObservableComponent {

  magazine: Observable<string> = new Observable((observer)=>{
    try {
      observer.next('First Edition');
      observer.next('Second Edition');
      observer.next('Third Edition');
      observer.complete();
    } catch (error) {
      observer.error(error);
    }
  })

}
