/**
 * Utility helpers for Astro pages
 */

/**
 * Format a date to locale string
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Derive URL slug from a Content Layer entry id
 */
export function getSlug(entry: { id: string }): string {
  return entry.id.replace(/\.mdx$/, '');
}

/**
 * Calculate reading time for content
 */
export function readingTime(content: string): string {
  const wordsPerMinute = 200;
  // Strip markdown syntax before counting words
  const plain = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]+`/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#*>_\-\|]/g, '')
    .trim();
  const words = plain.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min de lectura`;
}