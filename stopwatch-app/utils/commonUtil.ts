
export const isClient = () => typeof window !== "undefined";

export const getWindow = () => isClient() && window;
