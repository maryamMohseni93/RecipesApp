import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipesModel } from '../Utils/recipes.model';
import { DataRecipesService, SaveRecipesService } from '../Services/data-recipes.service';
import { ToastrService } from 'ngx-toastr';
import { RecipesService } from '../Services/recipes.service';
const COUNT_RECIPES= 'count-recipes';
@Component({
  selector: 'app-item-recipe',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipe : RecipesModel;
  isLoading : boolean = false;
  recipesSaveList : RecipesModel[]=[];
  counter : number = 0;
  @Output() setCounter = new EventEmitter<number>; 
  recipesList : RecipesModel[]=[];
constructor(
  private service : RecipesService,
  private DateService : DataRecipesService , 
  private toaster: ToastrService,
  private saveService : SaveRecipesService,
  ){}
  ngOnInit(): void {
    //get data from the API
    this.service.getJSON().subscribe({
      next : (res) => {
        this.recipesList = res;
        setTimeout(() => {
          this.isLoading = true;
        }, 1000);
        this.DateService.setDataRecipes(res);
      },
      error : (error) => {
        console.log('error',error);
        this.toaster.error("Get data is failed");
      }
    });
  }
  //// event for save recipes to my recipes
  SaveRecipe(itemData){
    if(itemData)
      this.recipesSaveList.push(itemData);
      ////lunch data to my recipes page by BehaviorSubject
      this.saveService.setDataSaveRecipes(this.recipesSaveList);
      var count =this.counter++;
      this.setCounter.emit(this.counter);
      this.toaster.success('Save recipe is successful');
  }
}
