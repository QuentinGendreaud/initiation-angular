import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PronosticChoiceEnum } from 'src/app/enum/pronostic-choice.enum';
import { Match } from 'src/app/interfaces/match.model';

@Component({
  selector: 'app-pronostic',
  templateUrl: './pronostic.component.html',
  styleUrls: ['./pronostic.component.scss']
})
export class PronosticComponent {
  @Input() match!: Match;
  @Output() updateProno = new EventEmitter<PronosticChoiceEnum>();
  readonly pronoEnum = PronosticChoiceEnum;

  sendProno(pronoValue: PronosticChoiceEnum) {
    this.updateProno.emit(pronoValue);
  }
 }
