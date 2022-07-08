import * as React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Myprojects } from '../Dummy/dummy';
import { Icon } from '@iconify/react';


export default function Projects() {
  return (
    <div className="projects flex flex-column justify-center">
    <div className="f1 tc fw9 black ttu black pro_title">
        <span>Stuff's I built and contributed.</span>
    </div>

          <div className="center w-70 inner">
              <VerticalTimeline>
                {
                    Myprojects.map((items,i) =>{
                        return(
                            <VerticalTimelineElement
                            key={i}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '', color: '#000' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            // date="2011 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                          //   icon={<WorkIcon />}
                        >
                            <img src={items.image}/>
                            <h3 className="vertical-timeline-element-title">{items.name}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{items.type}</h4>
                            <p>
                                {items.about}
                            </p>
                            <p>
                                {items.stacks}
                            </p>
                            <div>
                                {items.link.map((item,i) =>{
                                    return (
                                        <div className="dib" key={i}>
                                            {
                                                item.type === 'mobile' && item.link !== '' &&
                                                 <span className="pointer">
                                                    <a href={item.link} target="_blank"><Icon icon="ion:logo-google-playstore" color="#1da1f2" width="40" /></a> 
                                                    </span>
                                            }
                                            <span className="pointer">
                                                <a href={items.github} target="_blank"><Icon icon="el:github" color="#1da1f2" width="40" /></a>
                                            </span>

                                            <span className="pointer"><a href={item.link} target="_blank"><Icon icon="bi:link" color="#1da1f2" width="40" /></a> </span>
                                        </div>
                                    )
                                })}
                            </div>

                        </VerticalTimelineElement>
                        )
                    })
                }
                 
              </VerticalTimeline>
          </div>
        </div>
    )
}
