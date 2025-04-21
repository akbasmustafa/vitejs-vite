import { useState } from 'react';
import Moodlet, { MoodletVariant } from '../moodlet/moodlet';

enum ButtonStatus {
  NOT_REQUIRED = 'NOT_REQUIRED',
  REQUIRED = 'REQUIRED',
  CURRENT = 'CURRENT',
  COMPLETED = 'COMPLETED',
}

const StatusMap: Record<
  ButtonStatus,
  { left: ButtonStatus | undefined; right: ButtonStatus | undefined }
> = {
  [ButtonStatus.NOT_REQUIRED]: {
    left: undefined,
    right: ButtonStatus.REQUIRED,
  },
  [ButtonStatus.REQUIRED]: {
    left: ButtonStatus.CURRENT,
    right: ButtonStatus.NOT_REQUIRED,
  },
  [ButtonStatus.CURRENT]: {
    left: ButtonStatus.COMPLETED,
    right: undefined,
  },
  [ButtonStatus.COMPLETED]: {
    left: ButtonStatus.CURRENT,
    right: ButtonStatus.REQUIRED,
  },
};

const StatusToVariantMap: Record<ButtonStatus, MoodletVariant> = {
  [ButtonStatus.NOT_REQUIRED]: 'Disabled',
  [ButtonStatus.REQUIRED]: 'Inactive',
  [ButtonStatus.CURRENT]: 'Red',
  [ButtonStatus.COMPLETED]: 'Green',
};

const withStatus = <
  P extends {
    variant?: MoodletVariant;
    onClickButton?: (eventButton: 'left' | 'right') => void;
    children?: React.ReactNode;
  }
>(
  WrappedComponent: React.ComponentType<P>
) => {
  return function WithStatusComponent({
    children,
    ...rest
  }: Omit<P, 'variant' | 'onClickButton'>) {
    const [status, setStatus] = useState(ButtonStatus.REQUIRED);

    const handleClick = (eventButton: 'left' | 'right') => {
      const newStatus = StatusMap[status][eventButton];
      if (newStatus) {
        setStatus(newStatus);
      }
    };

    return (
      <WrappedComponent
        {...(rest as P)}
        variant={StatusToVariantMap[status]}
        onClickButton={handleClick}
      >
        {children}
      </WrappedComponent>
    );
  };
};

export const MoodletWithStatus = withStatus(Moodlet);
