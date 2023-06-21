import React from 'react'

export function MobileSpecialPage(props) {
  const { specialtyMobileFocuse, ...rest } = props
  return (
    <svg
      width={105}
      height={222}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      viewBox="0 0 105 222"
      className="page-mobile-svg"
    >
      <g
        className={specialtyMobileFocuse === false ? '' : 'page-mobile-menu'}
        style={
          specialtyMobileFocuse === false
            ? {
                display: 'none',
              }
            : {}
        }
      >
        <rect width={169} height={25} rx={12.5} fill="#D9D9D9" />
      </g>
      <g
        className={specialtyMobileFocuse === false ? '' : 'page-mobile'}
        style={
          specialtyMobileFocuse === false
            ? {
                display: 'none',
              }
            : {}
        }
      >
        <rect x={287} y={144} width={37} height={37} rx={5} fill="#D9D9D9" />
        <rect x={345} y={144} width={37} height={37} rx={5} fill="#D9D9D9" />
        <rect x={461} y={144} width={37} height={37} rx={5} fill="#D9D9D9" />
        <rect x={403} y={144} width={37} height={37} rx={5} fill="#D9D9D9" />
        <rect x={288} y={202} width={37} height={37} rx={5} fill="#D9D9D9" />
        <rect x={346} y={202} width={37} height={37} rx={5} fill="#D9D9D9" />
        <rect x={462} y={202} width={37} height={37} rx={5} fill="#D9D9D9" />
        <rect x={404} y={202} width={37} height={37} rx={5} fill="#D9D9D9" />
        <rect x={288} y={86} width={37} height={37} rx={5} fill="#D9D9D9" />
        <rect x={346} y={86} width={37} height={37} rx={5} fill="#D9D9D9" />
        <rect x={462} y={86} width={37} height={37} rx={5} fill="#D9D9D9" />
        <rect x={404} y={86} width={37} height={37} rx={5} fill="#D9D9D9" />
        <rect x={279} y={314} width={103} height={56} rx={5} fill="#D9D9D9" />
        <rect x={279} y={389} width={103} height={56} rx={5} fill="#D9D9D9" />
        <rect x={279} y={1} width={228} height={52} rx={5} fill="#D9D9D9" />
        <rect x={279} y={265} width={99} height={6} rx={3} fill="#D9D9D9" />
        <rect x={392} y={314} width={99} height={6} rx={3} fill="#D9D9D9" />
        <rect x={392} y={389} width={76} height={6} rx={3} fill="#D9D9D9" />
        <rect x={279} y={274} width={99} height={6} rx={3} fill="#D9D9D9" />
        <rect x={392} y={323} width={81} height={6} rx={3} fill="#D9D9D9" />
        <rect x={392} y={398} width={99} height={6} rx={3} fill="#D9D9D9" />
        <rect x={279} y={283} width={63} height={6} rx={3} fill="#D9D9D9" />
        <rect x={392} y={332} width={63} height={6} rx={3} fill="#D9D9D9" />
        <rect x={392} y={407} width={63} height={6} rx={3} fill="#D9D9D9" />
        <rect x={426} y={269} width={63} height={16} rx={5} fill="#D9D9D9" />
        <rect y={1} width={99} height={99} rx={5} fill="#D9D9D9" />
        <rect y={389} width={228} height={56} rx={5} fill="#D9D9D9" />
        <rect y={152} width={99} height={99} rx={5} fill="#D9D9D9" />
        <rect x={129} y={1} width={99} height={99} rx={5} fill="#D9D9D9" />
        <rect x={129} y={152} width={99} height={99} rx={5} fill="#D9D9D9" />
        <rect y={341} width={178} height={6} rx={3} fill="#D9D9D9" />
        <rect y={114} width={99} height={6} rx={3} fill="#D9D9D9" />
        <rect y={265} width={99} height={6} rx={3} fill="#D9D9D9" />
        <rect x={129} y={114} width={99} height={6} rx={3} fill="#D9D9D9" />
        <rect x={129} y={265} width={99} height={6} rx={3} fill="#D9D9D9" />
        <rect y={350} width={178} height={6} rx={3} fill="#D9D9D9" />
        <rect y={123} width={99} height={6} rx={3} fill="#D9D9D9" />
        <rect y={274} width={99} height={6} rx={3} fill="#D9D9D9" />
        <rect x={129} y={123} width={99} height={6} rx={3} fill="#D9D9D9" />
        <rect x={129} y={274} width={99} height={6} rx={3} fill="#D9D9D9" />
        <rect y={359} width={113} height={6} rx={3} fill="#D9D9D9" />
        <rect y={132} width={63} height={6} rx={3} fill="#D9D9D9" />
        <rect y={283} width={63} height={6} rx={3} fill="#D9D9D9" />
        <rect x={129} y={132} width={63} height={6} rx={3} fill="#D9D9D9" />
        <rect x={129} y={283} width={63} height={6} rx={3} fill="#D9D9D9" />
        <path
          d="M616.24 59.8V78h-2.99V64.74l-4.55 10.27h-2.34l-4.55-10.27V78h-2.99V59.8h3.484l5.226 11.752 5.226-11.752h3.484zm18.839 15.808c-1.82 1.82-4.048 2.73-6.682 2.73-2.635 0-4.871-.91-6.708-2.73-1.82-1.837-2.73-4.073-2.73-6.708s.91-4.862 2.73-6.682c1.837-1.837 4.073-2.756 6.708-2.756 2.634 0 4.862.919 6.682 2.756 1.837 1.82 2.756 4.047 2.756 6.682 0 2.635-.919 4.87-2.756 6.708zm-11.284-2.028c1.248 1.23 2.782 1.846 4.602 1.846 1.82 0 3.345-.615 4.576-1.846 1.248-1.248 1.872-2.808 1.872-4.68 0-1.872-.624-3.423-1.872-4.654-1.231-1.248-2.756-1.872-4.576-1.872-1.82 0-3.354.624-4.602 1.872-1.231 1.23-1.846 2.782-1.846 4.654 0 1.872.615 3.432 1.846 4.68zm28.727-6.786a5.475 5.475 0 012.366 2.158c.59.953.884 2.02.884 3.198 0 1.647-.546 3.033-1.638 4.16-1.092 1.127-2.461 1.69-4.108 1.69h-9.464V59.8H648.024c1.508 0 2.739.45 3.692 1.352.971.901 1.456 2.037 1.456 3.406 0 .78-.216 1.525-.65 2.236zm-4.498-4.186h-4.472v3.562h6.058c.382-.416.572-.91.572-1.482 0-.607-.199-1.1-.598-1.482-.381-.399-.901-.598-1.56-.598zm1.612 12.584c.988 0 1.76-.303 2.314-.91.555-.607.832-1.36.832-2.262 0-.919-.277-1.673-.832-2.262-.537-.607-1.3-.91-2.288-.91h-6.11v6.344h6.084zm8.725-15.392h2.99V78h-2.99V59.8zm9.617 15.34h7.28V78h-10.27V59.8h2.99v15.34zm12.492 0h7.67V78h-10.66V59.8H688.01v2.86h-7.54v4.732h6.89V70.2h-6.89v4.94zm24.561-15.34c2.496 0 4.567.875 6.214 2.626 1.664 1.75 2.496 3.909 2.496 6.474 0 2.548-.832 4.706-2.496 6.474-1.647 1.75-3.718 2.626-6.214 2.626h-7.67V59.8h7.67zm0 15.34c1.716 0 3.111-.59 4.186-1.768 1.092-1.179 1.638-2.67 1.638-4.472 0-1.82-.546-3.31-1.638-4.472-1.075-1.179-2.47-1.768-4.186-1.768h-4.68v12.48h4.68zm14.439 0h7.67V78h-10.66V59.8H727.01v2.86h-7.54v4.732h6.89V70.2h-6.89v4.94zM734.359 78l-6.188-18.2h3.25l4.732 14.664 4.758-14.664h3.224L737.947 78h-3.588z"
          fill="#FFD369"
        />
        <rect x={558} width={27} height={27} rx={5} fill="#D9D9D9" />
        <rect x={597} width={27} height={27} rx={5} fill="#D9D9D9" />
        <rect x={636} width={27} height={27} rx={5} fill="#D9D9D9" />
        <rect x={558} y={382} width={100} height={56} rx={5} fill="#D9D9D9" />
        <rect x={686} y={382} width={100} height={56} rx={5} fill="#D9D9D9" />
        <rect x={557} y={152} width={229} height={99} rx={5} fill="#D9D9D9" />
        <rect x={558} y={329} width={192} height={6} rx={3} fill="#D9D9D9" />
        <rect x={558} y={320} width={178} height={6} rx={3} fill="#D9D9D9" />
        <rect x={558} y={311} width={214} height={6} rx={3} fill="#D9D9D9" />
        <rect x={558} y={111} width={228} height={6} rx={3} fill="#D9D9D9" />
        <rect x={597} y={277} width={149} height={12} rx={5} fill="#D9D9D9" />
        <rect x={558} y={338} width={178} height={6} rx={3} fill="#D9D9D9" />
        <rect x={558} y={120} width={228} height={6} rx={3} fill="#D9D9D9" />
        <rect x={558} y={347} width={113} height={6} rx={3} fill="#D9D9D9" />
        <rect x={558} y={129} width={145} height={6} rx={3} fill="#D9D9D9" />
      </g>
    </svg>
  )
}
