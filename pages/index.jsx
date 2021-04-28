import Social from '../components/Social'
import Subscribe from '../components/Subscribe'
import Articles from '../components/Home/Articles'
import Container from '../components/Container'
import Projects from '../components/Home/Projects'

function Home() {
  return (
    <Container>
      <main className="mx-auto mt-10 px-5">
        <div className="flex flex-col sm:flex-row-reverse w-lg">
          <div className="flex flex-1 sm:justify-center">
            <svg className="h-32 w-32 sm:h-48 sm-w-48" viewBox="0 0 222 239" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M145.688 150.787L144.82 154.264C144.82 154.843 144.82 156.089 144.82 156.436C144.82 156.871 145.688 158.175 145.688 158.609C145.688 159.044 145.688 159.478 145.688 160.782C145.688 164.258 145.688 166.866 145.688 167.735C145.688 167.59 145.601 167.474 145.254 168.169C145.688 171.646 145.688 171.646 145.688 173.384C145.688 173.761 145.688 174.036 145.688 174.253V150.787ZM145.688 174.253C145.688 175.036 145.688 175.065 145.688 176.426C145.688 178.164 145.688 179.033 145.688 180.336C145.688 181.64 145.688 181.206 145.688 183.378C145.688 185.116 145.688 187 145.688 187.724C145.688 187.579 145.688 187.55 145.688 188.593C145.688 189.896 146.988 192.504 146.988 193.373C146.988 194.242 146.988 194.676 146.988 195.546C146.988 196.241 146.988 197.863 146.988 198.587L145.688 174.253ZM146.988 174.253C147.682 174.253 148.723 173.673 149.156 173.384L150.457 171.646L153.059 169.907C153.637 169.328 154.88 168.169 155.227 168.169C156.267 167.126 157.106 165.996 157.395 165.562C157.106 165.851 156.701 166.17 157.395 165.127C158.088 164.084 158.55 162.955 158.695 162.52V157.74V155.567C158.407 154.843 158.002 153.221 158.695 152.526C159.562 151.656 159.996 150.353 159.996 149.918C159.996 149.484 159.996 148.615 159.996 148.18C159.996 147.872 160.431 149.306 160.685 150.787L146.988 174.253ZM162.122 157.74C161.994 156.821 161.575 157.506 160.863 156.436C159.996 155.133 160.863 154.264 160.863 152.526C160.863 152.018 160.79 151.398 160.685 150.787L162.122 157.74ZM162.122 157.74C162.15 157.941 162.164 158.219 162.164 158.609C162.164 160.782 162.164 162.086 162.164 162.955C162.164 163.824 163.031 161.216 163.031 165.562C163.031 169.038 163.031 171.066 163.031 171.646C163.031 171.791 163.031 172.515 163.031 174.253C163.031 175.991 163.031 178.164 163.031 179.033L162.164 181.64L162.122 157.74ZM160.685 150.787L158.695 145.138L157.395 143.4C157.25 143.111 156.788 142.357 156.094 141.662C155.227 140.793 153.926 138.186 153.059 137.751C152.365 137.403 151.035 136.158 150.457 135.578L149.156 133.84L146.988 132.971C147.711 132.971 148.376 132.797 145.254 132.102C142.132 131.407 137.304 130.074 135.281 129.495C134.125 128.48 131.639 126.453 130.945 126.453C130.252 126.453 126.898 125.584 125.309 125.149H121.84L118.805 122.107L117.938 121.238L160.685 150.787ZM126.176 162.955L127.91 163.824C128.055 163.679 128.43 163.476 128.777 163.824C129.124 164.171 130.945 165.127 131.812 165.562H132.68H134.414C134.559 165.562 134.934 165.562 135.281 165.562C135.628 165.562 136.293 165.562 136.582 165.562C136.437 165.417 136.322 165.127 137.016 165.127C137.709 165.127 139.039 164.838 139.617 164.693L140.051 162.52L140.484 162.086C140.629 162.955 140.831 164.867 140.484 165.562C140.137 166.257 140.629 169.328 140.918 170.776V173.384L141.352 175.991C141.063 176.571 140.398 177.816 140.051 178.164C139.617 178.598 139.184 179.033 137.883 179.902C136.842 180.597 135.715 181.351 135.281 181.64H133.547H130.945L126.176 180.336V178.164C125.887 177.729 125.309 176.773 125.309 176.426C125.309 176.078 125.309 174.253 125.309 173.384C125.742 172.949 126.523 171.993 126.176 171.646C125.829 171.298 125.453 170.342 125.309 169.907C125.309 169.473 125.309 168.43 125.309 167.735C125.309 167.039 125.887 165.996 126.176 165.562L125.309 164.693L126.176 162.955Z" stroke="black" />
              <path d="M90.1875 119.065H89.3203H88.4531V119.934C88.7419 120.079 89.3203 120.456 89.3203 120.803C89.3203 121.151 89.3203 122.396 89.3203 122.976L89.7539 123.411L90.6211 123.845L92.3555 126.452M91.0547 115.589C91.4016 117.327 90.6211 117.762 90.1875 117.762V118.631H90.6211L91.0547 115.589ZM90.6211 118.631H91.0547V119.065V119.934L90.6211 118.631Z" stroke="black" />
              <path d="M105.797 137.751C105.797 139.489 106.664 139.054 105.797 140.358C104.93 141.662 103.629 141.227 103.629 142.531C101.895 143.921 100.883 143.689 100.594 143.4L99.7266 141.662L98.4258 140.358L95.8242 139.054L94.957 137.751L93.2227 137.316L91.4883 136.447L90.6211 135.143L89.3203 134.274V132.536V130.798C89.3203 130.363 89.2336 129.32 88.8867 128.625C88.5398 127.93 88.4531 126.887 88.4531 126.452V125.149V123.845L88.0195 122.107V120.803V119.5L88.4531 130.798L88.0195 131.667H85.8516L83.25 133.405L82.3828 134.274V135.143L81.082 135.578L77.6133 137.751L75.8789 139.054L75.0117 140.358C75.0117 140.706 73.2773 141.951 72.4102 142.531L71.1094 144.703L69.375 146.007L68.0742 146.876L66.3398 147.745L64.6055 153.394L63.7383 154.698V156.002L62.8711 158.174L62.4375 160.782C62.4375 161.071 62.4375 161.824 62.4375 162.52C62.4375 163.215 61.5703 164.547 61.1367 165.127L62.0039 167.3C61.8593 168.024 61.657 169.559 62.0039 169.907C62.3508 170.255 63.3047 170.921 63.7383 171.211L64.6055 173.818L66.3398 176.425L68.0742 179.032V179.902L72.4102 182.509L75.0117 183.812C75.0117 184.247 75.2719 185.116 76.3125 185.116C77.6133 185.116 78.0469 185.116 78.4805 185.116C78.9141 185.116 80.2148 185.116 80.6484 185.116C80.9953 185.116 81.9492 185.116 82.3828 185.116L83.25 184.682L80.2148 170.776L84.9844 189.896L85.8516 191.2C85.8516 191.924 85.8516 193.546 85.8516 194.242C85.8516 194.937 85.8516 196.559 85.8516 197.283C85.5625 198.298 84.9844 200.499 84.9844 201.194C84.9844 202.063 84.9844 203.367 84.9844 204.671C84.9844 205.714 86.4297 199.022 87.1523 195.545L88.4531 198.152C88.4531 198.587 88.4531 199.63 88.4531 200.325C88.4531 201.194 88.8867 201.194 89.3203 202.063C89.7539 202.932 89.7539 202.063 90.1875 203.802C90.6211 205.54 90.6211 205.54 91.0547 206.843C91.4883 208.147 90.1875 208.582 91.0547 209.016C91.7484 209.364 92.5003 210.03 92.7891 210.32V210.754V211.189V212.058M93.2227 126.452L94.957 128.191C96.6914 129.581 96.5466 128.77 96.2578 128.191C96.5466 128.336 97.2117 128.712 97.5586 129.06C98.2523 130.103 98.7146 130.653 98.8594 130.798H99.7266L100.594 131.667L101.461 132.536V133.405C101.606 133.116 101.981 132.71 102.328 133.405C102.675 134.1 103.34 134.854 103.629 135.143L105.797 136.447L93.2227 126.452ZM105.797 136.447C105.797 136.302 105.797 135.839 105.797 135.143V136.447ZM105.797 136.447L104.93 134.274L105.797 136.447ZM105.797 135.143C105.797 134.448 106.375 133.116 106.664 132.536V131.667L108.398 130.363C108.687 130.218 109.266 129.755 109.266 129.06C109.266 128.364 110.422 127.032 111 126.452C111 126.307 111 125.931 111 125.583C111 125.149 112.301 122.976 112.301 122.542C112.301 120.803 112.879 119.21 113.168 118.631V117.327C113.168 117.182 113.168 116.632 113.168 115.589C113.168 114.988 113.168 114.359 113.168 113.851L105.797 135.143ZM105.797 135.143C106.375 135.289 107.705 135.926 108.398 137.316C109.266 139.054 109.266 139.489 110.133 140.358C111 141.227 112.301 142.096 113.168 140.792C113.862 139.75 113.746 139.489 113.602 139.489C113.602 139.199 113.602 138.359 113.602 137.316C113.602 136.012 114.469 136.012 114.469 135.578C114.469 135.23 114.758 135.143 114.902 135.143C115.047 134.709 115.423 133.753 115.77 133.405C116.203 132.971 116.637 132.536 116.637 131.232C116.637 130.19 116.925 129.349 117.07 129.06C117.359 128.915 118.024 128.451 118.371 127.756C118.718 127.061 118.516 126.598 118.371 126.452V125.149V122.542V120.803V119.5L115.77 116.023L115.336 114.285L114.902 114.72V115.589L113.602 116.892L105.797 135.143ZM113.168 113.851C113.168 113.475 113.168 113.166 113.168 112.982C113.168 112.982 113.168 112.721 113.168 111.678C113.168 110.374 111.434 110.904 112.301 111.678C113.168 112.452 113.168 112.982 113.168 113.851Z" stroke="black" />
              <path d="M104.93 141.662C104.236 141.662 104.062 142.82 104.062 143.4V144.704L106.664 149.049L107.531 182.075L119.238 191.2L120.539 173.384C119.817 171.935 118.284 168.951 117.938 168.604C117.591 168.256 115.191 162.375 114.035 159.478L111.867 155.567V152.96L110.133 149.049V146.877C110.133 146.181 109.844 145.718 109.699 145.573V142.531V140.793C109.699 140.445 109.41 139.779 109.266 139.489H108.398L107.531 139.924L106.664 140.358C106.375 140.793 105.623 141.662 104.93 141.662Z" fill="black" stroke="black" />
              <path d="M63.7383 169.907C63.7383 170.487 63.7383 171.906 63.7383 172.949C63.7383 173.992 63.7383 176.571 63.7383 177.729C64.0273 177.584 64.7789 177.642 65.4727 179.033C66.3398 180.771 65.4727 182.509 65.4727 185.116C65.4727 187.202 66.918 190.041 67.6406 191.2V194.242L70.2422 197.718" stroke="black" />
              <path d="M97.5587 118.631C132.68 110.374 127.792 107.154 131.97 103.505M111.867 100.38C108.832 100.38 88.4532 113.851 84.5509 113.851C80.6486 113.851 50.297 82.129 58.9689 78.2181C67.6407 74.3072 89.3204 33.4599 100.594 68.2236C102.485 78.0563 101.734 85.4991 99.6408 90.9659L111.867 100.38ZM92.8663 100.38C86.4631 105.32 78.9142 104.397 78.9142 100.38C78.9142 94.1225 81.2267 89.9508 82.3829 88.6472C84.0134 91.9497 87.6901 98.0421 91.0548 99.8567L92.8663 100.38ZM92.8663 100.38C95.5321 98.3237 97.9992 95.2523 99.6408 90.9659L92.8663 100.38ZM92.8663 100.38C92.2827 100.38 91.674 100.19 91.0548 99.8567L92.8663 100.38ZM97.5587 100.38C100.594 98.2072 116.637 85.1708 109.699 86.909C107.994 87.3366 104.269 88.9992 99.6408 90.9659L97.5587 100.38ZM99.6408 90.9659C98.7433 92.1418 97.7131 92.5303 96.5224 92.2748L99.6408 90.9659ZM99.6408 90.9659C98.6392 91.3909 97.5969 91.8307 96.5224 92.2748L99.6408 90.9659ZM104.063 83.8672C101.288 83.6517 95.944 83.1159 89.643 82.2662L104.063 83.8672ZM91.0548 99.8567C111.434 88.9044 94.5236 96.0345 70.6759 83.8672C48.4851 76.7687 67.6407 83.8672 63.7384 100.38C59.8361 116.893 63.7384 104.725 58.9689 102.987C54.1993 101.249 62.004 105.594 97.5587 116.893C119.658 123.915 119.813 117.507 104.063 108.834L91.0548 99.8567ZM70.6759 105.594C95.9978 108.723 103.484 109.058 104.063 108.834L70.6759 105.594ZM104.063 108.834C94.4733 103.553 78.9875 97.4328 58.9689 92.9926C6.07044 81.2599 80.9268 90.9659 77.1798 64.3126C75.1565 49.9207 74.8126 48.9174 80.3174 50.0137L104.063 108.834ZM115.77 113.851C118.769 110.696 129.884 105.814 131.97 103.505L115.77 113.851ZM114.301 103.505C116.508 103.653 119.272 103.512 122.707 102.987C131.288 101.676 133.202 102.142 131.97 103.505H114.301ZM114.301 103.505C104.63 102.859 105.69 96.6646 107.965 92.9926C109.988 93.8617 115.076 93.8617 119.238 86.909C124.259 78.5231 117.573 42.617 120.992 68.2236L114.301 103.505ZM114.301 103.505C124.541 114.019 125.742 102.561 121.406 71.2654C121.255 70.1673 121.117 69.1547 120.992 68.2236L114.301 103.505ZM120.992 68.2236C82.3829 75.1763 97.2205 101.509 96.5224 92.2748L120.992 68.2236ZM96.5224 92.2748C82.365 98.1333 62.8267 104.831 63.7384 90.8199C65.0392 70.8308 66.0412 68.2236 67.6407 68.2236C69.2404 68.2236 58.9689 53.0145 73.2775 68.2236C80.1412 75.5193 85.4688 82.3822 89.643 86.909L96.5224 92.2748ZM96.5224 92.2748C94.6606 91.8759 92.4041 89.9039 89.643 86.909L96.5224 92.2748ZM73.2775 53.8836C80.1179 38.3487 90.91 16.279 80.3174 50.0137L73.2775 53.8836ZM89.643 86.909C131.156 122.107 47.6954 84.641 58.9689 61.2708C70.2423 37.9006 65.4291 96.9036 79.7814 51.7108C79.9658 51.1301 80.1445 50.5645 80.3174 50.0137L89.643 86.909ZM37.7228 88.6472C58.9689 88.6472 75.879 113.851 55.0665 92.9926C34.254 72.1345 33.3868 72.1345 37.7228 68.2236C70.6759 59.5326 108.17 4.86209 80.3174 50.0137L37.7228 88.6472ZM80.3174 50.0137C85.0071 50.9478 93.9417 53.4057 109.699 50.4072C143.953 43.889 109.699 66.0508 109.699 72.1345C109.699 75.2602 111.645 77.3535 114.301 79.77L80.3174 50.0137ZM47.2618 110.374C63.4442 109.153 72.4293 111.635 77.1798 114.958L47.2618 110.374ZM89.643 82.2662C70.5234 79.6882 42.5779 74.2214 50.7306 66.0508C61.5704 55.1872 55.5002 56.0563 73.2775 50.4072C91.0548 44.7581 83.4052 44.7581 92.8663 43.889C102.328 43.0199 101.895 26.5072 104.063 43.889C92.2689 78.0239 86.1408 86.7919 84.5509 86.909C72.6994 80.1012 55.6736 70.5701 82.3829 86.909C115.77 107.333 128.344 96.9036 122.707 88.6472C119.967 84.6329 116.816 82.0568 114.301 79.77L89.643 82.2662ZM89.643 82.2662C73.4882 83.2724 77.1798 94.7308 55.0665 118.631C37.3759 137.751 50.297 131.522 58.9689 126.018C65.0392 126.018 77.8073 126.018 80.3174 126.018C82.1538 126.018 83.8851 119.649 77.1798 114.958L89.643 82.2662ZM109.699 80.3908C138.75 98.2072 93.7561 76.0454 114.301 72.1345C130.739 69.0057 126.754 62.1399 122.707 59.0981C122.826 60.5466 120.044 61.097 107.965 51.7108C92.8664 39.9781 86.8862 2.60719 100.594 45.6272C114.301 88.6472 170.976 77.1222 114.301 79.77L109.699 80.3908ZM60.7032 66.0508C89.643 92.9927 88.2304 88.6472 89.643 73.8726C91.0548 59.0981 55.3749 39.8021 70.6759 61.2708C85.977 82.7395 80.8156 86.6781 97.5587 78.2181C114.301 69.7581 119.672 73.4381 115.77 86.909C111.867 100.38 120.539 94.2963 104.063 105.594C87.586 116.893 64.717 109.548 77.1798 114.958L60.7032 66.0508Z" stroke="black" />
              <path d="M120.905 113.167C156.026 104.911 151.139 101.691 155.317 98.0423M135.214 94.9162C132.178 94.9162 111.8 108.387 107.897 108.387C103.995 108.387 73.6434 76.6656 82.3153 72.7547C90.9871 68.8438 112.667 27.9965 123.94 62.7602C125.832 72.5929 125.081 80.0357 122.987 85.5024L135.214 94.9162ZM116.214 94.9162C109.809 99.8561 102.261 98.934 102.261 94.9162C102.261 88.6587 104.573 84.4874 105.729 83.1838C107.36 86.4867 111.036 92.5792 114.401 94.393L116.214 94.9162ZM116.214 94.9162C118.878 92.8608 121.346 89.7886 122.987 85.5024L116.214 94.9162ZM116.214 94.9162C115.63 94.9162 115.02 94.7276 114.401 94.393L116.214 94.9162ZM120.905 94.9162C123.94 92.7435 139.983 79.7074 133.046 81.4456C131.34 81.873 127.615 83.5354 122.987 85.5024L120.905 94.9162ZM122.987 85.5024C122.09 86.6784 121.059 87.0666 119.869 86.8117L122.987 85.5024ZM122.987 85.5024C121.986 85.9277 120.943 86.3673 119.869 86.8117L122.987 85.5024ZM127.409 78.4038C124.634 78.1884 119.291 77.6525 112.989 76.8028L127.409 78.4038ZM114.401 94.393C134.78 83.4412 117.87 90.5707 94.0222 78.4038C71.8316 71.3052 90.9871 78.4038 87.0847 94.9162C83.1826 111.429 87.0847 99.2616 82.3153 97.5235C77.5458 95.7853 85.3505 100.131 120.905 111.429C143.004 118.452 143.16 112.043 127.409 103.371L114.401 94.393ZM94.0222 100.131C119.344 103.259 126.831 103.594 127.409 103.371L94.0222 100.131ZM127.409 103.371C117.82 98.0892 102.334 91.9691 82.3153 87.5289C29.4169 75.7965 104.273 85.5024 100.526 58.8493C98.503 44.4572 98.1587 43.454 103.664 44.5504L127.409 103.371ZM139.116 108.387C142.116 105.232 153.23 100.351 155.317 98.0423L139.116 108.387ZM137.649 98.0423C139.854 98.19 142.619 98.0493 146.053 97.5235C154.634 96.212 156.548 96.6796 155.317 98.0423H137.649ZM137.649 98.0423C127.976 97.3948 129.037 91.2017 131.311 87.5289C133.334 88.398 138.422 88.398 142.585 81.4456C147.606 73.0597 140.919 37.1536 144.338 62.7602L137.649 98.0423ZM137.649 98.0423C147.888 108.555 149.089 97.0985 144.753 65.802C144.601 64.7039 144.463 63.6913 144.338 62.7602L137.649 98.0423ZM144.338 62.7602C105.729 69.7129 120.567 96.046 119.869 86.8117L144.338 62.7602ZM119.869 86.8117C105.711 92.6696 86.1732 99.3677 87.0847 85.3565C88.3855 65.3674 89.388 62.7602 90.9871 62.7602C92.587 62.7602 82.3154 47.5511 96.6238 62.7602C103.488 70.0559 108.816 76.9188 112.989 81.4456L119.869 86.8117ZM119.869 86.8117C118.007 86.4128 115.751 84.4404 112.989 81.4456L119.869 86.8117ZM96.6238 48.4202C103.464 32.8853 114.256 10.8156 103.664 44.5504L96.6238 48.4202ZM112.989 81.4456C154.503 116.643 71.0419 79.1776 82.3153 55.8074C93.5886 32.4372 88.7758 91.4398 103.128 46.2474C103.312 45.6667 103.491 45.1011 103.664 44.5504L112.989 81.4456ZM61.0692 83.1838C82.3153 83.1838 99.2254 108.387 78.413 87.5289C57.6005 66.6711 56.7333 66.6711 61.0692 62.7602C94.0222 54.0693 131.516 -0.601292 103.664 44.5504L61.0692 83.1838ZM103.664 44.5504C108.353 45.4844 117.288 47.9423 133.046 44.9438C167.3 38.4256 133.046 60.5874 133.046 66.6711C133.046 69.7969 134.992 71.8901 137.649 74.3067L103.664 44.5504ZM70.6083 104.911C86.7908 103.69 95.7757 106.172 100.526 109.495L70.6083 104.911ZM112.989 76.8028C93.8696 74.2248 65.9243 68.758 74.0771 60.5874C84.917 49.7238 78.8466 50.5929 96.6238 44.9438C114.401 39.2947 106.752 39.2947 116.214 38.4256C125.675 37.5565 125.241 21.0438 127.409 38.4256C115.615 72.5604 109.487 81.3285 107.897 81.4456C96.0454 74.6378 79.0201 65.1067 105.729 81.4456C139.116 101.869 151.69 91.4398 146.053 83.1838C143.313 79.1695 140.163 76.5934 137.649 74.3067L112.989 76.8028ZM112.989 76.8028C96.8345 77.809 100.526 89.2671 78.413 113.167C60.7224 132.287 73.6434 126.059 82.3153 120.554C88.3855 120.554 101.154 120.554 103.664 120.554C105.5 120.554 107.231 114.187 100.526 109.495L112.989 76.8028ZM133.046 74.9274C162.096 92.7435 117.102 70.582 137.649 66.6711C154.085 63.5424 150.101 56.6765 146.053 53.6347C146.172 55.0832 143.39 55.6336 131.311 46.2474C116.214 34.5147 110.233 -2.85619 123.94 40.1638C137.649 83.1838 194.322 71.6588 137.649 74.3067L133.046 74.9274ZM84.0497 60.5874C112.989 87.5289 111.577 83.1838 112.989 68.4093C114.401 53.6347 78.7213 34.3387 94.0222 55.8074C109.324 77.2762 104.162 81.2147 120.905 72.7547C137.649 64.2947 143.018 67.9747 139.116 81.4456C135.214 94.9162 143.886 88.8325 127.409 100.131C110.932 111.429 88.0638 104.084 100.526 109.495L84.0497 60.5874Z" stroke="black" />
              <path d="M88.8191 113.167C123.94 104.911 119.053 101.691 123.231 98.0423M103.128 94.9162C100.093 94.9162 79.7137 108.387 75.8114 108.387C71.909 108.387 41.5575 76.6656 50.2294 72.7547C58.9012 68.8438 80.581 27.9965 91.8543 62.7602C93.7456 72.5929 92.9946 80.0357 90.9012 85.5024L103.128 94.9162ZM84.1272 94.9162C77.7236 99.8561 70.1748 98.934 70.1748 94.9162C70.1748 88.6587 72.4872 84.4874 73.6435 83.1838C75.2739 86.4867 78.9505 92.5792 82.3153 94.393L84.1272 94.9162ZM84.1272 94.9162C86.7925 92.8608 89.2596 89.7886 90.9012 85.5024L84.1272 94.9162ZM84.1272 94.9162C83.5437 94.9162 82.9347 94.7276 82.3153 94.393L84.1272 94.9162ZM88.8191 94.9162C91.8543 92.7435 107.897 79.7074 100.96 81.4456C99.254 81.873 95.5294 83.5354 90.9012 85.5024L88.8191 94.9162ZM90.9012 85.5024C90.0037 86.6784 88.9735 87.0666 87.7828 86.8117L90.9012 85.5024ZM90.9012 85.5024C89.9005 85.9277 88.8573 86.3673 87.7828 86.8117L90.9012 85.5024ZM95.323 78.4038C92.548 78.1884 87.2053 77.6525 80.9032 76.8028L95.323 78.4038ZM82.3153 94.393C102.694 83.4412 85.784 90.5707 61.9364 78.4038C39.7457 71.3052 58.9013 78.4038 54.999 94.9162C51.0966 111.429 54.999 99.2616 50.2294 97.5235C45.4598 95.7853 53.2645 100.131 88.8191 111.429C110.919 118.452 111.074 112.043 95.323 103.371L82.3153 94.393ZM61.9364 100.131C87.2582 103.259 94.7446 103.594 95.323 103.371L61.9364 100.131ZM95.323 103.371C85.7336 98.0892 70.248 91.9691 50.2294 87.5289C-2.66904 75.7965 72.1873 85.5024 68.4403 58.8493C66.4171 44.4572 66.0731 43.454 71.5779 44.5504L95.323 103.371ZM107.03 108.387C110.03 105.232 121.144 100.351 123.231 98.0423L107.03 108.387ZM105.563 98.0423C107.768 98.19 110.533 98.0493 113.968 97.5235C122.548 96.212 124.462 96.6796 123.231 98.0423H105.563ZM105.563 98.0423C95.8902 97.3948 96.9507 91.2017 99.2254 87.5289C101.249 88.398 106.336 88.398 110.499 81.4456C115.52 73.0597 108.833 37.1536 112.252 62.7602L105.563 98.0423ZM105.563 98.0423C115.802 108.555 117.003 97.0985 112.667 65.802C112.515 64.7039 112.377 63.6913 112.252 62.7602L105.563 98.0423ZM112.252 62.7602C73.6435 69.7129 88.4809 96.046 87.7828 86.8117L112.252 62.7602ZM87.7828 86.8117C73.6255 92.6696 54.0872 99.3677 54.999 85.3565C56.2998 65.3674 57.3017 62.7602 58.9013 62.7602C60.5009 62.7602 50.2295 47.5511 64.538 62.7602C71.4017 70.0559 76.7293 76.9188 80.9032 81.4456L87.7828 86.8117ZM87.7828 86.8117C85.9207 86.4128 83.6644 84.4404 80.9032 81.4456L87.7828 86.8117ZM64.538 48.4202C71.3784 32.8853 82.1703 10.8156 71.5779 44.5504L64.538 48.4202ZM80.9032 81.4456C122.417 116.643 38.9559 79.1776 50.2294 55.8074C61.5028 32.4372 56.6896 91.4398 71.0419 46.2474C71.2263 45.6667 71.405 45.1011 71.5779 44.5504L80.9032 81.4456ZM28.9833 83.1838C50.2294 83.1838 67.1395 108.387 46.327 87.5289C25.5145 66.6711 24.6473 66.6711 28.9833 62.7602C61.9364 54.0693 99.43 -0.601292 71.5779 44.5504L28.9833 83.1838ZM71.5779 44.5504C76.2676 45.4844 85.2023 47.9423 100.96 44.9438C135.214 38.4256 100.96 60.5874 100.96 66.6711C100.96 69.7969 102.906 71.8901 105.563 74.3067L71.5779 44.5504ZM38.5223 104.911C54.7047 103.69 63.6898 106.172 68.4403 109.495L38.5223 104.911ZM80.9032 76.8028C61.7839 74.2248 33.8384 68.758 41.9912 60.5874C52.831 49.7238 46.7607 50.5929 64.538 44.9438C82.3153 39.2947 74.6657 39.2947 84.1272 38.4256C93.5886 37.5565 93.1551 21.0438 95.323 38.4256C83.5294 72.5604 77.4013 81.3285 75.8114 81.4456C63.9599 74.6378 46.9341 65.1067 73.6435 81.4456C107.03 101.869 119.604 91.4398 113.968 83.1838C111.227 79.1695 108.077 76.5934 105.563 74.3067L80.9032 76.8028ZM80.9032 76.8028C64.7488 77.809 68.4403 89.2671 46.327 113.167C28.6365 132.287 41.5575 126.059 50.2294 120.554C56.2997 120.554 69.0678 120.554 71.5779 120.554C73.4143 120.554 75.1456 114.187 68.4403 109.495L80.9032 76.8028ZM100.96 74.9274C130.011 92.7435 85.0166 70.582 105.563 66.6711C121.999 63.5424 118.015 56.6765 113.968 53.6347C114.086 55.0832 111.304 55.6336 99.2254 46.2474C84.1272 34.5147 78.1464 -2.85619 91.8543 40.1638C105.563 83.1838 162.236 71.6588 105.563 74.3067L100.96 74.9274ZM51.9637 60.5874C80.9032 87.5289 79.491 83.1838 80.9032 68.4093C82.3153 53.6347 46.6354 34.3387 61.9364 55.8074C77.2375 77.2762 72.0761 81.2147 88.8191 72.7547C105.563 64.2947 110.932 67.9747 107.03 81.4456C103.128 94.9162 111.8 88.8325 95.323 100.131C78.8465 111.429 55.9775 104.084 68.4403 109.495L51.9637 60.5874Z" stroke="black" />
            </svg>
          </div>
          <div className="flex:1">
            <h1 className="text-3xl py-2">Achuth Hadnoor</h1>
            <h3 className="text-lg pb-5">Developer {'&'} UI/UX Designer</h3>
            <p className="text-sm max-w-prose leading-loose">
              👋 Hey, I am a
        <a target="_blank" rel="noopener" href="https://achuth.dev/dribbble" className="p-1 ml-1 bg-yellow-50 hover:bg-yellow-100 rounded-md text-yellow-600">designer</a>, <a target="_blank" rel="noopener" href="https://achuth.dev/github" className="p-1 ml-1 bg-yellow-50 hover:bg-yellow-100 rounded-md text-yellow-600">developer</a>,
        <a target="_blank" rel="noopener" href="https://achuth.dev/medium" className="p-1 ml-1 bg-yellow-50 hover:bg-yellow-100 rounded-md text-yellow-600">writer</a>
        and <a target="_blank" rel="noopener" href="https://achuth.dev/producthunt" className="p-1 ml-1 bg-yellow-50 hover:bg-yellow-100 rounded-md text-yellow-600">maker</a>. I craft digital products that are used by hundreds of creators
      </p>
            <div className="mt-5 flex items-center">
              <hr className="w-16" />
              <Social />
            </div>
          </div>
        </div>
      </main>
      <section id="articles" className="px-4 mt-10">
        <Articles />
      </section>
      <section>
        <Projects/>
      </section>
      <section className="px-4 mt-10" id="newsletter">
        <Subscribe />
      </section>
    </Container>)
}

export default Home;