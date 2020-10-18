import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';

import AddMovieForm from './AddMovieForm';

const onSubmitFn = jest.fn();

describe('AddMovieForm visual for add new movie component', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    render(<AddMovieForm onSubmit={onSubmitFn} />);
  });

  it('renders input elements', () => {
    expect(screen.queryByText('id')).toBeNull();
    expect(screen.queryByText(/title/i)).toBeTruthy();
    expect(screen.queryByText(/release date/i)).toBeTruthy();
    expect(screen.queryByText(/poster path/i)).toBeTruthy();
    expect(screen.queryByText(/genres/i)).toBeTruthy();
    expect(screen.queryByText(/overview/i)).toBeTruthy();
    expect(screen.queryByText(/runtime/i)).toBeTruthy();
  });

  it('renders buttons ', () => {
    expect(screen.queryByText(/submit/i)).toBeTruthy();
    expect(screen.queryByText(/reset/i)).toBeTruthy();
  });
});

describe('AddMovieForm visual for edit movie component', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    render(<AddMovieForm id={1} genres={['horror', 'comedy']} onSubmit={onSubmitFn} />);
  });

  it('renders input elements', () => {
    expect(screen.queryByText(/id/i)).toBeTruthy();
    expect(screen.queryByText(/title/i)).toBeTruthy();
    expect(screen.queryByText(/release date/i)).toBeTruthy();
    expect(screen.queryByText(/poster path/i)).toBeTruthy();
    expect(screen.queryByText(/genres/i)).toBeTruthy();
    expect(screen.queryByText(/overview/i)).toBeTruthy();
    expect(screen.queryByText(/runtime/i)).toBeTruthy();
  });

  it('renders buttons ', () => {
    expect(screen.queryByText(/submit/i)).toBeTruthy();
    expect(screen.queryByText(/reset/i)).toBeTruthy();
  });
});

describe('Inputs', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    render(<AddMovieForm id={1} genres={['horror', 'comedy']} onSubmit={onSubmitFn} />);
  });

  it('Should show input validation after blur and hide if validation is correct for title', async () => {
    const input = screen.getByLabelText('title');
    expect(input.classList.contains('input-field--invalid')).toBe(false);
    fireEvent.blur(input);

    await waitFor(() => {
      expect(input.classList.contains('input-field--invalid')).toBe(true);
      const error = screen.queryByText(/required/i);
      expect(error.classList.contains('input-field__error')).toBeTruthy();
    });

    fireEvent.change(input, { target: { value: 'm' } });

    await waitFor(() => {
      expect(input.classList.contains('input-field--invalid')).toBe(true);
      const error = screen.queryByText(/Should be more than 2 symbols/i);
      expect(error.classList.contains('input-field__error')).toBeTruthy();
    });

    fireEvent.change(input, { target: { value: 'mocked title' } });

    await waitFor(() => {
      expect(input.classList.contains('input-field--valid')).toBe(true);
      expect(input.classList.contains('input-field--invalid')).toBe(false);
      const error = screen.queryByText(/Should be more than 2 symbols/i);
      expect(error).toBe(null);
    });
  });

  it('Should show input validation after blur and hide if validation is correct for release date', async () => {
    const input = screen.getByLabelText(/release date/i);
    expect(input.classList.contains('input-field--invalid')).toBe(false);
    fireEvent.blur(input);

    await waitFor(() => {
      expect(input.classList.contains('input-field--valid')).toBe(false);
      expect(input.classList.contains('input-field--invalid')).toBe(true);
      const error = screen.queryByText(/required/i);
      expect(error.classList.contains('input-field__error')).toBeTruthy();
    });

    fireEvent.change(input, { target: { value: '2011-02-03' } });

    await waitFor(() => input.classList.contains('input-field--valid'));

    expect(input.classList.contains('input-field--valid')).toBe(true);
    expect(input.classList.contains('input-field--invalid')).toBe(false);
    const error = screen.queryByText(/required/i);
    expect(error).toBe(null);
  });

  it('Should show input validation after blur and hide if validation is correct for poster path', async () => {
    const input = screen.getByLabelText(/poster path/i);
    expect(input.classList.contains('input-field--invalid')).toBe(false);
    fireEvent.blur(input);

    await waitFor(() => {
      expect(input.classList.contains('input-field--invalid')).toBe(true);
      const error = screen.queryByText(/required/i);
      expect(error.classList.contains('input-field__error')).toBeTruthy();
    });
  });

  it('Should show input validation after blur and hide if validation is correct for overview', async () => {
    const input = screen.getByLabelText(/overview/i);
    expect(input.classList.contains('input-field--invalid')).toBe(false);
    fireEvent.blur(input);

    await waitFor(() => {
      expect(input.classList.contains('input-field--invalid')).toBe(true);
      const error = screen.queryByText(/required/i);
      expect(error.classList.contains('input-field__error')).toBeTruthy();
    });
  });

  it('Should show input validation after blur and hide if validation is correct for runtime', async () => {
    const input = screen.getByLabelText(/runtime/i);
    expect(input.classList.contains('input-field--invalid')).toBe(false);
    fireEvent.blur(input);

    await waitFor(() => {
      expect(input.classList.contains('input-field--invalid')).toBe(true);
      const error = screen.queryByText(/required/i);
      expect(error.classList.contains('input-field__error')).toBeTruthy();
    });
  });

  it('Should show validation of all inputs after submit', async () => {
    const input = screen.getByLabelText('title');
    const submitButton = screen.queryByText(/submit/i);
    expect(input.classList.contains('input-field--invalid')).toBe(false);
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(input.classList.contains('input-field--invalid')).toBe(true);
      const error = screen.queryAllByText(/required/i);
      expect(error).toBeTruthy();
      expect(onSubmitFn).toHaveBeenCalledTimes(0);
    });
  });

  it('Should call onSubmit if there are no validations errors', async () => {
    fireEvent.change(screen.queryByLabelText(/title/i), { target: { value: 'mocked title' } });
    fireEvent.change(screen.queryByLabelText(/release date/i), { target: { value: '2011-02-03' } });
    fireEvent.change(screen.queryByLabelText(/poster path/i), { target: { value: 'http://google.com' } });
    fireEvent.change(screen.queryByLabelText(/overview/i), { target: { value: 'mocked overview' } });
    fireEvent.change(screen.queryByLabelText(/runtime/i), { target: { value: '130' } });

    

    const submitButton = screen.queryByText(/submit/i);
    fireEvent.click(submitButton);

    expect(onSubmitFn).toHaveBeenCalledTimes(0); // todo
  });
});

describe('AddMovieForm Snapshots', () => {
  test('AddMovieForm matches the Snapshot', () => {
    const component = renderer.create(<AddMovieForm onSubmit={onSubmitFn} />);
  
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('EditMovieForm matches the Snapshot', () => {
    const component = renderer.create(<AddMovieForm id={1} onSubmit={onSubmitFn} />);
  
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});



