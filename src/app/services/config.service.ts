import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable, catchError, retry, throwError, map } from 'rxjs'
import { Product } from '../common/models'

export interface Config {
	heroesUrl: string
	textfile: string
	date: any
}

const options = {
	responseType: 'json' as const
}

@Injectable()
export class ConfigService {
	constructor(private http: HttpClient) {}

	private configUrl = 'assets/config.json'

	getConfig() {
		return this.http
			.get(this.configUrl, {
				// responseType: 'json'
				...options
			})
			.pipe(retry(3), catchError(this.handleError))
	}

	getConfigResponse(): Observable<HttpResponse<Config>> {
		return this.http.get<Config>(this.configUrl, {
			observe: 'response'
		})
	}

	private handleError(error: HttpErrorResponse) {
		if (error.status === 0) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error)
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong.
			console.error(`Backend returned code ${error.status}, body was: `, error.error)
		}
		// Return an observable with a user-facing error message.
		return throwError(() => new Error('Something bad happened; please try again later.'))
	}

	getProducts(req: any) {
		const { lang, page, sort, category, maxPrice } = req
		const addCategory = category ? { category } : {}
		const categoryQuery = category ? '&category=' + category : ''
		const priceQuery = maxPrice ? '&maxPrice=' + maxPrice : ''
		const productsUrl =
			'http://localhost:4000' +
			'/api/products?lang=' +
			lang +
			'&page=' +
			page +
			'&sort=' +
			sort +
			categoryQuery +
			priceQuery
		return this.http.get(productsUrl, {}).pipe(
			map((data: any) => ({
				products: data.all.map((product: Product) => ({
					...product,
					tags: product.tags.filter(Boolean).map((cat: string) => cat.toLowerCase())
				})),
				pagination: data.pagination,
				maxPrice: data.maxPrice,
				minPrice: data.minPrice,
				...addCategory
			}))
		)
	}
}
