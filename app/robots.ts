import type { MetadataRoute } from 'next';
export default function robots():MetadataRoute.Robots{return{rules:{userAgent:'*',allow:'/'},sitemap:'https://teamkinetix.co.uk/sitemap.xml',host:'https://teamkinetix.co.uk'}}
