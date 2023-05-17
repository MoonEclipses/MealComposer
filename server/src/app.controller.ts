import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiService } from './api.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly apiService: ApiService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api')
  async getRandomRecipe() {
    const name = await this.apiService.getRandomRecipeName();
    name.subscribe(async (n) => {
      console.log(n);
      const recipe = await this.apiService.getRandomRecipe(n);
      recipe.subscribe((r) => console.log(r));
    });
  }
}
