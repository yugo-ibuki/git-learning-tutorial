// Since we're moving to a static site, we'll simplify the fetcher
// to just return the data directly without making server requests
export class FetchError extends Error {
  info: any;
  status: number;
  constructor(message: string, info: any, status: number) {
    super(message);
    this.info = info;
    this.status = status;
  }
}

// Simplified fetcher that returns static data
export const fetcher = async (url: string) => {
  // In a static site, we don't need actual fetching
  // This is kept for SWR compatibility
  return Promise.resolve({});
};
