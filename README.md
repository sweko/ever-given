# Evergiven

Evergiven is a simple library that will block execution for a given time on a given channel.
It returns a promise, so can be used with `async/await` or with `then/catch`.

There is only one exposed method, `block`, that takes two parameters:

- blockTime - mandatory, `number`, the number of milliseconds to block the execution.
- channel - optional, the code that **evergiven** will hold hostage until the time elapse. Note that the code is returned, and not executed. If you need the code to run, you need to execute it yourself.

## Usage

All examples write `I'm blocked by Evergiven for three seconds` immediately to the console, followed by three seconds in which absolutely nothing happens. Once the time is up, they write `Finally Unblocked!`.

### Async / Await without a callback

```javascript
async function asyncUsage() {
    console.log("I'm blocked by Evergiven for three seconds");
    await everGiven.block(3000);
    console.log("Finally Unblocked!");
}
```

### Promise without a callback

```javascript
function promiseUsage() {
    everGiven
        .block(3000)
        .then(() => console.log("Finally Unblocked!"));

    console.log("I'm blocked by Evergiven for three seconds");
}
```

### Async / Await with a callback

```javascript
async function asyncCallbackUsage() {
    console.log("I'm blocked by Evergiven for three seconds");
    const channel = await everGiven.block(3000, () => console.log("Finally Unblocked!"));
    channel();
}
```

### Promise with a callback

```javascript
function promiseCallbackUsage() {
    everGiven
        .block(3000, () => console.log("Finally Unblocked!"))
        .then(channel => channel());

    console.log("I'm blocked by Evergiven for three seconds");
}
```

## Shoutout

Thanks to [The Guy with the Digger](https://twitter.com/SuezDiggerGuy), keep giving your best.