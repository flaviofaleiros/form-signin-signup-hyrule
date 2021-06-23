import React from "react";
import {screen, render, fireEvent} from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import Login from "../src/components/Login";

describe('Testing render component Login', () => {
  it('should render login title', function () {
    render(<Login />)

    expect(screen.getByText('Sign In Dojo Hyrule')).toBeInTheDocument();
    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByAltText('Escudo do Time Hyrule')).toBeInTheDocument();

  });

  it('should click Sign Up', function () {
      render(<Login/>)

    const userName = screen.getByPlaceholderText('Enter name');
    fireEvent.change(userName, { target: { value: 'Flavio' } })

    const password = screen.getByPlaceholderText('Enter password');
    fireEvent.change(password, { target: { value: '123' } })

    userEvent.click(screen.getByText(/Login/i))


    screen.debug();

  });
})
