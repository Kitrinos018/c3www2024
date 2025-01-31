// components/careers/jobPositions/MedicalLaboratoryTechnicianPosition.jsx

export default function MedicalTechPosition() {
  return (
    <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden'>
        <div className='px-4 py-5 sm:px-6 bg-blue-600'>
          <h1 className='text-2xl font-bold text-white'>
            Medical Laboratory Technician
          </h1>
          <p className='mt-1 max-w-2xl text-sm text-blue-100'>
            Full-time position
          </p>
        </div>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>
            Job Description
          </h2>
          <p className='text-gray-700 mb-4'>
            We are seeking a detail-oriented and knowledgeable Medical
            Laboratory Technician to join our dynamic laboratory team. The ideal
            candidate will perform a variety of laboratory tests, ensuring
            accurate and timely results to aid in patient diagnosis and
            treatment.
          </p>

          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            Responsibilities:
          </h3>
          <ul className='list-disc pl-5 mb-4 text-gray-700'>
            <li>Collect, prepare, and analyze laboratory specimens</li>
            <li>Perform tests on blood, urine, and other bodily fluids</li>
            <li>Maintain and calibrate laboratory equipment</li>
            <li>
              Ensure compliance with laboratory safety and quality control
              standards
            </li>
            <li>Document test results and report findings to physicians</li>
            <li>Assist in developing and implementing laboratory protocols</li>
            <li>Maintain accurate records of laboratory activities</li>
            <li>
              Collaborate with other healthcare professionals to ensure quality
              patient care
            </li>
          </ul>

          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            Qualifications:
          </h3>
          <ul className='list-disc pl-5 mb-4 text-gray-700'>
            <li>
              Associate degree in Medical Laboratory Technology or a related
              field
            </li>
            <li>
              Certification from a recognized laboratory certification body
              (e.g., ASCP, AMT)
            </li>
            <li>Strong understanding of laboratory procedures and protocols</li>
            <li>Excellent attention to detail and accuracy</li>
            <li>Ability to work independently and as part of a team</li>
            <li>Strong communication and interpersonal skills</li>
            <li>
              Proficiency in using laboratory equipment and computer systems
            </li>
          </ul>

          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            We Offer:
          </h3>
          <ul className='list-disc pl-5 mb-6 text-gray-700'>
            <li>Competitive salary and benefits package</li>
            <li>
              Opportunities for professional development and continuing
              education
            </li>
            <li>Supportive and collaborative work environment</li>
            <li>State-of-the-art laboratory facilities and technology</li>
          </ul>

          <div className='mt-8 border-t border-gray-200 pt-8'>
            <h3 className='text-lg font-semibold text-gray-900 mb-4'>
              How to Apply
            </h3>
            <p className='mb-4 text-gray-700'>
              If you're ready to contribute to our laboratory team, we encourage
              you to apply. Please send your resume and cover letter to{" "}
              <a
                href='mailto:careers@hospitalname.com'
                className='text-blue-600 hover:underline'
              >
                careers@hospitalname.com
              </a>{" "}
              with the subject line "Medical Laboratory Technician Application".
            </p>
            <p className='text-gray-700'>
              We appreciate your interest in joining our team and will review
              all applications carefully. Only shortlisted candidates will be
              contacted for an interview.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
