  
import React from 'react';
import './App.css';
import styled from 'styled-components'
import EnvioCard from './components/EnvioCard/EnvioCard'

const Page = styled.div`
  display: flex;
  justify-content: center;
`

const MainContainer = styled.div`
 width: 600px;
 height: 50vw;
 display: flex;
 flex-direction: column;
 margin-top: 30px;
 border: 1px solid grey;
 justify-content: flex-end;
 background-color: #ecd8c6
`
const ContainerDaMensagem = styled.div`
 display: flex;
 flex-direction: column;
 padding: 20px;
`
const NovoP = styled.p`
margin-bottom: 10px;
padding: 8px;
width: 50%;
border-radius: 5px;
background-color: rgb(220, 248, 198);
box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 0.5px;
`

class App extends React.Component{
    constructor(){
      super()
      this.state = {
      mensagemEnviada:[]
      }
    }

  // função que adiciona uma nova mensagem fazendo a cópia do array
  adcNovaMensagem = (props) => {
    this.setState({mensagemEnviada: [...this.state.mensagemEnviada, props ]})
  }


  render(){
  return (
    <Page>
      <MainContainer>
        <ContainerDaMensagem>
          {this.state.mensagemEnviada.map((props) => 
          <NovoP><strong>{props.enviarusuario + ': '}</strong>{props.enviarmensagem}</NovoP>)}
        </ContainerDaMensagem>
        <EnvioCard  adcNovaMensagem={this.adcNovaMensagem}></EnvioCard>
      </MainContainer>
    </Page>
  );
  }
  }
  

export default App;