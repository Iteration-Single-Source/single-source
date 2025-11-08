import { Pool } from 'pg';
import type { QueryResult } from 'pg';
import 'dotenv/config';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
export default {
  query: (text: string, params: any[]): Promise<QueryResult<any>> => {
    return pool.query(text, params);
  },
};
