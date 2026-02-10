export function handlerSum(...values: number[]) {
  return values.reduce((acc, curr) => acc + curr, 0);
}
