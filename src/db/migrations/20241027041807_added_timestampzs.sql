-- migrate:up

SET timezone = 'Asia/Manila';

ALTER TABLE users
ADD COLUMN created_at timestamptz DEFAULT now(),
ADD COLUMN updated_at timestamptz;

-- migrate:down

ALTER TABLE users DROP COLUMN created_at, DROP COLUMN updated_at;