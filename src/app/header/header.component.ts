import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DataRecipesService } from '../Services/data-recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() count : number;
  _count : number ;
  constructor(private router : Router){}
  ngOnInit(): void {
   
  }
  ngOnChanges(changes: SimpleChanges): void{
    //// show how many recipes are saved
    this._count = changes['count'].currentValue;
  }
  RecipesSaved(){
    this.router.navigateByUrl('MyRecipes');
  }
}
