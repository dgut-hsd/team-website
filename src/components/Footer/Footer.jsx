import './Footer.css';

export function Footer() {
   return (
      <footer>
         <div className='footer'>
            <div className='footer-content'>
               <div className='footer-detail'>
                  <h3>HSD-DGUT</h3>
                  <p>东莞理工学院软件开发社团</p>
               </div>

               <div className='footer-contack'>
                  <h3>联系我们</h3>
                  <p>2858864192@qq.com</p>
               </div>

               <div className='footer-qr'>
                  <h3>加入招新群</h3>
                  <img src='../assets/QR/image.png' alt='qrcode' />
               </div>
            </div>

            <div className='footer-copyright'>
               <p className='copyright-text'>
                  &copy;<span id='current-year'></span> HSD-DGUT. All Rights
                  Reserved.
               </p>
            </div>
         </div>
      </footer>
   );
}
