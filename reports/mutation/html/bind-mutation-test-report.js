document.querySelector('mutation-test-report-app').report = {"files":{"/Users/yonigoldberg/Solutions/testing-workshop/measuring-effectiveness/mutation/order-service.js":{"language":"javascript","mutants":[{"id":"1","location":{"end":{"column":17,"line":3},"start":{"column":9,"line":3}},"mutatorName":"IfStatement","replacement":"false","status":"Killed"},{"id":"0","location":{"end":{"column":4,"line":10},"start":{"column":52,"line":2}},"mutatorName":"Block","replacement":"{}","status":"Killed"},{"id":"6","location":{"end":{"column":38,"line":5},"start":{"column":16,"line":5}},"mutatorName":"IfStatement","replacement":"true","status":"Survived"},{"id":"7","location":{"end":{"column":38,"line":5},"start":{"column":16,"line":5}},"mutatorName":"BinaryExpression","replacement":"userType !== \"premium\"","status":"Killed"},{"id":"2","location":{"end":{"column":17,"line":3},"start":{"column":9,"line":3}},"mutatorName":"IfStatement","replacement":"true","status":"Killed"},{"id":"3","location":{"end":{"column":6,"line":5},"start":{"column":19,"line":3}},"mutatorName":"Block","replacement":"{}","status":"Killed"},{"id":"10","location":{"end":{"column":32,"line":6},"start":{"column":14,"line":6}},"mutatorName":"BinaryExpression","replacement":"productPrice / 0.9","status":"Killed"},{"id":"4","location":{"end":{"column":32,"line":4},"start":{"column":14,"line":4}},"mutatorName":"BinaryExpression","replacement":"productPrice / 0.8","status":"Killed"},{"id":"5","location":{"end":{"column":38,"line":5},"start":{"column":16,"line":5}},"mutatorName":"IfStatement","replacement":"false","status":"Killed"},{"id":"8","location":{"end":{"column":38,"line":5},"start":{"column":29,"line":5}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed"},{"id":"9","location":{"end":{"column":6,"line":7},"start":{"column":40,"line":5}},"mutatorName":"Block","replacement":"{}","status":"Killed"}],"source":"class OrderService {\n  CalculatePrice(userType, productPrice, isOnSale) {\n    if (isOnSale) {\n      return productPrice * 0.8; \n    } else if (userType === \"premium\") {\n      return productPrice * 0.9;\n    }\n\n    return productPrice;\n  }\n}\n\nmodule.exports = OrderService;\n\n//npm test -- --config=jest.config.mutation.js --watch"}},"schemaVersion":"1.0","thresholds":{"break":null,"high":80,"low":60}};