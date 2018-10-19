import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ShellComponent } from './shell.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '', component: ShellComponent,
    children: [
      { path: '', component: MainContentComponent }
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    //BrowserAnimationsModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule
  ],
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    MainContentComponent,
    ShellComponent
  ]
})
export class ShellModule { }
