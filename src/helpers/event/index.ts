import { Subject, Subscription } from 'rxjs';

export enum Events {
  ALL = 'ALL',
  PRODUCT_QUANTITY_CHANGED = 'PRODUCT_QUANTITY_CHANGED',
  PRODUCT_ADDED_TO_CART = 'PRODUCT_ADDED_TO_CART',
}

export type Event = {
  id: number;
  name: Events;
  payload: unknown;
};

const eventSubject = new Subject<unknown>();

export const dispatchEvent = (name: Events, payload: unknown) => {
  eventSubject.next({
    id: Math.floor((Math.random() * 16) / 0.02),
    name,
    payload,
  } as Event);
};

export const subscribeToEvent = (
  name: Events,
  callback: (payload: unknown) => void
) => {
  return eventObservable.subscribe((eventData) => {
    callback(eventData);
  });
};

export const unsubscribeEvent = (subscription: Subscription) => {
  subscription.unsubscribe();
};

export const eventObservable = eventSubject.asObservable();
