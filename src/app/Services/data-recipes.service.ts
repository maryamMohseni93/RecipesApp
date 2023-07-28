import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataRecipesService {

  constructor() { }
  private _data = new BehaviorSubject<any>('');
  private _data$ = this._data.asObservable();
  getDataRecipes() : Observable<any>{
    return this._data$
  }
  setDataRecipes(recipeData : any){
    return this._data.next(recipeData);
  }
}

@Injectable({
  providedIn: 'root'
})
export class SaveRecipesService {

  constructor() { }
  private _Sdata = new BehaviorSubject<any>('');
  private _Sdata$ = this._Sdata.asObservable();
  getDataSaveRecipes() : Observable<any>{
    return this._Sdata$
  }
  setDataSaveRecipes(saveData : any){
    return this._Sdata.next(saveData);
  }
}
