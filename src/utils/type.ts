import { ReactNode } from 'react';

export type ErrorBoundaryProps = {
  children?: ReactNode;
};

export type ErrorBoundaryState = {
  hasError: boolean;
};

export type PropsPrivateRoute = {
  allowUnauthorizedAccess: boolean;
};

export type PropsAboutTeam = {
  data: AboutTeam;
};

export type AboutTeam = {
  id: number;
  name: string;
  position: string;
};
