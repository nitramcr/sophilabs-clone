import { Button } from './Button'

export function InfoCard() {
  return (
    <section className='w-full flex justify-center'>
      <div className='w-full bg-[#0D172D] md:rounded-2xl'>
        <div className='flex flex-col md:flex-row px-8 py-4 md:px-14 md:py-16'>
          <div className='w-full md:w-1/2 text-start'>
            <div className='py-10'>
              <h1 className='text-[38px] md:text-[52px] font-semibold bg-gradient-to-r from-[#9FF6D1] to-[#65AEFE] text-transparent bg-clip-text tracking-wide'>
                Add value right away.
              </h1>
              <p className='text-[#8193B2] text-xl'>
                We’re experienced in staff augmentation and know how to get up
                to speed quickly, delivering business value from the get-go.
              </p>
              <p className='text-[#8193B2] py-5 text-xl'>
                Our engineers have extensive experience in technologies such as
                React, Angular, Javascript, Python, Django, and .Net, as well as
                QA and DevOps practices. We guarantee that they will integrate
                seamlessly into client teams and boost their projects.
              </p>
              <Button title='Staff Augmentation >' white />
            </div>
          </div>

          <div className='bg-blue-100 w-full md:w-1/2 flex justify-center items-center'>
            <h1 className='text-blue-400 text-5xl'>Images Banner</h1>
          </div>
        </div>

        <div className='flex flex-col md:flex-row px-8 py-12 md:px-12 md:py-20 gap-12'>
          <div className='w-full md:w-1/3 text-start'>
            <div className='flex justify-center items-center w-[45px] h-[45px]'>
              <h3 className='text-white bg-white'>
                <svg
                  width='50'
                  height='50'
                  viewBox='0 0 512 512'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M503.924 477.336H485.925L443.781 405.647C443.093 404.478 442.124 403.501 440.961 402.804L415.38 387.537L341.027 222.823C339.525 219.502 337.273 216.574 334.448 214.27C331.624 211.966 328.304 210.348 324.749 209.543C321.194 208.738 317.5 208.768 313.959 209.631C310.418 210.494 307.124 212.166 304.338 214.515L295.62 221.849L265.812 150.044C263.9 145.483 260.303 141.836 255.769 139.863V27.0763C255.769 24.9343 254.918 22.8801 253.404 21.3655C251.889 19.8509 249.835 19 247.693 19C245.551 19 243.497 19.8509 241.982 21.3655C240.468 22.8801 239.617 24.9343 239.617 27.0763V31.5898H174.693C173.171 31.5895 171.681 32.0189 170.393 32.8286C169.105 33.6383 168.072 34.7952 167.412 36.1663C166.753 37.5374 166.495 39.0667 166.666 40.5783C166.838 42.0899 167.434 43.5222 168.384 44.7103L182.621 62.5058L168.199 81.9489C167.309 83.1512 166.77 84.5771 166.642 86.0677C166.514 87.5582 166.803 89.055 167.476 90.3913C168.148 91.7276 169.179 92.8509 170.452 93.6361C171.725 94.4213 173.192 94.8377 174.688 94.8387H239.617V140.371C235.867 142.331 232.856 145.457 231.037 149.278L192.774 231.014L157.238 306.913C154.293 305.281 150.988 304.404 147.621 304.361C144.229 304.269 140.871 305.046 137.865 306.618C134.858 308.19 132.304 310.504 130.444 313.342L19.7108 477.336H8.07629C5.93433 477.336 3.88009 478.187 2.36549 479.702C0.850891 481.217 0 483.271 0 485.413C0 487.555 0.850891 489.609 2.36549 491.124C3.88009 492.638 5.93433 493.489 8.07629 493.489H503.924C506.066 493.489 508.12 492.638 509.635 491.124C511.149 489.609 512 487.555 512 485.413C512 483.271 511.149 481.217 509.635 479.702C508.12 478.187 506.066 477.336 503.924 477.336V477.336ZM467.184 477.336H379.613L328.239 428.999C327.37 428.179 326.33 427.562 325.193 427.194L213.842 391.169L168.739 320.393L182.478 291.06C186.152 295.029 190.953 297.778 196.235 298.938C205.927 300.876 215.859 296.631 225.772 286.265C228.771 283.127 230.631 282.476 231.185 282.541C234.716 283.058 240.803 295.002 244.435 302.141C251.966 316.909 260.5 333.68 276.052 334.091H276.615C288.033 334.091 299.455 324.99 312.7 305.118L333.712 355.74C334.376 357.345 335.542 358.692 337.035 359.58L430.909 415.615L467.184 477.336ZM245.662 156.131C245.871 155.655 246.213 155.251 246.647 154.965C247.082 154.68 247.589 154.527 248.108 154.525C248.693 154.482 249.275 154.625 249.773 154.935C250.271 155.244 250.657 155.703 250.877 156.246L286.413 241.772L305.127 286.847C288.051 315.501 279.098 317.952 276.565 317.952H276.468C270.528 317.795 263.762 304.518 258.824 294.822C252.446 282.329 244.896 266.398 231.037 266.398C227.762 266.612 224.567 267.498 221.648 268.999C218.73 270.5 216.151 272.585 214.073 275.125C210.085 279.301 204.321 284.087 199.429 283.127C195.358 281.587 192.054 278.512 190.227 274.562L210.071 232.177L245.662 156.131ZM314.735 226.884C315.612 226.141 316.65 225.611 317.766 225.336C318.882 225.062 320.046 225.049 321.168 225.301C322.29 225.552 323.338 226.06 324.23 226.785C325.122 227.509 325.834 228.431 326.31 229.477L391.123 373.069L347.585 347.087L321.75 284.858C321.704 284.715 321.649 284.576 321.593 284.438L321.561 284.332L302.113 237.498L314.735 226.884ZM190.734 78.6861L199.304 67.1485C200.366 65.7158 200.925 63.9721 200.892 62.1891C200.859 60.406 200.238 58.6838 199.124 57.2909L191.496 47.7562H239.617V78.6769L190.734 78.6861ZM143.818 322.382C144.216 321.804 144.75 321.331 145.372 321.005C145.995 320.679 146.687 320.511 147.39 320.513C148.094 320.518 148.785 320.7 149.4 321.043C150.015 321.386 150.533 321.878 150.907 322.475L201.778 402.315C202.787 403.897 204.316 405.078 206.102 405.656L318.492 442.018L356.045 477.35H39.1862L143.818 322.382Z'></path>
                </svg>
              </h3>
            </div>

            <h1 className='text-white text-2xl tracking-wide'>Top Talent</h1>
            <p className='text-[#8193B2]'>
              Our selection process ensures that we only work with the top 3% of
              IT talent to guarantee high-quality software.
            </p>
          </div>

          <div className='w-full md:w-1/3 text-start'>
            <div className='bg-white w-[40px] h-[40px]'>
              <h3>img</h3>
            </div>
            <h1 className='text-white text-2xl tracking-wide'>
              Time Zone Convenience
            </h1>
            <p className='text-[#8193B2]'>
              We are located in Latin America, which facilitates collaboration
              with teams in the U.S during normal working hours.
            </p>
          </div>

          <div className='w-full md:w-1/3 text-start'>
            <div className='bg-white w-[40px] h-[40px]'>
              <h3>img</h3>
            </div>
            <h1 className='text-white text-2xl tracking-wide'>
              English Proficiency
            </h1>
            <p className='text-[#8193B2]'>
              Our team has a high level of spoken and written English, so there
              is no language barrier.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
