import { ListaSuspensaComponent } from './../components/lista-suspensa/lista-suspensa.component';
import { Post } from 'src/services/post';
import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  empresas : any = [];
  nomeEmpresa : string ="";

  constructor(
    private post : Post, 
    private toast : ToastController, 
    private route: Router,
    public popoverController: PopoverController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){

    this.empresas =[];
    this.carregarDadosEmpresas();
   
  }

  
  async mensagem(msg,duration,color) {
    const toast = await this.toast.create({
      message: msg,
      duration: duration,
      color: color
    });
    toast.present();
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

    })

  }

  excluirEmpresa(codigo){

    return new Promise(resolve => {
      let dados = {
        acao : 'excluir',
        codigo : codigo       
      };

      this.post.dadosApi(dados,'api.php').subscribe(data => {

        this.ionViewWillEnter();
        this.mensagem("Empresa excluída com sucesso!",3000,"success");

      });

    })   


  }

  editarEmpresa(codigo,nome){

    this.route.navigate(['/editar-empresa/'+codigo+'/'+nome]);    

  }

  async listaSuspensa(ev: any) {
    const popover = await this.popoverController.create({
      component: ListaSuspensaComponent,
      event: ev,
      translucent: true
    });
    await popover.present();
  
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
