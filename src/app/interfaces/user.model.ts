import { UserHabilitationEnum } from "../enum/user-habilitation.enum";

export interface User {
    id: number,
    firstname: string,
    lastname: string,
    habilitation: UserHabilitationEnum,
    login: string,
    password: string,
    activation: boolean
}