import { Header } from '../Header/Header';
import { TechStack } from '../TechStack/TechStack';
import { Footer } from '../Footer/Footer';

export function SkillsPage() {
   return (
      <div className='wrapper'>
         <Header />
         <main className='standalone-page'>
            <TechStack />
         </main>
         <Footer />
      </div>
   );
}
