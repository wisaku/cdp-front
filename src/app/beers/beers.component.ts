import { Component, OnInit } from '@angular/core';  
import { ApiService } from '../api.service';

@Component({  
	selector: 'app-beers',  
	templateUrl: './beers.component.html',  
	styleUrls: ['./beers.component.css']  
})  
export class BeersComponent implements OnInit {
	products = [];
	breakpoint: number;

	constructor(private apiService: ApiService) { }
	ngOnInit() {
		console.log("hola");
		this.apiService.getBeers().subscribe((data: any[])=>{  
			console.log(data);  
			this.products = data;  
		})  
		this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
	}
  	
	onResize(event) {
		this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
  	}

}