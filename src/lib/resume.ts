export type ResumeItem = {
	period: string;
	title: string;
	org: string;
	detail?: string;
};

type ResumeSection = {
	kr: ResumeItem[];
	en: ResumeItem[];
};

export const educations: ResumeSection = {
	kr: [
		{
			period: '2015.02',
			title: 'MBA',
			org: '동국대학교 경영전문대학원'
		},
		{
			period: '1996.02',
			title: '약학박사 (독성학)',
			org: '경희대학교 약학대학'
		},
		{
			period: '1993.02',
			title: '약학석사 (독성학)',
			org: '경희대학교 약학대학'
		},
		{
			period: '1988.02',
			title: '약학사',
			org: '서울대학교 약학대학'
		}
	],
	en: [
		{
			period: 'Feb 2015',
			title: 'Master of Business Administration (MBA)',
			org: 'Graduate School of Business, Dongguk University'
		},
		{
			period: 'Feb 1996',
			title: 'Ph.D. in Pharmacy (Toxicology)',
			org: 'College of Pharmacy, Kyung Hee University'
		},
		{
			period: 'Feb 1993',
			title: 'M.S. in Pharmacy (Toxicology)',
			org: 'College of Pharmacy, Kyung Hee University'
		},
		{
			period: 'Feb 1988',
			title: 'B.S. in Pharmacy',
			org: 'College of Pharmacy, Seoul National University'
		}
	]
};

export const experiences: ResumeSection = {
	kr: [
		{
			period: '2026.06 ~ 현재',
			title: '고문',
			org: '법무법인 지평',
			detail: ''
		},
		{
			period: '2026.04 ~ 현재',
			title: '위원',
			org: '국가바이오혁신위원회',
			detail: ''
		},
		{
			period: '2025.07 ~ 현재',
			title: '부원장',
			org: '서울대학교 약학교육연수원',
			detail: ''
		},
		{
			period: '2023.08 ~ 현재',
			title: '임상교수',
			org: '서울대학교 약학대학',
			detail: ''
		},
		{
			period: '2023.09 ~ 2025.08',
			title: '석좌교수',
			org: '동국대학교',
			detail: ''
		},
		{
			period: '2021.03 ~ 2023.05',
			title: '원장',
			org: '식품의약품안전처 식품의약품안전평가원',
			detail: '식품의약품 연구심사 총괄'
		},
		{
			period: '2015.03 ~ 2021.03',
			title: '부장',
			org: '식품의약품안전처',
			detail: '식의약/의료제품 심사, 시험 및 연구'
		},
		{
			period: '2016.02 ~ 2016.12',
			title: '교육파견',
			org: '국가공무원인재개발원',
			detail: '고위정책과정'
		},
		{
			period: '2004.12 ~ 2015.03',
			title: '과장',
			org: '식품의약품안전청',
			detail: '의약품 허가 및 심사'
		},
		{
			period: '2009.08 ~ 2011.08',
			title: '직무파견',
			org: '캐나다 보건성',
			detail: '직무훈련'
		},
		{
			period: '1997.10 ~ 2004.12',
			title: '보건연구관',
			org: '식품의약품안전청',
			detail: '의약품 심사 및 시험'
		},
		{
			period: '1989.01 ~ 1997.10',
			title: '보건연구사',
			org: '국립보건안전연구원',
			detail: '의약품 심사 및 시험'
		}
	],
	en: [
		{
			period: 'Jun 2026 - Present',
			title: 'Senior Advisor',
			org: 'Jipyung LLC',
			detail: ''
		},
		{
			period: 'Apr 2026 - Present',
			title: 'Member',
			org: 'Presidential National Bio Innovation Committee',
			detail: ''
		},
		{
			period: 'Jul 2025 - Present',
			title: 'Vice Director',
			org: 'Center for Pharmacy Continuing Education, Seoul National University',
			detail: ''
		},
		{
			period: 'Aug 2023 - Present',
			title: 'Clinical Professor',
			org: 'College of Pharmacy, Seoul National University',
			detail: ''
		},
		{
			period: 'Sep 2023 - Aug 2025',
			title: 'Chair Professor',
			org: 'Dongguk University',
			detail: ''
		},
		{
			period: 'Mar 2021 - May 2023',
			title: 'Director General',
			org: 'National Institute of Food and Drug Safety Evaluation, MFDS',
			detail: 'Oversaw total R&D and regulatory review of food and drug products'
		},
		{
			period: 'Mar 2015 - Mar 2021',
			title: 'Director',
			org: 'Ministry of Food and Drug Safety (MFDS)',
			detail: 'Review, testing, and research on medical, food, and drug products'
		},
		{
			period: 'Feb 2016 - Dec 2016',
			title: 'Leadership Traning Secondment',
			org: 'National Human Resources Development Institute (NHI)',
			detail: 'Senior Executive Leadership Program'
		},
		{
			period: 'Dec 2004 - Mar 2015',
			title: 'Division Director',
			org: 'Korea Food and Drug Administration (KFDA)',
			detail: 'Pharmaceutical product approvals and regulatory review'
		},
		{
			period: 'Aug 2009 - Aug 2011',
			title: 'Job Training Secondment',
			org: 'Health Canada',
			detail: 'Job Training'
		},
		{
			period: 'Oct 1997 - Dec 2004',
			title: 'Senior Public Health Researcher',
			org: 'Korea Food and Drug Administration (KFDA)',
			detail: 'Pharmaceutical evaluation, review, and testing'
		},
		{
			period: 'Jan 1989 - Oct 1997',
			title: 'Public Health Researcher',
			org: 'National Institute of Safety Research',
			detail: 'Pharmaceutical evaluation, review, and testing'
		}
	]
};

