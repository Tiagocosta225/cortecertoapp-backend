-- Criar extensões úteis
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "unaccent";

-- Criar database de aplicação (se não existir)
SELECT 'CREATE DATABASE ' || :'POSTGRES_DB'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = :'POSTGRES_DB')\gexec

-- Conectar ao database da aplicação
\c :POSTGRES_DB

-- Criar schema da aplicação
CREATE SCHEMA IF NOT EXISTS app_schema;

-- Criar usuário específico da aplicação
DO $$ 
BEGIN
   IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'app_user') THEN
      CREATE ROLE app_user LOGIN PASSWORD 'app_password_secure';
   END IF;
END
$$;

-- Conceder permissões
GRANT CONNECT ON DATABASE :POSTGRES_DB TO app_user;
GRANT USAGE ON SCHEMA app_schema TO app_user;
GRANT CREATE ON SCHEMA app_schema TO app_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA app_schema TO app_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA app_schema TO app_user;

-- Tabela de exemplo (remova se não precisar)
CREATE TABLE IF NOT EXISTS app_schema.users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_users_email ON app_schema.users(email);
CREATE INDEX IF NOT EXISTS idx_users_created_at ON app_schema.users(created_at);

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION app_schema.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para updated_at
DROP TRIGGER IF EXISTS update_users_updated_at ON app_schema.users;
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON app_schema.users
    FOR EACH ROW
    EXECUTE FUNCTION app_schema.update_updated_at_column();
