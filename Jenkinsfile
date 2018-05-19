@Library('cds-jenkinsfile-shared') _

node('docker') {
    def gitVars
    boolean jobSuccess = true

    try {

        nodeHelper()

        stage('Checkout Source') {
            gitVars = checkout scm
        }
        stage('Install Dependencies') {
            sh 'yarn install'
        }
        stage('Lint Source') {
            sh 'yarn lint'
        }
        stage('Build') {
            sh 'yarn package'
        }
        stage('Test') {
            sh 'yarn coverageReport'
        }

        coberturaHelper()

        stage('Deploy') {
            echo 'Skipping Deployment...'
            // sh 'yarn deploy'
        }
    } catch (e) {
        jobSuccess = false
        throw e
    } finally {
        slackHelper(jobSuccess, gitVars)
    }
}