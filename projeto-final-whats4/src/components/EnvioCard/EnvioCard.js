import React from 'react'
import styled from 'styled-components';


const InputBorda = styled.div`
border: 1px solid black;
width: 300px;
position: fixed;
bottom: 100px;
`


class EnvioCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    listaDeMsgs: [],
    InputdoUsuario: "",
    InputdaMensagem: "",
      };
    }

    adicionarMsg = () => {
        console.log(this.state.InputdoUsuario, this.state.InputdaMensagem)
        const novaMensagem= {
          nome: this.state.InputdoUsuario,
          mensagem: this.state.InputdaMensagem
        }
    
        const copiaDaListaDeMensagens = [novaMensagem, ...this.state.listaDeMsgs]
    
        this.setState({
          listaDeMsgs: copiaDaListaDeMensagens,
          InputdoUsuario: "",
          InputdaMensagem: ""
        })
      }
    
      onChangeUsuario = (e) => {
        this.setState({InputdoUsuario: e.target.value})
      }
    
      onChangeMensagem = (e) => {
        this.setState({InputdaMensagem: e.target.value})
      }
     
    render() {
        return (
            <InputBorda> 

            <input type="text" placeholder="usuario" value={this.state.InputdoUsuario} onChange = {this.onChangeUsuario} /> 
            <input  type="text" placeholder="mensagem" value={this.state.InputdaMensagem} onChange = {this.onChangeMensagem} /> 
            <button onClick={this.adicionarMsg}>Enviar</button>

            </InputBorda>
        )
    }
}

export default EnvioCard;