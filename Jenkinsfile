pipeline {
    agent any

    environment {
        CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cache/Cypress"
    }

    tools {
        nodejs "NodeJS 18" // Pastikan sudah setup di Jenkins Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/ismiazis96/automation-cucumber.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci' // Lebih cepat daripada `npm install` untuk CI
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx cypress run'
            }
        }

        stage('Archive Report') {
            steps {
                // Opsional: sesuaikan ini kalau pakai reporter seperti mochawesome
                archiveArtifacts artifacts: 'cypress/reports/**', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            junit 'cypress/reports/**/*.xml' // jika generate hasil test dalam format JUnit
        }
    }
}
