import CountUp from "react-countup";
import "./AboutUs.css";

export function AboutUs() {
  return (
    <div className="about-us-container" id="about-us" data-aos="fade-up">
      <h2 className="text-container">
        <span>关于</span>
        <span className="text">HSD</span>
      </h2>

      <p>我们不止是代码的搬运工，更是思想的建筑师和问题的解决者。</p>
      <p>
        在 HSD，我们通过持续的工程实践理解技术，也在协作中把想法变成可靠的解决方案。
      </p>

      <div className="data-container">
        <div className="data-item">
          <span className="counter">
            <CountUp
              end={50}
              duration={5}
              enableScrollSpy
              scrollSpyOnce={true}
            />
          </span>
          <p>成员</p>
        </div>

        <div className="data-item">
          <span className="counter">
            <CountUp
              end={12}
              duration={5}
              enableScrollSpy
              scrollSpyOnce={true}
            />
          </span>
          <p>上线项目</p>
        </div>

        <div className="data-item">
          <span className="counter">
            <CountUp
              end={50}
              duration={5}
              enableScrollSpy
              scrollSpyOnce={true}
            />
          </span>
          <p>竞赛奖项</p>
        </div>
      </div>
    </div>
  );
}
