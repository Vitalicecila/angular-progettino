import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-get-key',
  templateUrl: './get-key.component.html',
  styleUrls: ['./get-key.component.css']
})
export class GetKeyComponent {
  @Output() newKeyEvent = new EventEmitter<string>();
  @Output() newAltroEvent = new EventEmitter();

  useKey(key: string) {
    this.newKeyEvent.emit(key);
  }
  getKey(){
    this.newAltroEvent.emit();
  }
}
