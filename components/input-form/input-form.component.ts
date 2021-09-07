import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { createOfflineCompileUrlResolver, RecursiveTemplateAstVisitor } from '@angular/compiler';
import { NutriApiService } from "../../services/nutri-api.service"

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})

export class InputFormComponent implements OnInit {


  //Form Data
  Recipe:         string = "";
  @Output() recipeSubmitted = new EventEmitter;

  //Form Submission + API Data Fetch
  submitRecipe(): void
  {
    if (!this.Recipe)
    {
      alert ("Please enter the recipe into the text box! "); 
    } 
    else
    {
      this.API.setRecipe(this.Recipe); 
      this.recipeSubmitted.emit();

    }
  }

  constructor(private API:NutriApiService) {}

  ngOnInit(): void 
  {
  }
}
