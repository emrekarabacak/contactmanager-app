import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.modules';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { Routes, RouterModule } from '@Angular/router';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
  {
    path: '', component: ContactmanagerAppComponent,
    children: [
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  providers: [UserService],
  declarations: [ToolbarComponent, SidenavComponent, MainContentComponent, ContactmanagerAppComponent]
})
export class ContactmanagerModule { }
