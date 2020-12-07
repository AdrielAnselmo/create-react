import React from 'react';

class App extends React.Component{

  state = {
    nome: ''
  }

  modificarNome = (e) =>{
      this.setState({
        nome: e.target.value
      });
  }
  criaComboBox = () =>{
    const opcoes = ["fulano", "ciclano"]
    const comboBoxOpcoes = opcoes.map( opcoes => <option>{opcoes}</option>)
    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }
  componentDidMount(){
    console.log("execeutou");
  }
  render(){
    const MeuComboBox = () => this.criaComboBox()
    return(
      <>
          <input type="text" value={this.state.nome} onChange={this.modificarNome}/>
          <h1>{this.state.nome}</h1>
          <MeuComboBox/>
      </>
    )
  }
}
export default App;
