const vehicles = [
  {
    id: 1,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733595305/bike_ncwcfe.png',
    title: 'বাইক',
    to: 'bike',
  },
  {
    id: 2,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593128/auto-rikshaw_ktvzgf.png',
    title: 'অটো রিক্সা',
    to: 'auto-rickshaw',
  },
  {
    id: 3,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593140/tomtom_vxyaqr.png',
    title: 'টমটম',
    to: 'tomtom',
  },
  {
    id: 4,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593130/cng_oolhgr.png',
    title: 'সিএনজি',
    to: 'cng',
  },
  {
    id: 5,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593128/car_pukwfl.png',
    title: 'কার',
    to: 'car',
    subTypes: [
      {
        id: 1,
        title: 'কার 1',
      },
      {
        id: 2,
        title: 'কার 2',
      },
      {
        id: 3,
        title: 'কার 3',
      },
    ],
  },
  {
    id: 5,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593133/microbus_h2bfag.png',
    title: 'মাইক্রোবাস',
    to: 'car',
  },
  {
    id: 5,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593128/bus_jzrg1m.png',
    title: 'বাস',
    to: 'car',
  },
  {
    id: 6,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593141/truck_yn95nw.png',
    title: 'ট্রাক',
    to: 'truck',
  },
  {
    id: 6,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593136/mini-truck_kxilpl.png',
    title: 'মিনি ট্রাক',
    to: 'truck',
  },
  {
    id: 5,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593133/mahindra_foixzh.png',
    title: 'মাহেন্দ্র',
    to: 'car',
  },
  {
    id: 7,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593129/chander-gari_evlvfq.png',
    title: 'চাঁদের গাড়ি',
    to: 'van',
  },
  {
    id: 7,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593132/leguna_b4iqzy.png',
    title: 'লেগুনা',
    to: 'van',
  },
  {
    id: 12,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593137/rickshaw_mikirg.png',
    title: 'রিক্সা',
    to: 'rickshaw',
  },
  {
    id: 12,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593128/bycicle_yrflwq.png',
    title: 'বাই সাইকেল',
    to: 'rickshaw',
  },
  {
    id: 7,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593127/auto-van_nl6qrp.png',
    title: 'ভ্যান গাড়ি',
    to: 'van',
  },
  {
    id: 7,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593136/rickshaw-van_eathwb.png',
    title: 'রিক্সা ভ্যান',
    to: 'van',
  },
  {
    id: 7,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593136/power-tiller-trolley_zckpdx.png',
    title: 'পাওয়ার টিলার ট্রলি',
    to: 'van',
  },
  {
    id: 10,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593127/ambulance_fho2r6.png',
    title: 'অ্যাম্বুলেন্স',
    to: 'ambulance',
  },
  {
    id: 11,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593132/fire-service_mjkvhd.png',
    title: 'ফায়ার সার্ভিস',
    to: 'fire-service',
  },
  {
    id: 13,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593136/power-tiller_uonjri.png',
    title: 'পাওয়ার টিলার',
    to: 'power-tiller',
  },
  {
    id: 8,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593140/tractor_niu61f.png',
    title: 'ট্রাক্টর',
    to: 'pickup',
  },
  {
    id: 9,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593131/excavator_tnqocx.png',
    title: 'স্কেভেটর',
    to: 'cargo',
  },
  {
    id: 9,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593131/crane_l7noko.png',
    title: 'ক্রেন',
    to: 'cargo',
  },
  {
    id: 9,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593137/roller_ogbsgi.png',
    title: 'রোলার',
    to: 'cargo',
  },
  {
    id: 9,
    icon: 'https://res.cloudinary.com/dz6h5okzp/image/upload/v1733593127/boat_kdhzoa.png',
    title: 'নৌ যান',
    to: 'cargo',
  },
];

export default vehicles;
