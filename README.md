# Ticket-central

### Test User Accounts
email: dev01@test.com<br />
password: Password3!

email: dev02@test.com<br />
password: Password3!

### Running application (windows)
Requirements: Docker v19.03.5, docker-compose 1.25.4<br />
Linux users: might need to prefix docker commands with `sudo`

1) ### `git clone https://github.com/mahsan3/ticket-central.git`
2) ### Relative to the root project directory run `docker-compose build`
3) ### `docker-compose up -d`
4) ### `docker ps -a` when all services are running / healthy go to `localhost` in your browser

### Notes
1) Only mobile view is supported
2) Url must be `localhost`
3) Ports 3306 and 3001 should not be in use