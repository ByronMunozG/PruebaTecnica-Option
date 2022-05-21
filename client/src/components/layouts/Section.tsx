import { Title } from '@mantine/core';
import { FC, ReactNode } from 'react';

interface ISectionProps {
  title: string;
  children: ReactNode;
}

const Section: FC<ISectionProps> = ({ title, children }) => (
  <>
    <Title order={1} align="center" mt="1rem">
      {title}
    </Title>
    {children}
  </>
);

export default Section;
