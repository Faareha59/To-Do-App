pipeline {
    agent any

    environment {
        DOCKERHUB = credentials('dockerhub-credentials-id')  
        IMAGE_NAME = "faareha59/todo-app"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Faareha59/To-Do-App.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}:latest .'
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                sh "echo ${DOCKERHUB_PSW} | docker login -u ${DOCKERHUB_USR} --password-stdin"
                sh "docker push ${IMAGE_NAME}:latest"
            }
        }
    }
}
