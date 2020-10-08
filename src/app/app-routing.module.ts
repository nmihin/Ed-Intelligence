import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { LessonPlanComponent } from './pages/lesson-plan/lesson-plan.component';
import { StyleguideComponent } from './styleguide/styleguide.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lesson-plan', component: LessonPlanComponent },
  { path: 'styleguide', component: StyleguideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
