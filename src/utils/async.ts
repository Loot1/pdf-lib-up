/**
 * Returns a Promise that resolves after at least one tick of the
 * Macro Task Queue occurs.
 */
export const waitForTick = (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve();
    }, 0);
  });
};
