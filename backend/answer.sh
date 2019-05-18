#! /bin/bash

# Load an answer into the db
curl -X POST -H 'Content-Type: application/json' -d '{
  "answer": "Just spread butter on the bread, and that is it."
}' localhost:8081/answer/1