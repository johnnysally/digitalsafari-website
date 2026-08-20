// Example HTTP client wrapper

export const client = {
  get: (url: string) => fetch(url).then(r => r.json()),
};
