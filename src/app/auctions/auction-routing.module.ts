import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuctionListComponent} from "./auction-list/auction-list.component";
import {AuctionAddFormComponent} from "./auction-add-form/auction-add-form.component";

const routes: Routes = [
  {
    path: 'add',
    component: AuctionAddFormComponent
    // TODO: Add AuthGuard here
  },
  {
    path: 'list',
    component: AuctionListComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionRoutingModule { }
