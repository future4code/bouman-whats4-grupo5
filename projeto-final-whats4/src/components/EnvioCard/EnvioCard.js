import React from 'react'
import styled from 'styled-components';


const FormDaMensagem = styled.div`
display: flex;
`
const InputdoUsuario = styled.input`
width: 20%;
`
const InputdaMensagem = styled.input`
width: 70%;
`
const BotaoEnviar = styled.button`
width: 50px;
background-color: orange;
border-radius: 5px
`

//  mudei os nomes dos estados, agora estao diferentes dos nomes dos Inputs 

class EnvioCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
     user: "",
     mensagem: "",
      };
    }
      onChangeUsuario = (event) => {
        this.setState({user: event.target.value})
      }
    
      onChangeMensagem = (event) => {
        this.setState({mensagem: event.target.value})
      }

      // função de guardar valores para adc na nova mensagem

      aoClicarEnviar =() => {
        const texto = {
            enviarusuario: this.state.user,
            enviarmensagem: this.state.mensagem
        
          }

    // adc a nova mensagem com os valores da const 
    this.props.adcNovaMensagem(texto)

    // limpa os inputs de usuário e mensagem depois de enviar a mensagem
    this.setState({user: '', mensagem:''})

    }

    render() {
        return (
          <FormDaMensagem> 
            <InputdoUsuario type="text" placeholder="Usuário" value={this.state.user} onChange = {this.onChangeUsuario} /> 
            <InputdaMensagem  type="text" placeholder="Mensagem" value={this.state.mensagem} onChange = {this.onChangeMensagem} /> 
            <BotaoEnviar onClick={this.aoClicarEnviar}> Enviar </BotaoEnviar>
          </FormDaMensagem>
        )
    }
}

export default EnvioCard;