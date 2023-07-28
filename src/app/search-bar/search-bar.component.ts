import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataRecipesService } from '../Services/data-recipes.service';
import { RecipesModel } from '../Utils/recipes.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  form = new FormControl();
  allData : RecipesModel[]=[];
  autoCompleteList: any[];
  isSearch : boolean = false;
constructor(private DateService : DataRecipesService ){}
  ngOnInit(): void {
    this.DateService.getDataRecipes().subscribe((res) => {
      this.allData = res;
    });
    this.form.valueChanges.subscribe((userInput) => {
      if(userInput)
        this.isSearch = true;
      this.autoCompleteExpenseList(userInput);
    });
  }
  private autoCompleteExpenseList(input){
    let searchList = this.filterCategoryList(input);
    this.autoCompleteList = searchList
  };
  filterCategoryList(val) {
    if (typeof val != "string") {
      return [];
    }
    if (val === '' || val === null) {
      return [];
    }
    return val ? this.allData.filter(s => s.name.toLowerCase().indexOf(val.toLowerCase()) != -1)
      : this.allData;
  }
}
