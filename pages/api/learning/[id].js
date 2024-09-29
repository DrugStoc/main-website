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
      id: 1,
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      date: 'May 25, 2023 at 10:00 AM',
      featured: [
        {
          id: 'rqkd131c',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727287875/Speaker1_e0ogqn.png',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videos: ['dk3ds2'],
          articles: ['xji2n8'],
          duration: '8 hours',
        },
        {
          id: 'iedn29db',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727295780/speaker2_b3iccw.png',
          title: 'Leading Trends in Pharmacy Inventory Management',
          slug: slugify('Leading Trends in Pharmacy Inventory Management'),
          videos: ['dfs324', 'fj2sid'],
          articles: ['dgsdf4'],
          duration: '8 hours',
        },
        {
          id: 'h2320xsd',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727295858/speaker3_umpkxb.png',
          title: 'Advancing Financial Literacy in Healthcare Business',
          slug: slugify('Advancing Financial Literacy in Healthcare Business'),
          videos: ['dsk2nd', 'snwdk2'],
          articles: ['gksnvu', 'adsfv2'],
          duration: '8 hours',
        },
      ],
    },
    {
      id: 2,
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      featured: [
        {
          id: 'dsa9298da',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727287875/Speaker1_e0ogqn.png',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videos: ['cdf34j'],
          articles: ['df3fd3'],
          duration: '8 hours',
        },
        {
          id: 'dsnc930m',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727295780/speaker2_b3iccw.png',
          title: 'Leading Trends in Pharmacy Inventory Management',
          slug: slugify('Leading Trends in Pharmacy Inventory Management'),
          videos: ['ewew3d2'],
          articles: ['ve2rf54'],
          duration: '8 hours',
        },
        {
          id: '8dns8nff',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727295858/speaker3_umpkxb.png',
          title: 'Advancing Financial Literacy in Healthcare Business',
          slug: slugify('Advancing Financial Literacy in Healthcare Business'),
          videos: ['fvr4rh'],
          articles: ['vdjer43', 'dfbse3'],
          duration: '8 hours',
        },
      ],
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 3,
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      featured: [
        {
          id: '2deks0df',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727287875/Speaker1_e0ogqn.png',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videos: ['vfdf3f'],
          articles: ['gdqr3'],
          videosCount: '1 videos',
          articlesCount: '1 articles',
          duration: '8 hours',
        },
        {
          id: '0klhwf89',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727295780/speaker2_b3iccw.png',
          title: 'Leading Trends in Pharmacy Inventory Management',
          slug: slugify('Leading Trends in Pharmacy Inventory Management'),
          videos: ['vefdb34'],
          articles: ['bqerg3'],
          duration: '8 hours',
        },
        {
          id: 'zcjwkv8i2',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727295858/speaker3_umpkxb.png',
          title: 'Advancing Financial Literacy in Healthcare Business',
          slug: slugify('Advancing Financial Literacy in Healthcare Business'),
          videos: ['gmlw42'],
          articles: ['vnkj9r'],
          duration: '8 hours',
        },
      ],
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 4,
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      featured: [
        {
          id: 'jhik23rs',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727287875/Speaker1_e0ogqn.png',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videos: ['fbfbe3'],
          articles: ['gnsk4w'],
          duration: '8 hours',
        },
        {
          id: 'njvisld9',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727295780/speaker2_b3iccw.png',
          title: 'Leading Trends in Pharmacy Inventory Management',
          slug: slugify('Leading Trends in Pharmacy Inventory Management'),
          videos: ['bdb93r', 'fbw3sd'],
          articles: ['bdfv3f', 'nyhjyw4'],
          duration: '8 hours',
        },
        {
          id: '1w3053chs',
          imgSrc:
            'https://res.cloudinary.com/bizstak/image/upload/v1727295858/speaker3_umpkxb.png',
          title: 'Advancing Financial Literacy in Healthcare Business',
          slug: slugify('Advancing Financial Literacy in Healthcare Business'),
          videos: ['gsbeb34'],
          articles: ['tbdacvq'],
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
