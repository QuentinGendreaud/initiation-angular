import { Pronostic } from "./pronostic.model";
import { Team } from "./team.model";

export interface Match {
    id: number;
    pronostics ?: Pronostic[];
    teamAId: number;
    teamBid: number;
    startDate: Date; // Potentially string ? exemple: "2022-11-21T17:24:06.082Z"
    scoreTeamA: number;
    scoreTeamB: number;
    teamA?: Team;
    teamB?: Team;
}