import { expect, describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Popup from '../../pages/Welcome/Popup';
import renderWithProviders from '../renderTest';

const mockTeamDetails = {
  name: 'John Doe',
  avatar: 'path/to/avatar.png',
  aboutMe: 'About me text',
  location: 'City, Country',
  education: 'Some University',
  english: 'Advanced',
  skills: 'React, JavaScript',
  contribution: 'Open source projects',
  githubLink: 'https://github.com/johndoe',
  githubIcon: 'path/to/github-icon.png',
};

describe('Popup component', () => {
  test('renders Popup with team details', () => {
    renderWithProviders(<Popup onClick={() => {}} data={mockTeamDetails} />);

    expect(screen.getByText(mockTeamDetails.name)).toBeInTheDocument();
    expect(screen.getByText(mockTeamDetails.aboutMe)).toBeInTheDocument();
    expect(screen.getByText(mockTeamDetails.location)).toBeInTheDocument();
    expect(screen.getByText(mockTeamDetails.education)).toBeInTheDocument();
    expect(screen.getByText(mockTeamDetails.english)).toBeInTheDocument();
    expect(screen.getByText(mockTeamDetails.skills)).toBeInTheDocument();
    expect(screen.getByText(mockTeamDetails.contribution)).toBeInTheDocument();

    const githubLink = screen.getByRole('link', { name: /github logo/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', mockTeamDetails.githubLink);
  });
});
