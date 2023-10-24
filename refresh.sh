#!/bin/bash
#
# Pull and deploy latest changes for app
rm -r ./build
git pull
npm run build