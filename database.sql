CREATE DATABASE discussion_board_db;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- --------------------------------------------------------

CREATE TABLE IF NOT EXISTS users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL UNIQUE,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    user_created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    user_updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    user_deleted_at TIMESTAMP WITH TIME ZONE
);


-- --------------------------------------------------------

INSERT INTO users (user_name, user_email, user_password) VALUES ('brian', 'brff192@gmail.com', 'NFQW4PxBqFpj94QaNTpV2O1lMaHAdZEVV5PnnA9OhoU');