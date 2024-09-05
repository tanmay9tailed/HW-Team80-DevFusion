import React from 'react';

const Articles = () => {
  return (
    <div className="bg-gradient-to-tl from-blue-900 via-black to-blue-900 pb-[100px] pt-[40px]">
      <div className=" py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="" className="flex items-center">
              <img
                id="logo"
                className="w-10 h-10 sm:w-16 sm:h-16 mr-4 "
                src="https://freesvg.org/img/indian-emblem.png"
                alt="State Emblem of India"
              />
              <div className="leading-tight">
                <strong lang="hi" className="block text-lg text-white">विधायी विभाग</strong>
                <span className="block text-sm text-white">Legislative Department</span>
              </div>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <img
              className=" h-9 sm:h-12"
              src="https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2022/12/2022121330.png"
              alt="g20"
            />
            <img
              className=" h-9 sm:h-12"
              src="https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2022/12/2022121374.png"
              alt="Amritmahotsav"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <table className="w-full text-left border-collapse">
          <caption className="w-full text-xl font-semibold py-3 pl-3 text-white bg-gray-800 text-start ">Constitution of India</caption>
          <thead>
            <tr>
              <th className="bg-yellow-600 text-black py-2 px-4">Title</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                title: 'The Constitution of India 2024 (English Version)',
                url: 'https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf'
              },
              {
                title: 'The Constitution of India (2024)',
                url: 'https://lddashboard.legislative.gov.in/sites/default/files/coi/COI_2024.pdf'
              },
              {
                title: 'The Constitution of India in Dogri',
                url: 'https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2023/05/2023072614.pdf'
              },
              {
                title: 'The Constitution of India in Gujarati',
                url: 'https://lddashboard.legislative.gov.in/sites/default/files/constitution_india_gujarati_18122017.pdf'
              },
              {
                title: 'The constitution of India Kannada',
                url: 'https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2023/05/2023051228.pdf'
              },
              {
                title: 'The Constitution of India in Kashmiri',
                url: 'https://legislative.gov.in/kashmiri/'
              },
              {
                title: 'The Constitution of India in Marathi',
                url: 'https://lddashboard.legislative.gov.in/sites/default/files/Marathi%20Savidhan.pdf'
              },
              {
                title: 'The Constitution of India in Nepali',
                url: 'https://lddashboard.legislative.gov.in/sites/default/files/The%20Constitution%20of%20India%20in%20Nepali.pdf'
              },
              {
                title: 'The Constitution of India in Konkani',
                url: 'https://lddashboard.legislative.gov.in/sites/default/files/The%20Constitution%20of%20India%20in%20Konkani.pdf'
              },
              {
                title: 'The Constitution of India in Maithili',
                url: 'https://legislative.gov.in/maithili/'
              },
              {
                title: 'The Constitution of India in Malayalam',
                url: 'https://lddashboard.legislative.gov.in/sites/default/files/Constitution%20of%20India_0.pdf'
              },
              {
                title: 'The Constitution of India in Manipuri',
                url: 'https://lddashboard.legislative.gov.in/sites/default/files/The%20Constitution%20of%20India%20in%20Manipuri_0.pdf'
              },
              {
                title: 'The Constitution of India in Odia',
                url: 'https://lddashboard.legislative.gov.in/sites/default/files/The%20Constitution%20of%20India%20in%20Odia.pdf'
              },
              {
                title: 'The Constitution of India in Punjabi',
                url: 'https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2023/05/2023051245.pdf'
              },
              {
                title: 'The Constitution of India in Sanskrit',
                url: 'https://lddashboard.legislative.gov.in/sites/default/files/The%20Constitution%20of%20India%20in%20Sanskrit.pdf'
              },
              {
                title: 'The Constitution of India in Santhali',
                url: 'https://legislative.gov.in/santhali'
              },
              {
                title: 'The Constitution of India in Sindhi',
                url: 'https://lddashboard.legislative.gov.in/sites/default/files/The%20Constitution%20of%20India%20in%20Sindhi.pdf'
              },
              {
                title: 'The Constitution of India in Tamil',
                url: 'https://lddashboard.legislative.gov.in/sites/default/files/Tamil%20version%20Constitution%20of%20India.pdf'
              },
              {
                title: 'The Constitution of India in Telugu',
                url: 'https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2023/05/2023051268.pdf'
              },
              {
                title: 'The Constitution of India in Urdu',
                url: 'https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2023/05/2023050124.pdf'
              },
              {
                title: 'The Constitution of India in Tamil (2008)',
                url: 'https://lddashboard.legislative.gov.in/sites/default/files/constitution%20of%20India%20in%20Tamil%202008%20_0.pdf'
              },
              {
                title: 'The Constitution of India in Bengali, Version 2021',
                url: 'https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2023/05/2023051295.pdf'
              },
              {
                title: 'The Constitution of India in Assamese',
                url: 'https://lddashboard.legislative.gov.in/sites/default/files/The%20Constitution%20of%20India%20in%20Assamese.pdf'
              },
              {
                title: 'The Constitution of India in Bengali, Version 2022',
                url: 'https://lddashboard.legislative.gov.in/sites/default/files/Constitution%20of%20India%20in%20Bengali%2C%20Version%202022.pdf'
              },
              {
                title: 'The Constitution of India in Bodo',
                url: 'https://legislative.gov.in/bodo/'
              },
              {
                title: 'Constitution of India – in Urdu',
                url: 'https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2023/05/2023050124.pdf'
              },
              {
                title: 'The Constitution of India – in Diglot Edition (English-Marathi)',
                url: 'https://lddashboard.legislative.gov.in/sites/default/files/Savidhan.pdf'
              },
              {
                title: 'Constitution of India – in Tamil (Part-1)',
                url: 'https://lddashboard.legislative.gov.in/sites/default/files/part1.pdf'
              },
              {
                title: 'Constitution of India – in Tamil (Part-2)',
                url: 'https://lddashboard.legislative.gov.in/sites/default/files/part2.pdf'
              },
              {
                title: 'Constitution of India – in Tamil (Part-3)',
                url: 'https://lddashboard.legislative.gov.in/sites/default/files/part3.pdf'
              }
            ].map((article, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-300">
                  <a
                    className="text-gray-200 hover:text-gray-400 hover:underline font-bold"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Articles;
