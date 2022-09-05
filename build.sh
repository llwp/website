#!/bin/bash

set -e

# Build sources for landing application
cd wwww
npm run build
npm run export

# Build sources for marketplace application
cd ../marketplace
npm run build
npm run export

# Build sources for docs application
cd ../docs
npm run build
