import posts from '../../res/posts.json';
import { RUN_NUMBER } from './constants';

const getPostText = (): string => {
  if (!RUN_NUMBER) throw new Error('run number not working');
  return repeatLoopArr(posts, parseInt(RUN_NUMBER) - 1);
};

// accesses array with modulo operator, so accesses loop around to the start
const repeatLoopArr = <T>(arr: T[], i: number): T => arr[i % posts.length] as T;

export default getPostText;
