import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function dropTable() {
	const data = await sql`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_type = 'BASE TABLE'
    AND table_schema = 'public'
    ORDER BY table_name;
  `;

	return data;
}

export async function GET() {
  try {
    return Response.json(await dropTable());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
