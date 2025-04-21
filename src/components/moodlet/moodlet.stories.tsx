import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Moodlet, { MoodletVariantList } from './moodlet';

const Icon = () => (
  <svg
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='currentColor'
    viewBox='0 0 24 24' // Keep this if you want the icon to scale proportionally
  >
    <path
      fillRule='evenodd'
      d='M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z'
      clipRule='evenodd'
    />
  </svg>
);

const Icon3Dot = () => (
  <svg
    aria-hidden='true'
    width='20'
    height='20'
    viewBox='0 0 10 24'
    fill='currentColor'
  >
    <circle cx='2' cy='12' r='1' />
    <circle cx='5' cy='12' r='1' />
    <circle cx='8' cy='12' r='1' />
  </svg>
);

const meta: Meta<typeof Moodlet> = {
  title: 'Example/Moodlet',
  component: Moodlet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Moodlet>;

const moodletContents = [
  <>
    <Icon />
    LOR
  </>,
  'F',
  <Icon3Dot />,
  <>
    LOR
    <Icon />
  </>,
  <Icon />,
];

export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-col gap-4 w-full'>
      {MoodletVariantList.map((variant, index) => (
        <div key={`${variant}-${index}`}>
          <h5>{variant}</h5>
          <div className='flex flex-row gap-2 justify-center items-center'>
            {moodletContents.map((content, index) => (
              <Moodlet
                variant={variant}
                key={`${variant}-${content}-${index}`}
                disabled={index === 0}
              >
                {content}
              </Moodlet>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
