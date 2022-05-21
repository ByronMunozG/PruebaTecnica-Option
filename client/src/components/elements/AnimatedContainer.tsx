import { Container, ContainerProps } from '@mantine/core';
import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

const MotionContainer = motion(Container);

interface IAnimatedContainerProps extends ContainerProps {
  children: ReactNode;
  delay?: number;
}

const AnimatedContainer: FC<IAnimatedContainerProps> = ({ children, delay = 0, size }) => (
  <MotionContainer
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    size={size}
  >
    {children}
  </MotionContainer>
);

export default AnimatedContainer;
