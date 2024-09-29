export default function handler(req, res) {
  const slugify = text => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-');
  };

  const videos = [
    {
      id: 'rqkd131c',
      imgSrc:
        'https://res.cloudinary.com/bizstak/image/upload/v1727287875/Speaker1_e0ogqn.png',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videosCount: '2 videos',
      articlesCount: '1 articles',
      duration: '8 hours',
    },
    {
      id: 'iedn29db',
      imgSrc:
        'https://res.cloudinary.com/bizstak/image/upload/v1727295780/speaker2_b3iccw.png',
      title: 'Leading Trends in Pharmacy Inventory Management',
      slug: slugify('Leading Trends in Pharmacy Inventory Management'),
      videosCount: '5 videos',
      articlesCount: '3 articles',
      duration: '8 hours',
    },
    {
      id: 'iedn29db',
      imgSrc:
        'https://res.cloudinary.com/bizstak/image/upload/v1727295780/speaker2_b3iccw.png',
      title: 'Leading Trends in Pharmacy Inventory Management',
      slug: slugify('Leading Trends in Pharmacy Inventory Management'),
      videosCount: '5 videos',
      articlesCount: '3 articles',
      duration: '8 hours',
    },
    {
      id: 'dsa9298',
      imgSrc:
        'https://res.cloudinary.com/bizstak/image/upload/v1727287875/Speaker1_e0ogqn.png',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videosCount: '1 videos',
      articlesCount: '1 articles',
      duration: '8 hours',
    },
    {
      id: 'dsnc93',
      imgSrc:
        'https://res.cloudinary.com/bizstak/image/upload/v1727295780/speaker2_b3iccw.png',
      title: 'Leading Trends in Pharmacy Inventory Management',
      slug: slugify('Leading Trends in Pharmacy Inventory Management'),
      videosCount: '1 videos',
      articlesCount: '1 articles',
      duration: '8 hours',
    },
    {
      id: '8dns8nff',
      imgSrc:
        'https://res.cloudinary.com/bizstak/image/upload/v1727295858/speaker3_umpkxb.png',
      title: 'Advancing Financial Literacy in Healthcare Business',
      slug: slugify('Advancing Financial Literacy in Healthcare Business'),
      videosCount: '2 videos',
      articlesCount: '1 articles',
      duration: '8 hours',
    },
    {
      id: '2deks0df',
      imgSrc:
        'https://res.cloudinary.com/bizstak/image/upload/v1727287875/Speaker1_e0ogqn.png',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videosCount: '2 videos',
      articlesCount: '1 articles',
      duration: '8 hours',
    },
    {
      id: '0klhwf89',
      imgSrc:
        'https://res.cloudinary.com/bizstak/image/upload/v1727295780/speaker2_b3iccw.png',
      title: 'Leading Trends in Pharmacy Inventory Management',
      slug: slugify('Leading Trends in Pharmacy Inventory Management'),
      videosCount: '2 videos',
      articlesCount: '1 articles',
      duration: '8 hours',
    },
    {
      id: 'zcjwkv8i2',
      imgSrc:
        'https://res.cloudinary.com/bizstak/image/upload/v1727295858/speaker3_umpkxb.png',
      title: 'Advancing Financial Literacy in Healthcare Business',
      slug: slugify('Advancing Financial Literacy in Healthcare Business'),
      videosCount: '2 videos',
      articlesCount: '1 articles',
      duration: '8 hours',
    },
    {
      id: 'jhik23rs',
      imgSrc:
        'https://res.cloudinary.com/bizstak/image/upload/v1727287875/Speaker1_e0ogqn.png',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videosCount: '1 videos',
      articlesCount: '1 articles',
      duration: '8 hours',
    },
    {
      id: 'njvisld9',
      imgSrc:
        'https://res.cloudinary.com/bizstak/image/upload/v1727295780/speaker2_b3iccw.png',
      title: 'Leading Trends in Pharmacy Inventory Management',
      slug: slugify('Leading Trends in Pharmacy Inventory Management'),
      videosCount: '1 videos',
      articlesCount: '1 articles',
      duration: '8 hours',
    },
    {
      id: '1w3053chs',
      imgSrc:
        'https://res.cloudinary.com/bizstak/image/upload/v1727295858/speaker3_umpkxb.png',
      title: 'Advancing Financial Literacy in Healthcare Business',
      slug: slugify('Advancing Financial Literacy in Healthcare Business'),
      videosCount: '2 videos',
      articlesCount: '1 articles',
      duration: '8 hours',
    },
  ];

  const { id } = req.query;
  console.log(id);

  const video = videos.find(v => v.id === parseInt(id));

  if (video) {
    res.status(200).json(video);
  } else {
    res.status(404).json({ error: 'Video not found' });
  }
}
