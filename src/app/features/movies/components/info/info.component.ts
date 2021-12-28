import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from '../../services/movies.service';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {
  movie: Movie | undefined;

  private subscription: Subscription | undefined;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private moviesService: MovieService
  ) { }

  ngOnInit(): void {
    this.subscription = this.moviesService.getDetail(this.activatedRoute.snapshot.params['id']).subscribe(movie => console.log(movie));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
