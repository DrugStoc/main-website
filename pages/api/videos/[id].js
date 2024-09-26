export default function handler(req, res) {
  const videos = [
    {
      id: 1,
      title: 'Strategies for Business Resilience in an Inflated Economy',
      videoTitle: 'Harnessing Data for Decision Making',
      date: 'May 25, 2023 at 10:00 AM',
      featured: [
        {
          id: 'rqkd131c',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727287875/Speaker1_e0ogqn.png',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          videosCount: '5 videos',
          articlesCount: '3 articles',
          duration: '8 hours',
        },
        {
          id: 'iedn29db',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727295780/speaker2_b3iccw.png',
          title: 'Leading Trends in Pharmacy Inventory Management',
          videosCount: '5 videos',
          articlesCount: '3 articles',
          duration: '8 hours',
        },
        {
          id: 'h2320xsd',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727295858/speaker3_umpkxb.png',
          title: 'Advancing Financial Literacy in Healthcare Business',
          videosCount: '5 videos',
          articlesCount: '3 articles',
          duration: '8 hours',
        },
      ],
    },
    {
      id: 2,
      title: 'Strategies for Business Resilience in an Inflated Economy',
      videoTitle: 'Harnessing Data for Decision Making',
      featured: [
        {
          id: 'dsa9298da',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727287875/Speaker1_e0ogqn.png',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          videosCount: '5 videos',
          articlesCount: '3 articles',
          duration: '8 hours',
        },
        {
          id: 'dsnc930m',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727295780/speaker2_b3iccw.png',
          title: 'Leading Trends in Pharmacy Inventory Management',
          videosCount: '5 videos',
          articlesCount: '3 articles',
          duration: '8 hours',
        },
        {
          id: '8dns8nff',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727295858/speaker3_umpkxb.png',
          title: 'Advancing Financial Literacy in Healthcare Business',
          videosCount: '5 videos',
          articlesCount: '3 articles',
          duration: '8 hours',
        },
      ],
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 3,
      title: 'Strategies for Business Resilience in an Inflated Economy',
      videoTitle: 'Harnessing Data for Decision Making',
      featured: [
        {
          id: '2deks0df',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727287875/Speaker1_e0ogqn.png',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          videosCount: '5 videos',
          articlesCount: '3 articles',
          duration: '8 hours',
        },
        {
          id: '0klhwf89',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727295780/speaker2_b3iccw.png',
          title: 'Leading Trends in Pharmacy Inventory Management',
          videosCount: '5 videos',
          articlesCount: '3 articles',
          duration: '8 hours',
        },
        {
          id: 'zcjwkv8i2',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727295858/speaker3_umpkxb.png',
          title: 'Advancing Financial Literacy in Healthcare Business',
          videosCount: '5 videos',
          articlesCount: '3 articles',
          duration: '8 hours',
        },
      ],
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 4,
      title: 'Strategies for Business Resilience in an Inflated Economy',
      videoTitle: 'Harnessing Data for Decision Making',
      featured: [
        {
          id: 'jhik23rs',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727287875/Speaker1_e0ogqn.png',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          videosCount: '5 videos',
          articlesCount: '3 articles',
          duration: '8 hours',
        },
        {
          id: 'njvisld9',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727295780/speaker2_b3iccw.png',
          title: 'Leading Trends in Pharmacy Inventory Management',
          videosCount: '5 videos',
          articlesCount: '3 articles',
          duration: '8 hours',
        },
        {
          id: '1w3053chs',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727295858/speaker3_umpkxb.png',
          title: 'Advancing Financial Literacy in Healthcare Business',
          videosCount: '5 videos',
          articlesCount: '3 articles',
          duration: '8 hours',
        },
      ],
      date: 'May 25, 2023 at 10:00 AM',
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
