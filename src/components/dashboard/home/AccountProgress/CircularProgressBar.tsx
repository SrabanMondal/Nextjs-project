"use client"
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from 'react';
interface CircularProgressBarProps {
  percentage: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ percentage }) => {
    const [value, setValue] = useState(0);
    const targetValue = percentage;
    useEffect(() => {
        const timeout = setTimeout(() => setValue(targetValue), 300);
        return () => clearTimeout(timeout);
      }, [targetValue]);
  return (
    <CircularProgressbar
    className='md:w-24 md:h-24 text-center w-40 h-40'
    value={value}
    text={`${value}%`}
      styles={buildStyles({
        textColor: '#101828',
        pathColor: '#279DD4',
        trailColor: '#EAECF0',
        backgroundColor: '#fff',
        pathTransitionDuration: 0.5,
      })}
    />
  );
};

export default CircularProgressBar;