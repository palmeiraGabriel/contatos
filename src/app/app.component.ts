import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrandoModal = false;
  title = 'contatos';

  mostrarModal(){
    this.mostrandoModal = true;
    
  }
  fecharModal(){
    this.mostrandoModal = false;
    
  }
}
