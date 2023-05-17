import { EshopActions } from './../actions'
import { Product, Cart, Category, Pagination, Order } from 'src/app/common/models'
import { Action } from '@ngrx/store'
import { PayloadAction } from './../actions'

export interface State {
	products: Product[] | null
	loadingProducts: boolean
	categories: Category[]
	pagination: Pagination
	product: Product | null
	loadingProduct: boolean
	cart: Cart | null
	userOrders: Order[] | null
	order: Order | null
	productsTitles: Array<string>
	priceFilter: number
	maxPrice: number
	minPrice: number
	position: { [component: string]: number } | null
	loading: boolean
	error: string
}

export const initialState: State = {
	products: null,
	loadingProducts: false,
	categories: [],
	pagination: {
		page: 1,
		pages: 1,
		total: 0
	},
	product: null,
	loadingProduct: false,
	cart: null,
	userOrders: null,
	order: null,
	productsTitles: [],
	priceFilter: 0,
	maxPrice: 0,
	minPrice: 0,
	position: null,
	loading: false,
	error: ''
}

export function productReducer(state = initialState, action: PayloadAction): State {
	switch (action.type) {
		case EshopActions.GetProduct: {
			return { ...state, loadingProducts: true }
		}
		case EshopActions.GetProductsSuccess: {
			return {
				...state,
				products: action.payload.products,
				pagination: action.payload.pagination,
				maxPrice: action.payload.maxPrice,
				minPrice: action.payload.minPrice,
				loadingProducts: false
			}
		}
		case EshopActions.GetCategoriesSuccess: {
			return {
				...state,
				categories: action.payload
			}
		}
		case EshopActions.GetProductSuccess: {
			return {
				...state,
				product: action.payload,
				loadingProduct: false
			}
		}
		case EshopActions.GetProductsSearchSuccess: {
			return { ...state, productsTitles: action.payload }
		}
		case EshopActions.GetCartSuccess: {
			return {
				...state,
				cart: action.payload
			}
		}
		case EshopActions.AddToCartSuccess: {
			return {
				...state,
				cart: action.payload
			}
		}
		case EshopActions.MakeOrderWithPayment:
			return { ...state, loading: true }
		case EshopActions.MakeOrderWithPaymentSuccess:
			return {
				...state,
				order: action.payload.result,
				cart: action.payload.cart,
				error: action.payload.error,
				loading: false
			}
		case EshopActions.MakeOrderWithPaymentFail:
			return {
				...state,
				order: null,
				error: 'ORDER_SUBMIT_ERROR',
				loading: false
			}

		case EshopActions.MakeOrder:
			return { ...state, loading: true }

		case EshopActions.MakeOrderSuccess:
			return {
				...state,
				order: action.payload.result,
				cart: action.payload.cart,
				error: action.payload.error,
				loading: false
			}

		case EshopActions.MakeOrderFail:
			return {
				...state,
				order: null,
				error: 'ORDER_SUBMIT_ERROR',
				loading: false
			}
		case EshopActions.GetUserOrdersSuccess: {
			return { ...state, userOrders: action.payload }
		}

		case EshopActions.FilterPrice:
			return { ...state, priceFilter: action.payload }

		case EshopActions.UpdatePosition: {
			return { ...state, position: action.payload }
		}

		case EshopActions.CleanError: {
			return { ...state, order: null, error: '' }
		}
		default:
			return state
	}
}

export const products = (state: State) => state.products
export const loadingProducts = (state: State) => state.loadingProducts
export const categories = (state: State) => state.categories
export const pagination = (state: State) => state.pagination
export const product = (state: State) => state.product
export const cart = (state: State) => state.cart
export const productLoading = (state: State) => state.loadingProduct
export const userOrders = (state: State) => state.userOrders
export const order = (state: State) => state.order
export const productsTitles = (state: State) => state.productsTitles
export const priceFilter = (state: State) => state.priceFilter
export const maxPrice = (state: State) => state.maxPrice
export const minPrice = (state: State) => state.minPrice
export const position = (state: State) => state.position
