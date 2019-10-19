#!/usr/bin/env bash

NEW_FILES=`git diff --name-only HEAD master | egrep 'wpisy/*'`

for file in $NEW_FILES; do
    echo "../$file" > path.in

    node -r esm check.js < path.in
done