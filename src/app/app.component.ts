import { Component} from '@angular/core';
import { SlideInOutAnimation } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [SlideInOutAnimation]
})
export class AppComponent {

router: boolean = false;
carousel: boolean = true;
animationState = 'in';

  toggleShowDiv(divName: string) {
    if (divName === 'divA') {
      console.log(this.animationState);
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
      console.log(this.animationState);
      this.router = true;
    }
  }

}
