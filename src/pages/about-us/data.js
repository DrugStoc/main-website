import { ImFacebook2 } from 'react-icons/im'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { IoLogoInstagram } from 'react-icons/io'


const size = 25
const fill = 'white'
export const teams = [
  {
    name: 'Facebook',
    role: '',
    link: 'https://web.facebook.com/profile.php?id=100021606439094',
    image: <ImFacebook2 size={size} fill={fill} />
  },
  {
    name: 'Instagram',
    role: '',
    link: 'https://www.instagram.com/drugstoc/',
    image: <IoLogoInstagram size={size} fill={fill} />
  },
  {
    name: 'Linked In ',
    role: '',
    link: 'https://www.linkedin.com/company/drugstoc/',
    image: <AiOutlineLinkedin size={size} fill={fill} />
  }
];

export const investors = [
  {
    alt: 'Growth Capital',
    src: '/images/about-us/investors/growth-capital.svg',
  },
  { alt: 'Vested World', src: '/images/about-us/investors/vested-world.svg' },
  { alt: 'Bill And Mellinda', src: '/images/about-us/investors/bnm.svg' },
  { alt: 'Ripple Works', src: '/images/about-us/investors/ripple-works.svg' },
  { alt: 'Omidyar Network', src: '/images/about-us/investors/on.svg' },
  { alt: 'Creadev', src: '/images/about-us/investors/creadev.svg' },
  { alt: 'Khosla', src: '/images/about-us/investors/khosla.svg' },
  { alt: 'Greycroft', src: '/images/about-us/investors/greycroft.svg' },
];
