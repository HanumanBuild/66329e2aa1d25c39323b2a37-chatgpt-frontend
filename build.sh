#!/bin/bash
set -o errexit
export REACT_APP_CHATGPT_FRONTEND_URL=$CHATGPT_FRONTEND_URL
export REACT_APP_CHATGPT_BACKEND_URL=$CHATGPT_BACKEND_URL
npm install && npm run build