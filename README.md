### Prerequisites

- Docker
  - [General install](https://docs.docker.com/get-docker/)
  - [homebrew](https://formulae.brew.sh/cask/docker)

- yarn
  - [General install](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
  - [homebrew](https://formulae.brew.sh/formula/yarn)

### Getting Started

To bring up the environment, perform the following steps:

1. Bring up the MySQL database

    ```bash
    # In the project root directory
    docker compose up
    # Exposes database on port 3306
    ```

2. Bring up express server in development mode

    ```bash
    # In a separate terminal session
    yarn dev
    # Exposes express app on port 8889
    ```
