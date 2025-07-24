// 🗑️ Garbage Collection in JavaScript

// Garbage Collection is an automatic memory management feature in JavaScript.
// It was first introduced by John McCarthy in 1959 as a concept in Lisp programming.

// ✅ In JavaScript, developers often assume that garbage collection "just works" automatically.
// While that's partially true, it’s important to understand how it actually works behind the scenes.

// 🧠 JavaScript’s garbage collector is built on the concept of object reachability.
// Let’s explore this with some examples:

let x = {
    a: {
        b: 4,
    },
};

// 🧩 `x` is an object that holds a nested object `a`, which in turn has property `b`.

// Now, let's create some references:

let y = x; // `y` now points to the same object as `x`
let z = y.a; // `z` points to the object `{ b: 4 }` (which is `x.a`)

// Let's change `y`:
y = 'string';

// Even though we reassigned `y`, the object `x.a` is still referenced by `z`.
// So nothing is garbage collected yet.

z = null;
// Now, `z` is also removed. But wait — `x` is still in memory, and it still references `a`.
// So nothing has been garbage collected yet.

// ❗ Garbage collection only removes objects when **they are no longer reachable** from any part of the code.

// ✅ There are two main concepts to understand:
// 1. **"The object is no longer needed"** — this is subjective and determined by the code’s logic.
// 2. **"The object is no longer reachable"** — this is what the garbage collector uses (object is unreachable = collectible).

// 🧹 The most common algorithm modern engines use is called **"Mark-and-Sweep"**.

// 🔍 Mark-and-Sweep explained:
// - "Mark": Starting from root objects (like global scope), the collector marks all reachable objects.
// - "Sweep": Everything not marked is considered unreachable and removed from memory.

// 🧑‍💻 Most modern environments (including browsers like Chrome and runtimes like Node.js) use Mark-and-Sweep GC.

// 🧰 In Node.js, you can inspect and manually trigger garbage collection using the following flags:

// Run your app with GC inspection:
// node --expose-gc --inspect index.js

// This exposes the `global.gc()` method and allows memory inspection via Chrome DevTools.

// 📦 Memory in Node.js is limited by default (around 2 GB for 64-bit systems).
// You can increase the memory limit for larger applications like this:

// node --max-old-space-size=6000 index.js
// (This sets max memory to 6 GB)

// 📌 Summary:
// - JS garbage collector removes unreachable memory
// - Reference chains matter (if something is still referenced, it stays in memory)
// - Mark-and-Sweep is the default in modern JS engines
// - Manual GC control is possible in Node.js for debugging large apps



// Demo of garbage collector

// gc-demo.js

// Allocate a big array on a button click
let leakyRef = [];

document.getElementById("allocate").onclick = () => {
    for (let i = 0; i < 100; i++) {
        let arr = new Array(1000000).fill("hello world " + i);
        leakyRef.push(arr);
    }
    const getElementByid = document.getElementById("allocate");
    getElementByid.innerHTML = 'Allocated 1000000 large arrays';
    console.log("Allocated 1000000 large arrays");
};

document.getElementById("clear").onclick = () => {
    leakyRef = null;
    console.log("Cleared references. GC will free memory soon.");
    const getElementByid = document.getElementById("clear");
    getElementByid.innerHTML = 'Cleared references. GC will free memory soon.';
};

