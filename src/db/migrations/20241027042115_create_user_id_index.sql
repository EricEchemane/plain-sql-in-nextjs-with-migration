-- migrate:up
CREATE INDEX IF NOT EXISTS user_id_index ON users (id);

-- migrate:down
DROP INDEX user_id_index;