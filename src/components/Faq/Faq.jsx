import { useState } from 'react';
import { faqData } from '../../data/faq-data';
import './Faq.css';

export function Faq() {
   const [activeIndex, setActiveIndex] = useState(null);

   const toggleFaq = (index) => {
      if (activeIndex === index) {
         setActiveIndex(null);
      } else {
         setActiveIndex(true);
      }
   };

   return (
      <div className='faq-container' id='faq'>
         <h2>常见问题</h2>
         <div className='faq-wrapper'>
            {faqData.map((item, index) => (
               <div
                  key={index}
                  className={`faq-item ${
                     activeIndex === index ? 'active' : ''
                  }`}
               >
                  <div className='faq-question'>
                     <button
                        className='question-btn'
                        onClick={() => toggleFaq(index)}
                     >
                        {item.question}
                     </button>
                  </div>

                  <div
                     className='faq-answer'
                     style={{
                        maxHeight: activeIndex === index ? '200px' : '0px',
                        opacity: activeIndex === index ? 1 : 0,
                     }}
                  >
                     <p>{item.answer}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
