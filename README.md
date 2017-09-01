# Benchmark

> Benchmark the performace between `feathers-mongoose` bulk create and `feathers-mongoose-advanced` bulk create. `feathers-mongoose-advanced` will push all validation errors and write errors into `params.errors` so that they can be pulled out in an `after` hook and dealt with. Currently `feathers-mongoose` will go to `error` hooks as an error bubbles up from validation/write errors.

# Results
Running some simple tests within postman to send bulk data to the services.

#### 5000 records (50 validation errors)
```
    ✓ Inserting 5000 Records with feathers-mongoose (3683ms)
      3682.463ms
    ✓ Inserting 5000 Records with feathers-mongoose-advanced (2082ms)
      2081.249ms
    ✓ Inserting 5000 Records with feathers-mongoose (2595ms)
      2594.169ms
    ✓ Inserting 5000 Records with feathers-mongoose-advanced (1486ms)
      1485.792ms
    ✓ Inserting 5000 Records with feathers-mongoose (2477ms)
      2477.016ms
    ✓ Inserting 5000 Records with feathers-mongoose-advanced (1255ms)
      1254.601ms
    ✓ Inserting 5000 Records with feathers-mongoose (2475ms)
      2475.524ms
    ✓ Inserting 5000 Records with feathers-mongoose-advanced (1101ms)
      1100.355ms
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
