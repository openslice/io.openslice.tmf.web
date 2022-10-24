/* tslint:disable */
import { InputStream } from './input-stream';
export interface ByteArrayResource {
  byteArray?: string;
  description?: string;
  file?: Blob;
  filename?: string;
  inputStream?: InputStream;
  open?: boolean;
  readable?: boolean;
  uri?: string;
  url?: string;
}
