import { map, distinctUntilChanged, filter, take, skip, withLatestFrom } from 'rxjs/operators'
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core'
import { Observable, combineLatest, Subscription } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router'
import { Meta, Title } from '@angular/platform-browser'
import { Store } from '@ngrx/store'
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar'

import { ConfigService } from '../services/config.service'

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
export class HomeComponent {
	goToDetail() {
		alert('hello world')
	}

	public headers: any
	public config!: Config

	constructor(private configService: ConfigService) {}

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
}
