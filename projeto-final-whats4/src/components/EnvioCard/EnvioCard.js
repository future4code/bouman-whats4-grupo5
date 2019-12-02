import React from 'react'
import styled from 'styled-components';


const FormDaMensagem = styled.div`
display: flex;
`
const InputdoUsuario = styled.input`
width: 20%;
border-radius: 5px;
margin-bottom: 5px;
margin-left: 2px
`
const InputdaMensagem = styled.input`
width: 70%;
border-radius: 5px
height: 30px;
margin-bottom: 5px
`
const BotaoEnviar = styled.button`
width: 50px;
background-color: silver;
border-radius: 5px;
border: 1px solid black;
margin-bottom: 5px  
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

          this.props.adcNovaMensagem(texto)

    // limpa os inputs de usuário e mensagem depois de enviar a mensagem
    this.setState({user: '', mensagem:''})

    }

// função pra enviar nova mensagem com enter 
aoClicarEnter = (event) => {
  if (event.key === "Enter") {
   this.aoClicarEnviar()
  }
  console.log(event)
}

    render() {
        return (
          <FormDaMensagem> 
            <InputdoUsuario type="text" placeholder="Usuário" value={this.state.user} onChange = {this.onChangeUsuario} /> 
            <InputdaMensagem  onKeyPress={this.aoClicarEnter}  type="text" placeholder="Mensagem" value={this.state.mensagem} onChange = {this.onChangeMensagem} /> 
            <BotaoEnviar  onClick={this.aoClicarEnviar}> Enviar </BotaoEnviar>
          </FormDaMensagem>
        )
    }
}

export default EnvioCard;