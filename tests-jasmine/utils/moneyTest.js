import {formatCurrency} from '../../scripts/utils/money.js'


describe('test suite: formatCurreny',()=>{
  it('convert cents into dollars',()=>{
    expect(formatCurrency(2000)).toEqual('20.00');
  });

  it('works w 0',()=>{
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds up',()=>{
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
});