import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import './NotesIndexPage.css';

const notes = [
   {
      date: '2026.08',
      category: 'AI SYSTEMS',
      title: 'AI 标书工程笔记',
      excerpt: '从文档解析、Agent 编排到可回溯的审查结果：一次关于可靠性、证据与真实工作流的实践记录。',
      href: '/notes/ai-bid-review',
   },
];

export function NotesIndexPage() {
   return (
      <div className='notes-index-page'>
         <Header />
         <main className='notes-index-page__main'>
            <header className='notes-index-page__header'>
               <span>工程笔记 / ENGINEERING NOTES</span>
               <h1>工程笔记</h1>
               <p>记录我们在真实系统、人工智能与工程实践中的判断、失败与方法。</p>
            </header>
            <section className='notes-index-list' aria-label='工程笔记列表'>
               {notes.map((note) => (
                  <a className='note-index-item' href={note.href} key={note.href}>
                     <time>{note.date}</time>
                     <span className='note-index-item__category'>{note.category}</span>
                     <div>
                        <h2>{note.title}</h2>
                        <p>{note.excerpt}</p>
                     </div>
                     <span className='note-index-item__arrow'>↗</span>
                  </a>
               ))}
            </section>
         </main>
         <Footer />
      </div>
   );
}