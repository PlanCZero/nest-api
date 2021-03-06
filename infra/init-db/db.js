const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "postgres",
});

const getUserById = async (id) => {
  const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
  return result.rows[0];
};

const upsertUser = async (user) => {
  await pool.query(
    `
    INSERT INTO users (id, name) VALUES ($1, $2)
    ON CONFLICT (id) DO UPDATE SET
      name = EXCLUDED.name
    `,
    [user.id, user.name]
  );
};

const getEventsByAuthorId = async (authorId) => {
  const result = await pool.query(`SELECT * FROM events WHERE author_id = $1`, [
    authorId,
  ]);
  return result.rows;
};

const upsertEvent = async (event) => {
  await pool.query(
    `
    INSERT INTO events (id, author_id, content) VALUES ($1, $2, $3)
    ON CONFLICT (id) DO UPDATE SET 
      author_id = EXCLUDED.author_id,
      content = EXCLUDED.content
    `,
    [event.id, event.authorId, event.content]
  );
};

const upsertUserSummary = async (userSummary) => {
  await pool.query(
    `
    INSERT INTO user_summary (user_id, favorite_words, event_count) VALUES ($1, $2, $3)
    ON CONFLICT (user_id) DO UPDATE SET 
      favorite_words = EXCLUDED.favorite_words,
      event_count = EXCLUDED.event_count
    `,
    [userSummary.userId, userSummary.favoriteWords, userSummary.eventCount]
  );
};

const closeDbConnections = async () => {
  await pool.end();
};

module.exports = {
  getUserById,
  upsertUser,
  getEventsByAuthorId,
  upsertEvent,
  upsertUserSummary,
  closeDbConnections,
};
