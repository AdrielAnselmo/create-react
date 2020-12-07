import React from 'react';

function App (){

  const criaComboBox = () =>{
    const opcoes = ["fulano", "ciclano"]
    const comboBoxOpcoes = opcoes.map( opcoes => <option>{opcoes}</option>)
    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

    const MeuComboBox = () => criaComboBox()
    return(
      <>
          <input type="text" value={nome} onChange={this.modificarNome}/>
          <h1>{this.state.nome}</h1>
          <MeuComboBox/>
      </>
    )
  
}
export default App;
