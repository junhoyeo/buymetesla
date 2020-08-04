import React from 'react';
import styled from 'styled-components';

import useFormattedCountUp from '../utils/useFormattedCountUp';

interface ICard {
  field: string;
  value: number;
  unit: string;
  initialValue?: number;
}

const Card: React.FC<ICard> = ({ field, value, unit, initialValue = 0 }) => {
  const {
    countUp: countedValue,
  } = useFormattedCountUp(value, {
    start: initialValue,
  });

  return (
    <Container>
      <ContentWrapper>
        <Field>
          {field}
        </Field>
        <Value>
          {countedValue}
          <Unit>
            {unit}
          </Unit>
        </Value>
      </ContentWrapper>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 33.333%;
  height: 128px;
  background-color: rgba(217, 224, 228, 0.6);
  border-radius: 8px;
  position: relative;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const Field = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #9A9DA1;
  word-break: keep-all;
  line-height: 1.15;
`;

const Value = styled.span`
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 1px;
  line-height: 1.45;
`;

const Unit = styled.span`
  font-size: 18px;
  margin-left: 1px;
  font-weight: bold;
`;
