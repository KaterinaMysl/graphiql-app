import { expect, describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Team from '../../pages/Welcome/Team';
import renderWithProviders from '../renderTest';

const mockTeamData = {
  id: 1,
  avatar: 'path/to/avatar.png',
  name: 'John Doe',
  position: 'Software Engineer',
  button: 'View Profile',
  details: {
    aboutMe: 'Some information about John Doe',
    location: 'City, Country',
    education: 'Some University',
    english: 'Advanced',
    skills: 'React, JavaScript',
    contribution: 'Open source projects',
    avatar: 'path/to/avatar.png',
    name: 'John Doe',
    githubIcon: 'path/to/github-icon.png',
    githubLink: 'https://github.com/johndoe',
  },
};

describe('Team component', () => {
  test('renders Team with team details', () => {
    renderWithProviders(<Team data={mockTeamData} onClick={() => {}} />);

    expect(screen.getByText(mockTeamData.name)).toBeInTheDocument();
    expect(screen.getByText(mockTeamData.position)).toBeInTheDocument();

    const avatarImage = screen.getByAltText('avatar');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', mockTeamData.avatar);

    const viewProfileButton = screen.getByRole('button', {
      name: /view profile/i,
    });
    expect(viewProfileButton).toBeInTheDocument();
  });
});
