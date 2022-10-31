//USE STATE E LAZY DO PRÓPRIO REACT
import { lazy, useState } from 'react'

//IMPORT LIB CLEVA PARA FORMULÁRIO
import Cleave from 'cleave.js/react';

//ICON REACT
import {AiFillHome}from 'react-icons/ai'
import {MdFavoriteBorder} from 'react-icons/md'
import{IoMdContact}from 'react-icons/io'
import{MdOutlineNotes} from 'react-icons/md'
import {BiArrowBack}from'react-icons/bi'

//IMPORT DO TOAST
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//IMPORT CSS
import './style.css'

//IMPORT COMPONENT
import Modal from '../../components/Modal';

//IMPORT IMGS-ICON
import logo from '../../images/logo.png';
import Mastercard from '../../images/Mastercard.png';
import Visa from '../../images/Visa.png';
import Amex from '../../images/Amex.png'


const Pagamento = () => {

    const [numeroCartao,setNumeroCartao]=useState('')
    const [nome,setNome]=useState('')
    const [cpf,setCpf]=useState('')
    const [validade,setValidade]=useState('')
    const [codigo,setCodigo]=useState('')
    const [bandeira, setBandeira]=useState('')
    const [modalIsOpen,setIsOpen]=useState(false)

    //função na qual vai saber qual tipo de bandeira do cartão
    const mostrarBandeira=(type)=>{
        switch(type){
            case 'mastercard':{
                setBandeira(Mastercard)
                break;
                
            }
            case 'visa':{
                setBandeira(Visa)
                break;
                
            }
            case 'amex':{
                setBandeira(Amex)
                break;
                
            }
            default : setBandeira(null)


        }

    }
        //função para enviar os dados e abrir modal
        const handlePagamento=(e)=>{
            e.preventDefault()
            setIsOpen(true)
            
        }
        //funcão para fechar modal
        const togglePostModal=()=>{
            setIsOpen(!modalIsOpen)//trocando de true para false   
        }

        //Função para processar pagamento caso seja aprovado ou não
        const processarPagamento=()=>{
            setIsOpen(!modalIsOpen)//trocando de true para false

            try{
                const resolverPromise = new Promise(resolve => setTimeout(resolve, 2500));
                toast.promise(
                        resolverPromise,
                        {
                        pending: 'Aguardando Pagamento...',
                        success: 'Pagamento aprovado com sucesso!!',
                        
                        })

                    setNumeroCartao('')
                    setNome('')
                    setCpf('')
                    setValidade('')
                    setCodigo('')
             }
            catch (e) {
            toast.error('Erro ao realizar o pagamento')
            }
        
    
        }

    return(
        
        <>
       
            <main>
                <aside>
                    <div className='logo'>
                        <img src={logo}></img>
                    </div> { /* logo */ }  
                    <nav className='menu'>
                        <a href='Home'> <AiFillHome className='icon' size={18}></AiFillHome> Home</a>
                        <a href='Plantões'><MdOutlineNotes className='icon' size={18}></MdOutlineNotes> Plantões</a>
                        <a href='Favoritos'><MdFavoriteBorder className='icon' size={18}></MdFavoriteBorder> Favoritos</a>
                        <a href='Minha conta'> <IoMdContact className='icon' size={18}></IoMdContact> Minha conta</a>
                    </nav> { /* nav */ }  

                </aside> { /* aside */ }  

                <header>
                    <div className='container-header'>

                        <div className='icon-voltar'>
                            <BiArrowBack size={25} color='white'></BiArrowBack>
                        </div> { /* icon-voltar */ }  

                            <div className='title-header'>
                                <h1>Pagamento</h1>
                            </div> { /* title-header */ }  
                        
                    </div> { /* container-header */ }  
                </header> { /* header */ }  
              
                
                <section>
                    <div className='title-section'>
                        <p>Insira os dados para concluir a contratação via cartão de crédito</p>
                    </div> { /* title-section */ }  
                    <div className='container'>

                        {modalIsOpen&&(
                            <Modal  
                                conteudo={processarPagamento}
                                close={togglePostModal}
                                >  
                            </Modal>       
                        )}
                    
                        <form onSubmit={handlePagamento} >
                                    <ToastContainer
                                        position="top-right"
                                        autoClose={3000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme="dark"
                                    /> 
                        
                        
                                    <div className='content'>
                                            <Cleave className='form-field' 
                                                    required 
                                                    placeholder="Número do cartão*"    
                                                    options={{creditCard: true,
                                                    onCreditCardTypeChanged:(type)=>{mostrarBandeira(type) }}} 
                                                    value={numeroCartao}
                                                    onChange={(e)=>setNumeroCartao(e.target.value)}>      
                                            </Cleave> 
                                                <img className='icon-cartao' src={bandeira}></img>
                                    </div> { /* content */ }  
                                    
                                
                                    <input  type="text" 
                                            placeholder="Nome do titular*" 
                                            required 
                                            value={nome} 
                                            onChange={(e)=>setNome(e.target.value)} >
                                    </input>

                                    <Cleave placeholder='CPF do titular*' 
                                            required
                                            options=
                                            {{ blocks: [3, 3, 3, 2],
                                                numericOnly:true,
                                                delimiterlazyShow:true,
                                                delimiters: ['.', '.', '-'],}} 
                                                value={cpf}
                                                onChange={(e)=>setCpf(e.target.value)}>  
                                    </Cleave>

                                    <Cleave placeholder='Validade*' 
                                            required
                                            options=
                                            {{date:true,
                                            datePattern:['m','d'] }}
                                            value={validade}
                                            onChange={(e)=>setValidade(e.target.value)}>

                                    </Cleave>

                                    <Cleave placeholder='Código de segurança*'
                                            required 
                                            options={{blocks:[3],
                                            numericOnly:true}}
                                            value={codigo}
                                            onChange={(e)=>setCodigo(e.target.value)}>   
                                    </Cleave>
                                
                                    <div className='button-pagar'>
                                        <button className='pagar'>Pagar</button>
                                    </div> { /* button-pagar */ }  
                                    
                            </form>{ /* form */ }   
                        
                            <div className='button-voltar'>
                                <button className='voltar'>Voltar</button>       
                            </div> { /* button-voltar */ }  
                        
                    </div> { /* container */ }  

                </section> { /* section */ }  

            </main> { /* main */ }  
       
        </>
      
    )
}

export default Pagamento;