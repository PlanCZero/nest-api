CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE events (
  id INTEGER PRIMARY KEY,
  author_id INTEGER, -- no FK b/c ordering of disperate message types not guaranteed
  content TEXT NOT NULL
);

CREATE TABLE user_summary (
  user_id INTEGER PRIMARY KEY,
  favorite_words TEXT[] NOT NULL,
  event_count INTEGER NOT NULL
);