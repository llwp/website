#!/bin/bash

# Build sources for docs application
cd ./docs || exit
npm install --force
npm run build

# Build sources for landing application
cd ../www || exit
npm install --force
npm run build
npm run export

# Build sources for marketplace application
cd ../marketplace || exit
npm install --force
npm run build
npm run export
