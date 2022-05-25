import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Post } from './../../services/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login : string="";
  senha : string="";

  constructor(private post : Post, private toast : ToastController, private router : Router) { }

  ngOnInit() {
  }

  async mensagem(msg,duration,color) {
    const toast = await this.toast.create({
      message: msg,
      duration: duration,
      color: color
    });
    toast.present();
  }  

  validar(){

    //ACESSAR A API PASSANDO USER E SENHA
    let dados = {
      acao : 'login',
      user : this.login,
      senha : this.senha
    }

    this.post.dadosApi(dados,'api.php').subscribe(data=>{

      if(data['result']){
        //RESULTADO DO SELECT > 0
        console.log("User do BD: "+data['result'].usuario);
        console.log("Senha do BD: "+data['result'].senha);
        this.mensagem('Seja bem vindo!',3000,'success');
        this.router.navigate(['listar']);

      }else{
        //RESULTADO DO SELECT == 0
        console.log("User/senha inválidos!");
        this.login="";
        this.senha="";
      }

    });

  }

}
