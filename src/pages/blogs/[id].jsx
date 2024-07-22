import { useRouter } from 'next/router';
import Script from 'next/script';
import React from 'react';
import BlogDetailsMain from '../../components/blog-details';
import SEONew from '../../components/SEONew';
import useQueryGet from '../../hooks/useQuery';
import { Wrapper } from '../../layout';
import apiEndpoint from '../../services/apiEndpoint';

const blogPostingSchemaData = [
  {
    slug: 'top-10-indian-influencer-marketing-agencies-in-india',
    headline: 'Top 10 Indian Influencer Marketing Agencies in India',
    description:
      'In the modern age, influencer marketing has become a powerful tool for businesses to advertise their offerings. Although it might be difficult and time-consuming, top influencer marketing companies streamline this by matching companies with the ideal influencers. Here, we explore the top influencer marketing agencies in India capable of strengthening your business.',
    image:
      'https://storagedc.s3.ap-south-1.amazonaws.com/1719227947852-972587775-WhatsApp%20Image%202024-06-24%20at%204.15.25%20PM.jpeg',
    author: {
      '@type': 'Organization',
      name: 'Digital Cappuccino',
      url: 'https://www.digitalcappuccino.com/',
    },
    logo: {
      url: 'https://www.digitalcappuccino.com/assets/img/logo/new-logo-design-v1-old.png',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://www.digitalcappuccino.com/blogs/top-10-indian-influencer-marketing-agencies-in-india',
    },
  },
  {
    slug: 'best-social-media-marketing-company-in-gurgaon',
    headline: 'Best Social Media Marketing Company in Gurgaon',
    description:
      'If you want to revolutionise the way businesses connect with their audience, boost their online visibility, and turbocharge their sales, a killer social media campaign can tap into the channels your audience loves. They offer their expertise, strategies, tools, and experience for social media management.',
    image:
      'https://storagedc.s3.ap-south-1.amazonaws.com/1719919287076-48783669-1600-01.jpg',
    author: {
      '@type': 'Organization',
      name: 'Digital Cappuccino',
      url: 'https://www.digitalcappuccino.com/',
    },
    logo: {
      url: 'https://www.digitalcappuccino.com/assets/img/logo/new-logo-design-v1-old.png',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://www.digitalcappuccino.com/blogs/best-social-media-marketing-company-in-gurgaon',
    },
    datePublished: '2024-06-21',
  },
  {
    slug: 'seo-guide-2024',
    context: 'https://schema.org',
    type: 'BlogPosting',
    mainEntityOfPage: {
      type: 'WebPage',
      id: 'https://www.digitalcappuccino.com/blogs/seo-guide-2024',
    },
    headline: 'Unlock the Power of SEO: SEO Guide 2024',
    description:
      'Search Engine Optimisation (SEO) implementation helps in improved ranking on Google’s search pages. Since most online journeys start with a search engine, mastering SEO is essential for attracting traffic to your site.',
    image:
      'https://storagedc.s3.ap-south-1.amazonaws.com/1720161307155-981252335-WhatsApp%20Image%202024-07-05%20at%2010.28.35%20AM.jpeg',
    author: {
      type: 'Organization',
      name: 'Digital Cappuccino',
      url: 'https://www.digitalcappuccino.com/',
    },
    publisher: {
      type: 'Organization',
      name: 'Digital Cappuccino',
      logo: {
        type: 'ImageObject',
        url: 'https://www.digitalcappuccino.com/assets/img/logo/new-logo-design-v1-old.png',
      },
    },
    datePublished: '2024-07-04',
  },
  {
    slug: 'content-creation-in-digital-marketing',
    context: 'https://schema.org',
    type: 'BlogPosting',
    mainEntityOfPage: {
      type: 'WebPage',
      id: 'https://www.digitalcappuccino.com/blogs/content-creation-in-digital-marketing',
    },
    headline:
      'Content Creation in Digital Marketing: Unlocking the Power of Engaging Content',
    image:
      'https://storagedc.s3.ap-south-1.amazonaws.com/1720696051986-623699283-WhatsApp%20Image%202024-07-11%20at%202.32.44%20PM.jpeg',
    author: {
      type: 'Organization',
      name: 'Digital Cappuccino',
      url: 'https://www.digitalcappuccino.com/',
    },
    publisher: {
      type: 'Organization',
      name: 'Digital Cappuccino',
      logo: {
        type: 'ImageObject',
        url: 'https://www.digitalcappuccino.com/assets/img/logo/new-logo-design-v1-old.png',
      },
    },
    datePublished: '2024-07-11',
  },
];

