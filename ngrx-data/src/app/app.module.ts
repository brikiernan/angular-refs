import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HTTP_INTERCEPTORS,
  HttpClientJsonpModule,
  HttpClientModule,
} from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { FakeBackendInterceptor } from '../fake-backend-interceptor.service';
import {
  DefaultDataServiceProvider,
  storyEntityMetadata,
} from '../state/story.metadata';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { storyEffects } from '../state/story.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([{ ...storyEffects }]),
    StoreDevtoolsModule.instrument(),
    EntityDataModule.forRoot({
      entityMetadata: {
        Story: storyEntityMetadata,
      },
      pluralNames: {
        Story: 'stories',
      },
    }),
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: FakeBackendInterceptor,
    },
    DefaultDataServiceProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
