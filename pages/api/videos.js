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
    },
    {
      id: 2,
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 3,
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 4,
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      date: 'May 25, 2023 at 10:00 AM',
    },
  ];

  res.status(200).json(videos);
}
