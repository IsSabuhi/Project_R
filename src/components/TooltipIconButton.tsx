import { IconButton, IconButtonProps } from '@chakra-ui/button';
import { Tooltip } from '@chakra-ui/tooltip';
import React from 'react';

interface Props {
  label?: string;
}

const TooltipIconButton: React.FC<Props & IconButtonProps> = React.forwardRef(
  ({ label, ...props }, ref) => {
    return (
      <Tooltip label={label}>
        <IconButton size='sm' variant='ghost' {...props} />
      </Tooltip>
    );
  }
);

TooltipIconButton.displayName = 'TooltipIconButton';

export default TooltipIconButton;
