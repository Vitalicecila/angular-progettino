import { Component } from '@angular/core';
import { ChiaveService } from './chiave.service';

export class postit {
  titolo: string;
  corpo: string;
  imp: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Benvenuto! Ti sei loggato con chiave:';
  selezione: postit = new postit();
  savedPosts: Array<postit> = [];
  click: boolean = false;
  importants: Array<postit>;
  //flag del login per mostrare prima o seconda schermata
  log: boolean = false;
  //key globale per mostrarla accanto a "benvenuto"
  key = '';
  //istanzio un oggetto di tipo del servizio chuck
  constructor(private service: ChiaveService) {}

  showOne(id: object) {
    this.selezione.titolo = id.titolo;
    this.selezione.corpo = id.corpo;
  }

  addPost(newPostit: postit) {
    this.service.apiKEY = this.key;
    this.savedPosts.push(newPostit);
    let newmsg: string = JSON.stringify(this.savedPosts);
    this.service
      .postData(newmsg)
      .then(response => response.json(), error => alert(error));
  }

  deletePost(id: object) {
    this.savedPosts = this.savedPosts.filter(postit => postit != id);
    //vanno eliminati anche da importants gli eliminati da saved
    this.importants = this.savedPosts.filter(postit => postit.imp == true);
    //per eliminare anche p di mostra se elimino
    this.selezione.corpo = undefined;
    this.selezione.titolo = undefined;
    let newmsg: string = JSON.stringify(this.savedPosts);
    this.service
      .postData(newmsg)
      .then(response => response.json(), error => alert(error));
  }

  mostraImp() {
    this.click = true;
    this.importants = this.savedPosts.filter(postit => postit.imp == true);
  }
  mostraAll() {
    this.click = false;
  }

  login(k: string) {
    this.service.apiKEY = k;
    this.service
      .getData()
      .then(response => response.json(), error => alert(error))
      .then(data => {
        let obj = JSON.parse(data);
        for (let i in obj) {
          this.savedPosts.push(obj[i]);
        }
        this.log = true;
        this.key = k;
      });
  }

  getKey() {
    this.service.Key().then(key => {
      fetch(this.service.apiURL + '/post?key=' + key + '&msg=' + {}, {
        method: 'POST'
      }).then(response => response.json(), error => alert(error));
      this.key = key;
    });
    this.log = true;
  }
}
