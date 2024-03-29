import { ApplicationError } from '@/protocols';

export function cannotBookingError(): ApplicationError {
  return {
    name: 'CannotBookingError',
    message: 'Cannot book in this room!',
  };
}
