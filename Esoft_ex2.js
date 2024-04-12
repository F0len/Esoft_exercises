var _ = require('lodash');
let obj = {
    foo: 'bar',
    baz: {
      qux1: 42,
      qux2: '12345',
      qux3: [1,2,3,4,5],
    }
  };
  
  let clonedObj = structuredClone(obj);
  clonedObj.foo = 'new'
  clonedObj.baz.qux3 = [3,2,7,8,1];
  console.log('clonedObj.foo: ' + clonedObj.foo);
  console.log('clonedObj.baz.qux3: ' +clonedObj.baz.qux3);
  console.log('obj.foo: ' + obj.foo);
  console.log('obj.baz.qux3: ' + obj.baz.qux3);
  //второй метод
  let clonedObj2 = _.cloneDeep(obj);
  clonedObj2.foo = 'new2';
  clonedObj2.baz.qux3 = [5,32,661,1,5,4,2];
  console.log('____________');
  console.log('clonedObj2.foo: ' + clonedObj2.foo);
  console.log('clonedObj2.baz.qux3: ' +clonedObj2.baz.qux3);
  console.log('obj.foo: ' + obj.foo);
  console.log('obj.baz.qux3: ' + obj.baz.qux3);