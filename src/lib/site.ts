// サイト全体で使う定数とユーティリティ
export const SITE = {
  name: '金沢大学 核医学',
  fullName: '金沢大学医薬保健研究域医学系 核医学・金沢大学附属病院 核医学診療科',
  nameEn: 'Department of Nuclear Medicine, Kanazawa University',
  description:
    '金沢大学核医学のWebサイトです。1973年に国立大学で初めて開講した核医学講座として、がん・心臓・脳・甲状腺の画像診断と核医学治療（セラノスティクス）を行っています。',
  address: '〒920-8641 石川県金沢市宝町13-1',
  tel: '076-265-2333',
  fax: '076-234-4257',
  email: 'nuclmed@med.kanazawa-u.ac.jp',
  instagram: 'https://www.instagram.com/kanazawa.nucmed/',
  facebook: 'https://www.facebook.com/nm.kanazawa/',
  legacy: 'https://nucmed.w3.kanazawa-u.ac.jp',
  hospitalOutpatient: 'https://nucmed.w3.kanazawa-u.ac.jp/gairai/',
};

export const NAV = [
  { href: '/message/', label: 'ごあいさつ' },
  { href: '/about/', label: '教室紹介' },
  { href: '/clinical/', label: '診療' },
  { href: '/research/', label: '研究' },
  { href: '/teaching/', label: '教育／研修' },
  { href: '/achievements/', label: '業績' },
  { href: '/news/', label: 'お知らせ' },
];

/** base（GitHub Pages のサブパス）を付けた内部リンクを返す */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : '/' + path}`;
}

export function fmtDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}.${m}.${day}`;
}
