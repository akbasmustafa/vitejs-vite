import type { Meta, StoryObj } from '@storybook/react';
import { MoodletWithStatus } from './moodletWithStatus';

const meta: Meta<typeof MoodletWithStatus> = {
  title: 'Components/MoodletWithStatus',
  component: MoodletWithStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MoodletWithStatus>;

const FSCLetters = ['F', 'S', 'C'];
const FSCWords = ['FUELING', 'SERVICING', 'CLEANING'];

export const FSCVariants: Story = {
  render: () => (
    <div className='flex flex-col gap-2 w-full'>
      <p className='text-sm'>Letter Version</p>
      <div className='flex flex-row gap-2'>
        {FSCLetters.map((item, index) => (
          <MoodletWithStatus key={index}>{item}</MoodletWithStatus>
        ))}
      </div>
      <p className='text-xs'>Word Version</p>
      <div className='flex flex-row gap-2'>
        {FSCWords.map((item, index) => (
          <MoodletWithStatus key={index}>{item}</MoodletWithStatus>
        ))}
      </div>
    </div>
  ),
};
