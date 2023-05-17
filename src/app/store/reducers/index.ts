import { Action, ActionReducer, createSelector, MetaReducer } from '@ngrx/store'
import * as fromProducts from './product.reducer'

export interface State {
	products: fromProducts.State
}

export const reducers = {
	products: fromProducts.productReducer
}

export const Products = (state: State) => state.products

export const getProducts = createSelector(Products, fromProducts.products)
export const getLoadingProducts = createSelector(Products, fromProducts.loadingProducts)
export const getCategories = createSelector(Products, fromProducts.categories)
export const getPagination = createSelector(Products, fromProducts.pagination)
export const getProduct = createSelector(Products, fromProducts.product)
export const getProductLoading = createSelector(Products, fromProducts.productLoading)
export const getCart = createSelector(Products, fromProducts.cart)
export const getOrder = createSelector(Products, fromProducts.order)
export const getUserOrders = createSelector(Products, fromProducts.userOrders)
export const getProductTitles = createSelector(Products, fromProducts.productsTitles)
export const getPriceFilter = createSelector(Products, fromProducts.priceFilter)
export const getMaxPrice = createSelector(Products, fromProducts.maxPrice)
export const getMinPrice = createSelector(Products, fromProducts.minPrice)
export const getPosition = createSelector(Products, fromProducts.position)
