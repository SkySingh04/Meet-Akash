'use client'
interface StatsProps {
    icon1?: string;
    title1: string;
    value1: string;
    desc1: string;
    icon2?: string;
    title2: string;
    value2: string;
    desc2: string;
    icon3?: string;
    title3: string;
    value3: string;
    desc3: string;
}

import React from 'react'

const Stats = (props:StatsProps) => {
  return (
    <div>
    <div className="stat">
        {props.icon1 && (
        <div className="stat-figure text-primary">
            {props.icon1}
        </div>)
        }
      <div className="stat-title">{props.title1}</div>
      <div className="stat-value">{props.value1}</div>
      <div className="stat-desc">{props.desc1}</div>
    </div>
    
    <div className="stat">
    {props.icon2 && (
        <div className="stat-figure text-secondary">
            {props.icon2}
        </div>)
        }
      <div className="stat-title">{props.title2}</div>
      <div className="stat-value">{props.value2}</div>
      <div className="stat-desc">{props.desc2}</div>
    </div>

    <div className="stat">
    {props.icon3 && (
        <div className="stat-figure text-secondary">
            {props.icon3}
        </div>)
        }
      <div className="stat-title">{props.title3}</div>
      <div className="stat-value">{props.value3}</div>
      <div className="stat-desc">{props.desc3}</div>
    </div>
    </div>
  )
}

export default Stats