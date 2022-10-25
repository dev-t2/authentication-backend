declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test' | 'provision';
    PORT: number;

    DATABASE_URL: string;

    ADMIN_NAME: string;
    ADMIN_PASSWORD: string;
  }
}
