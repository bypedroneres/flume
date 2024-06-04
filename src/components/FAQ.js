import React, { useState } from 'react';
import "../components/FAQ.css";

function FAQ() {
    // State to keep track of which questions are open
    const [openQuestion, setOpenQuestion] = useState(null);

    // Function to toggle the open/close state of a question
    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <div className='faq'>
            <div className='faq_Content'>
                <h2>Perguntas Frequentes</h2>
                <div className='faq_Questions'>
                    {[1 ].map((_, index) => (
                        <div className='faq_Question' key={index}>
                            {/* Add onClick event to toggle question */}
                            <div className="faq_QuestionHeader" onClick={() => toggleQuestion(index)}>
                                <h2>
                                Vocês atendem que tamanho de empresas?
                                </h2>
                                <svg fill="#FEFEFE" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/>
                                </svg>
                            </div>
                            {/* Render answer below question if question is open */}
                            {openQuestion === index && (
                                <div className="faq_Answer">
                                    <p>Atendemos de empresas pequenas à marcas globais. Nosso método de trabalho, com soluções personalizadas, nos permite esse tipo de atuação eficiente.</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {/* Add two more questions */}
                <div className='faq_Question' key={3}>
                    <div className="faq_QuestionHeader" onClick={() => toggleQuestion(3)}>
                        <h2>
                        Vocês fazem Marketing Digital?
                        </h2>
                        <svg fill="#FEFEFE" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/>
                        </svg>
                    </div>
                    {openQuestion === 3 && (
                        <div className="faq_Answer">
                            <p>O marketing digital faz parte das ferramentas que utilizamos para crescimento das empresas e marcas que atendemos, inclusive, temos modelos de soluções onde ele é a principal forma de resolução de problema.</p>
                        </div>
                    )}
                </div>
                <div className='faq_Question' key={4}>
                    <div className="faq_QuestionHeader" onClick={() => toggleQuestion(4)}>
                        <h2>
                        Posso pedir serviços isolados de Design?
                        </h2>
                        <svg fill="#FEFEFE" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/>
                        </svg>
                    </div>
                    {openQuestion === 4 && (
                        <div className="faq_Answer">
                            <p>Tanto de design, copywriting, edição de vídeo, e qualquer um dos serviços que prestamos. Tudo depende do seu momento como empresa.</p>
                        </div>
                    )}
                </div>
                <div className='faq_Question' key={5}>
                    <div className="faq_QuestionHeader" onClick={() => toggleQuestion(5)}>
                        <h2>
                        Vocês trabalham com produção audiovisual?
                        </h2>
                        <svg fill="#FEFEFE" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/>
                        </svg>
                    </div>
                    {openQuestion === 5 && (
                        <div className="faq_Answer">
                            <p>Sim, nós fazemos toda a parte criativa publicitária, entre em contato para entendermos melhor o seu projeto.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FAQ;
