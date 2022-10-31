
import './style.css'
import Vector from '../../images/Vector.png'


const Modal=({conteudo, close})=>{

    
    
    return(
        <>
        <div className='content-modal'>
            <div className='modal'>
                <div className='container'>
                    <div><img src={Vector}></img></div>
                    <div className='title-content'>
                        <p> Deseja confirmar este pagamento?</p>
                    </div> { /* title-content */ } 

                    <div className='buttons'>
                        <button onClick={conteudo}>SIM</button>
                        <button onClick={close}>NÃO</button>
                    </div> { /* buttons */ }  
                </div> { /* container */ } 
            </div>  { /* modal */ }  
        </div>{ /* contente-modal */ }
        </>
    )
    
}
export default Modal;