import { Header } from '../Header/Header';
import { AboutUs } from '../AboutUs/AboutUs';
import { Footer } from '../Footer/Footer';

export function AboutPage() {
   return (
      <div className='wrapper'>
         <Header />
         <main className='standalone-page'>
            <AboutUs />
         </main>
         <Footer />
      </div>
   );
}
