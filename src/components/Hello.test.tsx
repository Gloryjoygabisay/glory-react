import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe } from '../test-utils/axe-helper';
import { Hello } from './Hello';

describe('Hello component', () => {
    it('renders correctly', () => {
        const { getByText } = render(<Hello name="Test" />);
        expect(getByText('Hello Test')).toBeInTheDocument();
    });
    
    it('should not have accessibility violations', async () => {
        const { container } = render(<Hello name="Test" />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});