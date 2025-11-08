import { Pool } from 'pg';
import type { QueryResult } from 'pg';

const PG_URI =
  'postgresql://postgres.wbtmvjugltbpqvgrvtrt:cNidkazdoLqTic3N@aws-1-us-east-1.pooler.supabase.com:6543/postgres';

const pool = new Pool({
  connectionString: PG_URI,
});

export default {
  query: (text: string, params: any[]): Promise<QueryResult<any>> => {
    return pool.query(text, params);
  },
};
