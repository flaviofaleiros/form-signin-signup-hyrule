import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import App from './App';

describe('testando tela de login', () =>{
    it('testando título do login',() =>{
        render(<App />);

        expect(screen.getByText('Entrar no Dojo Hyrule')).toBeInTheDocument();
    });

    it('testando se existe o botão Conecte-se', () =>{
        render(<App />);
        expect(screen.getByText(/Conecte-se/i)).toBeInTheDocument();
    });

    it('testando se existe o campo E-mail para ser preenchido', () =>{
        render(<App />);
        expect(screen.getByPlaceholderText('Insira seu email')).toBeInTheDocument();
    });

    it('testando se existe o o campo Senha para ser preenchido', () =>{
        render(<App />);
        expect(screen.getByPlaceholderText('Insira sua senha')).toBeInTheDocument();

    });

    it('garantindo que o logo Hyrule está sendo apresentado em tela', () =>{
        render(<App />);
        expect(screen.getByAltText('Escudo do Time Hyrule')).toBeInTheDocument();

    });

    describe('testando tela de cadastro', () => {
        it('testando a função inscreva-se', () =>{
            render(<App />);
    
            fireEvent.click(screen.getByText(/Inscrever-se/i));
    
            screen.debug();
    
            expect(screen.getByAltText('Escudo do Time Hyrule')).toBeInTheDocument();
    
        });
    })
});