import { MdOutlineLocalPharmacy, MdOutlineHealthAndSafety } from 'react-icons/md'
import { RiCommunityFill, RiHospitalLine, RiGovernmentLine } from 'react-icons/ri'


export const partners = [
  {
    alt: 'GSK',
    src: '/images/landing/partners/gsk.svg',
  },
  {
    alt: 'Emzor',
    src: '/images/landing/partners/emzor.svg',
  },
  {
    alt: 'Pifezr',
    src: '/images/landing/partners/pifezr.svg',
  },
  {
    alt: 'RB',
    src: '/images/landing/partners/rb.svg',
  },
  {
    alt: 'Sanofi',
    src: '/images/landing/partners/sanofi.svg',
  },
  {
    alt: 'Merck',
    src: '/images/landing/partners/merck.svg',
  },
];

const color = "#4c70d6"
const link = '/procure-direct'
export const personalized = [
  {
    title: 'For Chain Pharmacies',
    details:
      'Centralise your procurement and have products delivered to your branches.',
    link,
    icon: <MdOutlineLocalPharmacy size={50} color={color} />,
  },
  {
    title: 'For Community Pharmacies',
    details:
      'Discover product alternatives that fit your community’s needs.',
    link,
    icon: <RiCommunityFill size={50} color={color} />,
  },
  {
    title: 'For Hospitals & Clinics',
    details:
      'Automate your essential products for top-up services.',
    link,
    icon: <RiHospitalLine size={50} color={color} />,
  },
  {
    title: 'For Doctor & Specialists',
    details:
      'Source rare medications and costly inventory as you need it with our same day delivery.',
    link,
    icon: <DoctorSvg size={50} color={color} />,
  },
  {
    title: 'For Government Health facilities',
    details:
      'Improve patient outcomes and costs with DrugStoc Solutions.',
    link: '/partnerships',
    icon: <RiGovernmentLine size={50} color={color} />,
  },
  {
    title: 'For Health Maintenance Organization (HMO)',
    details:
      'Reduce re-admission rates and improve on your service delivery.',
    link: '/partnerships',
    icon: <MdOutlineHealthAndSafety size={50} color={color} />,
  },
];

export const providers = [
  {
    alt: 'HealthPlus',
    src: '/images/landing/providers/health-plus.svg',
  },
  {
    alt: 'medplus',
    src: '/images/landing/providers/1.svg',
  },
  {
    alt: 'Pharmzone',
    src: '/images/landing/providers/2.svg',
  },
  {
    alt: 'Lagoon',
    src: '/images/landing/providers/12.svg',
  },
  {
    alt: 'Medcourt',
    src: '/images/landing/providers/4.svg',
  },
  {
    alt: 'Juli',
    src: '/images/landing/providers/5.svg',
  },
  {
    alt: 'TPC',
    src: '/images/landing/providers/6.svg',
  },
  {
    alt: 'EFH',
    src: '/images/landing/providers/7.svg',
  },
  {
    alt: 'Reliance',
    src: '/images/landing/providers/8.svg',
  },
  {
    alt: 'M&C',
    src: '/images/landing/providers/9.svg',
  },
  {
    alt: 'ST franco',
    src: '/images/landing/providers/10.svg',
  },
  {
    alt: 'Nett',
    src: '/images/landing/providers/11.svg',
  },
];

export const clients = [
  {
    name: 'New Standard Pharmacy',
    role: '',
    message:
      '“I give the  DRUGSTOC app a five 🌟🌟🌟🌟🌟. It\'s an excellent app.  I\'m so proud of the DRUGSTOC app.“',
    image:
      'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    name: 'Pharmaprea Pharmacy',
    role: '',
    message:
      '“It’s great. Makes ordering of drugs very easy.“',
    image:
      'https://images.pexels.com/photos/2661255/pexels-photo-2661255.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    name: 'Honey Health Pharmarcy',
    role: '',
    message: '" Well, for now, I think it\'s still the best wholesale App I  have come across with a friendly stock price.App is Easy to use,It also covers a wider range of available products." '
  },
  {
    name: 'Lade Hospital',
    role: '',
    message: '"I enjoy the prompt delivery and the competitive pricing."'
  },
];



