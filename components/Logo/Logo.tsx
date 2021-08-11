import React from 'react';
import styles from './Logo.module.scss';

export type LogoProps = {
  width?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const Logo = ({ width = 112, ...restProps }: LogoProps) => {
  return (
    <div className={styles.container} {...restProps}>
      <svg
        width={width}
        height={width + 13}
        viewBox="0 0 112 125"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Assets"
            transform="translate(-43.000000, -35.000000)"
            fill="var(--font-color)"
            fillRule="nonzero"
          >
            <g
              id="noun_Wolf_450097-(1)"
              transform="translate(43.000000, 35.000000)"
            >
              <path
                d="M64.2750559,102.440423 C64.2750559,107.03358 60.5738198,110.756288 56.001087,110.756288 C51.4318542,110.756288 47.7271182,107.03358 47.7271182,102.440423 C47.7271182,97.8490237 51.4301042,94.1280738 56.001087,94.1280738 C60.5720698,94.1280738 64.2750559,97.8490237 64.2750559,102.440423 Z M41.6161412,50.658376 C39.3341498,50.658376 37.4861567,52.515334 37.4861567,54.8083957 C37.4861567,57.1014574 39.3358998,58.9584154 41.6161412,58.9584154 C43.8998826,58.9584154 45.7443757,57.1014574 45.7443757,54.8083957 C45.7443757,52.515334 43.8998826,50.658376 41.6161412,50.658376 Z M70.3860329,50.658376 C68.1022915,50.658376 66.2577984,52.515334 66.2577984,54.8083957 C66.2577984,57.1014574 68.1040415,58.9584154 70.3860329,58.9584154 C72.6680243,58.9584154 74.5160173,57.1014574 74.5160173,54.8083957 C74.5160173,52.515334 72.6662743,50.658376 70.3860329,50.658376 Z M106.231148,77.6422964 C106.397397,77.3697316 106.526897,77.0760649 106.614397,76.7683304 L111.864377,58.4132857 C112.121626,57.5129424 112.009626,56.5457768 111.556378,55.7280823 L101.968164,38.4808818 C106.355397,16.0918772 106.099898,3.38507962 101.203417,0.708668617 C100.34242,0.237395194 99.3554238,0 98.2704279,0 C91.2512043,0 77.1497574,12.1053964 71.429029,17.2929211 L56.3668357,15.6997355 C56.1218366,15.6715998 55.8785875,15.6715998 55.6335884,15.6997355 L40.5713951,17.2929211 C34.8524167,12.1053964 20.7509697,0 13.7299962,0 C12.6432503,0 11.656254,0.239153677 10.7970072,0.708668617 C5.90052565,3.38507962 5.64502661,16.0918772 10.0322601,38.4808818 L0.444046187,55.7280823 C-0.0109520998,56.5457768 -0.121201685,57.5129424 0.136047347,58.4132857 L5.38602758,76.7683304 C5.47352725,77.0760649 5.60302677,77.3697316 5.76927614,77.6422964 C8.74251495,82.4904339 35.3914146,125 56.001087,125 C76.6107595,125 103.259659,82.4904339 106.231148,77.6422964 Z M7.2672705,57.8804654 L16.7732347,40.7809774 C17.1792332,40.0476901 17.3139827,39.1948258 17.1477333,38.3718558 C14.3722438,24.5202859 13.1734983,10.8269793 14.3389939,7.11130494 C18.2204793,7.97472005 28.8569392,16.010987 37.0066585,23.5443278 C37.7451558,24.2283777 38.747902,24.5624894 39.7418982,24.4534635 L56.001087,22.7336672 L72.2602758,24.4534635 C73.2560221,24.5624894 74.2570183,24.2283777 74.9955155,23.5443278 C83.1382349,16.0180209 93.7641949,7.98702943 97.6631802,7.11306342 C98.8269258,10.8340133 97.6281803,24.5238028 94.8544408,38.3718558 C94.6899414,39.1948258 94.8229409,40.0494485 95.2289394,40.7809774 L104.734904,57.8804654 L100.020421,74.3609673 C92.2767005,86.8831242 70.0360342,117.966068 56.001087,117.966068 C41.9801398,117.966068 19.7289736,86.8831242 11.9817528,74.3609673 L7.2672705,57.8804654 Z"
                id="Shape"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export { Logo };
