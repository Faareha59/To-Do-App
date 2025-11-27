pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
        IMAGE_NAME = "faareharaza/todo-app"
    }

    stages {

        stage('Pull Code from GitHub') {
            steps {
                echo "Pulling source code..."
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Simulating Docker build..."
                echo "docker build -t ${IMAGE_NAME}:latest ."
            }
        }

        stage('Login to Docker Hub') {
            steps {
                echo "Simulating Docker login..."
                echo "docker login -u ${DOCKERHUB_CREDENTIALS_USR} -p ******"
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                echo "Simulating Docker push..."
                echo "docker push ${IMAGE_NAME}:latest"
            }
        }
    }

    post {
        success {
            echo "Pipeline executed successfully!"
        }
        failure {
            echo "Pipeline failed."
        }
    }
}
