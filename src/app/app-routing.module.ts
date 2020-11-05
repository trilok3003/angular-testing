import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentProjectionExComponent } from './content-projection-ex/content-projection-ex.component';
import { ProgressExampleComponent } from './progress-example/progress-example.component';

const routes: Routes = [
  {path: 'progress-examples', component: ProgressExampleComponent },
  {path: 'content-projection', component: ContentProjectionExComponent },

  // { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
