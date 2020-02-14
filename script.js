// 1 Hoisting

// var a = 10;
// function a() {}
// console.log(a);

// (function a() {
//   if (false) {
//     var a = 10; // also use let
//   }
//   console.log(a);
// })();

// 2 Prototype

// function Organism(type) {
//   this.type = type;
// }

// Organism.prototype = {
//   typeOf: function() {
//     return this.type;
//   }
// };

// function Human(fName, lName) {
//   Organism.call(this, "Human");
//   this.lName = lName;
//   this.fName = fName;
// }

// Human.prototype = Object.create(Organism.prototype);
// Human.prototype.constructor = Human;

// var ashish = new Human("Ashish", "Tayal");
// console.log(ashish.typeOf());

// 3 pub sub

// const pubsub = (function() {
//   const actionHandlers = {};
//   const actionHandlerHash = {};
//   return {
//     publish: function(action, ...rest) {
//       if (actionHandlers[action]) {
//         const handlers = actionHandlers[action];
//         for (let handler of handlers) {
//           if (handler.isActive) {
//             handler.eveHandler(rest);
//           }
//         }
//       } else {
//         console.log(`No event handle for ${action}`);
//       }
//     },
//     subscribe: function(action, handler) {
//       let handlers = actionHandlers[action];
//       const id = Math.random();
//       const handlerObj = { id, eveHandler: handler, isActive: true };
//       if (handlers) {
//         handlers.push(handlerObj);
//       } else {
//         actionHandlers[action] = [handlerObj];
//       }
//       actionHandlerHash[id] = handlerObj;
//       return id;
//     },
//     unSubscribe: function(id) {
//       actionHandlerHash[id].isActive = false;
//     }
//   };
// })();

// pubsub.subscribe("myEvent", () => console.log(1));
// let id = pubsub.subscribe("myEvent", () => console.log(2));
// pubsub.publish("myEvent");
// pubsub.unSubscribe(id);
// pubsub.publish("myEvent");

// Generator

// function* gen1() {
//   console.log("start");
//   yield 1;
//   yield 2;
//   yield 3;
// }

// var genObj = gen1();
// console.log("Iterate");
// console.log(genObj.next());
// console.log(genObj.next());
// console.log(genObj.next());
// console.log(genObj.next());
// console.log(genObj.next());

// Symbols
// Object.prototype[Symbol.iterator] = function* iterator() {
//   if (Object.keys(this)) {
//     for (let key in this) {
//       yield this[key];
//     }
//   }
// };

// let obj = { a: 1, b: 2, c: 3 };
// for (let val of obj) {
//   console.log(val);
// }

// Important Characters of an object property
// 1. Writable
// 2. Configurable
// 3. Enumerable -> Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer (properties defined via Object.defineProperty and such default enumerable to false). Enumerable properties show up in for...in loops unless the property's key is a Symbol.
// 4. Ownership -> Ownership of properties is determined by whether the property belongs to the object directly and not to its prototype chain.
