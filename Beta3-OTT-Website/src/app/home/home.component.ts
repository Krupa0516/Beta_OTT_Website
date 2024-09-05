import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  topRatedResult: any = [];
  trendingMovieResult: any = [];
  upcomingMovieResult: any = [];
  continueWatchingMovies: any = [];
  comedymovieResult: any = [];

  ngOnInit(): void {
    this.topRated();
    this.trendingData();
    this.UpcomingMovie();
    this.fetchContinueWatchingMovies();
    this.ComedyMovie();
  }

  topRated() {
    this.http
      .get('http://localhost:4200/assets/data/top-rated.json')
      .subscribe((result) => {
        this.topRatedResult = result;
      });
  }

  trendingData() {
    this.http
      .get('http://localhost:4200/assets/data/trending-movies.json')
      .subscribe((result) => {
        this.trendingMovieResult = result;
      });
  }

  fetchContinueWatchingMovies() {
    this.http
      .get('http://localhost:4200/assets/data/Continue-Watching.json')
      .subscribe((result) => {
        this.continueWatchingMovies = result;
      });
  }

  UpcomingMovie() {
    this.http
      .get('http://localhost:4200/assets/data/upcoming-movies.json')
      .subscribe((result) => {
        this.upcomingMovieResult = result;
      });
  }

  ComedyMovie() {
    this.http
      .get('http://localhost:4200/assets/data/comedy-movies.json')
      .subscribe((result) => {
        this.comedymovieResult = result;
      });
  }

}

