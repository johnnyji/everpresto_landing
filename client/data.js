const SERVER = __PRODUCTION__ ? "/dist" : `//localhost:3000/client`;

const IMG_PATH = `${SERVER}/assets/images`;

export default {
  home: {
    jumbotron: {
      main: 'We automate your form signing process',
      sub: 'So have time to do other things',
      imageTrio: {
        left: `${IMG_PATH}/browser_screens/collections.jpg`,
        center: `${IMG_PATH}/browser_screens/document_creation_2.png`,
        right: `${IMG_PATH}/browser_screens/templates.png`
      }
    },
    benefits: {
      title: "Get everyone to sign, with the click of a button",
      segments: [
        {
          title: "Bulk email forms with ease",
          description: "Everpresto allows you to import a list of signers, and with the single click of a button, you're able to send your forms to everyone who needs to sign, talk about convenient!",
          image: `${IMG_PATH}/benefits/bulk_send.png`
        },
        {
          title: "We'll keep you updated on the process",
          description: "Once you've send your forms out to be signed, you can kick back and take it easy! We'll take care of the rest and notify you when everyone has signed",
          image: `${IMG_PATH}/benefits/bulk_send.jpg`
        }
      ]
    }
  } };
