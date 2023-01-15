include .env

up:
	docker-compose -p ${PROJECT_NAME} up

build:
	docker-compose -p ${PROJECT_NAME} up --build

down:
	docker-compose -p ${PROJECT_NAME} down

exec-container:
	docker-compose -p ${PROJECT_NAME} exec ${SERVICE_NAME_APP} sh