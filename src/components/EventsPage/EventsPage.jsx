import { Header } from '../Header/Header';
import { Events } from '../Events/Events';
import { Footer } from '../Footer/Footer';

export function EventsPage() {
   return (
      <div className='wrapper'>
         <Header />
         <main className='standalone-page'>
            <Events />
         </main>
         <Footer />
      </div>
   );
}
