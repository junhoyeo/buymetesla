import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

import { getDummyData } from '../utils/mockup';

const options = {
  responsive: true,
  datasetStrokeWidth: 3,
  pointDotStrokeWidth: 4,
  animation: {
    duration: 2000,
  },
  legend: {
    display: false
  },
  tooltips: {
    titleFontSize: 14.5,
    bodyFontSize: 14.5,
  },
  scales: {
    xAxes: [{
      display: false,
    }],
    yAxes: [{
      ticks: {
        display: false,
        fontColor: 'rgba(0,0,0,0.12)',
      },
      gridLines: {
        color: 'rgba(0,0,0,0.05)',
      },
    }],
  },
  layout: {
    padding: {
      right: 9,
    }
  }
};

interface ILineChart {
  className?: string;
  width: number;
  height: number;
  style?: React.CSSProperties;
}

const createGradient = (canvas: HTMLCanvasElement, height: number) => {
  const context = canvas.getContext('2d');
  const gradient = context?.createLinearGradient(0, 0, 0, height);
  gradient?.addColorStop(0, 'rgba(255, 107, 107, 0.9)');
  gradient?.addColorStop(0.9, 'rgba(255, 107, 107, 0)');
  gradient?.addColorStop(1, 'rgba(99, 203, 255, 0)');
  return gradient;
};

const LineChart: React.FC<ILineChart> = ({
  width,
  height,
  className = '',
  style = {},
}) => {
  const { stockPrices, timestampForStock } = getDummyData();
  const data = (canvas: HTMLCanvasElement) => {
    const gradient = createGradient(
      canvas,
      height,
    );

    return {
      labels: timestampForStock.slice(500),
      datasets: [
        {
          backgroundColor: gradient,
          borderColor: '#E82126',
          borderWidth: 3,
          hoverBorderWidth: 3.2,
          pointColor: '#fff',
          pointRadius: 2,
          pointHoverRadius: 2,
          pointStrokeColor: '#E82126',
          pointHighlightFill: '#fff',
          pointHighlightStroke: '#E82126',
          data: stockPrices.slice(500),
        },
      ],
    };
  };

  return (
    <Container
      className={className}
      style={{ width, ...style }}
    >
      <Line
        data={data}
        options={options}
        width={width}
        height={height}
      />
    </Container>
  )
};

export default LineChart;

const Container = styled.div`
`;
