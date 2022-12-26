# Smart-Mart-Backend

## Set-up for local deployment

Reqs: git, docker compose

Clone this repo: `git clone https://github.com/gmluqa/Smart-Mart-Backend.git`

Switch to the develop branch `git switch develop`

Populate node_modules `npm i`

Spin the docker containers `docker compose up`

Run `npx sequelize-cli db:create` to migrate the db to the MySQL container
