import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	products = [];
	breakpoint: number;

	constructor(private apiService: ApiService) { }
	ngOnInit() {
		console.log("hola");
		this.apiService.getBeers().subscribe((data: any[])=>{  
			console.log(data);  
			this.products = data;  
		})  
		this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
	}

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
  }

}
