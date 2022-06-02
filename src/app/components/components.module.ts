import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [FooterComponent]
})
export class ComponentsModule { }
