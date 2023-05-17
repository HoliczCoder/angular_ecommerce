import { State } from './../store/reducers/product.reducer'
import { map, distinctUntilChanged, filter, take, skip, withLatestFrom, retry } from 'rxjs/operators'
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core'
import { Observable, combineLatest, Subscription } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router'
import { Meta, Title } from '@angular/platform-browser'
import { Store } from '@ngrx/store'
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar'
import { Product, Cart, Category, Pagination } from '../common/models'
import { sortOptions } from '../common/constants'
import { ConfigService } from '../services/config.service'
import * as actions from '../store/actions'
import * as fromRoot from '../store/reducers/index'

export interface Config {
	heroesUrl: string
	textfile: string
	date: any
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnDestroy {
	product$!: Observable<Product>
	products$!: Observable<Product[] | null>
	cartId$!: Observable<{ [productId: string]: number }>
	cart$!: Observable<Cart>
	loadingProducts$!: Observable<boolean>
	categories$!: Observable<Category>
	pagination$!: Observable<Pagination>
	category$!: Observable<string>
	filterPrice$!: Observable<number>
	maxPrice$!: Observable<number>
	minPrice$!: Observable<number>
	page$!: Observable<number>
	sortBy$!: Observable<string>
	currency$!: Observable<string>
	lang$!: Observable<string>
	categoriesSub!: Subscription
	productsSub!: Subscription
	sortOptions = sortOptions
	sidebarOpened = false

	readonly component = 'homeComponent'

	goToDetail() {
		alert('hello world')
	}

	public headers: any
	public config!: Config

	constructor(private configService: ConfigService, private store: Store<fromRoot.State>) {
		this.products$ = this.store.select(fromRoot.getProducts).pipe(
			filter(products => {
				console.log('products', products)
				return !!products
			})
		)
	}

	showConfigResponse() {
		this.configService.getConfigResponse().subscribe(resp => {
			const keys = resp.headers.keys()
			this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`)

			// access the body directly, which is typed as `Config`.
			this.config = { ...resp.body! }
			// alert(JSON.stringify(this.config))
			alert(this.headers)
		})
	}

	ngOnDestroy(): void {
		this.categoriesSub.unsubscribe()
		this.productsSub.unsubscribe()
	}

	ngOnInit(): void {
		// dispatch to get data here ?
		this.store.dispatch(
			new actions.GetProduct({
				lang: 'en',
				page: 0,
				sort: 'newest'
			})
		)
	}
}
