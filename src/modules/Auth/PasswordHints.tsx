import MotionBox from '@/components/MotionBox';
import { List, ListIcon, ListItem } from '@chakra-ui/layout';
import React from 'react';
import { BsCheck, BsX } from 'react-icons/bs';

const getColor = (validator: any) => (validator ? 'green.500' : 'red.500');

interface Props {
  validators?: {
    validLength: boolean | null;
    hasNumber: boolean | null;
    upperCase: boolean | null;
    lowerCase: boolean | null;
  };
  hints?: Array<{ message: string; validator: boolean }>;
}

const DefaultHints = ({
  validLength,
  hasNumber,
  upperCase,
  lowerCase,
}: any) => [
  {
    message: 'Минимум 8 символов',
    validator: validLength,
  },
  {
    message: 'По крайней мере, одно число 0-9',
    validator: hasNumber,
  },
  {
    message: '1 заглавный и 1 строчный символ',
    validator: upperCase && lowerCase,
  },
];

const PasswordHints: React.FC<Props> = ({ validators, hints }) => {
  const arr = hints ? hints : DefaultHints(validators);

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      as={List}
      listStyleType='none'
      mb='2'
    >
      {arr.map((hint) => (
        <ListItem key={hint.message} as='li' color={getColor(hint.validator)}>
          <ListIcon as={hint.validator ? BsCheck : BsX} />
          {hint.message}
        </ListItem>
      ))}
    </MotionBox>
  );
};

export default PasswordHints;
