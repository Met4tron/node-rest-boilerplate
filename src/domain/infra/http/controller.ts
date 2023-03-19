import { Request } from './request';
import { HttpResponse } from './response';

export interface Controller<T = any> {
  handle(request: Request): Promise<HttpResponse>;
}