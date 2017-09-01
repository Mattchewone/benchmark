# Benchmark

> Benchmark the performace between `feathers-mongoose` bulk create and `feathers-mongoose-advanced` bulk create. `feathers-mongoose-advanced` will push all validation errors and write errors into `params.errors` so that they can be pulled out in an `after` hook and dealt with. Currently `feathers-mongoose` will go to `error` hooks as an error bubbles up from validation/write errors.

# Results
Running some simple tests within postman to send bulk data to the services.

service-1 = `feathers-mongoose`\
service-2 = `feathers-mongoose-advanced`

#### 1000 records (10 validation errors)
```
service-1: 1402.926ms (first)
service-1: 735.441ms (second)
service-1: 1019.915ms (third)
avg: 1052.760ms
```
---
```
service-2: 131.716ms (first)
service-2: 248.894ms (second)
service-2: 560.430ms (third)
avg: 313.68ms
```

#### 5000 records (50 validation errors)
```
service-1: 2839.131ms (first)
service-1: 3575.133ms (second)
service-1: 3303.907ms (third)
avg: 3239.390ms
```
-----
```
service-2: 814.402ms (first)
service-2: 619.735ms (second)
service-2: 501.041ms (third)
avg: 645.059ms
```
## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/benchmark; npm install
    ```

3. Start your app

    ```
    npm start
    ```
