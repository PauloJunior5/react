import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormDeCadastro from './components/FormDeCadastro';

class App extends Component {
    render() {
        return (
            <>
                <FormDeCadastro /> {/*chamada de componente*/}
                <ListaDeNotas />
            </>
        );
    }
}

export default App;