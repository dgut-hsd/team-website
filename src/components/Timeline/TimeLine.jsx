import { timelineData } from "../../data/timeline-data";
import "./TimeLine.css";

export function TimeLine() {
  return (
    <div className="timeline-container" id="timeline" data-aos="fade-up">
      <h2 className="text-container">
        <span>发展</span>
        <span className="text">历程</span>
      </h2>
      <p>从一个想法到一群人的热爱，我们从未停止脚步</p>

      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4 className="timeline-header">{item.header}</h4>
              <span>{item.content}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
