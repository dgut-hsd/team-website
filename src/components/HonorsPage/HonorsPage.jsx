import { Header } from '../Header/Header';
import { Honors } from '../Honors/Honors';
import { Footer } from '../Footer/Footer';

export function HonorsPage() {
   return (
      <div className='wrapper'>
         <Header />
         <main className='standalone-page'>
            <Honors staticGrid />
         </main>
         <Footer />
      </div>
   );
}
