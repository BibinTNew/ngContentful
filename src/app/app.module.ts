import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ContentfulService } from './contentful.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MdToHtmlPipe } from './md-to-html.pipe';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'courses', component: CourseListComponent},
  { path: 'course/:id', component: CourseDetailsComponent },
  { path: 'products', component: ProductListComponent},
  { path: 'product/:id', component: ProductDetailsComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseDetailsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    MdToHtmlPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }


