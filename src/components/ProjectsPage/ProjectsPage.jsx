import { Header } from '../Header/Header';
import { Projects } from '../Projects/Projects';
import { Footer } from '../Footer/Footer';

export function ProjectsPage() {
   return (
      <div className='wrapper'>
         <Header />
         <main className='standalone-page'>
            <Projects gridView />
         </main>
         <Footer />
      </div>
   );
}