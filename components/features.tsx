import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faBoltLightning, faBookAtlas, faBrain, faChartLine, faChartPie, faCode, faGlobe, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Every product has pattern that can be exploited by fraudsters.</h2>
            <p className="text-xl text-gray-400">PatternAct offers a comprehensive solution to fraud detection, with an emphasis on identifying patterns quickly and taking timely actions to safeguard profits and prevent losses due to fraudulent activities.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <FontAwesomeIcon icon={faBrain} size="xs" color="#5D5DFF" />
              </svg>
              <h4 className="h4 mb-2">Comprehensive engine</h4>
              <p className="text-lg text-gray-400 text-center">From heuristic rules to ML-generated ones, we've got you covered.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <FontAwesomeIcon icon={faBan} size="xs" color="#5D5DFF" />
              </svg>
              <h4 className="h4 mb-2">No-code operations</h4>
              <p className="text-lg text-gray-400 text-center">Generate and modify patterns without dedicated engineering team.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <FontAwesomeIcon icon={faBoltLightning} size="xs" color="#5D5DFF" />
              </svg>
              <h4 className="h4 mb-2">Fatser TAT</h4>
              <p className="text-lg text-gray-400 text-center">Happy with the outcomes, deploy to production to minimize losses quickly.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <FontAwesomeIcon icon={faUsers} size="xs" color="#5D5DFF" />
              </svg>
              <h4 className="h4 mb-2">Collusion first</h4>
              <p className="text-lg text-gray-400 text-center">Platform built with a primary focus on tackling collusion fraud.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <FontAwesomeIcon icon={faBookAtlas} size="xs" color="#5D5DFF" />
              </svg>
              <h4 className="h4 mb-2">Rule library</h4>
              <p className="text-lg text-gray-400 text-center">Explore rules that are applicable for every industry.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <FontAwesomeIcon icon={faChartLine} size="xs" color="#5D5DFF" />
              </svg>
              <h4 className="h4 mb-2">Monitor</h4>
              <p className="text-lg text-gray-400 text-center">Monitor efficiency of the system for each pattern configuered.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
