import { fetcher } from '../services/api';
import type { Post } from './types';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || '/api';

export async function getPosts(): Promise<Post[]> {
  return fetcher(`${API_BASE}/posts`);
}

export async function getPost(id: string): Promise<Post> {
  return fetcher(`${API_BASE}/posts/${id}`);
}

export default { getPosts, getPost };
