// import { jobs } from "./data";
// import jobsStyles from '../../../public/jobs.module.css'
// import Link from "next/link";

// const JobOpenings = () => {
//     return (
//         <div>
//             <h1 className={jobsStyles.jobopening}>DrugStoc Job Openings</h1>
//             <div className={jobsStyles.container}>
//                 {jobs.map((job, index) => (
//                     <div className={jobsStyles.card} key={index}>
//                         <h2>{job.name}</h2>
//                         <p className={jobsStyles.role}>Role: {job.role}</p>
//                         <p className={jobsStyles.type}>Type: {job.type}</p>
//                         <p className={jobsStyles.location}>Location: {job.location}</p>
//                         <Link href="/jobs">
//                             <a href={job.pdfLink} target="_blank" rel="noreferrer" className="link">
//                                 View Job Description
//                             </a>
//                         </Link>

//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default JobOpenings