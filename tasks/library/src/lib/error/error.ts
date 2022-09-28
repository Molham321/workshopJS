export type MyError = {
  message: string | ErrorMessages;
  resolution?: string | undefined;
};

export const enum ErrorMessages {
  NotFound = 'the HTMLElement is not Found!',
}

export const isError = (
  toBeDetermined: any | MyError,
): toBeDetermined is MyError => {
  return !!(toBeDetermined as MyError)?.message;
};
