export default function handler(req, res) {
  const slugify = text => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-');
  };

  const courses = [
    {
      id: 'rqkd131c',
      videos: [
        {
          id: 'dk3ds2',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videoTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
      articles: [
        {
          id: 'xji2n8',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          articleTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
    },
    {
      id: 'iedn29db',
      videos: [
        {
          id: 'dfs324',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videoTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
        {
          id: 'fj2sid',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videoTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
      articles: [
        {
          id: 'dgsdf4',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          articleTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
    },
    {
      id: 'h2320xsd',
      videos: [
        {
          id: 'dsk2nd',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videoTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
        {
          id: 'snwdk2',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videoTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
      articles: [
        {
          id: 'gksnvu',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videoTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
        {
          id: 'adsfv2',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          articleTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
    },
    {
      id: 'dsa9298da',
      videos: [
        {
          id: 'cdf34j',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videoTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
      articles: [
        {
          id: 'df3fd3',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          articleTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
    },
    {
      id: 'dsnc930m',
      videos: [
        {
          id: 'fvr4rh',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videoTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
      articles: [
        {
          id: 'vdjer43',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videoTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
        {
          id: 'dfbse3',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          articleTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
    },
    {
      id: '2deks0df',
      videos: [
        {
          id: 'vfdf3f',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videoTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
      articles: [
        {
          id: 'gdqr3',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          articleTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
    },
    {
      id: '0klhwf89',
      videos: [
        {
          id: 'vefdb34',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videoTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
      articles: [
        {
          id: 'bqerg3',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          articleTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
    },
    {
      id: 'zcjwkv8i2',
      videos: [
        {
          id: 'gmlw42',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videoTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
      articles: [
        {
          id: 'vnkj9r',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          articleTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
    },
    {
      id: 'jhik23rs',
      videos: [
        {
          id: 'fbfbe3',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videoTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
      articles: [
        {
          id: 'gnsk4w',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          articleTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
    },
    {
      id: 'njvisld9',
      videos: [
        {
          id: 'bdb93r',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videoTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
        {
          id: 'fbw3sd',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videoTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
      articles: [
        {
          id: 'bdfv3f',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videoTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
        {
          id: 'nyhjyw4',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          articleTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
    },
    {
      id: '1w3053chs',
      videos: [
        {
          id: 'gsbeb34',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          videoTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
      articles: [
        {
          id: 'tbdacvq',
          title: 'Strategies for Business Resilience in an Inflated Economy',
          slug: slugify(
            'Strategies for Business Resilience in an Inflated Economy'
          ),
          articleTitle: 'Harnessing Data for Decision Making',
          date: 'May 25, 2023 at 10:00 AM',
        },
      ],
    },
  ];

  const { id } = req.query;

  const course = courses.find(course => course.id === id);

  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }

  res.status(200).json(course);
}
