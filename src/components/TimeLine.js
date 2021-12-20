import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { themeColors } from '../data/appColors';

const TimeLine = ({ title, date, icon, subtitle, tags, info, type }) => {
   return (
      <>

         <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: themeColors.primary, color: '#fff' }}
            contentArrowStyle={{ borderRight: `7px solid  ${themeColors.primary}` }}
            date={date}
            iconStyle={{ background: themeColors.primary, color: '#fff' }}
            icon={icon}
         >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h5 className="vertical-timeline-element-subtitle">{subtitle}</h5>
            <p>
               <span style={{ fontWeight: '700' }}>{type === 'work' && ' ' || 'Major: '}  </span>
               {info}
            </p>
            <small>
               <span style={{ fontWeight: '600' }}>{type === 'school' ? 'Course work' : type === 'work' ? 'Duties' : ''}: </span>
               {tags}
            </small>
         </VerticalTimelineElement>

      </>
   )
}

export const TimeLineHeading = ({ heading }) => {
   return (
      <>
         <h1 className='timeline-heading'>{heading}</h1>
         <hr style={{ margin: '0 0 4rem', borderColor: themeColors.white_10 }} />
      </>
   )
}

export default TimeLine
