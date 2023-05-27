import { address } from './objects/address';
import { blockContent } from './objects/block-content';
import { link } from './objects/link';
import { privacyOptions } from './objects/privacy-options';
import { organization } from './organization';
import { post } from './post';
import { project } from './project';

export const schemaTypes = [
  post,
  project,
  organization,
  address,
  link,
  blockContent,
  privacyOptions,
];
