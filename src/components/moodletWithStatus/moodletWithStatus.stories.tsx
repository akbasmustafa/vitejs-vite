import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MoodletWithStatus } from './moodletWithStatus';

const meta: Meta<typeof MoodletWithStatus> = {
  title: 'Example/MoodletWithStatus',
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
      <h5>Letter Version</h5>
      <div className='flex flex-row gap-2'>
        {FSCLetters.map((item, index) => (
          <MoodletWithStatus key={index}>{item}</MoodletWithStatus>
        ))}
      </div>
      <h5>Word Version</h5>
      <div className='flex flex-row gap-2'>
        {FSCWords.map((item, index) => (
          <MoodletWithStatus key={index}>{item}</MoodletWithStatus>
        ))}
      </div>
    </div>
  ),
};
