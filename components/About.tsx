import React from 'react'

export default function About({ data }: { data: any }) {

    const achievement = [
        { text: 'Years of Experience', number: '14+' },
        { text: 'Installations Worldwide', number: '250+' },
        { text: 'Projects Completed', number: '750+' },
        { text: 'Active Sites', number: '235+' }
    ];

    return (
        <div id='about' className='p-10 py-12 bg-bgLogoBlue relative'>

            <svg className='absolute right-5 bottom-0 overflow-none' width="500" height="337" viewBox="0 0 500 337" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M454.584 87.5525C454.584 65.1457 436.935 46.9158 415.242 46.9158C393.551 46.9158 375.905 65.1457 375.905 87.5525C375.905 109.959 393.552 128.189 415.242 128.189C436.935 128.189 454.584 109.959 454.584 87.5525ZM396.657 87.5525C396.657 76.9667 404.993 68.3544 415.241 68.3544C425.491 68.3544 433.829 76.9667 433.829 87.5525C433.829 98.1384 425.491 106.751 415.241 106.751C404.995 106.751 396.657 98.1384 396.657 87.5525ZM386.997 229.694C391.086 238.552 397.264 251.938 415.241 251.938C433.217 251.938 439.396 238.555 443.485 229.699C444.015 228.553 454.288 207.599 454.288 207.599C476.405 162.699 500 112.69 500 87.5525C500 39.2766 461.977 0 415.241 0C368.507 0 330.486 39.2766 330.486 87.5525C330.486 112.695 354.08 162.702 376.195 207.599C376.195 207.599 386.469 228.548 386.997 229.694ZM415.242 21.4385C450.534 21.4385 479.247 51.0963 479.247 87.5525C479.247 109.657 449.898 169.242 435.793 197.878C435.793 197.878 425.349 219.182 424.755 220.47C420.6 229.468 419.623 230.5 415.243 230.5C410.866 230.5 409.887 229.468 405.734 220.468C405.139 219.18 394.695 197.876 394.695 197.876C380.591 169.243 351.242 109.66 351.242 87.5525C351.241 51.0963 379.952 21.4385 415.242 21.4385ZM456.658 248.06C450.926 248.06 446.281 252.859 446.281 258.78C446.281 276.228 444.304 293.203 440.566 309.489C400.067 318.48 358.335 324.765 315.792 328.295C317.424 305.9 318.274 282.576 318.274 258.781C318.274 238.2 317.638 217.98 316.411 198.399C319.687 198.092 322.95 197.767 326.206 197.423C331.906 196.821 336.057 191.559 335.474 185.67C334.89 179.781 329.793 175.484 324.096 176.096C321.011 176.421 317.918 176.73 314.814 177.023C310.418 126.467 301.984 81.2556 290.355 46.9277C294.439 48.0938 298.491 49.3884 302.507 50.8105C307.93 52.7257 313.829 49.7445 315.688 44.1431C317.545 38.5429 314.655 32.4472 309.234 30.5285C284.918 21.9233 259.443 17.5605 233.517 17.5605C219.402 17.5605 205.579 18.8599 192.146 21.3516C191.843 21.3945 191.542 21.4504 191.243 21.5207C114.504 36.0715 50.7617 89.5166 19.9387 161.262C19.617 161.856 19.3461 162.489 19.1339 163.157C6.82687 192.488 0 224.828 0 258.78C0 280.196 2.71645 300.972 7.81153 320.755C7.88878 321.131 7.98448 321.502 8.09978 321.866C31.4075 410.633 102.661 479.243 191.24 496.04C191.54 496.11 191.843 496.167 192.149 496.21C205.58 498.701 219.402 500 233.516 500C247.629 500 261.46 498.699 274.892 496.208C275.191 496.165 275.486 496.11 275.779 496.041C364.364 479.243 435.636 410.619 458.94 321.841C459.049 321.493 459.141 321.138 459.215 320.779C464.314 300.99 467.033 280.204 467.033 258.78C467.035 252.859 462.388 248.06 456.658 248.06ZM297.521 258.78C297.521 283.184 296.617 307.034 294.888 329.803C274.586 331.05 254.112 331.677 233.517 331.677C212.922 331.677 192.447 331.05 172.144 329.803C170.416 307.034 169.512 283.183 169.512 258.78C169.512 238.757 170.121 219.103 171.293 200.117C191.739 201.532 212.492 202.24 233.516 202.24C254.353 202.24 275.18 201.517 295.736 200.086C296.912 219.081 297.521 238.744 297.521 258.78ZM200.829 41.5872C211.488 39.8828 222.403 38.9979 233.517 38.9979C244.522 38.9979 255.439 39.8602 266.196 41.5729C279.657 75.1444 289.367 123.453 294.154 178.71C274.123 180.1 253.828 180.803 233.517 180.803C213.027 180.803 192.794 180.113 172.877 178.741C177.662 123.48 187.371 75.167 200.829 41.5872ZM176.665 46.9635C165.042 81.2961 156.609 126.513 152.216 177.06C114.825 173.552 78.6088 167.589 43.8679 159.206C70.6981 104.906 118.759 63.57 176.665 46.9635ZM160.682 405.896C134.061 391.775 111.747 370.168 96.3649 343.782C115.093 346.376 134.015 348.433 153.09 349.948C155.02 369.597 157.567 388.353 160.682 405.896ZM20.7539 258.78C20.7539 230.701 25.8801 203.829 35.2124 179.122C72.1727 188.259 110.761 194.711 150.621 198.437C149.396 218.001 148.76 238.218 148.76 258.781C148.76 282.575 149.611 305.902 151.243 328.295C128.952 326.446 106.888 323.841 85.1047 320.486C77.646 301.411 73.5379 280.583 73.5379 258.781C73.5379 252.86 68.8925 248.062 63.161 248.062C57.4294 248.062 52.784 252.86 52.784 258.781C52.784 278.938 55.8936 298.362 61.6413 316.562C49.8243 314.428 38.096 312.071 26.4704 309.49C22.7313 293.203 20.7539 276.228 20.7539 258.78ZM33.1808 332.834C45.5997 335.431 58.1166 337.777 70.7396 339.878C90.239 381.477 124.241 414.51 165.93 431.934C169.115 445.939 172.705 458.896 176.665 470.595C109.987 451.473 56.371 399.578 33.1808 332.834ZM266.203 475.972C255.545 477.677 244.631 478.561 233.517 478.561C222.403 478.561 211.488 477.677 200.829 475.972C196.558 465.314 192.664 453.173 189.185 439.795C203.376 443.506 218.225 445.476 233.517 445.476C239.248 445.476 243.894 440.677 243.894 434.757C243.894 428.836 239.248 424.037 233.517 424.037C216.116 424.037 199.358 421.154 183.661 415.823C179.648 396.112 176.417 374.435 174.063 351.393C213.422 353.687 253.61 353.687 292.97 351.393C287.861 401.393 278.63 444.967 266.203 475.972ZM290.369 470.596C301.263 438.417 309.355 396.681 313.943 349.949C354.742 346.71 394.825 340.992 433.853 332.835C410.664 399.578 357.046 451.473 290.369 470.596Z" fill="#00CFFF" fill-opacity="0.1" />
            </svg>

            <h1 className='font-bold text-logoBlue text-4xl'>Who We Are</h1>

            <div className='flex pt-5'>
                <div className='w-1/2' >
                    {(data) ? data
                        : (<p>
                            Ionic Engineering Technology Pvt. Ltd., an ISO-9001/2015 certified company, brings over 35 years of expertise in water and wastewater treatment.
                            <br /><br />
                            Founded and managed by Mr. K V Raman, and directed by Mrs. Lalitha Iyer, Ionic is a one-stop-shop for integrated water solutions. For 14 years, we've focused on technology, quality, and performance to "Remove Everything from Water – Except Hydrogen & Oxygen," prioritizing customer peace of mind.
                            <br /><br />
                            We differentiate as business partners, emphasizing techno-economical value engineering. Water efficiency is crucial, often overlooked, leading to operational issues and financial leakage. Ionic addresses water scarcity by providing innovative solutions to reduce industries' water footprint.
                        </p>)}
                </div>
                <div className='w-1/2 grid grid-cols-2'>
                    {achievement.map((item) => (
                        <div className='flex flex-col items-center'>
                            <p className='text-5xl font-bold text-logoBlue'>{item.number}</p>
                            <p className='text-base font-semibold pt-3'>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}