// Language data
const languages = {
    en: {
        // Header & Navigation
        'header-title': 'KODIT Global Bridge',
        'nav-home': 'Home',
        'nav-features': 'Features',
        'nav-demo': 'Demo',
        'nav-success': 'Success Stories',
        'nav-contact': 'Contact',

        // Hero Section
        'hero-title': 'Global Business Made Simple',
        'hero-subtitle': 'AI-Powered 3-Minute Global Market Diagnosis',
        'hero-description': 'From SMEs to Individual Entrepreneurs - One-Click Financial Support for Global Expansion',
        'btn-start-diagnosis': 'Start 3-Min Diagnosis',
        'btn-watch-demo': 'Watch Demo',
        'stat-companies': 'Company Database',
        'stat-years': 'Years of Expertise',
        'stat-success': 'Success Rate Improvement (%)',

        // Problem Section
        'problem-title': 'Current Challenges in Global Expansion',
        'problem1-title': 'Low Success Rate',
        'problem1-desc': 'Only 30% of SMEs succeed in global expansion due to lack of market insight',
        'problem2-title': 'Time Consuming',
        'problem2-desc': 'Average 2 weeks to get basic market analysis and financial support approval',
        'problem3-title': 'Accessibility Barriers',
        'problem3-desc': 'Complex procedures prevent small businesses from accessing global opportunities',

        // Features Section
        'features-title': 'Three Core AI-Powered Solutions',
        'feature1-title': 'AI Global Readiness Doctor',
        'feature1-desc': '3-minute diagnosis of your global expansion readiness with personalized market recommendations',
        'feature1-item1': 'Real-time market analysis',
        'feature1-item2': 'Success probability scoring',
        'feature1-item3': 'Funding requirement calculation',
        'feature1-item4': 'Risk assessment & mitigation',
        'feature1-improvement': 'Success Rate Improvement',

        'feature2-title': 'Smart Global Matching',
        'feature2-desc': 'AI-powered matching between Korean companies and global buyers/partners',
        'feature2-item1': 'Automated buyer matching',
        'feature2-item2': 'Real-time opportunity alerts',
        'feature2-item3': 'Virtual trade shows',
        'feature2-item4': 'Cultural compatibility scoring',
        'feature2-improvement': 'Partner Finding Speed',

        'feature3-title': 'One-Click Financial Support',
        'feature3-desc': 'Integrated financial package from guarantee to insurance with instant approval',
        'feature3-item1': 'Automated document generation',
        'feature3-item2': 'Same-day approval',
        'feature3-item3': 'Currency hedge integration',
        'feature3-item4': 'Risk-based pricing',
        'feature3-improvement': 'Average Support Amount',

        // Demo Section
        'demo-title': 'Experience the Platform',
        'progress-step1': 'Input Info',
        'progress-step2': 'AI Analysis',
        'progress-step3': 'Find Partners',
        'progress-step4': 'Get Financing',

        'demo-diagnosis-title': 'AI Global Diagnosis Demo',
        'form-company-name': 'Company Name:',
        'form-company-placeholder': 'Enter your company name',
        'form-business-type': 'Business Type:',
        'form-select-business': 'Select business type',
        'business-manufacturing': 'Manufacturing',
        'business-retail': 'Retail',
        'business-services': 'Services',
        'business-tech': 'Technology',
        'business-food': 'Food & Beverage',
        'business-fashion': 'Fashion & Beauty',

        'form-target-market': 'Target Market:',
        'form-select-market': 'Select target market',
        'market-japan': '🇯🇵 Japan',
        'market-usa': '🇺🇸 United States',
        'market-vietnam': '🇻🇳 Vietnam',
        'market-germany': '🇩🇪 Germany',
        'market-singapore': '🇸🇬 Singapore',
        'market-thailand': '🇹🇭 Thailand',

        'form-company-size': 'Company Size:',
        'form-select-size': 'Select company size',
        'size-micro': 'Micro (1-4 employees)',
        'size-small': 'Small (5-49 employees)',
        'size-medium': 'Medium (50-249 employees)',

        'btn-run-diagnosis': 'Run Advanced AI Diagnosis',
        'result-title': 'Advanced Diagnosis Complete!',
        'result-success': 'Success Probability',
        'result-funding': 'Estimated Funding',
        'result-timeline': 'Time to Market',
        'result-risk': 'Risk Level',
        'view-breakdown': 'View Breakdown',

        'insights-title': 'AI-Powered Market Insights',
        'insight-strength': 'Market Strengths',
        'insight-challenges': 'Key Challenges',
        'insight-recommendations': 'AI Recommendations',

        'next-steps': 'Recommended Next Steps:',
        'btn-find-partners': 'Find Strategic Partners',
        'btn-apply-financing': 'Apply for Smart Financing',
        'btn-download-report': 'Download Full Report',

        // Funding Modal
        'funding-breakdown-title': 'Detailed Funding Breakdown',

        // Matching Section
        'matching-title': 'Smart Global Matching Results',
        'filter-industry': 'Industry Focus:',
        'filter-all-industries': 'All Industries',
        'filter-electronics': 'Electronics',
        'filter-fashion': 'Fashion',
        'filter-food': 'Food & Beverage',
        'filter-partnership': 'Partnership Type:',
        'filter-all-partnerships': 'All Types',
        'filter-distributor': 'Distributor',
        'filter-retailer': 'Retailer',
        'filter-manufacturer': 'OEM Partner',

        'matching-score-title': 'How AI Calculates Match Score',
        'factor-market': 'Market Compatibility',
        'factor-business': 'Business Model Fit',
        'factor-cultural': 'Cultural Alignment',

        // Financing Section
        'financing-title': 'Smart Financial Package',
        'calc-title': 'Smart Financing Calculator',
        'calc-export-volume': 'Expected Export Volume ($):',
        'calc-risk-level': 'Risk Tolerance:',
        'risk-low': 'Conservative',
        'risk-medium': 'Moderate',
        'risk-high': 'Aggressive',

        'package-title': 'AI-Optimized Financial Package',
        'package-guarantee': 'Export Credit Guarantee',
        'guarantee-desc': 'Protects against buyer default risk',
        'package-insurance': 'Trade Risk Insurance',
        'insurance-desc': 'Covers political and commercial risks',
        'package-hedge': 'Currency Risk Management',
        'hedge-desc': 'Locks in favorable exchange rates',
        'package-working': 'Working Capital Loan',
        'working-desc': 'Flexible funding for operations',

        'approval-title': 'Real-time Approval Process',
        'approval-step1': 'Document Analysis - Complete',
        'approval-step2': 'Credit Assessment - Approved',
        'approval-step3': 'Risk Evaluation - In Progress',
        'approval-step4': 'Final Approval - Pending',

        'btn-apply-package': 'Apply Smart Package',

        // Success Stories
        'success-title': 'Success Stories from Real Users',
        'story1-name': 'Mr. Kim, Pen Manufacturer',
        'story1-location': 'Eulji-ro, Seoul',
        'story1-quote': '"I never imagined my custom pens could reach Japanese customers. The AI diagnosis showed 67% success probability, and within 30 days, I had 3 partners and my first ¥2M order!"',
        
        'story2-name': 'Sarah Lee, Beauty Startup',
        'story2-location': 'Gangnam, Seoul',
        'story2-quote': '"Our K-beauty products needed global expansion. The platform connected us with 5 distributors across Southeast Asia. Now we\'re in 200+ stores in 4 countries!"',
        
        'story3-name': 'David Park, Tech Startup',
        'story3-location': 'Pangyo, Gyeonggi',
        'story3-quote': '"Our IoT solution for smart farms got matched with German agricultural companies. The AI-powered cultural compatibility analysis was spot-on. €500K contract in 6 months!"',

        'metric-diagnosis': 'Diagnosis',
        'metric-first-order': 'First Order',
        'metric-revenue': 'Revenue Increase',
        'metric-partners': 'Partners Found',
        'metric-countries': 'Countries',
        'metric-stores': 'Retail Stores',
        'metric-contract': 'Contract Value',
        'metric-timeline': 'Timeline',
        'metric-match': 'Match Accuracy',

        // Contact Section
        'contact-title': 'Ready to Go Global?',
        'contact-kodit': 'Korea Credit Guarantee Fund',
        'contact-department': 'Future Strategy Department',
        'contact-hours': 'Mon-Fri 9:00-18:00 (KST)',
        'cta-title': 'Join the Global Bridge',
        'cta-description': 'Transform your business with AI-powered global expansion support',
        'cta-button': 'Start Your Global Journey',

        // Footer
        'footer-description': 'Democratizing global expansion for Korean SMEs',
        'footer-companies': 'Companies',
        'footer-years': 'Years',
        'footer-contest': 'Innovation Contest',
        'footer-contest-desc': '2025 KODIT Innovation Ideas Contest',
        'footer-proposal': 'Proposal by: 박용환',
        'footer-contact': 'Contact',
        'footer-company': 'Creative Nexus',
        'footer-copyright': '© 2025 Korea Credit Guarantee Fund. Demo concept for innovation contest.',

        // Loading
        'loading-text': 'AI is analyzing your global market potential...'
    },
    ko: {
        // Header & Navigation
        'header-title': '신보 글로벌 브릿지',
        'nav-home': '홈',
        'nav-features': '기능',
        'nav-demo': '데모',
        'nav-success': '성공사례',
        'nav-contact': '문의',

        // Hero Section
        'hero-title': '글로벌 비즈니스를 쉽게',
        'hero-subtitle': 'AI 기반 3분 글로벌 시장 진단',
        'hero-description': '중소기업부터 개인사업자까지 - 원클릭 금융지원으로 글로벌 진출',
        'btn-start-diagnosis': '3분 진단 시작하기',
        'btn-watch-demo': '데모 보기',
        'stat-companies': '기업 데이터베이스',
        'stat-years': '신용평가 전문성',
        'stat-success': '성공률 개선 (%)',

        // Problem Section
        'problem-title': '글로벌 진출의 현재 문제점',
        'problem1-title': '낮은 성공률',
        'problem1-desc': '시장 통찰력 부족으로 중소기업의 30%만이 글로벌 진출에 성공',
        'problem2-title': '긴 처리 시간',
        'problem2-desc': '기본 시장 분석과 금융 지원 승인까지 평균 2주 소요',
        'problem3-title': '접근성 장벽',
        'problem3-desc': '복잡한 절차로 인해 소상공인의 글로벌 기회 접근 제한',

        // Features Section
        'features-title': '3대 핵심 AI 기반 솔루션',
        'feature1-title': 'AI 글로벌 진단사',
        'feature1-desc': '개인화된 시장 추천과 함께 3분만에 글로벌 진출 준비도 진단',
        'feature1-item1': '실시간 시장 분석',
        'feature1-item2': '성공 확률 채점',
        'feature1-item3': '자금 요구사항 계산',
        'feature1-item4': '위험 평가 및 완화',
        'feature1-improvement': '성공률 개선',

        'feature2-title': '스마트 글로벌 매칭',
        'feature2-desc': '한국 기업과 글로벌 바이어/파트너 간 AI 기반 매칭',
        'feature2-item1': '자동 바이어 매칭',
        'feature2-item2': '실시간 기회 알림',
        'feature2-item3': '가상 무역박람회',
        'feature2-item4': '문화적 호환성 점수',
        'feature2-improvement': '파트너 발굴 속도',

        'feature3-title': '원클릭 금융지원',
        'feature3-desc': '보증부터 보험까지 즉시 승인되는 통합 금융 패키지',
        'feature3-item1': '자동 서류 생성',
        'feature3-item2': '당일 승인',
        'feature3-item3': '환율 헤지 통합',
        'feature3-item4': '위험 기반 가격 책정',
        'feature3-improvement': '평균 지원 금액',

        // Demo Section
        'demo-title': '플랫폼 체험하기',
        'progress-step1': '정보 입력',
        'progress-step2': 'AI 분석',
        'progress-step3': '파트너 찾기',
        'progress-step4': '금융지원',

        'demo-diagnosis-title': 'AI 글로벌 진단 데모',
        'form-company-name': '회사명:',
        'form-company-placeholder': '회사명을 입력하세요',
        'form-business-type': '업종:',
        'form-select-business': '업종을 선택하세요',
        'business-manufacturing': '제조업',
        'business-retail': '소매업',
        'business-services': '서비스업',
        'business-tech': '기술업',
        'business-food': '식음료',
        'business-fashion': '패션/뷰티',

        'form-target-market': '목표 시장:',
        'form-select-market': '목표 시장을 선택하세요',
        'market-japan': '🇯🇵 일본',
        'market-usa': '🇺🇸 미국',
        'market-vietnam': '🇻🇳 베트남',
        'market-germany': '🇩🇪 독일',
        'market-singapore': '🇸🇬 싱가포르',
        'market-thailand': '🇹🇭 태국',

        'form-company-size': '회사 규모:',
        'form-select-size': '회사 규모를 선택하세요',
        'size-micro': '영세 (1-4명)',
        'size-small': '소기업 (5-49명)',
        'size-medium': '중기업 (50-249명)',

        'btn-run-diagnosis': '고급 AI 진단 실행',
        'result-title': '고급 진단 완료!',
        'result-success': '성공 확률',
        'result-funding': '예상 자금',
        'result-timeline': '시장 진입 시간',
        'result-risk': '위험 수준',
        'view-breakdown': '세부 내역 보기',

        'insights-title': 'AI 기반 시장 인사이트',
        'insight-strength': '시장 강점',
        'insight-challenges': '주요 과제',
        'insight-recommendations': 'AI 추천사항',

        'next-steps': '추천 다음 단계:',
        'btn-find-partners': '전략적 파트너 찾기',
        'btn-apply-financing': '스마트 금융지원 신청',
        'btn-download-report': '전체 보고서 다운로드',

        // Funding Modal
        'funding-breakdown-title': '상세 자금 구성',

        // Matching Section
        'matching-title': '스마트 글로벌 매칭 결과',
        'filter-industry': '업종 분야:',
        'filter-all-industries': '모든 업종',
        'filter-electronics': '전자제품',
        'filter-fashion': '패션',
        'filter-food': '식음료',
        'filter-partnership': '파트너십 유형:',
        'filter-all-partnerships': '모든 유형',
        'filter-distributor': '유통업체',
        'filter-retailer': '소매업체',
        'filter-manufacturer': 'OEM 파트너',

        'matching-score-title': 'AI 매칭 점수 계산 방법',
        'factor-market': '시장 호환성',
        'factor-business': '비즈니스 모델 적합성',
        'factor-cultural': '문화적 일치도',

        // Financing Section
        'financing-title': '스마트 금융 패키지',
        'calc-title': '스마트 금융 계산기',
        'calc-export-volume': '예상 수출 규모 ($):',
        'calc-risk-level': '위험 성향:',
        'risk-low': '보수적',
        'risk-medium': '적당한',
        'risk-high': '적극적',

        'package-title': 'AI 최적화 금융 패키지',
        'package-guarantee': '수출신용보증',
        'guarantee-desc': '바이어 채무불이행 위험 보호',
        'package-insurance': '무역위험보험',
        'insurance-desc': '정치적, 상업적 위험 보장',
        'package-hedge': '환율위험관리',
        'hedge-desc': '유리한 환율 고정',
        'package-working': '운전자금대출',
        'working-desc': '유연한 운영 자금',

        'approval-title': '실시간 승인 프로세스',
        'approval-step1': '서류 분석 - 완료',
        'approval-step2': '신용 평가 - 승인',
        'approval-step3': '위험 평가 - 진행 중',
        'approval-step4': '최종 승인 - 대기',

        'btn-apply-package': '스마트 패키지 신청',

        // Success Stories
        'success-title': '실제 사용자 성공 사례',
        'story1-name': '김사장, 볼펜 제조업',
        'story1-location': '을지로, 서울',
        'story1-quote': '"내가 만든 맞춤 볼펜이 일본 고객에게 팔릴 줄 몰랐어요. AI 진단에서 67% 성공 확률을 보여줬고, 30일 만에 3개 파트너와 첫 200만엔 주문을 받았습니다!"',
        
        'story2-name': '이사라, 뷰티 스타트업',
        'story2-location': '강남, 서울',
        'story2-quote': '"K-뷰티 제품의 글로벌 진출이 필요했어요. 플랫폼을 통해 동남아시아 5개 유통업체와 연결됐고, 이제 4개국 200개 이상 매장에 입점했습니다!"',
        
        'story3-name': '박데이비드, 테크 스타트업',
        'story3-location': '판교, 경기',
        'story3-quote': '"스마트팜 IoT 솔루션이 독일 농업 회사들과 매칭됐어요. AI 기반 문화적 호환성 분석이 정확했습니다. 6개월 만에 50만 유로 계약 성사!"',

        'metric-diagnosis': '진단',
        'metric-first-order': '첫 주문',
        'metric-revenue': '매출 증가',
        'metric-partners': '파트너 발굴',
        'metric-countries': '진출 국가',
        'metric-stores': '소매 매장',
        'metric-contract': '계약 규모',
        'metric-timeline': '소요 시간',
        'metric-match': '매칭 정확도',

        // Contact Section
        'contact-title': '글로벌 진출 준비되셨나요?',
        'contact-kodit': '신용보증기금',
        'contact-department': '미래전략실',
        'contact-hours': '월-금 9:00-18:00 (KST)',
        'cta-title': '글로벌 브릿지에 참여하세요',
        'cta-description': 'AI 기반 글로벌 진출 지원으로 비즈니스를 혁신하세요',
        'cta-button': '글로벌 여정 시작하기',

        // Footer
        'footer-description': '한국 중소기업의 글로벌 진출 민주화',
        'footer-companies': '기업',
        'footer-years': '년',
        'footer-contest': '혁신 공모전',
        'footer-contest-desc': '2025 신보혁신 국민생각 공모',
        'footer-proposal': '제안자: 박용환',
        'footer-contact': '연락처',
        'footer-company': '크리에이티브 넥서스',
        'footer-copyright': '© 2025 신용보증기금. 혁신 공모전을 위한 데모 컨셉.',

        // Loading
        'loading-text': 'AI가 글로벌 시장 잠재력을 분석 중입니다...'
    }
};

