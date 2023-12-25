'use client';
import React, { FC } from 'react';

type ClientWrapperProps = {
  children: React.ReactNode;
};

export const ClientWrapper: FC<ClientWrapperProps> = ({ children }) => {
  return <>{children}</>;
};
