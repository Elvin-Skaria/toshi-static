import React from 'react';
import styled from 'styled-components';

export interface TextWrapperProps {
  fontFamily?: 'Prototype' | 'Poppins';
  fontStyle?: string;
  fontWeight?: 'normal' | 'bold' | 100 | 300 | 400 | 600;
  fontSize?: 100 | 60 | 42 | 32 | 24 | 22 | 20 | 18 | 16 | 14 | 12 | 10;
  FletterSpacing?: string;
  Fcolor?: string;
  text: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  isImp?: boolean;
  shadow?: string;
}

const TextWrapper = (props: TextWrapperProps) => {
  const {
    fontFamily = 'Poppins',
    fontStyle = 'normal',
    fontWeight = 400,
    fontSize = 12,
    FletterSpacing = 'normal',
    Fcolor = '#000000',
    text = '',
    className = '',
    align = 'left',
    isImp = false,
    shadow = '',
  } = props;

  return (
    <StyledText
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontStyle={fontStyle}
      letterSpacing={FletterSpacing}
      fcolor={Fcolor}
      style={{ color: Fcolor }}
      className={className}
      align={align}
      shadow={shadow}
    >
      {text.toUpperCase()}{isImp && <span style={{ color: '#024FFB' }}>*</span>}
    </StyledText>
  );
};

export default TextWrapper;

interface StyledTextProps {
  fontFamily: 'Prototype' | 'Poppins';
  fontStyle: string;
  fontWeight: 'normal' | 'bold' | 100 | 300 | 400 | 600;
  fontSize: 100 | 60 | 42 | 32 | 24 | 22 | 20 | 18 | 16 | 14 | 12 | 10;
  letterSpacing: string;
  align: 'left' | 'center' | 'right';
  fcolor: string;
  shadow?: string;
}

const StyledText = styled.div<StyledTextProps>`
  font-family: ${(props) => props.fontFamily};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize}px;
  letter-spacing: ${(props) => props.letterSpacing};
  text-align: ${(props) => props.align};
  text-shadow: ${(props) => props.shadow};
`;
