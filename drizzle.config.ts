import { type Config } from 'drizzle-kit'

export default {
  schema: './schema/*.ts',
  out: './migrations',
  driver: 'mysql2',
  verbose: true,
  dbCredentials: {
    uri: 'mysql://root:@localhost:3306/testDb',
  },
  tablesFilter: ['*'],
} satisfies Config