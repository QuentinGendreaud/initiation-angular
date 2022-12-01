import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PronosticChoiceEnum } from 'src/app/enum/pronostic-choice.enum';
import { Match } from 'src/app/interfaces/match.model';
import { MatchService } from 'src/shared/services/match.service';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-pronostic-view',
  templateUrl: './pronostic-view.component.html',
  styleUrls: ['./pronostic-view.component.scss']
})
export class PronosticViewComponent implements OnInit {
  userPronostics$?: Observable<Match[]>

  constructor(
    private readonly matchService: MatchService,
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadUserPronostics();
  }

  updateProno(pronoValue: PronosticChoiceEnum) {
    console.log('pronoValue ==> ', pronoValue);
  }

  private loadUserPronostics() {
    const user = this.userService.getUser();
    if (user) {
      this.userPronostics$ = this.matchService.getUsersPronostics(user.id);
    }
  }

}
