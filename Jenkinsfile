pipeline {
    agent any // Menjalankan pipeline pada Jenkins agent mana pun

    environment {
        // Ganti dengan username Docker Hub Anda
        DOCKERHUB_USERNAME = 'mufassirrafi'
        // Ganti dengan nama image yang diinginkan
        IMAGE_NAME = "myapp"
        // Menggunakan Build_ID Jenkins sebagai tag, atau bisa juga 'latest'
        IMAGE_TAG = "${env.BUILD_ID}"
        // ID kredensial Docker Hub yang Anda buat di Jenkins
        DOCKER_CREDENTIAL_ID = 'dockerhub-creds'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/mufassir-h/myapp.git'
                echo "Repository cloned successfully."
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Pastikan Dockerfile ada di root repository
                    // Perintah ini akan membangun image Docker
                    docker.build("${DOCKERHUB_USERNAME}/${IMAGE_NAME}:${IMAGE_TAG}")
                    echo "Docker image built: ${DOCKERHUB_USERNAME}/${IMAGE_NAME}:${IMAGE_TAG}"
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    // Menggunakan kredensial Docker Hub yang disimpan di Jenkins
                    docker.withRegistry("https://registry.hub.docker.com", DOCKER_CREDENTIAL_ID) {
                        docker.image("${DOCKERHUB_USERNAME}/${IMAGE_NAME}:${IMAGE_TAG}").push()
                    }
                    echo "Docker image pushed to Docker Hub."
                }
            }
        }
    }

    post {
        always {
            // Memberikan informasi setelah pipeline selesai, berhasil atau gagal
            echo "Pipeline finished."
            // Opsional: Membersihkan workspace setelah selesai
            // cleanWs()
        }
        success {
            echo "Pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed! Check logs for errors."
        }
    }
}