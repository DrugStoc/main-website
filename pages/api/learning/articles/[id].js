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
      id: 'xji2n8',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      article:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dui nisl, tincidunt vitae neque eget, rhoncus tempor velit. Aenean at ex odio. Suspendisse et justo et erat ultricies pharetra. Curabitur elementum elementum felis. Etiam quis luctus sapien. Maecenas eu porta ex, quis ultricies erat. Nullam odio sapien, feugiat at tincidunt non, ornare a lacus. Pellentesque at sapien eu odio aliquam fringilla et eu nulla.\n\nNulla dolor libero, consectetur euismod porttitor ut, congue sed nisl. Proin in euismod turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur finibus euismod ante, et volutpat tellus suscipit eget. Ut commodo tellus diam. Sed sagittis iaculis tortor nec consequat. Aenean vitae diam leo. Vestibulum eget elit non justo faucibus egestas ut id felis. Sed vehicula sodales est vitae maximus. Nulla cursus arcu id odio fermentum luctus. Mauris non risus sit amet elit scelerisque aliquam in in sem. Donec condimentum dolor a ex convallis congue. Cras vestibulum quam at ultrices imperdiet. Integer in tellus varius, tincidunt massa in, rutrum tellus.',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      articleTitle: 'Harnessing Data for Decision Making',
      imageUrl:
        'https://res.cloudinary.com/dv6yqup4h/image/upload/v1708611493/cld-sample-4.jpg',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'dgsdf4',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      article:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dui nisl, tincidunt vitae neque eget, rhoncus tempor velit. Aenean at ex odio. Suspendisse et justo et erat ultricies pharetra. Curabitur elementum elementum felis. Etiam quis luctus sapien. Maecenas eu porta ex, quis ultricies erat. Nullam odio sapien, feugiat at tincidunt non, ornare a lacus. Pellentesque at sapien eu odio aliquam fringilla et eu nulla.\n\nNulla dolor libero, consectetur euismod porttitor ut, congue sed nisl. Proin in euismod turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur finibus euismod ante, et volutpat tellus suscipit eget. Ut commodo tellus diam. Sed sagittis iaculis tortor nec consequat. Aenean vitae diam leo. Vestibulum eget elit non justo faucibus egestas ut id felis. Sed vehicula sodales est vitae maximus. Nulla cursus arcu id odio fermentum luctus. Mauris non risus sit amet elit scelerisque aliquam in in sem. Donec condimentum dolor a ex convallis congue. Cras vestibulum quam at ultrices imperdiet. Integer in tellus varius, tincidunt massa in, rutrum tellus.',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      articleTitle: 'Harnessing Data for Decision Making',
      imageUrl:
        'https://res.cloudinary.com/dv6yqup4h/image/upload/v1708611493/cld-sample-4.jpg',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'gksnvu',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      article:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dui nisl, tincidunt vitae neque eget, rhoncus tempor velit. Aenean at ex odio. Suspendisse et justo et erat ultricies pharetra. Curabitur elementum elementum felis. Etiam quis luctus sapien. Maecenas eu porta ex, quis ultricies erat. Nullam odio sapien, feugiat at tincidunt non, ornare a lacus. Pellentesque at sapien eu odio aliquam fringilla et eu nulla.\n\nNulla dolor libero, consectetur euismod porttitor ut, congue sed nisl. Proin in euismod turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur finibus euismod ante, et volutpat tellus suscipit eget. Ut commodo tellus diam. Sed sagittis iaculis tortor nec consequat. Aenean vitae diam leo. Vestibulum eget elit non justo faucibus egestas ut id felis. Sed vehicula sodales est vitae maximus. Nulla cursus arcu id odio fermentum luctus. Mauris non risus sit amet elit scelerisque aliquam in in sem. Donec condimentum dolor a ex convallis congue. Cras vestibulum quam at ultrices imperdiet. Integer in tellus varius, tincidunt massa in, rutrum tellus.',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      articleTitle: 'Harnessing Data for Decision Making',
      imageUrl:
        'https://res.cloudinary.com/dv6yqup4h/image/upload/v1708611493/cld-sample-4.jpg',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'adsfv2',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      article:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dui nisl, tincidunt vitae neque eget, rhoncus tempor velit. Aenean at ex odio. Suspendisse et justo et erat ultricies pharetra. Curabitur elementum elementum felis. Etiam quis luctus sapien. Maecenas eu porta ex, quis ultricies erat. Nullam odio sapien, feugiat at tincidunt non, ornare a lacus. Pellentesque at sapien eu odio aliquam fringilla et eu nulla.\n\nNulla dolor libero, consectetur euismod porttitor ut, congue sed nisl. Proin in euismod turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur finibus euismod ante, et volutpat tellus suscipit eget. Ut commodo tellus diam. Sed sagittis iaculis tortor nec consequat. Aenean vitae diam leo. Vestibulum eget elit non justo faucibus egestas ut id felis. Sed vehicula sodales est vitae maximus. Nulla cursus arcu id odio fermentum luctus. Mauris non risus sit amet elit scelerisque aliquam in in sem. Donec condimentum dolor a ex convallis congue. Cras vestibulum quam at ultrices imperdiet. Integer in tellus varius, tincidunt massa in, rutrum tellus.',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      articleTitle: 'Harnessing Data for Decision Making',
      imageUrl:
        'https://res.cloudinary.com/dv6yqup4h/image/upload/v1708611493/cld-sample-4.jpg',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'df3fd3',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      article:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dui nisl, tincidunt vitae neque eget, rhoncus tempor velit. Aenean at ex odio. Suspendisse et justo et erat ultricies pharetra. Curabitur elementum elementum felis. Etiam quis luctus sapien. Maecenas eu porta ex, quis ultricies erat. Nullam odio sapien, feugiat at tincidunt non, ornare a lacus. Pellentesque at sapien eu odio aliquam fringilla et eu nulla.\n\nNulla dolor libero, consectetur euismod porttitor ut, congue sed nisl. Proin in euismod turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur finibus euismod ante, et volutpat tellus suscipit eget. Ut commodo tellus diam. Sed sagittis iaculis tortor nec consequat. Aenean vitae diam leo. Vestibulum eget elit non justo faucibus egestas ut id felis. Sed vehicula sodales est vitae maximus. Nulla cursus arcu id odio fermentum luctus. Mauris non risus sit amet elit scelerisque aliquam in in sem. Donec condimentum dolor a ex convallis congue. Cras vestibulum quam at ultrices imperdiet. Integer in tellus varius, tincidunt massa in, rutrum tellus.',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      articleTitle: 'Harnessing Data for Decision Making',
      imageUrl:
        'https://res.cloudinary.com/dv6yqup4h/image/upload/v1708611493/cld-sample-4.jpg',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'vdjer43',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      article:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dui nisl, tincidunt vitae neque eget, rhoncus tempor velit. Aenean at ex odio. Suspendisse et justo et erat ultricies pharetra. Curabitur elementum elementum felis. Etiam quis luctus sapien. Maecenas eu porta ex, quis ultricies erat. Nullam odio sapien, feugiat at tincidunt non, ornare a lacus. Pellentesque at sapien eu odio aliquam fringilla et eu nulla.\n\nNulla dolor libero, consectetur euismod porttitor ut, congue sed nisl. Proin in euismod turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur finibus euismod ante, et volutpat tellus suscipit eget. Ut commodo tellus diam. Sed sagittis iaculis tortor nec consequat. Aenean vitae diam leo. Vestibulum eget elit non justo faucibus egestas ut id felis. Sed vehicula sodales est vitae maximus. Nulla cursus arcu id odio fermentum luctus. Mauris non risus sit amet elit scelerisque aliquam in in sem. Donec condimentum dolor a ex convallis congue. Cras vestibulum quam at ultrices imperdiet. Integer in tellus varius, tincidunt massa in, rutrum tellus.',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      articleTitle: 'Harnessing Data for Decision Making',
      imageUrl:
        'https://res.cloudinary.com/dv6yqup4h/image/upload/v1708611493/cld-sample-4.jpg',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'dfbse3',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      article:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dui nisl, tincidunt vitae neque eget, rhoncus tempor velit. Aenean at ex odio. Suspendisse et justo et erat ultricies pharetra. Curabitur elementum elementum felis. Etiam quis luctus sapien. Maecenas eu porta ex, quis ultricies erat. Nullam odio sapien, feugiat at tincidunt non, ornare a lacus. Pellentesque at sapien eu odio aliquam fringilla et eu nulla.\n\nNulla dolor libero, consectetur euismod porttitor ut, congue sed nisl. Proin in euismod turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur finibus euismod ante, et volutpat tellus suscipit eget. Ut commodo tellus diam. Sed sagittis iaculis tortor nec consequat. Aenean vitae diam leo. Vestibulum eget elit non justo faucibus egestas ut id felis. Sed vehicula sodales est vitae maximus. Nulla cursus arcu id odio fermentum luctus. Mauris non risus sit amet elit scelerisque aliquam in in sem. Donec condimentum dolor a ex convallis congue. Cras vestibulum quam at ultrices imperdiet. Integer in tellus varius, tincidunt massa in, rutrum tellus.',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      articleTitle: 'Harnessing Data for Decision Making',
      imageUrl:
        'https://res.cloudinary.com/dv6yqup4h/image/upload/v1708611493/cld-sample-4.jpg',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'gdqr3',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      article:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dui nisl, tincidunt vitae neque eget, rhoncus tempor velit. Aenean at ex odio. Suspendisse et justo et erat ultricies pharetra. Curabitur elementum elementum felis. Etiam quis luctus sapien. Maecenas eu porta ex, quis ultricies erat. Nullam odio sapien, feugiat at tincidunt non, ornare a lacus. Pellentesque at sapien eu odio aliquam fringilla et eu nulla.\n\nNulla dolor libero, consectetur euismod porttitor ut, congue sed nisl. Proin in euismod turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur finibus euismod ante, et volutpat tellus suscipit eget. Ut commodo tellus diam. Sed sagittis iaculis tortor nec consequat. Aenean vitae diam leo. Vestibulum eget elit non justo faucibus egestas ut id felis. Sed vehicula sodales est vitae maximus. Nulla cursus arcu id odio fermentum luctus. Mauris non risus sit amet elit scelerisque aliquam in in sem. Donec condimentum dolor a ex convallis congue. Cras vestibulum quam at ultrices imperdiet. Integer in tellus varius, tincidunt massa in, rutrum tellus.',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      articleTitle: 'Harnessing Data for Decision Making',
      imageUrl:
        'https://res.cloudinary.com/dv6yqup4h/image/upload/v1708611493/cld-sample-4.jpg',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'bqerg3',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      article:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dui nisl, tincidunt vitae neque eget, rhoncus tempor velit. Aenean at ex odio. Suspendisse et justo et erat ultricies pharetra. Curabitur elementum elementum felis. Etiam quis luctus sapien. Maecenas eu porta ex, quis ultricies erat. Nullam odio sapien, feugiat at tincidunt non, ornare a lacus. Pellentesque at sapien eu odio aliquam fringilla et eu nulla.\n\nNulla dolor libero, consectetur euismod porttitor ut, congue sed nisl. Proin in euismod turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur finibus euismod ante, et volutpat tellus suscipit eget. Ut commodo tellus diam. Sed sagittis iaculis tortor nec consequat. Aenean vitae diam leo. Vestibulum eget elit non justo faucibus egestas ut id felis. Sed vehicula sodales est vitae maximus. Nulla cursus arcu id odio fermentum luctus. Mauris non risus sit amet elit scelerisque aliquam in in sem. Donec condimentum dolor a ex convallis congue. Cras vestibulum quam at ultrices imperdiet. Integer in tellus varius, tincidunt massa in, rutrum tellus.',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      articleTitle: 'Harnessing Data for Decision Making',
      imageUrl:
        'https://res.cloudinary.com/dv6yqup4h/image/upload/v1708611493/cld-sample-4.jpg',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'vnkj9r',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      article:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dui nisl, tincidunt vitae neque eget, rhoncus tempor velit. Aenean at ex odio. Suspendisse et justo et erat ultricies pharetra. Curabitur elementum elementum felis. Etiam quis luctus sapien. Maecenas eu porta ex, quis ultricies erat. Nullam odio sapien, feugiat at tincidunt non, ornare a lacus. Pellentesque at sapien eu odio aliquam fringilla et eu nulla.\n\nNulla dolor libero, consectetur euismod porttitor ut, congue sed nisl. Proin in euismod turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur finibus euismod ante, et volutpat tellus suscipit eget. Ut commodo tellus diam. Sed sagittis iaculis tortor nec consequat. Aenean vitae diam leo. Vestibulum eget elit non justo faucibus egestas ut id felis. Sed vehicula sodales est vitae maximus. Nulla cursus arcu id odio fermentum luctus. Mauris non risus sit amet elit scelerisque aliquam in in sem. Donec condimentum dolor a ex convallis congue. Cras vestibulum quam at ultrices imperdiet. Integer in tellus varius, tincidunt massa in, rutrum tellus.',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      articleTitle: 'Harnessing Data for Decision Making',
      imageUrl:
        'https://res.cloudinary.com/dv6yqup4h/image/upload/v1708611493/cld-sample-4.jpg',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'gnsk4w',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      article:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dui nisl, tincidunt vitae neque eget, rhoncus tempor velit. Aenean at ex odio. Suspendisse et justo et erat ultricies pharetra. Curabitur elementum elementum felis. Etiam quis luctus sapien. Maecenas eu porta ex, quis ultricies erat. Nullam odio sapien, feugiat at tincidunt non, ornare a lacus. Pellentesque at sapien eu odio aliquam fringilla et eu nulla.\n\nNulla dolor libero, consectetur euismod porttitor ut, congue sed nisl. Proin in euismod turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur finibus euismod ante, et volutpat tellus suscipit eget. Ut commodo tellus diam. Sed sagittis iaculis tortor nec consequat. Aenean vitae diam leo. Vestibulum eget elit non justo faucibus egestas ut id felis. Sed vehicula sodales est vitae maximus. Nulla cursus arcu id odio fermentum luctus. Mauris non risus sit amet elit scelerisque aliquam in in sem. Donec condimentum dolor a ex convallis congue. Cras vestibulum quam at ultrices imperdiet. Integer in tellus varius, tincidunt massa in, rutrum tellus.',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      articleTitle: 'Harnessing Data for Decision Making',
      imageUrl:
        'https://res.cloudinary.com/dv6yqup4h/image/upload/v1708611493/cld-sample-4.jpg',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'bdfv3f',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      article:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dui nisl, tincidunt vitae neque eget, rhoncus tempor velit. Aenean at ex odio. Suspendisse et justo et erat ultricies pharetra. Curabitur elementum elementum felis. Etiam quis luctus sapien. Maecenas eu porta ex, quis ultricies erat. Nullam odio sapien, feugiat at tincidunt non, ornare a lacus. Pellentesque at sapien eu odio aliquam fringilla et eu nulla.\n\nNulla dolor libero, consectetur euismod porttitor ut, congue sed nisl. Proin in euismod turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur finibus euismod ante, et volutpat tellus suscipit eget. Ut commodo tellus diam. Sed sagittis iaculis tortor nec consequat. Aenean vitae diam leo. Vestibulum eget elit non justo faucibus egestas ut id felis. Sed vehicula sodales est vitae maximus. Nulla cursus arcu id odio fermentum luctus. Mauris non risus sit amet elit scelerisque aliquam in in sem. Donec condimentum dolor a ex convallis congue. Cras vestibulum quam at ultrices imperdiet. Integer in tellus varius, tincidunt massa in, rutrum tellus.',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      articleTitle: 'Harnessing Data for Decision Making',
      imageUrl:
        'https://res.cloudinary.com/dv6yqup4h/image/upload/v1708611493/cld-sample-4.jpg',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'nyhjyw4',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      article:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dui nisl, tincidunt vitae neque eget, rhoncus tempor velit. Aenean at ex odio. Suspendisse et justo et erat ultricies pharetra. Curabitur elementum elementum felis. Etiam quis luctus sapien. Maecenas eu porta ex, quis ultricies erat. Nullam odio sapien, feugiat at tincidunt non, ornare a lacus. Pellentesque at sapien eu odio aliquam fringilla et eu nulla.\n\nNulla dolor libero, consectetur euismod porttitor ut, congue sed nisl. Proin in euismod turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur finibus euismod ante, et volutpat tellus suscipit eget. Ut commodo tellus diam. Sed sagittis iaculis tortor nec consequat. Aenean vitae diam leo. Vestibulum eget elit non justo faucibus egestas ut id felis. Sed vehicula sodales est vitae maximus. Nulla cursus arcu id odio fermentum luctus. Mauris non risus sit amet elit scelerisque aliquam in in sem. Donec condimentum dolor a ex convallis congue. Cras vestibulum quam at ultrices imperdiet. Integer in tellus varius, tincidunt massa in, rutrum tellus.',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      articleTitle: 'Harnessing Data for Decision Making',
      imageUrl:
        'https://res.cloudinary.com/dv6yqup4h/image/upload/v1708611493/cld-sample-4.jpg',
      date: 'May 25, 2023 at 10:00 AM',
    },
    {
      id: 'tbdacvq',
      title: 'Strategies for Business Resilience in an Inflated Economy',
      article:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dui nisl, tincidunt vitae neque eget, rhoncus tempor velit. Aenean at ex odio. Suspendisse et justo et erat ultricies pharetra. Curabitur elementum elementum felis. Etiam quis luctus sapien. Maecenas eu porta ex, quis ultricies erat. Nullam odio sapien, feugiat at tincidunt non, ornare a lacus. Pellentesque at sapien eu odio aliquam fringilla et eu nulla.\n\nNulla dolor libero, consectetur euismod porttitor ut, congue sed nisl. Proin in euismod turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur finibus euismod ante, et volutpat tellus suscipit eget. Ut commodo tellus diam. Sed sagittis iaculis tortor nec consequat. Aenean vitae diam leo. Vestibulum eget elit non justo faucibus egestas ut id felis. Sed vehicula sodales est vitae maximus. Nulla cursus arcu id odio fermentum luctus. Mauris non risus sit amet elit scelerisque aliquam in in sem. Donec condimentum dolor a ex convallis congue. Cras vestibulum quam at ultrices imperdiet. Integer in tellus varius, tincidunt massa in, rutrum tellus.',
      slug: slugify(
        'Strategies for Business Resilience in an Inflated Economy'
      ),
      articleTitle: 'Harnessing Data for Decision Making',
      imageUrl:
        'https://res.cloudinary.com/dv6yqup4h/image/upload/v1708611493/cld-sample-4.jpg',
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
