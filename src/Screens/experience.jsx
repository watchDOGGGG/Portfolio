import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { work_experience } from '../Dummy/dummy';

export default function Experience() {
  return (
    <div className="experience flex flex-column justify-center">
        <div className="f1 tc fw9">
            <span>Where i have worked <span className="gray f6">4+ years of professional experience</span></span>
        </div>

          <div className="center w-70 bg-blue">

              <Timeline position="alternate">
                {
                    work_experience.map((items,i) =>{
                        return (
                            <TimelineItem key={i} >
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div className="">
                                        <div className="flex flex-column">
                                            <span className="f2 fw8 white">{items.company}</span>
                                            <span className="f5 white">{items.location} - {items.date}</span>
                                        </div>
                                        <span className="f5 white">{items.type}</span>
                                    </div>

                                    <div className="mt2 tj lh-copy">
                                        <span className="white">{items.about}</span>
                                        <br/>
                                        <br/>
                                        <span className="white mt2">{items.major_work}</span>
                                        <div className="lh-copy mt1">
                                            <span className="b pa2 br-pill bg-black white f4 w-60 fw8"><a className="link white" href={items.link}>Link!</a></span>
                                        </div>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                        )
                    })
                }
                  
              </Timeline>
          </div>
        </div>
    )
}
