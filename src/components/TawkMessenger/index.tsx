'use client';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export const TawkMessenger = () => {
  const PROPERTY_ID = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID || '';
  const WIDGET_ID = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID || '';

  return (
    <TawkMessengerReact
      propertyId={PROPERTY_ID}
      widgetId={WIDGET_ID}
      onLoaded={() => console.log('Tawk Loaded!')}
    />
  );
};
