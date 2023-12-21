import { ReactNode } from 'react';

export interface AboutTeam {
  name: string;
  position: string;
  id: number;
}

export interface ChildrenProps {
  children: ReactNode;
}

export type Token = {
  accessToken: string;
  expirationTime: string;
};

export interface Suggestion {
  label: string;
  kind: number;
  insertText: string;
}

export interface Schema {
  label: string;
}
