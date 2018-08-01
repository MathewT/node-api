#!/bin/bash

# docker run -p 3000:3000 -p 3001:3001 -v "$(pwd)"/src:/usr/src/app/src -d  mthomas/node-api

# curl -XPOST http://0.0.0.0:8888/api/reviews -d @mydata.txti

# curl -v -XPOST -H "Accept: application/json" -d {"first":"bob"} --url http://0.0.0.0:8888/api/reviews 
curl  -H "Content-Type: application/json" -d '{"id":"wrwoeuoweirwer"}' --url http://0.0.0.0:8888/api/reviews 
# curl  -XGET --url http://0.0.0.0:8888/api/version 