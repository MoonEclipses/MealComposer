import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {map} from "rxjs";

@Injectable()
export class SpoonapiService {
    private API: string;
    private baseUrl: string;
    private headers: { [key: string]: string };
    constructor(private http: HttpService){
        this.API = '960d8fd2c565419b863bae326c3043da';
        this.baseUrl = 'https://api.spoonacular.com/';
        this.headers = {
            'x-api-key': this.API
        };
    }
     getRecipes(){
        const recipes = this.http.get(this.baseUrl + `recipes/complexSearch?offset=100&number=100&sort=price&sortDirection=asc&type=main course`, {headers: this.headers}).pipe(
            map(response => response.data)
        );
        return recipes;
    }
    getRecipeInfo(id:number){
        const recipeInfo = this.http.get(this.baseUrl + `recipes/${id}/information`, {headers: this.headers}).pipe(
            map(response => response.data)
        );
        return recipeInfo;
    }
    getRecipeNutrition(id:number){
        const recipeNutritions = this.http.get(this.baseUrl + `recipes/${id}/nutritionWidget.json`, {headers: this.headers}).pipe(
            map(response => response.data)
        );
        return recipeNutritions;
    }
}
