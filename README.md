# Simple Docker App

This is a simple user profile application, built with pure JavaScript, CSS, Node.js, Express, and MongoDB, and containerized using Docker. 

The application allows you to create, edit, and delete user profiles, and switch between different color themes. The profiles are stored in a MongoDB database, and the application is served by a Node.js backend using the Express framework.

## Getting Started

### Prerequisites

- Docker: The application runs in Docker containers, so you need to have Docker installed on your machine.

### Installation

1. Clone the repo:

    ```
    git clone https://github.com/MPZ-00/simple-docker-app.git
    ```

2. Navigate to the project directory:

    ```
    cd simple-docker-app
    ```

3. Start the application:

    ```
    docker-compose up
    ```

The application should now be running at `http://localhost:3000`. You can also access the Mongo-Express web interface at `http://localhost:8081`.

## Usage

To use the application, navigate to `http://localhost:3000` in your web browser. Here, you can create a new user profile by clicking the 'New User' button, edit an existing profile by clicking the 'Edit' button, or delete a profile by clicking the 'Delete' button. 

You can also switch between different color themes using the 'Toggle Theme' button at the top of the page.

## Contributing

If you want to contribute to this project, feel free to submit a pull request. 

## License

This project is licensed under the ISC License. See the `LICENSE` file for more details.

## Contact

Martin Prätzlich - [Github](https://github.com/MPZ-00)

Project Link: [https://github.com/MPZ-00/simple-docker-app](https://github.com/MPZ-00/simple-docker-app)
