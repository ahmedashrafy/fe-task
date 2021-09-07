import { Component, OnInit } from '@angular/core';
import { NutriApiService } from "../../services/nutri-api.service"
import { nutrition_data, nutrition_details } from "../../Definitions"


@Component({
  selector: 'app-total-facts',
  templateUrl: './total-facts.component.html',
  styleUrls: ['./total-facts.component.css']
})
export class TotalFactsComponent implements OnInit {

  Total: nutrition_details = {} as nutrition_details;
  items: string[] = ["FAT", "CHOLE", "NA","CHOCDF", "PROCNT", "VITA_RAE", "VITB6A", "VITB12", "VITC", "VITD", "TOCPHA", "VITK1", "CA", "FE", "K"]; 
  
  constructor(private API:NutriApiService) {}

  ngOnInit(): void 
  {
    this.Total = this.API.getTotal();
  }

}
