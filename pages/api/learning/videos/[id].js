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
      id: 'dk3ds2',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      videoUrl:
        'https://res.cloudinary.com/dv6yqup4h/video/upload/v1708611469/samples/sea-turtle.mp4',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'dfs324',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      videoUrl:
        'https://res.cloudinary.com/dv6yqup4h/video/upload/v1708611469/samples/sea-turtle.mp4',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'fj2sid',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      videoUrl:
        'https://res.cloudinary.com/dv6yqup4h/video/upload/v1708611469/samples/sea-turtle.mp4',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'dsk2nd',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      videoUrl:
        'https://res.cloudinary.com/dv6yqup4h/video/upload/v1708611469/samples/sea-turtle.mp4',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'snwdk2',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      videoUrl:
        'https://res.cloudinary.com/dv6yqup4h/video/upload/v1708611469/samples/sea-turtle.mp4',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'cdf34j',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      videoUrl:
        'https://res.cloudinary.com/dv6yqup4h/video/upload/v1708611469/samples/sea-turtle.mp4',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'fvr4rh',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      videoUrl:
        'https://res.cloudinary.com/dv6yqup4h/video/upload/v1708611469/samples/sea-turtle.mp4',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'vfdf3f',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      videoUrl:
        'https://res.cloudinary.com/dv6yqup4h/video/upload/v1708611469/samples/sea-turtle.mp4',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'vefdb34',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      videoUrl:
        'https://res.cloudinary.com/dv6yqup4h/video/upload/v1708611469/samples/sea-turtle.mp4',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'gmlw42',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      videoUrl:
        'https://res.cloudinary.com/dv6yqup4h/video/upload/v1708611469/samples/sea-turtle.mp4',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'fbfbe3',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      videoUrl:
        'https://res.cloudinary.com/dv6yqup4h/video/upload/v1708611469/samples/sea-turtle.mp4',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'bdb93r',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      videoUrl:
        'https://res.cloudinary.com/dv6yqup4h/video/upload/v1708611469/samples/sea-turtle.mp4',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'fbw3sd',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      videoUrl:
        'https://res.cloudinary.com/dv6yqup4h/video/upload/v1708611469/samples/sea-turtle.mp4',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'gsbeb34',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      videoTitle: 'Harnessing Data for Decision Making',
      videoUrl:
        'https://res.cloudinary.com/dv6yqup4h/video/upload/v1708611469/samples/sea-turtle.mp4',
      date: 'May 25, 2023 at 10:00 AM',
    },
  ];

  const { id } = req.query;

  const course = courses.find(course => course.id === id);

  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }

  res.status(200).json(course);
}
