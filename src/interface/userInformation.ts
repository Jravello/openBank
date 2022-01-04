import { Document } from 'mongoose';

export interface UserInformationDoc extends Document {
  usersInApps: UserInApps;
  emailEncode: string;
  iatLastPetition: number;
  domain: string;
  badgeIDs: string[];
}

export interface UserInformation {
  usersInApps: UserInApps;
  emailEncode: string;
  iatLastPetition: number;
  domain: string;
  badgeIDs: string[];
}
export interface UserInApps {
  insignias: Insignias;
  gamificacion: Gamificacion;
  stackBio: StackBio;
  micro: Micro;
}

export interface Insignias {
  userName: string;
}
export interface Gamificacion {
  userName: string;
}
export interface StackBio {
  userName: string;
}
export interface Micro {
  userName: string;
}
