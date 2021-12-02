# Overview
This is the test challenge for side interview. The requirement is using apollo 
server to bootstrap a service with graphql as middle layer for returning filter
data with city param.

# Development
This section includes detail directions of how to deploy the code locally.

## Bootstrap your service
Please following the instructions below to bootstrap your local service:
1. Make sure you have node 14 install in your local machine and yarn package management.
2. Run `yarn install` to install all needed dependencies.
3. Run `yarn start` to run the server locally at `http://localhost:4000/graphql`
4. Once server is up running, we should see the log message `Listening on http://localhost:4000/graphql`
5. Now you can query the api with graphql. Here is an curl example:
```
    curl --location --request POST 'http://localhost:4000/graphql' \
    --header 'content-type: application/json' \
    --header 'Authorization: Bearer 676cfd34-e706-4cce-87ca-97f947c43bd4' \
    --data-raw '{
        "query": "query { getProperties(city : \"Houston\") {listPrice} }"
    }'
```
6. you should expect to see data based on the city name given. All other 
   fields can be found under `./app/service/graphql/schema.js`
   
## Style checker
We use eslint to check all styles exclude tests
Please run `yarn eslint` and clean up all errors before uploading
   
## Test
Please run `yarn run test --passWithNoTests` to run all unit tests defined. There
are works to do for tests, but I used up 3 hours.

## About the design
Since the requirement is pretty straight forward, I checked the document of the
Apollo service and integrated the graphQl Schema includes Query into its config
and make the api call works based on the requirements. Most of the design follows
the official document of the Apollo service (Since I did not use this before.)

For Production code, we majorly need to set configurations up for different portals
and endpoints such as dev/stage/prod.

Also, bear token validation needs to be checked with 3-rd party package.