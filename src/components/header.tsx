import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import Grid from './grid'

const Header = styled.div({
  marginTop: '20px',
})

const Menu = styled.a({
  gridColumn:  '1 / span 1',
})

const Logo = styled.div({
  gridColumn:  '2 / span 2',
  justifySelf: 'center',
})

const Search = styled.a({
  gridColumn:  '4 / span 1',
  justifySelf: 'end',
})

export default () => (
  <Header>
    <Grid>
      <Menu>
        <svg width="24px" height="18px" viewBox="0 0 24 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
            <g id="Designs" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Design-Template:-Long-Form" transform="translate(-20.000000, -23.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <g id="navbar" transform="translate(8.000000, 8.000000)">
                        <g id="icons/menu">
                            <g transform="translate(12.000000, 12.000000)">
                              <path d="M23.6785714,4.82022472 C23.8559745,4.82022472 24,4.68429051 24,4.51685393 L24,3.30337079 C24,3.13593421 23.8559745,3 23.6785714,3 L0.321428571,3 C0.14402553,3 0,3.13593421 0,3.30337079 L0,4.51685393 C0,4.68429051 0.14402553,4.82022472 0.321428571,4.82022472 L23.6785714,4.82022472 Z M23.6785714,12.9101124 C23.8559745,12.9101124 24,12.7741782 24,12.6067416 L24,11.3932584 C24,11.2258218 23.8559745,11.0898876 23.6785714,11.0898876 L0.321428571,11.0898876 C0.14402553,11.0898876 0,11.2258218 0,11.3932584 L0,12.6067416 C0,12.7741782 0.14402553,12.9101124 0.321428571,12.9101124 L23.6785714,12.9101124 Z M23.6785714,21 L0.321428571,21 C0.14402553,21 0,20.8640658 0,20.6966292 L0,19.4831461 C0,19.3157095 0.14402553,19.1797753 0.321428571,19.1797753 L23.6785714,19.1797753 C23.8559745,19.1797753 24,19.3157095 24,19.4831461 L24,20.6966292 C24,20.8640658 23.8559745,21 23.6785714,21 Z" />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
      </Menu>
      <Logo>
        <Link to="/" >
          <svg width="49px" height="32px" viewBox="0 0 49 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
              <g id="Designs" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Design-Template:-Long-Form" transform="translate(-163.000000, -16.000000)" fill="#FFFFFF">
                      <g id="navbar" transform="translate(8.000000, 8.000000)">
                          <g id="Logo/Mark/Black" transform="translate(155.000000, 8.000000)">
                            <path d="M13.4495705,0 C20.8662709,0 26.8998255,6.02944819 26.8998255,13.4482017 C26.8998255,20.555296 21.3556225,26.3770884 14.3674265,26.8484589 L14.1339574,26.8621841 L14.1339574,31.9198029 L36.3416266,31.9191185 L36.3416266,27.9749971 C35.3649609,28.5492433 34.2619057,28.8796531 33.1209336,28.9211555 L32.8758915,28.9256104 C29.0884946,28.9256104 26.0067006,25.8438164 26.0067006,22.0564196 C26.0067006,20.4693264 26.5535257,18.9479345 27.5547837,17.7215132 C27.289926,17.0528673 27.1564705,16.3520551 27.1564705,15.6320802 C27.1564705,13.0095097 28.9707801,10.724342 31.4674234,10.0837559 C31.569397,7.10598872 34.0236083,4.71542543 37.0260134,4.71542543 C40.0284186,4.71542543 42.4826298,7.1066731 42.5846035,10.0837559 C45.0805624,10.7236576 46.8962407,13.0095097 46.8962407,15.6320802 C46.8962407,16.3513707 46.7621009,17.0514985 46.4979275,17.7215132 C47.4991855,18.9472501 48.0453262,20.4693264 48.0453262,22.0564196 C48.0453262,25.8438164 44.9642166,28.9256104 41.1754509,28.9256104 C40.0295136,28.9256104 38.9157698,28.6334837 37.9215794,28.0943012 L37.7104003,27.9749971 L37.7097159,31.9191185 L12.7651837,31.9198029 L12.7651837,26.8621841 C5.66809196,26.5063029 0,20.6342637 0,13.4482017 C0,6.02944819 6.03355454,0 13.4495705,0 Z M37.0260127,6.08419878 C34.7141539,6.08419878 32.8327743,7.96557818 32.8327743,10.2774369 C32.8327743,10.3814637 32.8416713,10.4834373 32.8491996,10.5867798 C32.8765751,10.9460828 32.6212988,11.2677446 32.2640488,11.3190737 C30.1328681,11.6243102 28.5252433,13.4789985 28.5252433,15.6320795 C28.5252433,16.2952503 28.675124,16.9378896 28.9707791,17.5428875 C29.0953376,17.7974794 29.050168,18.102716 28.8564865,18.3100852 C27.9017668,19.3346122 27.3754733,20.6650603 27.3754733,22.0564187 C27.3754733,25.0889367 29.8433724,27.5568357 32.8758907,27.5568357 C34.0668849,27.5568357 35.2154424,27.1639929 36.1657954,26.449059 L36.3416259,26.3112516 L36.3416259,20.5322892 C34.2343986,20.2030991 32.6151393,18.3867365 32.6151393,16.1966986 C32.6151393,15.8182327 32.9210602,15.5123118 33.2995262,15.5123118 C33.6773077,15.5123118 33.9839131,15.8182327 33.9839131,16.1966986 C33.9839131,17.581048 34.9249654,18.7446488 36.2033885,19.1029158 L36.3416259,19.1381932 L36.3416259,11.9842977 C36.3416259,11.6058317 36.6475468,11.2999108 37.0260127,11.2999108 C37.3774454,11.2999108 37.6663265,11.5636896 37.7058022,11.9043933 L37.7103996,11.9842977 L37.7103996,22.7442275 C39.4569549,22.42325 40.7846655,20.8998049 40.7846655,19.0704389 C40.7846655,18.6926574 41.0905864,18.3860521 41.4690524,18.3860521 C41.8475183,18.3860521 42.1534393,18.6926574 42.1534393,19.0704389 C42.1534393,21.5979251 40.2991314,23.6968398 37.8764482,24.1023629 L37.7103996,24.1273732 L37.7103996,26.3112516 C38.6924948,27.113353 39.9107034,27.5568357 41.1754504,27.5568357 C44.2093374,27.5568357 46.6765522,25.0889367 46.6765522,22.0564187 C46.6765522,20.6650603 46.150943,19.3346122 45.1955389,18.3100852 C45.0025418,18.102716 44.9573723,17.7981638 45.0812463,17.5435719 C45.3769015,16.9372052 45.5274666,16.2938816 45.5274666,15.6320795 C45.5274666,13.4789985 43.9198418,11.6243102 41.788661,11.3190737 C41.4327799,11.2677446 41.1768192,10.9508735 41.2028259,10.5929392 C41.2117229,10.4711184 41.2192512,10.3746198 41.2192512,10.2774369 C41.2192512,7.96557818 39.3378716,6.08419878 37.0260127,6.08419878 Z M13.4495707,1.36877372 C6.78774895,1.36877372 1.36877374,6.78911783 1.36877374,13.4482022 C1.36877374,19.8057537 6.30407963,25.0136945 12.5418584,25.4788222 L12.7651839,25.4934113 L12.7651839,15.1728571 C9.86954302,14.8306637 7.61448829,12.3805587 7.61448829,9.40347572 C7.61448829,9.02706293 7.9210936,8.71908884 8.29887516,8.71908884 C8.67734109,8.71908884 8.98326202,9.02706293 8.98326202,9.40347572 C8.98326202,11.5654539 10.5466424,13.3696046 12.6058253,13.7629395 L12.7651839,13.7903956 L12.7651839,6.41954891 C12.7651839,6.04313613 13.0711048,5.73516203 13.4495707,5.73516203 C13.8010034,5.73516203 14.0898845,6.00071112 14.1293602,6.34002385 L14.1339576,6.41954891 L14.1339576,19.7034983 C16.820176,19.3681487 18.9061872,17.0822965 18.9061872,14.3242174 C18.9061872,13.9478046 19.2127925,13.6398305 19.5905741,13.6398305 C19.96904,13.6398305 20.274961,13.9478046 20.274961,14.3242174 C20.274961,17.7780069 17.6743198,20.6380427 14.3210149,21.0647679 L14.1339576,21.0859598 L14.1339576,25.4934113 C20.4768551,25.1375301 25.5310521,19.8814389 25.5310521,13.4482022 C25.5310521,6.78911783 20.1113925,1.36877372 13.4495707,1.36877372 Z" id="Shape" />
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
        </Link>
      </Logo>
      <Search>
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
            <g id="Designs" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Design-Template:-Long-Form" transform="translate(-331.000000, -20.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <g id="navbar" transform="translate(8.000000, 8.000000)">
                        <g id="icons/search" transform="translate(311.000000, 0.000000)">
                            <g transform="translate(12.000000, 12.000000)">
                              <path d="M23.8347669,22.573873 L17.7881888,16.527295 C17.6803908,16.4194969 17.5397727,16.3632405 17.3897709,16.3632405 L16.9069913,16.3632405 C18.5147157,14.6242817 19.4990423,12.3040832 19.4990423,9.74952116 C19.4990423,4.36382986 15.1352125,0 9.74952116,0 C4.36382986,0 0,4.36382986 0,9.74952116 C0,15.1352125 4.36382986,19.4990423 9.74952116,19.4990423 C12.3040832,19.4990423 14.6242817,18.5147157 16.3632405,16.9116602 L16.3632405,17.3897709 C16.3632405,17.5397727 16.4242116,17.6803908 16.527295,17.7881888 L22.573873,23.8347669 C22.7941838,24.0550777 23.1504438,24.0550777 23.3707089,23.8347669 L23.8347669,23.3707089 C24.0550777,23.1504438 24.0550777,22.7941838 23.8347669,22.573873 Z M9.74952116,17.999116 C5.18881681,17.999116 1.49992633,14.3102255 1.49992633,9.74952116 C1.49992633,5.18881681 5.18881681,1.49992633 9.74952116,1.49992633 C14.3102255,1.49992633 17.999116,5.18881681 17.999116,9.74952116 C17.999116,14.3102255 14.3102255,17.999116 9.74952116,17.999116 Z" />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
      </Search>
    </Grid>
  </Header>
)
