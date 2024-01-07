import { expect, describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import TabPanel from '../../components/Tabs/TabPanel/TabPanel';
import { Tab as PanelTab } from '../../components/Tabs/types';

const mockTabs: PanelTab[] = [
  { label: 'Tab 1', content: <div>Content 1</div> },
  { label: 'Tab 2', content: <div>Content 2</div> },
  { label: 'Tab 3', content: <div>Content 3</div> },
];

describe('TabPanel component', () => {
  test('renders active tab content correctly', () => {
    const activeTab = 1;
    render(<TabPanel tabs={mockTabs} activeTab={activeTab} />);

    const activeTabContent = screen.getByText(/Content 2/);
    expect(activeTabContent).toBeInTheDocument();
  });
});
