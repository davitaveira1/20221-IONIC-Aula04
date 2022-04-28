import { Post } from 'src/services/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  nome : string;

  constructor(private post : Post) { }

  ngOnInit() {
  }

  cadastrar(){

    return new Promise(resolve => {
      let dados = {
        acao : 'add',
        nome : this.nome        
      };

      this.post.dadosApi(dados,'api.php').subscribe(data => {
        //this.router.navigate(['/listar-produtos']);
        //this.mensagemSalvar('Produto adicionado com sucesso!');
        console.log("Dados adicionados")
        this.nome="";

      });

    });     

  }

}
