import { Component, OnInit } from '@angular/core';
import { RecipesModel } from '../Utils/recipes.model';
import { SaveRecipesService } from '../Services/data-recipes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss']
})
export class MyRecipesComponent implements OnInit {
  listData : RecipesModel[]=[];
  NumberRecipes : number;
  constructor( private saveService : SaveRecipesService, private toaster: ToastrService,){}
  ngOnInit(): void {
    this.saveService.getDataSaveRecipes().subscribe((res) => {
      this.setData(res);
    });
  };
  /// remove recipes in my recipes page
  RemoveOfList(item){
    if(this.listData.indexOf(item) != -1){
      var list = this.listData.filter((x) =>{
        return x != item;
      });
      this.setData(list);
      this.toaster.success('Remove recipe is successful');
    }
    else {
      this.toaster.error('This item in not avilable');
    }

  }
  setData(list){
    this.listData = list;
    this.NumberRecipes=this.listData.length;
  }
}
