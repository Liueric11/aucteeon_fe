import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const CardProduct = ({ data }) => {
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

  const history = useNavigate();

  function textEclipseFormat(text) {
    if (text.length < 20) {
      return text;
    } else {
      return text.slice(0, 20) + '...';
    }
  }

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

  const onClickCard = () => {
    history(`/detail-product/${data.id}`);
  };

  return (
    <div
      className="p-4  bg-white rounded-2xl carousel-item border-2 border-slate-200"
      onClick={onClickCard}
    >
      <div className="flex-col justify-center flex">
        <div className="h-48 flex justify-center">
          <img src={data.images} width={200} height={200} alt="" className="object-cover h-48" />
        </div>
        <p className="mt-3 text-lg font-bold overflow-hidden text-ellipsis ml-2 w-48 h-20">
          {textEclipseFormat(data.name)}
        </p>
        <hr className="my-2" />
        <div className="flex flex-row justify-between">
          <div className="flex-col mb-2">
            <p className="text-xs font-semibold text-gray-400">Open Bid From</p>
            <p className="text-sm md:text-base font-bold text-ellipsis overflow-hidden whitespace-nowrap w-28 h-10">{`Rp ${data.initValue
              .toLocaleString()
              .replace(/,/g, '.')}`}</p>
          </div>
          <div className="w-4" />
          <div className="flex-col">
            <p className="text-xs  font-semibold text-gray-400">
              {isWillCome ? 'Will Come In' : 'Time Remaining'}
            </p>
            <p className="text-sm md:text-base font-bold text-red-700">
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
                ? 'Waktu habis'
                : '-'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
