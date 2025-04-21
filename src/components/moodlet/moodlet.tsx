import './moodlet.scss';

export const MoodletVariantList = [
  'Primary',
  'Active',
  'Inactive',
  'Secondary',
  'Planning',
  'Blue',
  'Released',
  'Green',
  'OK',
  'Red',
  'Stop/Block',
  'Yellow',
  'Warning',
  'Placeholder',
  'Disabled',
] as const;

export type MoodletVariant = (typeof MoodletVariantList)[number];

// Variants map to styles.
const moodletVariants: Record<
  MoodletVariant,
  { active: string; disabled: string }
> = {
  Primary: {
    active: 'moodlet-primary',
    disabled: 'moodlet-primary disabled',
  },
  Active: {
    active: 'moodlet-primary',
    disabled: 'moodlet-primary disabled',
  },
  Inactive: {
    active: 'moodlet-inactive',
    disabled: 'moodlet-inactive disabled',
  },
  Secondary: {
    active: 'moodlet-secondary',
    disabled: 'moodlet-secondary disabled',
  },
  Planning: {
    active: 'moodlet-secondary',
    disabled: 'moodlet-secondary disabled',
  },
  Blue: {
    active: 'moodlet-blue',
    disabled: 'moodlet-blue disabled',
  },
  Released: {
    active: 'moodlet-blue',
    disabled: 'moodlet-blue disabled',
  },
  Green: {
    active: 'moodlet-green',
    disabled: 'moodlet-green disabled',
  },
  OK: {
    active: 'moodlet-green',
    disabled: 'moodlet-green disabled',
  },
  Red: {
    active: 'moodlet-red',
    disabled: 'moodlet-red disabled',
  },
  'Stop/Block': {
    active: 'moodlet-red',
    disabled: 'moodlet-red disabled',
  },
  Yellow: {
    active: 'moodlet-yellow',
    disabled: 'moodlet-yellow disabled',
  },
  Warning: {
    active: 'moodlet-yellow',
    disabled: 'moodlet-yellow disabled',
  },
  Placeholder: {
    active: 'moodlet-primary',
    disabled: 'moodlet-primary disabled',
  },
  Disabled: {
    active: 'moodlet-inactive disabled',
    disabled: 'moodlet-inactive disabled',
  },
};

// Uses button element for accessibility. Extends ButtonHTMLAttributes to support customization.
// Moodlet component follow design guidelines in Figma and separate other features on top of it like status flow.
interface MoodletProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: MoodletVariant;
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  onClickButton?: (eventButton: 'left' | 'right') => void;
}

const Moodlet = ({
  variant = 'Primary',
  children,
  iconLeft,
  iconRight,
  disabled,
  onClickButton,
  ...props
}: MoodletProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (e.button === 2) {
      onClickButton?.('right');
    } else if (e.button === 0) {
      onClickButton?.('left');
    }
  };

  return (
    <button
      style={{
        cursor: disabled ? 'default' : 'pointer',
      }}
      className={`moodlet-base ${
        moodletVariants[variant][disabled ? 'disabled' : 'active']
      } ${props.className}`}
      onContextMenu={(e) => e.preventDefault()}
      onMouseDown={handleClick}
      disabled={disabled}
      {...props}
    >
      {
        <div className='flex flex-row gap-1 justify-center items-center'>
          {iconLeft}
          {children}
          {iconRight}
        </div>
      }
    </button>
  );
};

export default Moodlet;
