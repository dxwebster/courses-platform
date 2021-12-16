import Cookies from 'js-cookie';
// import CryptoJS from 'crypto-js';
// import { getConfigs } from './env';

export function CookiesSet(cookiesName: string, cookiesValue: any, cookiesTime: any) {
  // const cookiesValueBase64 = btoa(cookiesValue);
  // const cookiesNameBase64 = btoa(cookiesName);
  // const configEnvs: any = getConfigs();
  // const ciphertext = CryptoJS.Rabbit.encrypt(cookiesValueBase64, configEnvs.SECRET_KEY_URANO).toString();

  Cookies.set(cookiesName, cookiesValue, { expires: cookiesTime });
}
