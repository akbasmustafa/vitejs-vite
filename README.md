# Moodlet Component Library

A React component library featuring a customizable Moodlet component with status management capabilities. Developed component can be displayed and tested on [https://mustafa-iqm.vercel.app/](https://mustafa-iqm.vercel.app/)

## Tech Stack

- **Build Tool**: Vite
- **Component Development**: Storybook
- **Styling**:
  - SCSS for dynamic style generation
  - TailwindCSS for utility-first styling
- **Testing**: Storybook for component isolation and testing

## Components

### Moodlet

The base Moodlet component that follows the design guidelines. This component serves as the foundation for creating variant-aware moodlets.

### MoodletWithStatus (HOC)

A Higher-Order Component that enhances the base Moodlet with status management capabilities. It handles the logic for changing variants of the Moodlet based on different states.

## Usage Examples

The library includes sample stories demonstrating three common use cases:

1. Fuelling
2. Servicing
3. Cleaning

## Development

### Prerequisites

- Node.js (LTS version)
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Running Storybook

```bash
npm run storybook
# or
yarn storybook
```

## Project Structure

```
src/
  ├── components/
      ├── moodlet/
      │   ├── moodlet.stories.tsx
      │   ├── moodlet.scss
      │   └── moodlet.tsx
      └── moodletWithStatus/
          ├── moodletWithStatus.stories.tsx
          └── moodletWithStatus.tsx

```
