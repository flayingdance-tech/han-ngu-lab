import { podcastCatalogSchema, type PodcastCatalog } from '../lib/podcast';
import { releasePolicySchema } from './content-release';

export function publicPodcastRelease(input: unknown, policyInput: unknown): PodcastCatalog {
  const catalog = podcastCatalogSchema.parse(input), policy = releasePolicySchema.parse(policyInput);
  if (!policy.betaPublicationApproved || !policy.approvedAt || policy.musicDistribution === 'blocked') throw new Error('Podcast release awaits owner approval and music-distribution decision');
  if (!policy.podcastIds.length || policy.podcastIds.some(id => !catalog.episodes.some(ep => ep.id === id))) throw new Error('Podcast release IDs are incomplete or unknown');
  const episodes = catalog.episodes.filter(ep => policy.podcastIds.includes(ep.id));
  if (policy.musicDistribution === 'voice-only') {
    return podcastCatalogSchema.parse({ ...catalog, music: { title: 'Không nhạc nền', author: 'Hán Ngữ Lab', license: 'none', changes: 'Giữ nguyên file giọng đọc gốc; không phân phối nhạc nền.' }, episodes: episodes.map(ep => ({ ...ep, assets: { voice: ep.assets.voice, mix: ep.assets.voice } })) });
  }
  return { ...catalog, episodes, music:catalog.music.license==='owner-supplied'?{...catalog.music,rightsStatus:'owner-confirmed'}:catalog.music };
}
