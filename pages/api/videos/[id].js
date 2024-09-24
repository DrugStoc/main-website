export default function handler(req, res) {
  const videos = [
    {
      id: 1,
      title: 'Strategies for Business Resilience in an Inflated Economy',
      videoTitle: 'Harnessing Data for Decision Making',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 2,
      title: 'Strategies for Business Resilience in an Inflated Economy',
      videoTitle: 'Harnessing Data for Decision Making',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 3,
      title: 'Strategies for Business Resilience in an Inflated Economy',
      videoTitle: 'Harnessing Data for Decision Making',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 4,
      title: 'Strategies for Business Resilience in an Inflated Economy',
      videoTitle: 'Harnessing Data for Decision Making',
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
