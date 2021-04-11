import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CommentsService} from '../comments.service';
import {Comment} from './comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments$: Observable<Comment[]>;
  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.comments$ = this.commentsService.getComments$();
  }

}
