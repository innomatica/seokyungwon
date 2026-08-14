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
			title: 'MBA과정 수료',
			org: '동국대학교 경영전문대학원'
		},
		{
			period: '1996.02',
			title: '약학박사 독성학전공',
			org: '경희대학교 약학대학'
		},
		{
			period: '1993.02',
			title: '약학석사 독성학전공',
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
			period: '2015.02',
			title: 'MBA과정 수료',
			org: '동국대학교 경영전문대학원'
		},
		{
			period: '1996.02',
			title: '약학박사 독성학전공',
			org: '경희대학교 약학대학'
		},
		{
			period: '1993.02',
			title: '약학석사 독성학전공',
			org: '경희대학교 약학대학'
		},
		{
			period: '1988.02',
			title: '약학사',
			org: '서울대학교 약학대학'
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
			detail: '고위정책과정 수료'
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
			detail: ''
		}
	],
	en: [
		{
			period: '2026.06 - now',
			title: '고문',
			org: 'Jipyung LLC, a law firm',
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
			detail: '고위정책과정 수료'
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
			detail: ''
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
			period: 'now',
			title: '위원',
			org: '국무조정실 국가바이오혁신위원회'
		},
		{
			period: 'now',
			title: '이사',
			org: '보건복지부 국가신약개발사업단'
		},
		{
			period: 'now',
			title: '자문위원',
			org: '보건복지부 K-ARPHA'
		},
		{
			period: 'now',
			title: '자문위원',
			org: '한국제약바이오협회 미래비전위원회'
		},
		{
			period: 'now',
			title: '자문위원',
			org: '한국신약개발연구조합 마이크로니들 융합연구회'
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
			title: '홍조근정훈장',
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
			title: '근정포장',
			org: '행정안전부'
		},
		{
			period: '2017.10',
			title: '공직약학자상',
			org: '대한약학회'
		},
		{
			period: '2012.12',
			title: '대통령표창',
			org: '행정안전부'
		},
		{
			period: '1997.04',
			title: '장관표창',
			org: '보건복지부'
		}
	],
	en: [
		{
			period: '2024.12',
			title: '공로상',
			org: '서울대학교 약학대학 동창회'
		},
		{
			period: '2023.12',
			title: '홍조근정훈장',
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
			title: '근정포장',
			org: '행정안전부'
		},
		{
			period: '2017.10',
			title: '공직약학자상',
			org: '대한약학회'
		},
		{
			period: '2012.12',
			title: '대통령표창',
			org: '행정안전부'
		},
		{
			period: '1997.04',
			title: '장관표창',
			org: '보건복지부'
		}
	]
};

export const references: ResumeSection = {
	kr: [
		{
			period: '2025.12',
			title: '최신 규제과학 총론',
			org: '조윤커뮤니케이션'
		}
	],
	en: [
		{
			period: '2025.12',
			title: '최신 규제과학 총론',
			org: '조윤커뮤니케이션'
		}
	]
};
