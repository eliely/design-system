import React from 'react';

const defaultViewBox = '0 0 30 30';

const icons = {
  edit: {
    viewBox: '0 0 25.979 25.979',
    svg: (
      <g id="pencil">
        <path d="M25.301,3.399l-2.724-2.722c-0.738-0.738-1.794-0.892-2.396-0.369l5.489,5.489C26.191,5.196,26.039,4.14,25.301,3.399z" />
        <rect x="15.956" y="2.696" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 18.1079 35.9976)" width="1.106" height="23.105" />
        <polygon points="23.439,4.863 21.143,2.568 4.778,18.822 7.147,21.156" />
        <rect x="11.188" y="-2.011" transform="matrix(0.7067 0.7075 -0.7075 0.7067 10.2121 -5.5517)" width="1.228" height="23.105" />
        <polygon points="0,25.979 2.479,25.186 0.779,23.487" />
        <polygon points="1.207,22.358 3.467,24.801 7.928,23.438 2.483,18.049" />
      </g>
    ),
  },
  // group: editing, filename: add.svg
  plus: {
    viewBox: '0 0 25 25',
    svg: (
      <g>
        <path d="M25,12.5c0-1.381-1.119-2.5-2.5-2.5H15V2.5C15,1.119,13.881,0,12.5,0S10,1.119,10,2.5V10H2.5C1.119,10,0,11.119,0,12.5S1.119,15,2.5,15H10v7.5c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5V15h7.5C23.881,15,25,13.881,25,12.5z" />
      </g>
    ),
  },
  // group: editing, filename: correct.svg
  checkmark: {
    viewBox: '0 0 27.002 19.146',
    svg: (
      <g>
        <path d="M9.85,19.146c-1.13,0-2.229-0.46-3.02-1.26l-6.106-6.189C-0.25,10.708-0.24,9.116,0.748,8.142C1.737,7.167,3.33,7.177,4.303,8.165l5.541,5.617L22.697,0.749c0.976-0.989,2.567-1,3.557-0.024c0.987,0.975,0.998,2.567,0.024,3.556L12.861,17.885C12.074,18.684,10.976,19.145,9.85,19.146z" />
      </g>
    ),
  },
  // group: web, filename: delete.svg
  delete: {
    viewBox: defaultViewBox,
    svg: (
      <g>
        <path d="M15,0C6.716,0,0,6.716,0,15s6.716,15,15,15s15-6.716,15-15S23.284,0,15,0z M20.51,17.975c0.469,0.47,0.732,1.104,0.732,1.769s-0.264,1.299-0.732,1.768c-0.469,0.47-1.104,0.732-1.768,0.732s-1.299-0.265-1.768-0.732l-2.476-2.475l-2.476,2.475c-0.469,0.469-1.104,0.732-1.768,0.732s-1.299-0.263-1.768-0.732c-0.471-0.469-0.732-1.104-0.732-1.768s0.264-1.299,0.732-1.769l2.475-2.475l-2.475-2.475c-0.469-0.47-0.732-1.104-0.732-1.769S8.02,9.958,8.488,9.489c0.469-0.47,1.104-0.732,1.768-0.732s1.299,0.265,1.768,0.732l2.476,2.475l2.476-2.475c0.469-0.469,1.104-0.732,1.768-0.732s1.299,0.263,1.768,0.732c0.471,0.469,0.732,1.104,0.732,1.768s-0.264,1.299-0.732,1.769L18.035,15.5L20.51,17.975z" />
      </g>
    ),
  },
  // group: editing, filename: delete-2.svg
  close: {
    viewBox: '0 0 19.143 19.144',
    svg: (
      <g id="delete-2">
        <path d="M13.106,9.571l5.304-5.303c0.47-0.469,0.732-1.104,0.732-1.768S18.88,1.202,18.41,0.732c-0.977-0.977-2.559-0.977-3.535,0L9.571,6.036L4.269,0.732C3.8,0.264,3.164,0.001,2.501,0.001S1.202,0.264,0.732,0.733C0.264,1.202,0,1.838,0,2.501S0.264,3.8,0.732,4.269l5.304,5.303l-5.304,5.304c-0.977,0.977-0.977,2.559,0.001,3.536c0.469,0.469,1.104,0.732,1.768,0.732S3.8,18.88,4.269,18.411l5.303-5.304l5.304,5.304c0.977,0.977,2.559,0.977,3.535,0c0.47-0.47,0.733-1.105,0.732-1.769c0-0.663-0.263-1.299-0.731-1.768L13.106,9.571z" />
      </g>
    ),
  },
  loader: {
    viewBox: '4 4 32 32',
    svg: (
      <g>
        <path opacity="0.2" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z" />
        <path d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z">
          <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite" />
        </path>
      </g>
    ),
  },
};

export default icons;
