# Description

This module calculate Min, Max, Avg, % of standard deviation, median, quartiles, range and histogram from an array

-   sum : the sum of all the values of the array
-   nb : the number of values in the array
-   avg : the average value (sum/nb)
-   stddev : standard deviation in percent ( (value - avg) / nb / avg )
-   min : the minimum value in the array
-   q1 : the 1st quartile
-   median : the median
-   q3 : the last quartile
-   max : the maximum value in the array
-   range : the range of the array (max - min)
-   histogram : a repartition of all the values of the array in 5 buckets

# Install

Go into a node project and type the following :

    $> npm install arraystat

# Exemple

    import arraystat from 'arraystat';

    console.log(arraystat([1,2,3,4,5]));

    /*
        {
            sum: 15,
            nb: 5,
            avg: 3,
            stddev: 0.4, // => 40 %
            min: 1,
            q1: 2,
            median: 3,
            q3: 4,
            max: 5,
            range: 4,
            histogram:
            [
                { min: 1, max: 1.8, nb: 1 },
                { min: 1.8, max: 2.6, nb: 1 },
                { min: 2.6, max: 3.4, nb: 1 },
                { min: 3.4, max: 4.2, nb: 1 },
                { min: 4.2, max: 5, nb: 1 }
            ]
        }
    */

# Run

    $> node test.js

# Contributors

[rustyconover](https://github.com/rustyconover) => fix sort v1.1.3
