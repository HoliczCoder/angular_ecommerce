import { Action } from '@ngrx/store'

// demo

export enum ActionTypes {
	Increment = '[Counter Component] Increment',
	Decrement = '[Counter Component] Decrement',
	Reset = '[Counter Component] Reset'
}

export class Increment implements Action {
	readonly type = ActionTypes.Increment
}

export class Decrement implements Action {
	readonly type = ActionTypes.Decrement
}

export class Reset implements Action {
	readonly type = ActionTypes.Reset
}

// real code

export enum EshopActions {
	CleanError = '[Product] Clean Error',
	FilterPrice = '[Product] FilterPrice',
	UpdatePosition = '[Product] UpdatePosition',
	GetCart = '[Product] GetCart',
	GetCartSuccess = '[Product] GetCartSuccess',
	AddToCart = '[Product] AddToCart',
	AddToCartSuccess = '[Product] AddToCartSuccess',
	RemoveFromCart = '[Product] RemoveFromCart',
	GetProducts = '[Product] GetProducts',
	GetProductsSuccess = '[Product] GetProductsSuccess',
	GetCategories = '[Product] GetCategories',
	GetCategoriesSuccess = '[Product] GetCategoriesSuccess',
	GetProductsSearch = '[Product] GetProductsSearch',
	GetProductsSearchSuccess = '[Product] GetProductsSearchSuccess',
	GetProduct = '[Product] GetProduct',
	GetProductSuccess = '[Product] GetProductSuccess',
	MakeOrderWithPayment = '[Product] MakeOrderWithPayment',
	MakeOrderWithPaymentSuccess = '[Product] MakeOrderWithPaymentSuccess',
	MakeOrderWithPaymentFail = '[Product] MakeOrderWithPaymentFail',
	MakeOrder = '[Product] MakeOrder',
	MakeOrderSuccess = '[Product] MakeOrderSuccess',
	MakeOrderFail = '[Product] MakeOrderFail',
	StripeSession = '[Product] StripeSession',
	StripeSessionSuccess = '[Product] StripeSessionSuccess',
	StripeSessionError = '[Product] StripeSessionError',
	GetUserOrders = '[Product] GetUserOrders',
	GetUserOrdersSuccess = '[Product] GetUserOrdersSuccess'
}

export interface PayloadAction {
	type: string
	payload?: any
}

export class ClearError implements PayloadAction {
	readonly type = EshopActions.CleanError
}

export class FilterPrice implements PayloadAction {
	readonly type = EshopActions.FilterPrice
	constructor(public payload: any) {}
}
export class UpdatePosition implements PayloadAction {
	readonly type = EshopActions.UpdatePosition
	constructor(public payload: any) {}
}

export class GetCart implements PayloadAction {
	readonly type = EshopActions.GetCart
	constructor(public payload?: any) {}
}

export class GetCartSuccess implements PayloadAction {
	readonly type = EshopActions.GetCartSuccess
	constructor(public payload: any) {}
}

export class AddToCart implements PayloadAction {
	readonly type = EshopActions.AddToCart
	constructor(public payload: any) {}
}

export class AddToCartSuccess implements PayloadAction {
	readonly type = EshopActions.AddToCartSuccess
	constructor(public payload: any) {}
}

export class RemoveFromCart implements PayloadAction {
	readonly type = EshopActions.RemoveFromCart
	constructor(public payload: any) {}
}

export class GetProducts implements PayloadAction {
	readonly type = EshopActions.GetProducts
	constructor(public payload: any) {}
}

export class GetProductsSuccess implements PayloadAction {
	readonly type = EshopActions.GetProductsSuccess
	constructor(public payload: any) {}
}

export class GetCategories implements PayloadAction {
	readonly type = EshopActions.GetCategories
	constructor(public payload: any) {}
}

export class GetCategoriesSuccess implements PayloadAction {
	readonly type = EshopActions.GetCategoriesSuccess
	constructor(public payload: any) {}
}

export class GetProductsSearch implements PayloadAction {
	readonly type = EshopActions.GetProductsSearch
	constructor(public payload: any) {}
}

export class GetProductsSearchSuccess implements PayloadAction {
	readonly type = EshopActions.GetProductsSearchSuccess
	constructor(public payload: any) {}
}

export class GetProduct implements PayloadAction {
	readonly type = EshopActions.GetProduct
	constructor(public payload: any) {}
}

export class GetProductSuccess implements PayloadAction {
	readonly type = EshopActions.GetProductSuccess
	constructor(public payload: any) {}
}

export class MakeOrderWithPayment implements PayloadAction {
	readonly type = EshopActions.MakeOrderWithPayment
	constructor(public payload: any) {}
}

export class MakeOrderWithPaymentSuccess implements PayloadAction {
	readonly type = EshopActions.MakeOrderWithPaymentSuccess
	constructor(public payload: any) {}
}

export class MakeOrderWithPaymentFail implements PayloadAction {
	readonly type = EshopActions.MakeOrderWithPaymentFail
	constructor(public payload: any) {}
}

export class MakeOrder implements PayloadAction {
	readonly type = EshopActions.MakeOrder
	constructor(public payload: any) {}
}

export class MakeOrderSuccess implements PayloadAction {
	readonly type = EshopActions.MakeOrderSuccess
	constructor(public payload: any) {}
}

export class MakeOrderFail implements PayloadAction {
	readonly type = EshopActions.MakeOrderFail
}

export class StripeSession implements PayloadAction {
	readonly type = EshopActions.StripeSession
	constructor(public payload: any) {}
}

export class StripeSessionSuccess implements PayloadAction {
	readonly type = EshopActions.StripeSessionSuccess
	constructor(public payload: any) {}
}

export class StripeSessionError implements PayloadAction {
	readonly type = EshopActions.StripeSessionError
	constructor(public payload: any) {}
}

export class GetUserOrders implements PayloadAction {
	readonly type = EshopActions.GetUserOrders
}

export class GetUserOrdersSuccess implements PayloadAction {
	readonly type = EshopActions.GetUserOrdersSuccess
	constructor(public payload: any) {}
}
