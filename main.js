function throughOnce(fn) {
    var result;

    if (fn) {
        result = fn.apply(logThroughOnce||this, arguments);
        fn = null;
    }
    return result;
};


var logThroughOnce = throughOnce(function(text) {
  console.log(text);
});

logThroughOnce("Hello World!"); // "Hello World!"
logThroughOnce("Hello World!"); //
logThroughOnce("Hello World!"); // "Hello World!"
logThroughOnce("Hello World!"); //
