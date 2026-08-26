import { Header } from '../Header/Header';
import { TimeLine } from '../Timeline/TimeLine';
import { Footer } from '../Footer/Footer';
import './MessagesPage.css';

export function MessagesPage() {
   return (
      <div className='messages-page'>
         <Header />
         <main className='messages-page__main'>
            <div className='messages-page__intro'>
               <span>ABOUT / 消息</span>
               <h1>消息与历程</h1>
               <p>记录 HSD 从一个想法到一群人的每一步。</p>
            </div>
            <TimeLine />
         </main>
         <Footer />
      </div>
   );
}