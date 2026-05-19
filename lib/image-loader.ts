export default function myImageLoader({ src }: { src: string }) {
  if (src.startsWith('http')) return src;
  return src.startsWith('/') ? src : `/${src}`;
}
