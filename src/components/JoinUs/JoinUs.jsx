import './JoinUs.css';

export function JoinUs() {
   return (
      <div className='join-container' id='join' data-aos='fade-up'>
         <h2 className='text-container'>
            <span>和我们一起</span>
            <span className='text'>创造</span>
         </h2>

         <p>
            无论你是开发者、设计师、产品爱好者，只要你怀揣对创造的热情，HSD
            的大门永远为你敞开。
         </p>

         <a
            href='https://developer.huawei.com/consumer/cn/programs/hsd'
            target='_blank'
            className='join-us-link'
         >
            立即申请加入
         </a>
      </div>
   );
}
