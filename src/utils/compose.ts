const compose = (...func: [Function]) => (comp: any) =>
  func.reduceRight((wrapped: any, f: Function) => f(wrapped), comp);

export default compose;