export const advisories: ResumeSection = {
	kr: [
		{
			period: '현재',
			title: '위원',
			org: '국무조정실 국가바이오혁신위원회'
		},
		{
			period: '현재',
			title: '이사',
			org: '보건복지부 국가신약개발사업단'
		},
		{
			period: '현재',
			title: '자문위원',
			org: '보건복지부 한국형 ARPA-H 연구개발사업'
		},
		{
			period: '현재',
			title: '이사',
			org: '오송첨단의료진흥재단'
		},
		{
			period: '현재',
			title: '자문위원',
			org: '한국제약바이오협회 미래비전위원회'
		},
		{
			period: '현재',
			title: '자문위원',
			org: '한국신약개발연구조합 마이크로니들 융합연구회'
		}
	],
	en: [
		{
			period: 'Present',
			title: 'Member',
			org: 'Presidential National Bio Innovation Committee'
		},
		{
			period: 'Present',
			title: 'Board Member',
			org: 'Korea Drug Development Fund (KDDF), Ministry of Health and Welfare (MOHW)'
		},
		{
			period: 'Present',
			title: 'Advisory Member',
			org: 'K-ARPA (Advanced Research Projects Agency for Health), MOHW'
		},
		{
			period: 'Present',
			title: 'Board Member',
			org: 'Osong Medical Innovation Foundation (KBIOHealth)'
		},
		{
			period: 'Present',
			title: 'Advisory Member',
			org: 'Future Vision Committee, Korea Pharmaceutical and Bio-Pharma Manufacturers Association (KPBMA)'
		},
		{
			period: 'Present',
			title: 'Advisory Member',
			org: 'Microneedle Convergence Research Group, Korea Drug Research Association (KDRA)'
		}
	]
};

export const awards: ResumeSection = {
	kr: [
		{
			period: '2024.12',
			title: '공로상',
			org: '서울대학교 약학대학 동창회'
		},
		{
			period: '2023.12',
			title: '홍조 근정 훈장',
			org: '행정안전부'
		},
		{
			period: '2022.10',
			title: '약업진흥상',
			org: '한국응용약물학회'
		},
		{
			period: '2021.11',
			title: '국제조화상',
			org: '한국에프디시규제과학회'
		},
		{
			period: '2019.01',
			title: '근정 포장',
			org: '행정안전부'
		},
		{
			period: '2017.10',
			title: '공직약학자상',
			org: '대한약학회'
		},
		{
			period: '2012.12',
			title: '대통령 표창',
			org: '행정안전부'
		},
		{
			period: '1997.04',
			title: '장관 표창',
			org: '보건복지부'
		}
	],
	en: [
		{
			period: 'Dec 2024',
			title: 'Achievement Award',
			org: 'Seoul National University College of Pharmacy Alumni Association'
		},
		{
			period: 'Dec 2023',
			title: 'Order of Service Merit (Red Stripes)',
			org: 'Ministry of the Interior and Safety'
		},
		{
			period: 'Oct 2022',
			title: 'Pharmaceutical Promotion Award',
			org: 'The Korean Society of Applied Pharmacology'
		},
		{
			period: 'Nov 2021',
			title: 'International Harmonization Award',
			org: 'The Korean Society of Food and Drug Regulatory Science (FDC)'
		},
		{
			period: 'Jan 2019',
			title: 'Service Merit Medal',
			org: 'Ministry of the Interior and Safety'
		},
		{
			period: 'Oct 2017',
			title: 'Public Service Pharmacist Award',
			org: 'The Pharmaceutical Society of Korea'
		},
		{
			period: 'Dec 2012',
			title: 'Presidential Commendation',
			org: 'Ministry of the Interior and Safety'
		},
		{
			period: 'Apr 1997',
			title: 'Minister’s Commendation',
			org: 'Ministry of Health and Welfare'
		}
	]
};

export const references: ResumeSection = {
	kr: [
		{
			period: '2026.06',
			title: '코리아는 코로나와 어떻게 싸웠나',
			org: '서울대학교 출판문화원'
		},
		{
			period: '2025.12',
			title: '최신 규제과학 총론',
			org: '조윤커뮤니케이션'
		}
	],
	en: [
		{
			period: 'Jun 2026',
			title: 'How Korea Fought COVID-19',
			org: 'Seoul National University Press'
		},
		{
			period: 'Dec 2025',
			title: 'Introduction to Advanced Regulatory Science',
			org: 'Joyun Communications'
		}
	]
};
