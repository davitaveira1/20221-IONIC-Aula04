import { Post } from 'src/services/post';
import { Component, OnInit } from '@angular/core';
import { promises } from 'fs';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  empresas : any = [];
  nomeEmpresa : string ="";

  constructor(private post : Post) { }

  ngOnInit() {
  }

  ionViewWillEnter(){

    this.empresas =[];
    this.carregarDadosEmpresas();
   
  }

  carregarDadosEmpresas(){

    return new Promise(resolve => {
      let dados = {
        acao : 'listar'       
      };

      this.post.dadosApi(dados,'api.php').subscribe(data => {

        for(let dadosEmpresa of data['result']){
          this.empresas.push(dadosEmpresa);
        }
        resolve(true);

      });

    });  

  }

}
