import { Component, Input } from '@angular/core';
import {postit} from '../app.component'

@Component({
  selector: 'app-mostra',
  templateUrl: './mostra.component.html',
  styleUrls: ['./mostra.component.css']
})
export class MostraComponent {
@Input() selezioneC: postit;

clean() {
   this.selezioneC.corpo = undefined;
  }
 

}