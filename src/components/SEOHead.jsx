import React, { useEffect } from 'react'

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData
}) => {
  const defaultTitle = 'Carolina Renew - Professional painting and remodeling in Charlotte, NC'
  const defaultDescription = 'Carolina Renew provides quality interior and exterior painting, kitchen and bathroom remodeling in Charlotte and surrounding areas. Free estimates, quality guarantee.'
  const defaultKeywords = 'painting, remodeling, Charlotte, North Carolina, painters, renovation, interior, exterior, kitchen, bathroom'

  const finalTitle = title ? `${title} | Carolina Renew` : defaultTitle
  const finalDescription = description || defaultDescription
  const finalKeywords = keywords || defaultKeywords

  useEffect(() => {
    // Update document title
    document.title = finalTitle
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', finalDescription)
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      metaDescription.content = finalDescription
      document.head.appendChild(metaDescription)
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', finalKeywords)
    } else {
      metaKeywords = document.createElement('meta')
      metaKeywords.name = 'keywords'
      metaKeywords.content = finalKeywords
      document.head.appendChild(metaKeywords)
    }
    
    // Add structured data if provided
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]')
      if (script) {
        script.textContent = JSON.stringify(structuredData)
      } else {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.textContent = JSON.stringify(structuredData)
        document.head.appendChild(script)
      }
    }
  }, [finalTitle, finalDescription, finalKeywords, structuredData])

  return null
}

export default SEOHead

