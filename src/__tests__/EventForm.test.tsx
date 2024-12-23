import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { EventForm } from '../components/EventForm';

describe('EventForm', () => {
  it('submits form with correct data', () => {
    const onSubmit = vi.fn();
    render(<EventForm onSubmit={onSubmit} />);

    // Fill form
    fireEvent.change(screen.getByLabelText(/title/i), {
      target: { value: 'Test Event' },
    });
    fireEvent.change(screen.getByLabelText(/description/i), {
      target: { value: 'Test Description' },
    });
    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: '2024-03-20' },
    });

    // Submit form
    fireEvent.click(screen.getByText(/create event/i));

    expect(onSubmit).toHaveBeenCalledWith({
      title: 'Test Event',
      description: 'Test Description',
      date: '2024-03-20',
      type: 'stream',
    });
  });
});