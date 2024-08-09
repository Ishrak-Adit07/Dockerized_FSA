## Command Lines

### docker build -t client .
### docker run client
### docker run -p 5173:5173 client
### docker run -p 5173:5173 -v "$(pwd):/app" -v /app/node_modules client
### docker run -p 5173:5173 -v "$(pwd):/app" -v /app/node_modules -e CHOKIDAR_USEPOLLING=true client
### vite --host in package.json(Important)

### docker tag client ishrakadit/client
### docker push ishrakadit/client