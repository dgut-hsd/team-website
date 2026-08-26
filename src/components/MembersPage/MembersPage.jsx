import { Header } from '../Header/Header';
import { Team } from '../Team/Team';
import { Footer } from '../Footer/Footer';
import './MembersPage.css';

export function MembersPage() {
   return (
      <div className='members-page'>
         <Header />
         <main className='members-page__main'>
            <div className='members-page__intro'>
               <span>成员 / PEOPLE</span>
               <h1>核心团队</h1>
               <p>来自不同方向的成员，在真实项目中协作、学习与成长。</p>
            </div>
            <Team />
         </main>
         <Footer />
      </div>
   );
}