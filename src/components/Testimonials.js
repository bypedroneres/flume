import React from 'react'
import "../components/Testimonials.css"

function Testimonials() {
  return (
    <div className='testimonials'>
        <div className='testimonials_Content'>
            <div className='testimonials_Heading'>
                <h1>O que os clientes falam sobre nós</h1>
                <p>Esteja você buscando por um reposicionamento da sua marca, mais vendas online, campanhas publicitárias, ou mesmo soluções personalizadas, nós temos a chama pra fazer acontecer.</p> 
            </div>
            <div className='cards'>
                <div className='card'>
                    <div className='card_Text'>
                        <h1>"</h1>
                        <p>Com a Flume a nossa empresa de e-commerce conseguiu ganhar ainda mais espaço no mercado, além das soluções em marketing e estratégia para ampliar as nossas franquias, nós conseguimos aumentar o número de vendas e consolidar a nossa marca sem perder a nossa identidade.</p>
                    </div>
                    <div className='card_Info'>
                        <div className='card_Pic'>
                        <img src="images/clients/paulo-roberto.png" alt="paulo"/>
                        </div>
                        <div className='card_Name'>
                            <h4>Paulo Roberto</h4>
                            <h5>CEO Tx Caps</h5>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card_Text'>
                        <h1>"</h1>
                        <p>Nosso desafio era comunicar efetivamente com nosso público financeiro, mantendo nossa identidade e buscando inovação e a Flume nos surpreendeu com o ótimo trabalho desenvolvido em todas as etapas, desde o redesign do site até a comunicação com os clientes, eles entregaram qualidade e inovação.  Com o trabalho de estratégia de marca, marketing digital e funil de vendas, encontramos uma parceria sólida que impulsionou nossa marca para novos horizontes, sem perder nossa essência.</p>
                    </div>
                    <div className='card_Info'>
                    <div class="card_Pic">
                        <img src="images/clients/nakamura.png" alt="Cris"/>
                    </div>
                        <div className='card_Name'>
                            <h4>Christopher Nakamura</h4>
                            <h5>Diretor. Finance X Capital</h5>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card_Text'>
                        <h1>"</h1>
                        <p>O nível de excelência entregue nos serviços de design e copy da Anne foi de 100%, nosso Grupo de Networking finalmente estava com a imagem que queríamos passar, e em todo o processo ela foi atenciosa aos detalhes e aos prazos, sem dúvidas elevou a nossa marca a outro nível, recomendo os serviços da Anne de olhos fechados.</p>
                    </div>
                    <div className='card_Info'>
                        <div className='card_Pic'>
                            <img src="images/clients/cris.png" alt="Cris"/>
                        </div>
                        <div className='card_Name'>
                            <h4>Cristhian Rico</h4>
                            <h5>CEO Cris Networking</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
