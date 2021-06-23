import * as S from './styles';

export type LineColors = 'primary' | 'secondary';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  size?: 'small' | 'medium';
  lineColor?: LineColors;
  lineLeft?: boolean;
  lineBottom?: boolean;
};

const Heading = ({
  children,
  color = 'black',
  size = 'medium',
  lineColor = 'primary',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineColor={lineColor}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}
  >
    {children}
  </S.Wrapper>
);

export default Heading;
