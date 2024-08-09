export default class NumberInterpolator {
  /**
   * Returns a value between start and end based on t ∈ [0;1] where 0 equals start and 1 equals end.
   *
   * @param start - Start value of the interpolation
   * @param end - End value of the interpolation
   * @param t - Value between 0 and 1 both inclusive
   * @returns
   */
  static GetValue(start: number, end: number, t: number): number {
    return start + (end - start) * t;
  }
}
