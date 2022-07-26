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

### Test

1. Create a car resource: *POST request to "http://localhost:8889/cars"*
```
{
  "vin": "WP1AC29P65LA91996",
  "licensePlateNumber": "111111",
  "registrationNumber": "555555",
  "registrationState": "CA",
  "registrationExpiration": "12/25/2024",
  "registrationName": "Tony Wen",
  "carValue": 100000,
  "currentMileage": 25000,
  "description": "Write your description here",
  "color": "black"
}
```
make, manufacturerName, model, modelYear values will be added from VIN decoding.

2. List all your car resources: *GET request to "http://localhost:8889/cars"*

3. Get your car by unique id: *GET request to "http://localhost:8889/cars/7dc542c9-c2b0-4a40-b220-5f2c9a5e70c1"*

4. Update your car resource: *PATCH request to "http://localhost:8889/cars/7dc542c9-c2b0-4a40-b220-5f2c9a5e70c1" with update request body*

5. Delete your car resource: *DELETE request to "http://localhost:8889/cars/7dc542c9-c2b0-4a40-b220-5f2c9a5e70c1"*