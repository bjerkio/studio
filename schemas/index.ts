import { address } from './objects/address';
import { basicBlockContent } from './objects/basic-block-content';
import { blockContent } from './objects/block-content';
import { link } from './objects/link';
import { privacyOptions } from './objects/privacy-options';
import { organization } from './organization';
import { post } from './post';
import { project } from './project';
import { technology } from './technology';

export const schemaTypes = [
  post,
  project,
  organization,
  address,
  link,
  technology,
  basicBlockContent,
  blockContent,
  privacyOptions,
];