// Current language
let currentLanguage = 'en';

// Language switching function
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    // Update all text elements
    updatePageText();
    
    // Update placeholders
    updatePlaceholders();
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
}

// Update all text elements on the page
function updatePageText() {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (languages[currentLanguage] && languages[currentLanguage][key]) {
            element.textContent = languages[currentLanguage][key];
        }
    });
}

// Update form placeholders
function updatePlaceholders() {
    // Update all input elements with data-placeholder attributes
    const inputsWithPlaceholders = document.querySelectorAll('input[data-placeholder], select[data-placeholder]');
    inputsWithPlaceholders.forEach(input => {
        const placeholderKey = input.getAttribute('data-placeholder');
        if (placeholderKey && languages[currentLanguage][placeholderKey]) {
            input.placeholder = languages[currentLanguage][placeholderKey];
        }
    });
    
    // Update specific elements by ID
    const companyNameInput = document.getElementById('company-name');
    if (companyNameInput && languages[currentLanguage]['form-company-placeholder']) {
        companyNameInput.placeholder = languages[currentLanguage]['form-company-placeholder'];
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ko')) {
        switchLanguage(savedLanguage);
    } else {
        // Detect browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('ko')) {
            switchLanguage('ko');
        } else {
            switchLanguage('en');
        }
    }
});

// Export for use in other scripts
window.languages = languages;
window.currentLanguage = currentLanguage;
window.switchLanguage = switchLanguage;