import { InputSlots, SelectSlots, SlotsToClasses } from '@nextui-org/react';

// custom styles for forms
// move to forms file and export via index.ts

export const inputBordered: SlotsToClasses<InputSlots> = {
  label: ['text-content text-md font-light'],
  inputWrapper: [
    'pr-2',
    'bg-white',
    'shadow-none',
    'text-black capitalize',
    'border border-primaryGreenDark data-[hover=true]:bg-white',
    'group-data-[focus=true]:bg-white',
    'group-data-[active=true]:bg-white',
  ],
};

export const inputBorderedRegular: SlotsToClasses<InputSlots> = {
  label: ['text-content text-md font-light'],
  inputWrapper: [
    'pr-2',
    'bg-white',
    'shadow-none',
    'text-black capitalize',
    'border border-content data-[hover=true]:bg-white',
    'group-data-[focus=true]:bg-white',
    'group-data-[active=true]:bg-white',
  ],
};

export const selectBordered: SlotsToClasses<SelectSlots> = {
  label: [
    'text-content text-md group-data-[filled=true]:font-light font-light',
  ],
  trigger: ['border border-content bg-white'],
};

export const inputDefault: SlotsToClasses<InputSlots> = {
  label: ['text-content text-md font-light'],
  inputWrapper: [
    'pr-2',
    'bg-white',
    'shadow-none',
    'text-black capitalize',
    'data-[hover=true]:bg-white',
    'group-data-[focus=true]:bg-white',
    'group-data-[active=true]:bg-white',
  ],
};

export const textAreaClassNames: SlotsToClasses<InputSlots> = {
  label: ['text-content text-md font-light hidden'],
  description: ['hidden'],
  inputWrapper: [
    'pr-2 py-4 flex items-start',
    'bg-white',
    'shadow-none',
    'text-content',
    'border border-primaryGreenDark data-[hover=true]:bg-white',
    'group-data-[focus=true]:bg-white',
    'group-data-[active=true]:bg-white',
  ],
};
