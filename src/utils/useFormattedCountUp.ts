import { useEffect } from 'react';
import { useCountUp, useCountUpProps } from 'react-countup';

const useFormattedCountUp = (value: number, props?: Partial<useCountUpProps>) => {
  const counting = useCountUp({
    start: 0,
    end: value,
    delay: 1050,
    duration: 1.2,
    formattingFn: (countingValue: number) =>
      !countingValue ? '0' : countingValue.toLocaleString('ko'),
    ...props,
  });

  const { start: startCount } = counting;
  useEffect(startCount, []);
  return counting;
}

export default useFormattedCountUp;
