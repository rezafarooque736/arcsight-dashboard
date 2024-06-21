export const updateArray = (targetArray, newArray) => {
  targetArray.length = 0; // Clear the existing array
  targetArray.push(...newArray); // Populate with new data
};

export function pause(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
