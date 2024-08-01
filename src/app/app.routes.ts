import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from '../main/main.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            anchorScrolling: 'enabled',
        }),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}
