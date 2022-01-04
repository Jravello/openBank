import { isUndefined } from 'underscore';

export interface Responses {
  serverResponse: string;
  response?: number | object | string | Array<number | object | string>;
  errorIs?: string;
}

export const ServerResponses = {
  IS_LIVE_200: (
    outResponse?: number | object | string | Array<number | object | string>
  ): Responses => {
    if (isUndefined(outResponse)) {
      console.log('llegue');
      return { serverResponse: 'Servidor Corriendo' };
    } else {
      return { serverResponse: 'Servidor Corriendo', response: outResponse };
    }
  },
  OK_200: (outResponse?: number | object | string | Array<number | object | string>): Responses => {
    if (isUndefined(outResponse)) {
      return { serverResponse: 'Solicitud Exitosa' };
    } else {
      return { serverResponse: 'Solicitud Exitosa', response: outResponse };
    }
  },
  CREATED_201: (
    outResponse?: number | object | string | Array<number | object | string>
  ): Responses => {
    if (isUndefined(outResponse)) {
      return { serverResponse: 'Guardado Exitoso' };
    } else {
      return { serverResponse: 'Guardado Exitoso', response: outResponse };
    }
  },
  CREATED_TOKEN_201: (
    outResponse: number | object | string | Array<number | object | string>
  ): Responses => {
    return { serverResponse: 'Guardado Exitoso', response: outResponse };
  },
  NO_CONTENT_204: (
    outResponse?: number | object | string | Array<number | object | string>
  ): Responses => {
    if (isUndefined(outResponse)) {
      return { serverResponse: 'Solicitud Exitosa sin respuesta' };
    } else {
      return {
        serverResponse: 'Solicitud Exitosa sin respuesta',
        response: outResponse,
      };
    }
  },
  ERROR_REQUEST_400: (errorIs?: string): Responses => {
    if (isUndefined(errorIs)) {
      return { serverResponse: 'Porfavor revisar sintaxis de la solicitud' };
    } else {
      return {
        serverResponse: 'Porfavor revisar sintaxis de la solicitud',
        errorIs: errorIs,
      };
    }
  },
  ERROR_UNAUTHORIZED_401: (
    outResponse?: number | object | string | Array<number | object | string>
  ): Responses => {
    if (isUndefined(outResponse)) {
      return {
        serverResponse: 'Usuario no autorizado para realizar esta solicitud',
      };
    } else {
      return {
        serverResponse: 'Porfavor inicie sesion antes de hacer esta solicitud',
        response: outResponse,
      };
    }
  },
  ERROR_FORBIDDEN_403: (
    outResponse?: number | object | string | Array<number | object | string>
  ): Responses => {
    if (isUndefined(outResponse)) {
      return {
        serverResponse: 'Usted no tiene los permisos necesarios para hacer esta solicitud',
      };
    } else {
      return {
        serverResponse: 'Usted no tiene los permisos necesarios para hacer esta solicitud',
        response: outResponse,
      };
    }
  },
  ERROR_NOT_FOUND_404: (
    outResponse?: number | object | string | Array<number | object | string>
  ): Responses => {
    if (isUndefined(outResponse)) {
      return { serverResponse: 'El servidor no pudo encontrar lo solicitado' };
    } else {
      return {
        serverResponse: 'El servidor no pudo encontrar lo solicitado',
        response: outResponse,
      };
    }
  },
  ERROR_TOO_MANY_REQUEST_429: (
    outResponse?: number | object | string | Array<number | object | string>
  ): Responses => {
    if (isUndefined(outResponse)) {
      return {
        serverResponse: 'Se han realizado demasiadas llamadas al servidor',
      };
    } else {
      return {
        serverResponse: 'Se han realizado demasiadas llamadas al servidor',
        response: outResponse,
      };
    }
  },
  ERROR_INTERNAL_SERVER_500: (errorIs?: string): Responses => {
    if (isUndefined(errorIs)) {
      return { serverResponse: 'Error interno del servidor' };
    } else {
      return { serverResponse: 'Error interno del servidor', errorIs: errorIs };
    }
  },
};

export const enum Status {
  OK_200 = 200,
  CREATED_201 = 201,
  NO_CONTENT_204 = 204,
  ERROR_REQUEST_400 = 400,
  ERROR_UNAUTHORIZED_401 = 401,
  ERROR_FORBIDDEN_403 = 403,
  ERROR_NOT_FOUND_404 = 404,
  ERROR_TOO_MANY_REQUEST_429 = 429,
  ERROR_INTERNAL_SERVER_500 = 500,
}
