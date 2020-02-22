import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports:[LoginComponent],
  imports: [
    MatGridListModule,
    FormsModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
