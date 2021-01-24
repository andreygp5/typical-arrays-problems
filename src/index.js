exports.min = function min(array) {
    if (array) {
        return array.reduce((min, value) => (min = Math.min(min, value)), 0);
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (array) {
        return array.reduce((max, value) => (max = Math.max(max, value)), 0);
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (array && array.length != 0) {
        return array.reduce((sum, value) => (sum += value), 0) / array.length;
    } else {
        return 0;
    }
};
