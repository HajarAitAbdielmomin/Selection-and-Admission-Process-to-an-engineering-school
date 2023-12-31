import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import { CandidatesInfoComponent } from './candidates-info/candidates-info.component';
import {UploadComponent} from "./upload.component";
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Page',
    },
    children: [
      {
        path: 'poster',
        component: ColorsComponent,
        data: {
          title: 'poster',
        },
      },
      {
        path: 'publication',
        component: TypographyComponent,
        data: {
          title: 'Typography',
        },
      },
      {
        path: 'candidates',
        component: CandidatesInfoComponent,
        data: {
          title: 'Candidates',
        },
      },{
        path: 'uploadExcelFile',
        component: UploadComponent,
        data: {
          title: 'upload',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
