function strjoin(sep) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var sorted = args.sort();
    var str = sorted.join(sep);
    console.log(str);
}
console.log(strjoin('#', "Dean", "Aparna", "Clark", "Octavia"));
console.log(strjoin(',', "Dean", "Aparna", "Clark", "Octavia"));
