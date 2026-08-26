import { styled } from '@mui/material/styles'; // 导入 styled 工具
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import { timelineData } from '../../data/timeline-data';
import './TimeLine.css';

const TimelineHeader = styled(Typography)(({ theme }) => ({
   fontWeight: '500',
   color: '#1F2937',
   fontSize: '1.1rem',
   [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
   },
   [theme.breakpoints.up('lg')]: {
      fontSize: '1.2rem',
   },
   '@media (min-width: 1920px)': {
      fontSize: '1.6rem',
   },
}));

const TimelineText = styled(Typography)(({ theme }) => ({
   color: '#6B7280',
   fontSize: '0.9rem !important',
   lineHeight: '1.5',
   [theme.breakpoints.up('md')]: {
      fontSize: '0.9rem !important',
   },
   [theme.breakpoints.up('lg')]: {
      fontSize: '1.1rem !important',
   },
   '@media (min-width: 1920px)': {
      fontSize: '1.4rem !important',
   },
}));

export function TimeLine() {
   const processedTimelineData = timelineData.map((item, index) => ({
      ...item,
      isLast: index === timelineData.length - 1,
   }));

   return (
      <div className='timeline-container' id='timeline' data-aos='fade-up'>
         <h2 className='text-container'>
            <span>发展</span>
            <span className='text'>历程</span>
         </h2>
         <p className='timeline-text'>
            从一个想法到一支团队，我们持续在真实项目中学习与前进
         </p>

         <Timeline
            position='right'
            sx={{
               padding: '0',
               mt: '1rem',
               width: '100%',
               [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
               },
               '@media (min-width: 600px)': {
                  mt: '0.5rem',
                  minHeight: '65vh',
                  marginLeft: '-25rem',
                  maxWidth: '1400px',
                  [`& .${timelineItemClasses.root}:before`]: {
                     flex: 1,
                     padding: '6px 16px',
                  },
               },
               maxWidth: {
                  xs: '100%',
                  sm: '1400px',
                  md: '2400px',
                  lg: '3540px',
                  xl: '5000px',
               },
            }}
         >
            {processedTimelineData.map((item, index) => (
               <TimelineItem
                  key={index}
                  sx={{
                     mb: 3,
                     '&:last-child': { mb: 0 },
                  }}
               >
                  <TimelineSeparator>
                     <TimelineDot
                        variant='outlined'
                        sx={{
                           borderColor: 'var(--accent)',
                           borderWidth: '3px',
                        }}
                     />
                     {!item.isLast && (
                        <TimelineConnector
                           sx={{ backgroundColor: 'var(--border-strong)' }}
                        />
                     )}
                  </TimelineSeparator>
                  <TimelineContent sx={{ mt: -1, mb: 6 }}>
                     <TimelineHeader variant='h6' component='div'>
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
