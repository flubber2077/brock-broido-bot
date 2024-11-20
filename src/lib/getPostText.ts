import posts from '../../res/posts.json';
import { RUN_NUMBER } from './constants';

const getPostText = (): string => {
  if(!RUN_NUMBER) throw new Error('run number not working');
  return posts[(parseInt(RUN_NUMBER) - 1) % posts.length] as string;
};

export default getPostText;