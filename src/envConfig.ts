import { reWrite } from './helpers/reWrite/reWrite';

const CORS_ALLOW_ORIGIN = process.env.CORS_ALLOW_ORIGIN || '*';
const CORS_METHODS = process.env.CORS_METHODS || 'POST, GET, PUT, DELETE, OPTIONS';
const CORS_ALLOWED_HEADERS =
  process.env.CORS_ALLOWED_HEADERS ||
  'Origin, Content-Type, Accept, Authorization, Response-Type, Secret';
const CORS_EXPOSED_HEADERS = process.env.CORS_EXPOSED_HEADERS || 'Content-Range, X-Content-Range';
const CORS_CREDENTIALS = process.env.CORS_CREDENTIALS || false;
const CORS_MAX_AGE = process.env.CORS_MAX_AGE || 3600;
const CORS_PRE_FLIGHT_CONTINUE = process.env.CORS_PRE_FLIGHT_CONTINUE || false;
const CORS_OPTIONS_SUCCESS_STATUS = process.env.CORS_OPTIONS_SUCCESS_STATUS || 200;

export const corsOptions = {
  origin: String(CORS_ALLOW_ORIGIN),
  methods: String(CORS_METHODS),
  allowedHeaders: String(CORS_ALLOWED_HEADERS),
  exposedHeaders: String(CORS_EXPOSED_HEADERS),
  credentials: Boolean(CORS_CREDENTIALS),
  maxAge: Number(CORS_MAX_AGE),
  preflightContinue: Boolean(CORS_PRE_FLIGHT_CONTINUE),
  optionsSuccessStatus: Number(CORS_OPTIONS_SUCCESS_STATUS),
};

export const KEY = reWrite(process.env.KEY || '');
export const DATABASE_URI = process.env.DATABASE_URI || '';
export const SECRET = reWrite(process.env.SECRET || 'SECRET');

export const PORT = process.env.PORT || 5000;
