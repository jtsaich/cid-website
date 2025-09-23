import { useState } from 'react';

const imgUnderscore = "/assets/underscore.svg";
const imgUnderscore1 = "/assets/underscore-small.svg";

interface PublicationsProps {
  language: 'EN' | 'ZH';
}

interface PublicationItem {
  id: number;
  title: string;
  description: string;
  lastUpdate: string;
  pdfUrl: string;
}

export default function Publications({ language }: PublicationsProps) {
  const [activeTab, setActiveTab] = useState<'performance' | 'insights' | 'reports'>('insights');
  const [currentPage, setCurrentPage] = useState(2);

  const content = {
    EN: {
      title: "Our Publications",
      description: "Communication is important to us. Our publications are here to not only provide transparency but also important insights into the current economy and regulatory requirements of the market.",
      tabs: {
        performance: "Performance Reports",
        insights: "Market Insights",
        reports: "Market Reports"
      },
      buttonText: "PDF Download"
    },
    ZH: {
      title: "我們的出版物",
      description: "溝通對我們來說很重要。我們的出版物不僅提供透明度，還為當前經濟和市場監管要求提供重要見解。",
      tabs: {
        performance: "績效報告",
        insights: "市場洞察",
        reports: "市場報告"
      },
      buttonText: "PDF下載"
    }
  };

  const publications: Record<string, PublicationItem[]> = {
    performance: [
      {
        id: 1,
        title: "CID Global Investment",
        description: "Statement on principal adverse impacts of investment decisions on sustainability factors",
        lastUpdate: "Last update 28 June 2025",
        pdfUrl: "#"
      }
    ],
    insights: [
      {
        id: 1,
        title: "CID Global Investment",
        description: "Statement on principal adverse impacts of investment decisions on sustainability factors",
        lastUpdate: "Last update 28 June 2025",
        pdfUrl: "#"
      },
      {
        id: 2,
        title: "CID Global Investment",
        description: "Statement on principal adverse impacts of investment decisions on sustainability factors",
        lastUpdate: "Last update 28 June 2025",
        pdfUrl: "#"
      },
      {
        id: 3,
        title: "CID Global Investment",
        description: "Statement on principal adverse impacts of investment decisions on sustainability factors",
        lastUpdate: "Last update 28 June 2025",
        pdfUrl: "#"
      }
    ],
    reports: [
      {
        id: 1,
        title: "CID Global Investment",
        description: "Statement on principal adverse impacts of investment decisions on sustainability factors",
        lastUpdate: "Last update 28 June 2025",
        pdfUrl: "#"
      }
    ]
  };

  const currentContent = content[language];
  const currentPublications = publications[activeTab] || [];

  return (
    <section className="bg-mid-beige py-16 px-4 md:px-12 w-full">
      <div className="max-w-sm md:max-w-4xl lg:max-w-6xl xl:max-w-[1512px] mx-auto">
        <h2 className="font-rosarivo leading-relaxed text-deep-blue text-3xl md:text-4xl lg:text-5xl mb-8">
          {currentContent.title}
        </h2>
        
        <p className="font-rosarivo leading-relaxed text-deep-blue text-xl md:text-2xl lg:text-3xl mb-16 max-w-6xl">
          {currentContent.description}
        </p>
        
        <div className="flex flex-wrap gap-8 md:gap-12 mb-16">
          {Object.entries(currentContent.tabs).map(([key, label]) => (
            <div 
              key={key}
              className="flex flex-col gap-1 cursor-pointer"
              onClick={() => setActiveTab(key as 'performance' | 'insights' | 'reports')}
            >
              <p className="font-rosarivo leading-relaxed text-deep-blue text-xl md:text-2xl lg:text-3xl whitespace-nowrap hover:opacity-80">
                {label}
              </p>
              {activeTab === key && (
                <div className="h-0.5 w-full">
                  <img alt="" className="block w-full h-0.5" src={imgUnderscore} />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="space-y-16">
          {currentPublications.map((publication) => (
            <div key={publication.id} className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
              <div className="bg-[#d9d9d9] aspect-[4/3] rounded-lg" />
              
              <div className="lg:col-span-2 space-y-4">
                <h3 className="font-rosarivo leading-tight text-dark-brown text-xl md:text-2xl lg:text-3xl">
                  {publication.title}
                </h3>
                <p className="font-rosarivo leading-relaxed text-deep-blue text-lg md:text-xl lg:text-2xl">
                  {publication.description}
                </p>
                <p className="font-montserrat font-normal leading-relaxed text-deep-blue text-sm md:text-base lg:text-lg">
                  {publication.lastUpdate}
                </p>
              </div>
              
              <div className="flex justify-start lg:justify-end">
                <button className="bg-dark-brown text-white font-montserrat font-semibold text-sm md:text-base px-8 md:px-12 py-3 md:py-4 hover:opacity-90 transition-opacity rounded">
                  {currentContent.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-8 justify-center mt-16">
          <button 
            className="font-montserrat font-normal leading-relaxed text-deep-blue text-base md:text-lg hover:opacity-80"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          >
            PREV
          </button>
          
          {[1, 2, 3].map((page) => (
            <div key={page} className="flex flex-col gap-1 items-center">
              <button 
                className="font-montserrat font-normal leading-relaxed text-deep-blue text-base md:text-lg hover:opacity-80"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
              {currentPage === page && (
                <div className="h-0.5 w-3">
                  <img alt="" className="block w-full h-0.5" src={imgUnderscore1} />
                </div>
              )}
            </div>
          ))}
          
          <button 
            className="font-montserrat font-normal leading-relaxed text-deep-blue text-base md:text-lg hover:opacity-80"
            onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
          >
            NEXT
          </button>
        </div>
      </div>
    </section>
  );
}