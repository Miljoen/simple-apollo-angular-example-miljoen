import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';

// Apollo
import { GraphQLModule } from './graphql.module';

@NgModule({
  imports: [
    BrowserModule, 
    // Apollo
    GraphQLModule
  ],
  declarations: [
    AppComponent,
    ListComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
