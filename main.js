function throughOnce(fn) {
    let isEven = false;

    return function() {
        isEven = !isEven;
        if (isEven)
        return fn.apply(this,arguments);
    };
}

const logThroughOnce = throughOnce(function(text) {
  console.log(text);
});

logThroughOnce("Hello World!1"); // "Hello World!"
logThroughOnce("Hello World!2"); //
logThroughOnce("Hello World!3"); // "Hello World!"
logThroughOnce("Hello World!4"); //
