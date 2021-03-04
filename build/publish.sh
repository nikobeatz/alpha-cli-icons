#!/usr/bin/env bash

rm -rf publish
mkdir publish
cp -r {icons,components,package.json} publish
cd publish
npm publish

echo "Publishing package to registry..."
