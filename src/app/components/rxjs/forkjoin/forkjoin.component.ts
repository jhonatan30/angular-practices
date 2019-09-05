import { Component, OnInit } from '@angular/core';
import { IcndbApiService } from 'src/app/shared/services/icndb-api.service';
import { ICNDBResponse } from 'src/app/shared/models/icndb-api.model';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss']
})
export class ForkjoinComponent implements OnInit {

  public joke1: string = '';
  public joke2: string = '';
  public joke3: string = '';
  public joke4: string = '';

  constructor(private _jokesService: IcndbApiService) { }

  ngOnInit() { }

  public getJokes() {
    forkJoin([this._getRandomJoke(), this._getRandomJoke(), this._getRandomJoke(), this._getRandomJoke()])
      .subscribe(([j1, j2, j3, j4]) => {
        this.joke1 = j1;
        this.joke2 = j2;
        this.joke3 = j3;
        this.joke4 = j4;
      });
  }

  private _getRandomJoke(): Observable<string> {
    return this._jokesService.getRandomJoke().pipe(map(response => response.value.joke));
  }

}
