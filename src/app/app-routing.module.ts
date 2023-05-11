import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
	{ path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
