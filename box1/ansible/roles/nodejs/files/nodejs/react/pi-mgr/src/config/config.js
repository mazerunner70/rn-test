import convict from 'convict';

const config = convict({
  env: {
    doc: 'The application environment',
    format: ['development'],
    default: 'development',
  },
})