import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { JoinpartyComponent } from './app/pages/joinparty/joinparty.component';
import { AdminAddComponent } from './app/pages/admin-add/admin-add.component';
import { ContactComponent } from './app/pages/contact/contact.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'home', component: HomeComponent },
      { path: 'joinparty', component: JoinpartyComponent },
      { path: 'admin/add', component: AdminAddComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: '' }
    ])
  ]
}).catch(err => console.error(err));
