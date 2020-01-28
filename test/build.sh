#!/usr/bin/env bash

mkdir -p ../api/api
touch ../api/api/posts.json

node -r esm build.js

cp _headers ../api/_headers
