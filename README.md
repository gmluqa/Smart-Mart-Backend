# Smart-Mart-Backend

## API good practices employed

- Not over-sharing DB info, only what is necesarry for the frontend
- Production API is using HTTPS to protect user JWT's
- HTTP status codes used in the correct context

## Set-up for local deployment/development

Reqs: git, docker compose

Clone this repo: `git clone https://github.com/gmluqa/Smart-Mart-Backend.git`

Switch to the develop branch `git switch develop`.

Populate node_modules `npm i`

Spin the docker container `docker compose up`

Run `npm run db:init` to auto-dump the SQL into the docker container.

Then in another terminal, run `node --watch index.js` to launch express
