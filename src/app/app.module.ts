import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { HttpClientModule } from '@angular/common/http'
import { ConfigService } from './services/config.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/reducers'
import { EffectsModule } from '@ngrx/effects'
import { AppEffects } from './store/effects'
@NgModule({
	declarations: [AppComponent, HeaderComponent, HomeComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		StoreModule.forRoot(reducers),
		EffectsModule.forRoot([AppEffects])
	],
	providers: [ConfigService],
	bootstrap: [AppComponent]
})
export class AppModule {}
