export const calculate = (ft: number): number => {
    let rs = 1;

    for (let valCurrent = 1; valCurrent <= ft; valCurrent++) {
        rs *= calculeFatorial(valCurrent);
    }

    return rs;
};

const calculeFatorial = (ft: number): number => {
    let rs = 1;
    if (ft === 0) return 1;
  
    for (let valCurrent = 1; valCurrent <= ft; valCurrent++) {
      rs *= valCurrent;
    }
  
    return rs;
};
