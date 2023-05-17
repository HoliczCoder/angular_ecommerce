import { switchMap, map, catchError } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Observable, of } from 'rxjs'
import { ConfigService } from '../services/config.service'
import { Action } from '@ngrx/store'
import * as actions from '../store/actions'
import { EshopActions } from '../store/actions'

@Injectable()
export class AppEffects {
	constructor(private _actions: Actions, private apiService: ConfigService) {}

	// PRODUCT
	getProducts$: Observable<Action> = createEffect(() =>
		this._actions.pipe(
			ofType(EshopActions.GetProducts),
			switchMap((action: actions.GetProducts) => this.apiService.getProducts(action.payload)),
			map(res => new actions.GetProductsSuccess(res))
		)
	)
}
