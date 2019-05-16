#!/bin/bash
docker-compose build
docker-compose up

docker stop mywebsite
docker stop mongodb
