import '@fortawesome/fontawesome-svg-core/styles.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import {
  faBan, faBoltLightning, faBookAtlas, faBrain, faChartLine, faUsers
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

config.autoAddCss = false;
export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Why use RuleEasy ?</h2>
            <p className="text-xl text-gray-400">RuleEasy is a lightweight rule engine which is developed for modern day applications. It has developer firendly interface which can get you started in few mins. Also it's free. You can use our APIs or take the code and deploy it on-prem</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <FontAwesomeIcon icon={faBrain} size="xs" className="text-indigo-600" />
              </svg>
              <h4 className="h4 mb-2">Simple</h4>
              <p className="text-lg text-gray-400 text-center">Simple interface with just 3 APIs</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <FontAwesomeIcon icon={faBan} size="xs" className="text-indigo-600" />
              </svg>
              <h4 className="h4 mb-2">No vendor locking</h4>
              <p className="text-lg text-gray-400 text-center">Supports on-prem</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <FontAwesomeIcon icon={faBoltLightning} size="xs" className="text-indigo-600" />
              </svg>
              <h4 className="h4 mb-2">Fast</h4>
              <p className="text-lg text-gray-400 text-center">Go-lang based engine.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
