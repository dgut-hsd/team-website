import { Header } from '../Header/Header';
import { JoinUs } from '../JoinUs/JoinUs';
import { Footer } from '../Footer/Footer';

export function JoinPage() {
   return (
      <div className='wrapper'>
         <Header />
         <main className='standalone-page'>
            <JoinUs />
         </main>
         <Footer />
      </div>
   );
}
