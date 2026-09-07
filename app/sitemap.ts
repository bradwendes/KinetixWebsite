import type { MetadataRoute } from 'next';
const routes=['','/performance','/event-support','/consultancy','/showreel','/about','/contact','/privacy'];
export default function sitemap():MetadataRoute.Sitemap{return routes.map((route)=>({url:`https://teamkinetix.co.uk${route}`,lastModified:new Date('2026-09-07'),changeFrequency:route===''?'monthly':'yearly',priority:route===''?1:route==='/contact'?0.9:0.8}))}
