#!/bin/bash

# docker run -p 3000:3000 -p 3001:3001 -v "$(pwd)"/src:/usr/src/app/src -d  mthomas/node-api
docker run -p 8888:8888 mthomas/node-api