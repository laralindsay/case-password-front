import { AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';
import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
},
{
    path: "user",
    component: UserComponent,
    canActivate: [AuthGuard]
}
];
