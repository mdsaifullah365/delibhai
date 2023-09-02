// icons
import nid from '../assets/icons/NID.svg';
import age from '../assets/icons/age.svg';
import bloodGroup from '../assets/icons/blood-group.svg';
import clock from '../assets/icons/clock.svg';
import email from '../assets/icons/email.svg';
import facebook from '../assets/icons/facebook.svg';
import father from '../assets/icons/father.svg';
import marker from '../assets/icons/marker.svg';
import phone from '../assets/icons/phone.svg';
import serviceArea from '../assets/icons/service-area.svg';
import serviceType from '../assets/icons/service-type.svg';
import sex from '../assets/icons/sex.svg';
import station from '../assets/icons/station.svg';
import steering from '../assets/icons/steering.svg';
import person from '../assets/icons/user.svg';
import vehicleName from '../assets/icons/vehicle--name.svg';
import vehicleBrand from '../assets/icons/vehicle-brand.svg';
import vehicleModel from '../assets/icons/vehicle-model.svg';
import vehicleNumber from '../assets/icons/vehicle-number.svg';
import vehicleType from '../assets/icons/vehicle.svg';

// others
import { useEffect, useState } from 'react';
import heros from '../../../data/heros';
import convertNumber from '../../../utils/convertNumber';
import { getServiceTime } from '../../../utils/convertTime';

const useUserInfo = (id) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => setUserInfo(heros.find((hero) => hero.id === id)), [id]);

  const modifiedInfo = {
    personal: [
      { type: 'text', info: userInfo.name, label: 'নিজের নাম', icon: person },
      { type: 'text', info: userInfo.father, label: 'পিতার নাম', icon: father },
      {
        type: 'select',
        options: ['পুরুষ', 'মহিলা', 'অন্যান্য'],
        info: userInfo.sex,
        label: 'লিঙ্গ',
        icon: sex,
      },
      {
        type: 'select',
        options: ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'],
        info: userInfo.bloodGroup,
        label: 'রক্তের গ্রুপ',
        icon: bloodGroup,
      },
      {
        type: 'number',
        data: userInfo.age,
        info: `${convertNumber(userInfo.age)} বছর`,
        label: 'বয়স',
        icon: age,
      },
      {
        type: 'text',
        info: userInfo.nid,
        label: 'জন্মনিবন্ধন/NID নম্বর',
        icon: nid,
      },
      {
        type: 'file',
        label: 'জন্মনিবন্ধন/NID এর ছবি',
        editOnly: true,
      },
    ],
    contact: [
      {
        type: 'number',
        info: userInfo.mobile1,
        label: 'মোবাইল নম্বর',
        icon: phone,
      },
      {
        type: 'number',
        info: userInfo.mobile2,
        label: 'বিকল্প মোবাইল নম্বর',
        icon: phone,
      },
      { type: 'email', info: userInfo.email, label: 'ই-মেইল', icon: email },
      {
        type: 'text',
        info: userInfo.facebook,
        label: 'ফেইসবুক লিংক',
        icon: facebook,
      },
    ],
    address: [
      { info: userInfo.presentAddress, label: 'বর্তমান ঠিকানা', icon: marker },
      { info: userInfo.permanentAddress, label: 'স্থায়ী ঠিকানা', icon: marker },
    ],
    vehicle: [
      { info: userInfo.vehicleType, label: 'গাড়ির ধরণ', icon: vehicleType },
      {
        info: userInfo.vehicleBrand,
        label: 'গাড়ির ব্র্যান্ড',
        icon: vehicleBrand,
      },
      { info: userInfo.vehicleModel, label: 'গাড়ির মডেল', icon: vehicleModel },
      {
        info: userInfo.vehicleNumber,
        label: 'গাড়ির নম্বর',
        icon: vehicleNumber,
      },
      { info: userInfo.vehicleName, label: 'গাড়ির নাম', icon: vehicleName },
    ],
    owner: [
      { info: userInfo.ownerName, label: 'কোম্পানির নাম', icon: person },
      { info: userInfo.ownerAddress, label: 'ঠিকানা', icon: marker },
      { info: userInfo.ownerMobile, label: 'মোবাইল', icon: phone },
      { info: userInfo.ownerEmail, label: 'ই-মেইল', icon: email },
    ],
    service: [
      { info: userInfo.serviceUsage, label: 'গাড়ির ব্যবহার', icon: steering },
      { info: userInfo.serviceType, label: 'গাড়ির সেবা', icon: serviceType },
      { info: userInfo.mainStation, label: 'প্রধান স্ট্যাশন', icon: station },
      {
        info: userInfo.serviceAreas?.join(', '),
        label: 'সার্ভিস প্রদানের এলাকা সমূহ',
        icon: serviceArea,
      },
      {
        info: getServiceTime(userInfo.serviceTime),
        label: 'সার্ভিস প্রদানের সময়',
        icon: clock,
      },
    ],
    location: [
      { info: userInfo.location?.division, label: 'বিভাগ', icon: marker },
      { info: userInfo.location?.district, label: 'জেলা', icon: marker },
      {
        info: userInfo.location?.subDistrict,
        label: 'উপজেলা/পৌরসভা',
        icon: marker,
      },
      { info: userInfo.location?.thana, label: 'থানা', icon: marker },
      {
        info: userInfo.location?.union,
        label: 'ইউনিয়ন/সিটি কর্পোরেশন',
        icon: marker,
      },
      { info: userInfo.location?.PO, label: 'পোস্ট অফিস', icon: marker },
      { info: userInfo.location?.zip, label: 'পোস্ট কোড', icon: marker },
      { info: userInfo.location?.village, label: 'গ্রাম/মহল্লা', icon: marker },
      { info: userInfo.location?.station, label: 'স্ট্যাশন', icon: marker },
    ],
  };

  return [userInfo, modifiedInfo];
};

export default useUserInfo;
