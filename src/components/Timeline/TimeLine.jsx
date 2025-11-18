import { styled } from "@mui/material/styles"; // 导入 styled 工具
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

import { timelineData } from "../../data/timeline-data";
import "./TimeLine.css";

const TimelineHeader = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  color: "#1F2937",
  fontSize: "1rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
  "@media (min-width: 1920px)": {
    fontSize: "2rem",
  },
}));

const TimelineText = styled(Typography)(({ theme }) => ({
  color: "#6B7280",
  fontSize: "0.9rem !important",
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem !important",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.25rem !important",
  },
  "@media (min-width: 1920px)": {
    fontSize: "1.5rem !important",
  },
}));

export function TimeLine() {
  const processedTimelineData = timelineData.map((item, index) => ({
    ...item,
    isLast: index === timelineData.length - 1,
  }));

  return (
    <div className="timeline-container" id="timeline" data-aos="fade-up">
      <h2 className="text-container">
        <span>发展</span>
        <span className="text">历程</span>
      </h2>
      <p className="timeline-text">
        从一个想法到一群人的热爱，我们从未停止脚步
      </p>

      <Timeline
        position="right"
        sx={{
          minHeight: "65vh",
          overflowY: "hidden",
          padding: "6px 16px",
          width: "100%",
          marginLeft: {
            xs: 0, 
            sm: "-25rem",
          },
          maxWidth: {
            xs: "100%",
            sm: "1400px",
            md: "2400px",
            lg: "3540px",
            xl: "5000px",
          },
        }}
      >
        {processedTimelineData.map((item, index) => (
          <TimelineItem
            key={index}
            sx={{
              mb: 3,
              "&:last-child": { mb: 0 },
            }}
          >
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                sx={{
                  borderColor: "#0EA5E9",
                  borderWidth: "3px",
                }}
              />
              {!item.isLast && (
                <TimelineConnector sx={{ backgroundColor: "#E5E7EB" }} />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ mt: -1, mb: 6 }}>
              <TimelineHeader variant="h6" component="div">
                {item.header}
              </TimelineHeader>
              <TimelineText>{item.content}</TimelineText>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
