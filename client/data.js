const SERVER = __PRODUCTION__ ? "/dist" : `//localhost:3000/client`;

const IMG_PATH = `${SERVER}/assets/images`;

export default {
  home: {
    intro: {
      main: 'We automate your form signing process',
      sub: 'So have time to do other things',
      imageTrio: {
        left: `${IMG_PATH}/browser_screens/collections.jpg`,
        center: `${IMG_PATH}/browser_screens/document_creation_2.png`,
        right: `${IMG_PATH}/browser_screens/templates.png`
      }
    }
  } 
};