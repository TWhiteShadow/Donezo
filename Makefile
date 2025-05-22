up : 
	yarn dev --host

update : 
	yarn 

dcu:
	docker compose up -d
	@echo "App running at \033[32mhttp://localhost:5173\033[0m"