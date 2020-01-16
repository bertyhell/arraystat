module.exports = function arraystat(arr) {
    var result = {};

    if (arr.length) {
        // avg
        result.sum = arr.reduce((a, x) => a + x, 0);
        result.nb = arr.length;
        result.avg = result.sum / result.nb;

        // standard deviation percent = avg(deviation) / avg
        var sumdeviation = arr.reduce((a, x) => a + Math.abs(x - result.avg), 0);
        var avgdeviation = sumdeviation / result.nb;
        result.stddev = avgdeviation / result.avg;
        
        // standard deviation percent = avg(deviation) / avg
        arr = [...arr].sort((a, b) => a - b);
        result.min = arr[0];
        result.q1 = quantile(arr, 0.25);
        result.median = quantile(arr, 0.5);
        result.q3 = quantile(arr, 0.75);
        result.max = arr[arr.length - 1];
        result.range = result.max - result.min;

        // histogram
        result.histogram = [];
        var nbBins = 5;
        var i = result.min;
        var width = result.range/nbBins;
        while (nbBins--) {
            var min = i;
            var max = i+width;
            var bin = {min: min, max: max, nb: arr.filter(function(x) {
                if (nbBins)
                    return x >= min && x < max;
                else
                    return x >= min
            }).length};
            
            i += width;
            result.histogram.push(bin);
        }
    }

    return result;
}

// Attention: array needs to be sorted
function quantile(arr, q) {
    var pos = ((arr.length) - 1) * q;
    var base = Math.floor(pos);
    var rest = pos - base;

    if ( (typeof arr[base+1] !== 'undefined') ) {
        return arr[base] + rest * (arr[base+1] - arr[base]);
    } else {
        return arr[base];
    }
}
