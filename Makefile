build:
	docker build -t my_node ./docker/node/
	docker pull mongo

vol:
	docker volume create dbdata

up:
	docker run -d -v dbdata:/data/db -p 27017:27017  --name mongodb mongo
	docker run -d -v $(PWD)/code/:/usr/app --link mongodb:db --name node1 -p 3000:3000 my_node

shnode:
	docker exec -it --user="1000" node1 bash

shmongo:
	docker exec -it mongodb bash

clear:
	docker stop node1 && docker rm node1 && docker stop mongodb && docker rm mongodb