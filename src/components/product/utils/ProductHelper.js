import { Breakpoint } from '../../../constants';

class ProductHelper {
  constructor() {
    this.setupMap();
  }

  setupMap() {
    /**
     * new Map(Breakpoint, number);
     *  1. Breakpoint -> screen size.
     *  2. Number     -> product to show.
     */
    this.map = new Map();
    this.map.set(Breakpoint.xs, 1);
    this.map.set(Breakpoint.sm, 2);
    this.map.set(Breakpoint.md, 3);
    this.map.set(Breakpoint.lg, 4);
    this.map.set(Breakpoint.xl, 4);
    this.map.set(Breakpoint.xxl, 6);
  }

  /**
   * @param breakpoint {String} refers from Breakpoint
   * @returns {number}
   */
  productListToShow(breakpoint) {
    return this.map.get(breakpoint);
  }
}

export default ProductHelper;
