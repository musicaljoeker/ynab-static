import React from "react"
import accounting from 'accounting';

import './currency.scss';

function Currency({cents}) {
  let className = 'currency';
  if(cents < 0) {
    className = `${className} negative`;
  }
  return  <span className={className}>{accounting.formatMoney(cents/1000)}</span>
}

export default Currency
