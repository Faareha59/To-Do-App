pipeline {
  agent any

  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials-id')  // set this in Jenkins credentials
    IMAGE_NAME = "faareha59/todo-app"                              // adjust as you like
    IMAGE_TAG  = "latest"
  }

  stages {
    stage('Checkout from GitHub') {
      steps {
        git url: 'https://github.com/Faareha59/To-Do-App.git', branch: 'main'
      }
    }

    stage('Install & Build React App') {
      steps {
        // install dependencies and build
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Build Docker Image') {
      steps {
        // build Docker image
        sh """
          docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .
        """
      }
    }

    stage('Login & Push to Docker Hub') {
      steps {
        script {
          sh "echo \$DOCKERHUB_CREDENTIALS_PSW | docker login -u \$DOCKERHUB_CREDENTIALS_USR --password-stdin"
          sh "docker push ${IMAGE_NAME}:${IMAGE_TAG}"
        }
      }
    }
  }
}
