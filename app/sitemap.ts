import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lineixsstudio.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://lineixsstudio.com/#studio',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://lineixsstudio.com/start',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
  ]
}