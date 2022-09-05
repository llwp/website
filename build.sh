#!/bin/bash

set -e

# Build sources for landing application
cd ./www
npm install
npm run build
npm run export

# Build sources for marketplace application
cd ../marketplace
npm install
npm run build
npm run export

# Build sources for docs application
cd ../docs
npm install
npm run build