function DoctorSvg(props) {
  return (
    <div style={{ width: props.size }}>
      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 512 512" style={{ fill: color }}>
        <path className="cls-1"
          d="M320,310.18V277.27A128,128,0,0,0,384,166.4V128a127.43,127.43,0,0,0-26.26-77.67h0q-.87-1.14-1.77-2.26h0a128.76,128.76,0,0,0-20.13-20.1l-.32-.26q-.91-.72-1.83-1.42l-.53-.41-1.74-1.29-.66-.48-1.68-1.19-.77-.53-1.64-1.1-.85-.56-1.62-1-.91-.57-1.6-1-1-.57-1.6-.93-1-.56-1.6-.88-1-.55-1.6-.83-1.07-.53-1.61-.79L310.1,12l-1.64-.76-1.06-.46q-2.9-1.28-5.88-2.41l-1.35-.51-1.43-.51-1.44-.51-1.42-.47-1.49-.48L293,5.43,291.46,5,290,4.59l-1.55-.42-1.42-.36-1.57-.38-1.42-.33-1.6-.35-1.42-.29-1.63-.31L278,1.89l-1.66-.27-1.42-.22-1.7-.24L271.83,1,270.1.78,268.71.63l-1.8-.16L265.56.35l-1.9-.12L262.39.16,260.27.08l-1.06,0q-1.6,0-3.21,0t-3.21,0l-1.06,0-2.12.08-1.27.08-1.9.12-1.35.11-1.8.16L241.9.78l-1.73.2-1.41.19-1.69.24-1.42.22L234,1.89l-1.43.26-1.63.31-1.42.29-1.6.35-1.42.33-1.57.38-1.42.36L222,4.59,220.54,5,219,5.43l-1.41.43-1.49.48-1.42.47-1.44.51-1.43.51-1.34.51q-3,1.14-5.91,2.42l-1,.45-1.65.76-1.07.5-1.62.79-1.07.53-1.61.83-1,.55-1.6.88-1,.56-1.6.93-1,.57-1.6,1-.91.57-1.62,1-.85.56-1.64,1.1-.77.53-1.68,1.19-.67.49-1.74,1.29-.53.41q-.92.7-1.83,1.42l-.32.26A128.76,128.76,0,0,0,156.05,48h0q-.9,1.12-1.77,2.26h0A127.43,127.43,0,0,0,128,128v38.4a128,128,0,0,0,64,110.87v32.91A172.84,172.84,0,0,0,51.2,480a32,32,0,0,0,32,32H428.8a32,32,0,0,0,32-32A172.84,172.84,0,0,0,320,310.18ZM358.4,486.4H307.2V435.2a25.6,25.6,0,0,1,51.2,0ZM242.56,26.48l.56-.07,1.95-.22,2-.19,1.5-.12q1.46-.1,2.94-.17l1,0c1.16,0,2.33-.07,3.5-.07s2.34,0,3.5.07l1,0q1.47.06,2.94.17L265,26l2,.19,1.95.22.56.07A102.69,102.69,0,0,1,350.92,89.6H161.08A102.69,102.69,0,0,1,242.56,26.48Zm-89,139.92V128a103,103,0,0,1,.8-12.8H357.6a103,103,0,0,1,.8,12.8v38.4a102.4,102.4,0,1,1-204.8,0ZM256,294.4a127.94,127.94,0,0,0,38.4-5.86v29.77l-38.4,23-38.4-23V288.54A127.94,127.94,0,0,0,256,294.4Zm-64,128a12.8,12.8,0,1,1-12.8-12.8A12.81,12.81,0,0,1,192,422.4ZM76.8,480a147.41,147.41,0,0,1,89.6-135.45v41.64a38.4,38.4,0,1,0,25.6,0V336.31c1.45-.32,2.9-.62,4.36-.9L256,371.2l59.64-35.78c1.46.28,2.92.57,4.36.9v49.31a51.29,51.29,0,0,0-38.4,49.58v51.2H83.2A6.41,6.41,0,0,1,76.8,480Zm352,6.4H384V435.2a51.29,51.29,0,0,0-38.4-49.58V344.55A147.41,147.41,0,0,1,435.2,480,6.41,6.41,0,0,1,428.8,486.4Z" />
      </svg>
    </div>
  )
}