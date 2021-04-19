const { test, expect } = require('@jest/globals')

const functt=require('../mongoDB')


//initial object
obj1={
    "a":2,
    "b":"mongo",
    "c": {
        "d": 10,
        "e": {
            "f": {
                "g": 111,
            }
        }
      }
    }
//result object
objr1={
    "a":2,
    "b":"mongo",
    "c.d": 10,
    "c.e.f.g":111 
    },

obj2=obj1={
    "a":2,
    "b":"mongo",
    "c": {
        "d": 10,
        "e": {
            "f": {
                "g": 111,
            }
        }
      }
    }
//initial object
objr1={
    "a":2,
    "b":"mongo",
    "c.d": 10,
    "c.e.f.g":111 
    },
//expected result
objr2={
    "a": 1,
    "b": true,
    "c.d": 3,
    "c.e": "test"
}
    
test('test json objects', () => {
    expect(mongoDB(obj1)).toEqual(objr1)
    //expect(mongoDB(obj2)).toEqual(objr2)
})