const blogDetailFaqSchemaData = [
  {
    slug: 'top-10-indian-influencer-marketing-agencies-in-india',
    context: 'https://schema.org',
    type: 'FAQPage',
    mainEntity: [
      {
        type: 'Question',
        name: '1. How do you go about using influencers?',
        acceptedAnswer: {
          type: 'Answer',
          text: "Advertising your products or services to influencers' target audiences through partnerships is known as influencer marketing. Influencers offer content that highlights your company, which expands your audience.",
        },
      },
      {
        type: 'Question',
        name: '2. How might influencer marketing help my company?',
        acceptedAnswer: {
          type: 'Answer',
          text: "By using the influencer's audience, influencer marketing can raise brand exposure, drive website traffic, and hence improve sales.",
        },
      },
      {
        type: 'Question',
        name: '3. What makes an agency stand out from others across India?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'Every agency provides different strengths: individualised methods, large influencer networks, data-driven approaches, and open reporting.',
        },
      },
      {
        type: 'Question',
        name: '4. How do you choose whom to work with on a campaign?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'Data analytics helps agencies identify influencers whose audience makeup and involvement fit your brand.',
        },
      },
      {
        type: 'Question',
        name: '5. Which social media sites are covered?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'Most firms cover main sites including Instagram, Facebook, YouTube, LinkedIn, and others.',
        },
      },
      {
        type: 'Question',
        name: '6. How successful do influencer campaigns seem to be for a company?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'Metrics, including engagement rates, reach, impressions, conversions, and ROI, help one gauge success.',
        },
      },
      {
        type: 'Question',
        name: '7. Influencer marketing helps what kinds of companies?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'From fashion to beauty, technology to cuisine, travel, and more, influencer marketing benefits a broad spectrum of businesses.',
        },
      },
      {
        type: 'Question',
        name: '8. An influencer marketing campaign usually lasts for what period?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'Campaigns based on the objectives might last anything from a few weeks to several months.',
        },
      },
      {
        type: 'Question',
        name: "9. How might influencer material complement brand's values and messaging?",
        acceptedAnswer: {
          type: 'Answer',
          text: 'Agencies closely collaborate with influencers to guarantee material accurately captures the values and messaging of the brand.',
        },
      },
      {
        type: 'Question',
        name: '10. What expenses go along with influencer marketing campaigns?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'Factors including influencer reach, campaign length, and content type produced affect costs.',
        },
      },
    ],
  },
  {
    slug: 'best-social-media-marketing-company-in-gurgaon',
    context: 'https://schema.org',
    type: 'FAQPage',
    mainEntity: [
      {
        type: 'Question',
        name: 'Q1: What does social media marketing do?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'You can promote your products and services, create awareness, drive your website traffic and build a loyal community by writing content on famous social media apps that resonate with your target audience.',
        },
      },
      {
        type: 'Question',
        name: 'Q2: Can I ask a social media marketing agency to share their previous works?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'Most companies love to share their case studies, customer testimonials. You can directly ask the agency to share their portfolio as well.',
        },
      },
      {
        type: 'Question',
        name: 'Q3: Can a social media marketing agency help my small business?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'Yes, especially for small enterprises, an agency can bring a lot of customers by increasing the number of followers on social media. They can also drive more traffic to your website, ultimately enhancing your sales.',
        },
      },
      {
        type: 'Question',
        name: 'Q4: what social media platforms should I use for my business?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'It totally depends on your target audience and industry. Most clothing and luxury businesses love to be on Instagram and share updated content on a daily basis.',
        },
      },
      {
        type: 'Question',
        name: 'Q5: How much time will it take for an agency to show results for my business?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'It can vary from company to company, it can take months or even a year to get significant engagement and conversions for a long-term success.',
        },
      },
    ],
  },
  {
    slug: 'seo-guide-2024',
    context: 'https://schema.org',
    type: 'FAQPage',
    mainEntity: [
      {
        type: 'Question',
        name: 'If every company implements SEO strategies, how can I effectively optimise my website to improve its Google ranking?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'Effective SEO optimisation goes beyond basic strategies. Effective keyword optimisation provides authority and relevance to the search result per the search intent. Ranking for the right keyword will improve your Google rankings.',
        },
      },
      {
        type: 'Question',
        name: 'Is SEO enough for my website to rank on Google’s first page?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'SEO is foundational, but achieving and maintaining a first-page ranking requires a holistic approach. From creating high-quality content, earning backlinks from reputable sites, and optimising for user experience to regularly updating and improving your website.',
        },
      },
      {
        type: 'Question',
        name: 'Is it necessary to opt for SEO to increase traffic?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'Yes, SEO is essential for driving organic traffic to your website. Unlike paid advertising, SEO generates sustainable traffic over time, making it a valuable investment for long-term growth.',
        },
      },
      {
        type: 'Question',
        name: 'what are the typical costs of hiring an SEO agency for my company?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'Prices can vary drastically depending on the services you need, how tough the competition is for your keywords, and the level of expertise of the agency you’re eyeing.',
        },
      },
      {
        type: 'Question',
        name: 'Which type of companies will benefit the most?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'From E-commerce stores, local businesses, and service providers to B2B companies, all can increase brand awareness, attract targeted traffic, and boost conversions through effective SEO strategies.',
        },
      },
      {
        type: 'Question',
        name: 'How to look for leading SEO companies?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'When looking for a top SEO company, consider their track record, client testimonials, services offered, communication transparency, ethical practices, and ability to adapt to changing SEO landscapes for measurable results.',
        },
      },
    ],
  },
  {
    slug: 'content-creation-in-digital-marketing',
    context: 'https://schema.org',
    type: 'FAQPage',
    mainEntity: [
      {
        type: 'Question',
        name: 'Why should I focus on content creation?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'By building content, you are creating a foundation for a stronger business. It not only helps with brand awareness but also attracts your audience to generate valuable leads.',
        },
      },
      {
        type: 'Question',
        name: 'How often should I create and publish content?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'Try to publish at least one blog post per week, and later adjust your frequency as per your reports analysis.',
        },
      },
      {
        type: 'Question',
        name: 'What are some best practices for creating engaging content?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'Try to optimise your content for SEO, and create engaging content by understanding your audience.',
        },
      },
      {
        type: 'Question',
        name: 'How can I determine the effectiveness of my content?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'Analyse your content using analytics tools to track metrics. Tracking metrics such as traffic and engagement are good indicators.',
        },
      },
      {
        type: 'Question',
        name: 'What types of content work best for social media?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'You can use polls, quizzes, and live videos as they are more engaging and drive more interaction.',
        },
      },
      {
        type: 'Question',
        name: 'Can I repurpose content across different formats?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'Yes, you can repurpose your content to different social media channels and different formats for faster content creation.',
        },
      },
      {
        type: 'Question',
        name: 'What tools should I use for content planning?',
        acceptedAnswer: {
          type: 'Answer',
          text: 'Tools like BuzzSumo, AnswerThePublic, Google Trends, Trello, Asana, and CoSchedule are a good fit for content planning.',
        },
      },
    ],
  },
];

const BlogDynamicDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isPending, isError, error, isSuccess } = useQueryGet({
    apiEndpointUrl: `${apiEndpoint.BLOGS}/${id}`,
    queryKey: 'getBlogById',
  });
  if (isPending) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  if (isSuccess) {
    const blog = data?.data?.data ?? [];
    const blogDetailFaqSchema = blogDetailFaqSchemaData.filter(
      item => item.slug === blog.slug
    );

    const blogPostingSchema = blogPostingSchemaData.filter(
      item => item.slug === blog.slug
    );

    return (
      <Wrapper>
        <SEONew
          metaTitle={blog?.title ?? 'blog title'}
          metaDescription={blog?.description ?? ''}
          // meta={blog?.tags?.join(', ') ?? ''}
          canonical={`https://www.digitalcappuccino.com/blogs/${
            blog?.slug ?? ''
          }`}
        />
        <BlogDetailsMain blog={blog} />

        {blogPostingSchema.length > 0
          ? blogPostingSchema.map(blogPostingItem => (
              <Script
                key={blogPostingItem.slug}
                id="structured-data-blog-posting"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BlogPosting',
                    mainEntityOfPage: {
                      '@type': 'WebPage',
                      '@id': blogPostingItem?.mainEntityOfPage['id'],
                    },
                    headline: blogPostingItem?.headline,
                    description: blogPostingItem?.description,
                    image: blogPostingItem?.image,
                    author: {
                      '@type': 'Organization',
                      name: 'Digital Cappuccino',
                      url: blogPostingItem?.author?.url,
                    },
                    publisher: {
                      '@type': 'Organization',
                      name: 'Digital Cappuccino',
                      logo: {
                        '@type': 'ImageObject',
                        url: blogPostingItem?.logo?.url,
                      },
                    },
                    datePublished:
                      blogPostingItem?.datePublished ?? '2024-06-21',
                    dateModified: '2024-07-02',
                  }),
                }}
              />
            ))
          : null}

        {blogDetailFaqSchema.length > 0
          ? blogDetailFaqSchema.map(item => (
              <Script
                key={item.slug}
                id="structured-data-blog-faq"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: item.mainEntity,
                  }),
                }}
              />
            ))
          : null}
      </Wrapper>
    );
  }
};

export default BlogDynamicDetails;
