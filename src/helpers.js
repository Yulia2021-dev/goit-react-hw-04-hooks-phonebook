export function ciEquals(a, b) {
  return typeof a === "string" && typeof b === "string"
    ? a.localeCompare(b, undefined, { sensitivity: "accent" }) === 0
    : a === b;
}

export const saveToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw new Error();
  }
};

export const getFromLocalStorage = (key) => {
  try {
    const result = localStorage.getItem(key);
    return result ? JSON.parse(result) : null;
  } catch (error) {
    throw new Error();
  }
};
