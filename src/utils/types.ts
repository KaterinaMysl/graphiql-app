import { ReactNode } from 'react';
import { FieldValues } from 'react-hook-form';

export type TeamDetails = {
  aboutMe: string;
  location: string;
  education: string;
  english: string;
  skills: string;
  contribution: string;
  avatar: string;
  name: string;
  githubIcon: string;
  githubLink: string;
};

export interface ChildrenProps {
  children: ReactNode;
}

export type Token = {
  accessToken: string;
  expirationTime: string;
};

export enum Strength {
  poor = 'poor',
  medium = 'medium',
  strong = 'strong',
}

export type AboutTeamType = {
  avatar: string;
  name: string;
  position: string;
  id: number;
  button: string;
  details: TeamDetails;
};

export interface Suggestion {
  label: string;
  kind: number;
  insertText: string;
}

export interface Schema {
  label: string;
}

export interface SignInForm extends FieldValues {
  email: string;
  password: string;
}
