# SSOMA PRO

Starter empresarial para gestión SSOMA con dashboard e integración de IA.

## Local
1. Copia `.env.example` a `.env`.
2. Configura PostgreSQL y `DATABASE_URL`.
3. Ejecuta `npm install`.
4. Ejecuta `npx prisma db push`.
5. Ejecuta `npm run dev`.

## Railway
1. Crea un proyecto vacío y agrega PostgreSQL.
2. Agrega este repositorio como servicio.
3. En Variables del servicio web crea:
   `DATABASE_URL=${{Postgres.DATABASE_URL}}`
4. Agrega `OPENAI_API_KEY`, `OPENAI_MODEL`, `AUTH_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `UPLOAD_DIR=/data`.
5. Agrega un volumen montado en `/data`.
6. Despliega los cambios.

## Estado actual
Incluye login visual, dashboard responsive, módulos en navegación, gráficos, tablas, endpoint de salud y chat IA real mediante OpenAI Responses API. Autenticación, CRUD completos, permisos y carga de archivos se conectan en la siguiente fase.
