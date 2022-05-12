import { ToastController } from '@ionic/angular';
import { Post } from './../../services/post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.page.html',
  styleUrls: ['./editar-empresa.page.scss'],
})
export class EditarEmpresaPage implements OnInit {

  codigo : number;
  nomeEmpresa : string;

  constructor(private ActRoute : ActivatedRoute, private post : Post, private toast : ToastController, private route : Router) { }

  ngOnInit() {

    this.ActRoute.params.subscribe((dados : any)=>{
      //inicialização
      this.codigo = dados.codigo;
      this.nomeEmpresa = dados.nome;
    })

  }

  async mensagem(msg,duration,color) {
    const toast = await this.toast.create({
      message: msg,
      duration: duration,
      color: color
    });
    toast.present();
  }  

  editar(codigo,nomeEmpresa){

    return new Promise(resolve => {
      let dados = {
        acao : 'editar',
        codigo : codigo,
        nomeEmpresa : nomeEmpresa      
      };

      this.post.dadosApi(dados,'api.php').subscribe(data => {

        this.mensagem("Empresa alterada com sucesso!",3000,"success");
        this.route.navigate(['listar']);

      });

    })     

  }


}
