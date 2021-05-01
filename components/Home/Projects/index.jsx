import Link from 'next/link'

const Projects = () => {
    const projects = [
        {
            name: 'lapse',
            summary: "An instant time-lapse screen recording app for mac and windows.",
            link: "https://lapse.achuth.dev"
        }
    ]
    return (
        <div className="px-4">
            <div className="flex items-center mt-5">
                <h1 className="text-xl font-semibold flex-1">Apps</h1>
                <a className="p-1 text-gray-400 hover:text-gray-700 text-sm" href="https://achuth.dev/producthunt" target="_blank">View all apps →</a>
            </div>
            <div className="grid grid-cols-1 px-2">
                <div className="mt-5 flex items-center">
                    <div>
                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="5" y="5" width="54.9331" height="54.9331" rx="10" fill="#63E697"/>
<g filter="url(#filter0_d)">
<path d="M21.2447 18.5H44C45.3807 18.5 46.5 19.6193 46.5 21V43.0956C46.5 44.7972 44.8368 46.0017 43.2201 45.4708L24.0029 39.1607C23.1664 38.886 22.536 38.1914 22.3434 37.3322L18.8053 21.5468C18.4551 19.9843 19.6435 18.5 21.2447 18.5Z" stroke="black" stroke-width="5"/>
</g>
<defs>
<filter id="filter0_d" x="13.2427" y="13" width="38.7573" height="38.0993" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>

                    </div>
                    <div>
                    <a href="https://lapse.achuth.dev" target="_blank"><h1 className="font-semibold inline-block rounded-md bg-yellow-50 hover:bg-yellow-100 px-2">Lapse</h1></a>
                    <p className="text-sm leading-relaxed text-gray-600  px-2">
                        An instant time-lapse screen recording app for mac and windows
                </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects