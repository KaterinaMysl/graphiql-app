import { ReactNode } from 'react';

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

export type AboutTeamType = {
  avatar: string;
  name: string;
  position: string;
  id: number;
  button: string;
  details: TeamDetails;
};

export interface ChildrenProps {
  children: ReactNode;
}

export type Token = {
  accessToken: string;
  expirationTime: string;
};
