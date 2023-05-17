import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { SpoonapiService } from './services/spoonapi.service';
import { RecipesModule } from './recipes.module';
import { TranslateService } from './services/translate.service';
import { Recipes } from './entities/Recipes';
import { Ingredients } from './entities/Ingredients';
import { Restrictions } from './entities/Restrictions';
import { Clients } from './entities/Clients';
import { Diet } from './entities/Diet';
import { Users } from './entities/Users';
import { RecipeIngredients } from './entities/RecipeIngredients';
import { ClientsRestrictions } from './entities/ClientsRestrictions';
import { RecipeRestrictions } from './entities/RecipeRestrictions';
import { RecipesDiets } from './entities/RecipesDiets';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiService } from './api.service';

@Module({
  imports: [
    RecipesModule,
    HttpModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'mealcomposer',
      entities: [
        Recipes,
        Ingredients,
        RecipeIngredients,
        Restrictions,
        Clients,
        Diet,
        Users,
        ClientsRestrictions,
        RecipeRestrictions,
        RecipesDiets,
      ],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ApiService, SpoonapiService, TranslateService],
})
export class AppModule {}
