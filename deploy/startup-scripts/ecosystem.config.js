module.exports = {
  apps: [
    {
      name: 'config-server',
      script: '/usr/bin/java',
      args: '-jar config-server.jar',
      cwd: '/opt/bookstore',
      interpreter: 'none',
      instances: '1',
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        CONFIG_ENCRYPT_KEY: 'changeme-local-dev-key',
        EUREKA_URL: 'http://localhost:8761/eureka'
      },
      error_file: '/var/log/pm2/config-server-error.log',
      out_file: '/var/log/pm2/config-server-out.log',
      log_file: '/var/log/pm2/config-server.log',
      time: true
    },
    {
      name: 'eureka-server',
      script: '/usr/bin/java',
      args: '-jar eureka-server.jar',
      cwd: '/opt/bookstore',
      interpreter: 'none',
      instances: '1',
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        EUREKA_URL: 'http://localhost:8761/eureka'
      },
      error_file: '/var/log/pm2/eureka-server-error.log',
      out_file: '/var/log/pm2/eureka-server-out.log',
      log_file: '/var/log/pm2/eureka-server.log',
      time: true
    },
    {
      name: 'api-gateway',
      script: '/usr/bin/java',
      args: '-jar api-gateway.jar',
      cwd: '/opt/bookstore',
      interpreter: 'none',
      instances: '1',
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        EUREKA_URL: 'http://localhost:8761/eureka',
        SPRING_CLOUD_GATEWAY_ROUTES_USER_SERVICE_URI: 'lb://USER-SERVICE',
        SPRING_CLOUD_GATEWAY_ROUTES_BOOK_SERVICE_URI: 'lb://BOOK-SERVICE',
        SPRING_CLOUD_GATEWAY_ROUTES_ORDER_SERVICE_URI: 'lb://ORDER-SERVICE'
      },
      error_file: '/var/log/pm2/api-gateway-error.log',
      out_file: '/var/log/pm2/api-gateway-out.log',
      log_file: '/var/log/pm2/api-gateway.log',
      time: true
    },
    {
      name: 'user-service',
      script: '/usr/bin/java',
      args: '-jar user-service.jar',
      cwd: '/opt/bookstore',
      interpreter: 'none',
      instances: '1',
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        EUREKA_URL: 'http://localhost:8761/eureka',
        MYSQL_HOST: '10.176.0.3',
        MYSQL_PORT: '3306',
        MYSQL_USERNAME: 'bookstore_app',
        MYSQL_PASSWORD: 'YourStrongPassword123!',
        MYSQL_USER_DB: 'userdb'
      },
      error_file: '/var/log/pm2/user-service-error.log',
      out_file: '/var/log/pm2/user-service-out.log',
      log_file: '/var/log/pm2/user-service.log',
      time: true
    },
    {
      name: 'book-service',
      script: '/usr/bin/java',
      args: '-jar book-service.jar',
      cwd: '/opt/bookstore',
      interpreter: 'none',
      instances: '1',
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        EUREKA_URL: 'http://localhost:8761/eureka',
        MONGODB_URI: 'mongodb+srv://kasunlakshan3368:OlBYdcOQtTCCpwrV@cluster0webap.ssiwmke.mongodb.net/bookdb?retryWrites=true&w=majority&appName=Cluster0webap',
        GCS_BUCKET_NAME: 'bookstore-covers-bucket'
      },
      error_file: '/var/log/pm2/book-service-error.log',
      out_file: '/var/log/pm2/book-service-out.log',
      log_file: '/var/log/pm2/book-service.log',
      time: true
    },
    {
      name: 'order-service',
      script: '/usr/bin/java',
      args: '-jar order-service.jar',
      cwd: '/opt/bookstore',
      interpreter: 'none',
      instances: '1',
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        EUREKA_URL: 'http://localhost:8761/eureka',
        MYSQL_HOST: '10.176.0.3',
        MYSQL_PORT: '3306',
        MYSQL_USERNAME: 'bookstore_app',
        MYSQL_PASSWORD: 'YourStrongPassword123!',
        MYSQL_ORDER_DB: 'orderdb'
      },
      error_file: '/var/log/pm2/order-service-error.log',
      out_file: '/var/log/pm2/order-service-out.log',
      log_file: '/var/log/pm2/order-service.log',
      time: true
    }
  ]
};