import React, { useState, useEffect } from 'react';
import moment from 'moment';

const ProductDescription = ({ data, highestBid }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [hoursLeft, setHourssLeft] = useState(0);
  const [daysLeft, setDaysLeft] = useState(0);
  const [weeksLeft, setWeeksLeft] = useState(0);
  const [monthsLeft, setMonthsLeft] = useState(0);
  const [yearsLeft, setYearsLeft] = useState(0);
  //
  const [isWillCome, setIsWillCome] = useState(false);
  const [, setIsOnGoing] = useState(false);
  const [isPassed, setIsPassed] = useState(false);

  useEffect(() => {
    const interval = data
      ? setInterval(() => {
          const now = moment();
          const _isWillCome = moment(data.dateStarted.slice(0, -1)).isAfter(now);
          const _isOnGoing = moment(data.dateEnd.slice(0, -1)).isAfter(now);
          const _isPassed = moment(data.dateEnd.slice(0, -1)).isBefore(now);
          setIsWillCome(_isWillCome);
          setIsOnGoing(!_isWillCome && _isOnGoing);
          setIsPassed(_isPassed);
          const issueDate = _isWillCome
            ? moment(data.dateStarted.slice(0, -1))
            : moment(data.dateEnd.slice(0, -1));
          const tl = issueDate.diff(now, 'seconds');
          const minl = issueDate.diff(now, 'minutes');
          const hl = issueDate.diff(now, 'hours');
          const dl = issueDate.diff(now, 'days');
          const wl = issueDate.diff(now, 'weeks');
          const ml = issueDate.diff(now, 'months');
          const yl = issueDate.diff(now, 'years');
          setTimeLeft(tl > 0 ? tl : 0);
          setMinutesLeft(minl > 0 ? minl : 0);
          setHourssLeft(hl > 0 ? hl : 0);
          setDaysLeft(dl > 0 ? dl : 0);
          setWeeksLeft(wl > 0 ? wl : 0);
          setMonthsLeft(ml > 0 ? ml : 0);
          setYearsLeft(yl > 0 ? yl : 0);
        }, 1000)
      : null;

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="flex flex-col min-w-[350px] md:min-w-[500px] lg:min-w-[380px]">
      <p className="font-bold text-2xl">{data.name}</p>
      <div className="h-4" />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <p className="font-bold">Current Bid</p>
          <p className="font-bold">{`Rp ${highestBid.toLocaleString().replace(/,/g, '.')}`}</p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">{isWillCome ? 'Will Come In' : 'Time Remaining'}</p>
          <p className="font-bold">
            {yearsLeft > 0
              ? `${yearsLeft} Year`
              : monthsLeft > 0
              ? monthsLeft + ' Month'
              : weeksLeft > 0
              ? weeksLeft + ' Week'
              : daysLeft > 0
              ? daysLeft + ' Day'
              : hoursLeft > 0
              ? moment.duration(timeLeft, 'seconds').format('HH:mm:ss', { trim: false })
              : minutesLeft > 0
              ? moment.duration(timeLeft, 'seconds').format('mm:ss', { trim: false })
              : timeLeft > 0
              ? moment.duration(timeLeft, 'seconds').format('ss', { trim: false })
              : isPassed
              ? 'Timeout'
              : '-'}
          </p>
        </div>
      </div>
      <div className="h-px bg-slate-900 my-2" />
      <div className="flex flex-col">
        <p className="font-normal" style={{ color: '#5A5B6A' }}>
          Condition : <span style={{ color: '#333333' }}>{data.condition}</span>
        </p>
        <p className="font-normal" style={{ color: '#5A5B6A' }}>
          Category :{' '}
          <span style={{ color: '#2F80ED' }} className="font-bold">
            {data.category.name}
          </span>
        </p>
        <div className="h-4" />
        <p className="font-normal">{data.desc}</p>
      </div>
      <div className="h-px bg-slate-900 my-2" />
    </div>
  );
};

export default ProductDescription;
