import { TagContainer } from './styles';

export type Props = {
  padding?: 'small' | 'big';
  fontSize?: 'small' | 'big';
  children: string;
};

const Tag = ({ children, padding = 'small', fontSize = 'small' }: Props) => (
  <TagContainer fontSize={fontSize} padding={padding}>
    {children}
  </TagContainer>
);

export default Tag;
