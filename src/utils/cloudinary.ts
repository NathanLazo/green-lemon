import {Cloudinary} from "@cloudinary/url-gen";

const CloudinaryClient = new Cloudinary({
    cloud: {
      cloudName: 'de2tjedpu'
    }
  });

export default CloudinaryClient;