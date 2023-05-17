import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpService) {}

  async getBitcoinPriceUSD() {
    return this.http
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .pipe(
        map((res) => res.data?.bpi),
        map((bpi) => bpi?.USD),
        map((usd) => {
          return usd?.rate;
        }),
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }
  async getRandomRecipeName() {
    return this.http //TODO Добавить фильтрацию по типу рецепта (Убирать дессерты и стартеры итд)
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .pipe(map((res) => res.data.meals[0].strMeal))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }
  async getRandomRecipe(name) {
    return this.http
      .get(
        `https://api.edamam.com/api/recipes/v2?app_id=483328b7&app_key=17f7f14f69c7f722373ad399f793c0a9&q=${name}&type=public`,
      )
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }
}
