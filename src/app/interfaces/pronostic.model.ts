import { PronosticChoiceEnum } from "../enum/pronostic-choice.enum";

export interface Pronostic {
    choice: PronosticChoiceEnum,
    displayedName?: string
    id: number;
    matchId: number;
    userId: number;
}