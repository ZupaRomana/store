import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksComponent} from './books/books.component';
import {CommentsComponent} from './comments/comments.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'comments', component: CommentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
