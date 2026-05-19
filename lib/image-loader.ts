export default function myImageLoader({ src }: { src: string }) {
  if (src.startsWith('http')) return src;
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/arcobau' : '';
  return `${basePath}${src.startsWith('/') ? '' : '/'}${src}`;
}
