// Global variables
let diagnosisData = {
    companyName: '',
    businessType: '',
    targetMarket: ''
};

// Market data for simulation
const marketData = {
    japan: {
        manufacturing: { success: 67, funding: 50000, timeToMarket: '6 months' },
        retail: { success: 72, funding: 35000, timeToMarket: '4 months' },
        services: { success: 58, funding: 25000, timeToMarket: '3 months' },
        tech: { success: 81, funding: 75000, timeToMarket: '8 months' }
    },
    usa: {
        manufacturing: { success: 54, funding: 80000, timeToMarket: '10 months' },
        retail: { success: 63, funding: 60000, timeToMarket: '7 months' },
        services: { success: 71, funding: 40000, timeToMarket: '5 months' },
        tech: { success: 89, funding: 120000, timeToMarket: '12 months' }
    },
    vietnam: {
        manufacturing: { success: 78, funding: 30000, timeToMarket: '4 months' },
        retail: { success: 85, funding: 20000, timeToMarket: '3 months' },
        services: { success: 69, funding: 15000, timeToMarket: '2 months' },
        tech: { success: 74, funding: 45000, timeToMarket: '6 months' }
    },
    germany: {
        manufacturing: { success: 61, funding: 70000, timeToMarket: '9 months' },
        retail: { success: 55, funding: 55000, timeToMarket: '8 months' },
        services: { success: 64, funding: 35000, timeToMarket: '6 months' },
        tech: { success: 77, funding: 90000, timeToMarket: '11 months' }
    }
};

// Partner data for matching simulation
const partnerData = {
    japan: [
        { name: 'Tokyo Trading Co.', location: 'Tokyo, Japan', industry: 'Electronics Distribution', matchScore: 92 },
        { name: 'Osaka Import Solutions', location: 'Osaka, Japan', industry: 'Retail Chain', matchScore: 85 },
        { name: 'Kyoto Tech Partners', location: 'Kyoto, Japan', industry: 'Technology Services', matchScore: 88 }
    ],
    usa: [
        { name: 'Silicon Valley Imports', location: 'San Francisco, USA', industry: 'Tech Distribution', matchScore: 94 },
        { name: 'East Coast Trading', location: 'New York, USA', industry: 'General Import', matchScore: 79 },
        { name: 'Texas Global Partners', location: 'Austin, USA', industry: 'Manufacturing Support', matchScore: 82 }
    ],
    vietnam: [
        { name: 'Ho Chi Minh Trading', location: 'Ho Chi Minh City, Vietnam', industry: 'Retail Distribution', matchScore: 89 },
        { name: 'Hanoi Business Solutions', location: 'Hanoi, Vietnam', industry: 'Business Services', matchScore: 91 },
        { name: 'Da Nang Tech Hub', location: 'Da Nang, Vietnam', industry: 'Technology', matchScore: 86 }
    ],
    germany: [
        { name: 'Berlin Innovation Hub', location: 'Berlin, Germany', industry: 'Technology', matchScore: 87 },
        { name: 'Munich Trading Group', location: 'Munich, Germany', industry: 'Manufacturing', matchScore: 83 },
        { name: 'Hamburg Import Co.', location: 'Hamburg, Germany', industry: 'Logistics', matchScore: 90 }
    ]
};

// DOM loaded event
document.addEventListener('DOMContentLoaded', function() {
    console.log('KODIT Global Bridge Demo Loaded');
    initializeEventListeners();
    addScrollEffects();
    initializeStatCounters();
    
    // Start story auto-rotation after 5 seconds
    setTimeout(startStoryRotation, 5000);
});

// Initialize event listeners
function initializeEventListeners() {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize stat counters animation
function initializeStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    
    // Create observer for when hero section is visible
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStatCounters();
                observer.unobserve(entry.target); // Run animation only once
            }
        });
    }, observerOptions);
    
    // Observe the hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        observer.observe(heroSection);
    }
}

// Animate stat counters
function animateStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    
    statNumbers.forEach((element, index) => {
        const targetValue = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const delay = index * 200; // Stagger animation by 200ms
        
        setTimeout(() => {
            animateStatCounter(element, 0, targetValue, duration);
        }, delay);
    });
}

// Animate individual stat counter
function animateStatCounter(element, start, end, duration) {
    const startTime = performance.now();
    const startValue = parseInt(start);
    const endValue = parseInt(end);
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Use easing function for smooth animation
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutExpo);
        
        // Format the number based on its size
        if (endValue >= 1000000) {
            element.textContent = (currentValue / 1000000).toFixed(1) + 'M';
        } else if (endValue >= 1000) {
            element.textContent = (currentValue / 1000).toFixed(0) + 'K';
        } else {
            element.textContent = currentValue;
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            // Ensure final value is correct
            if (endValue >= 1000000) {
                element.textContent = (endValue / 1000000).toFixed(1) + 'M';
            } else if (endValue >= 1000) {
                element.textContent = (endValue / 1000).toFixed(0) + 'K';
            } else {
                element.textContent = endValue;
            }
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Start diagnosis function
function startDiagnosis() {
    const diagnosisSection = document.getElementById('diagnosis-demo');
    diagnosisSection.scrollIntoView({ behavior: 'smooth' });
    
    // Add highlight effect
    diagnosisSection.style.border = '3px solid #667eea';
    setTimeout(() => {
        diagnosisSection.style.border = 'none';
    }, 2000);
}

// Scroll to demo function
function scrollToDemo() {
    const demoSection = document.getElementById('demo');
    demoSection.scrollIntoView({ behavior: 'smooth' });
}

// Run Advanced AI diagnosis
function runAdvancedDiagnosis() {
    const companyName = document.getElementById('company-name').value;
    const businessType = document.getElementById('business-type').value;
    const targetMarket = document.getElementById('target-market').value;
    const companySize = document.getElementById('company-size').value;
    
    // Validation
    if (!companyName || !businessType || !targetMarket || !companySize) {
        alert('Please fill in all fields to run the advanced diagnosis.');
        return;
    }
    
    // Store data
    diagnosisData = { companyName, businessType, targetMarket, companySize };
    
    // Show loading overlay
    showLoadingOverlay();
    
    // Show loading state on button
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span data-lang="btn-analyzing">Running AI Analysis...</span>';
    button.disabled = true;
    
    // Simulate AI processing with multiple stages
    let progress = 0;
    const progressSteps = [
        'Analyzing market conditions...',
        'Evaluating business compatibility...',
        'Calculating success probability...',
        'Generating recommendations...',
        'Finalizing diagnosis report...'
    ];
    
    const progressInterval = setInterval(() => {
        if (progress < progressSteps.length) {
            updateLoadingText(progressSteps[progress]);
            updateProgressIndicator(progress + 1);
            progress++;
        }
    }, 800);
    
    // Complete analysis after 4 seconds
    setTimeout(() => {
        clearInterval(progressInterval);
        hideLoadingOverlay();
        showAdvancedDiagnosisResult();
        button.innerHTML = originalText;
        button.disabled = false;
    }, 4000);
}

// Show advanced diagnosis result
function showAdvancedDiagnosisResult() {
    const { businessType, targetMarket, companySize } = diagnosisData;
    const market = marketData[targetMarket];
    const result = market ? market[businessType] : null;
    
    if (!result) {
        alert('Market data not available for this combination.');
        return;
    }
    
    // Apply company size modifier
    const sizeModifier = {
        'micro': { success: -5, funding: 0.7, time: 0.8 },
        'small': { success: 0, funding: 1.0, time: 1.0 },
        'medium': { success: +5, funding: 1.3, time: 1.2 }
    };
    
    const modifier = sizeModifier[companySize] || sizeModifier['small'];
    const adjustedSuccess = Math.min(95, Math.max(15, result.success + modifier.success));
    const adjustedFunding = Math.round(result.funding * modifier.funding);
    const adjustedTime = result.timeToMarket.replace(/\d+/, (match) => 
        Math.max(1, Math.round(parseInt(match) * modifier.time))
    );
    
    // Update result values with animations
    animateStatCounter(document.getElementById('success-score'), 0, adjustedSuccess, 1500);
    document.getElementById('funding-need').textContent = `$${(adjustedFunding / 1000)}K`;
    document.getElementById('time-to-market').textContent = adjustedTime;
    
    // Update success bar
    const successBar = document.getElementById('success-bar');
    successBar.style.width = `${adjustedSuccess}%`;
    successBar.style.background = adjustedSuccess >= 70 ? '#27ae60' : 
                                 adjustedSuccess >= 50 ? '#f39c12' : '#e74c3c';
    
    // Update risk level
    const riskLevel = adjustedSuccess >= 70 ? 'Low' : 
                     adjustedSuccess >= 50 ? 'Medium' : 'High';
    document.getElementById('risk-level').textContent = riskLevel;
    
    // Generate market insights
    generateMarketInsights(targetMarket, businessType, adjustedSuccess);
    
    // Create market analysis chart
    createMarketChart(targetMarket, businessType);
    
    // Show result section with animation
    const resultSection = document.getElementById('diagnosis-result');
    resultSection.style.display = 'block';
    
    // Animate result appearance
    setTimeout(() => {
        resultSection.style.opacity = '0';
        resultSection.style.transform = 'translateY(30px)';
        resultSection.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            resultSection.style.opacity = '1';
            resultSection.style.transform = 'translateY(0)';
        }, 100);
    }, 200);
    
    // Scroll to result
    setTimeout(() => {
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 800);
}

// Loading overlay functions
function showLoadingOverlay() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.style.display = 'flex';
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 10);
    }
}

function hideLoadingOverlay() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    }
}

function updateLoadingText(text) {
    const loadingText = document.querySelector('#loading-overlay p[data-lang="loading-text"]');
    if (loadingText) {
        loadingText.textContent = text;
    }
}

function updateProgressIndicator(step) {
    const progressSteps = document.querySelectorAll('.progress-step');
    progressSteps.forEach((stepEl, index) => {
        if (index < step) {
            stepEl.classList.add('active');
        } else {
            stepEl.classList.remove('active');
        }
    });
}

// Generate market insights based on target market and business type
function generateMarketInsights(targetMarket, businessType, successRate) {
    const insights = {
        japan: {
            manufacturing: {
                strengths: "Strong demand for quality Korean products, established trade relationships",
                challenges: "High quality standards, complex distribution channels",
                recommendations: "Focus on premium positioning and local partnership development"
            },
            retail: {
                strengths: "Korean Wave popularity, consumer interest in K-brands",
                challenges: "Competitive retail market, seasonal buying patterns",
                recommendations: "Leverage cultural affinity and seasonal marketing strategies"
            },
            tech: {
                strengths: "Advanced technology adoption, innovation-friendly market",
                challenges: "Established local tech giants, high R&D requirements",
                recommendations: "Partner with local tech companies for market entry"
            }
        },
        usa: {
            manufacturing: {
                strengths: "Large market size, diverse industrial sectors",
                challenges: "Regulatory compliance, logistics costs",
                recommendations: "Focus on niche markets and establish local distribution"
            },
            retail: {
                strengths: "Consumer openness to international products",
                challenges: "Intense competition, marketing costs",
                recommendations: "Utilize e-commerce platforms and influencer marketing"
            },
            tech: {
                strengths: "World's largest tech market, venture capital availability",
                challenges: "High competition, intellectual property concerns",
                recommendations: "Establish US presence and build local partnerships"
            }
        },
        vietnam: {
            manufacturing: {
                strengths: "Growing economy, favorable trade agreements",
                challenges: "Infrastructure limitations, quality perceptions",
                recommendations: "Gradual market entry with quality demonstration"
            },
            retail: {
                strengths: "Young population, growing middle class",
                challenges: "Price sensitivity, local competition",
                recommendations: "Competitive pricing with value proposition focus"
            },
            tech: {
                strengths: "Rapid digitization, government support for tech",
                challenges: "Limited local tech infrastructure",
                recommendations: "Partner with government initiatives and local developers"
            }
        }
    };
    
    const marketInsights = insights[targetMarket]?.[businessType] || insights.japan.manufacturing;
    
    document.getElementById('market-strengths').textContent = marketInsights.strengths;
    document.getElementById('market-challenges').textContent = marketInsights.challenges;
    document.getElementById('ai-recommendations').textContent = marketInsights.recommendations;
}

// Create market analysis chart
function createMarketChart(targetMarket, businessType) {
    const ctx = document.getElementById('marketChart').getContext('2d');
    
    // Sample market data for visualization
    const chartData = {
        labels: ['Market Size', 'Competition', 'Growth Rate', 'Entry Barriers', 'Success Factors'],
        datasets: [{
            label: 'Market Analysis',
            data: [
                Math.random() * 40 + 60, // Market Size (60-100)
                Math.random() * 30 + 40, // Competition (40-70)
                Math.random() * 50 + 50, // Growth Rate (50-100)
                Math.random() * 60 + 20, // Entry Barriers (20-80)
                Math.random() * 30 + 70  // Success Factors (70-100)
            ],
            backgroundColor: 'rgba(102, 126, 234, 0.2)',
            borderColor: 'rgba(102, 126, 234, 1)',
            pointBackgroundColor: 'rgba(102, 126, 234, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(102, 126, 234, 1)'
        }]
    };
    
    new Chart(ctx, {
        type: 'radar',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    pointLabels: {
                        font: {
                            size: 11
                        }
                    }
                }
            }
        }
    });
}

// Advanced matching function
function showAdvancedMatching() {
    const matchingDemo = document.getElementById('matching-demo');
    const { targetMarket } = diagnosisData;
    
    // Get partners for the target market
    const partners = partnerData[targetMarket] || partnerData.japan;
    
    // Update matching results with enhanced cards
    const matchingResults = matchingDemo.querySelector('#matching-results');
    matchingResults.innerHTML = '';
    
    partners.forEach((partner, index) => {
        const partnerCard = createAdvancedPartnerCard(partner, index);
        matchingResults.appendChild(partnerCard);
    });
    
    // Show matching section
    matchingDemo.style.display = 'block';
    matchingDemo.scrollIntoView({ behavior: 'smooth' });
    
    // Add staggered animation
    const cards = matchingResults.querySelectorAll('.partner-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'all 0.6s ease';
        }, index * 200);
    });
}

// Advanced financing function
function showAdvancedFinancing() {
    const financingDemo = document.getElementById('financing-demo');
    updateFinancingCalc(); // Initialize calculator
    
    // Show financing section
    financingDemo.style.display = 'block';
    financingDemo.scrollIntoView({ behavior: 'smooth' });
    
    // Start approval simulation
    simulateApprovalProcess();
    
    // Create financing package chart
    createFinancingChart();
}

// Download report function
function downloadReport() {
    const { companyName, businessType, targetMarket } = diagnosisData;
    
    // Create a simple report content
    const reportContent = `
KODIT Global Bridge - Market Diagnosis Report
===========================================

Company: ${companyName}
Business Type: ${businessType}
Target Market: ${targetMarket}
Generated: ${new Date().toLocaleDateString()}

EXECUTIVE SUMMARY
- Market entry recommended with strategic planning
- Estimated success probability based on AI analysis
- Customized financial package available

NEXT STEPS
1. Contact recommended partners
2. Apply for financial support package
3. Attend market entry preparation workshop

For full detailed report, please contact KODIT directly.
    `;
    
    // Create and download file
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `KODIT_Global_Report_${companyName.replace(/\s+/g, '_')}_${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    // Show success message
    setTimeout(() => {
        alert('📋 Report Downloaded!\n\nYour personalized global expansion report has been downloaded.\n\nThis demo report contains basic information. The actual platform would provide:\n• Detailed market analysis\n• Financial projections\n• Risk assessments\n• Partner recommendations\n• Regulatory guidance');
    }, 500);
}

// Show funding breakdown modal
function showFundingBreakdown() {
    const modal = document.getElementById('funding-modal');
    modal.style.display = 'flex';
    
    // Create funding breakdown chart
    createFundingBreakdownChart();
}

// Close funding modal
function closeFundingModal() {
    const modal = document.getElementById('funding-modal');
    modal.style.display = 'none';
}

// Apply advanced financing
function applyAdvancedFinancing() {
    const button = event.target;
    const originalText = button.innerHTML;
    
    // Show processing with stages
    const stages = [
        'Submitting application...',
        'Verifying documents...',
        'AI risk assessment...',
        'Generating package...',
        'Final approval...'
    ];
    
    let currentStage = 0;
    button.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${stages[currentStage]}`;
    button.disabled = true;
    
    const stageInterval = setInterval(() => {
        currentStage++;
        if (currentStage < stages.length) {
            button.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${stages[currentStage]}`;
        }
    }, 800);
    
    setTimeout(() => {
        clearInterval(stageInterval);
        
        // Show success
        button.innerHTML = '✅ Application Approved!';
        button.style.background = '#27ae60';
        
        // Show detailed success message
        setTimeout(() => {
            alert(`🎉 Smart Financial Package Approved!\n\n✅ Export Credit Guarantee: Approved\n✅ Trade Risk Insurance: Included\n✅ Currency Hedge: Available\n✅ Working Capital: Pre-approved\n\n📧 Confirmation sent to your email\n📱 SMS notifications activated\n🏦 Funds available within 24 hours\n\nWelcome to your global expansion journey!`);
            
            // Reset button after delay
            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
                button.style.background = '';
            }, 3000);
        }, 1000);
    }, 4000);
}

// Update financing calculator
function updateFinancingCalc() {
    const exportVolume = parseInt(document.getElementById('export-volume').value);
    const riskTolerance = document.getElementById('risk-tolerance').value;
    
    // Update display
    document.getElementById('export-display').textContent = `$${exportVolume.toLocaleString()}`;
    
    // Calculate package amounts based on export volume and risk
    const riskMultipliers = {
        'low': { guarantee: 0.8, insurance: 0.6, working: 0.15 },
        'medium': { guarantee: 0.7, insurance: 0.5, working: 0.20 },
        'high': { guarantee: 0.6, insurance: 0.4, working: 0.25 }
    };
    
    const multiplier = riskMultipliers[riskTolerance] || riskMultipliers['medium'];
    
    const guaranteeAmount = Math.round(exportVolume * multiplier.guarantee);
    const insuranceAmount = Math.round(exportVolume * multiplier.insurance);
    const workingAmount = Math.round(exportVolume * multiplier.working);
    const totalPackage = guaranteeAmount + insuranceAmount + workingAmount;
    
    // Update display values
    document.getElementById('total-package').textContent = `Total: $${totalPackage.toLocaleString()}`;
    document.getElementById('guarantee-amount').textContent = `$${guaranteeAmount.toLocaleString()} guarantee coverage`;
    document.getElementById('insurance-amount').textContent = `$${insuranceAmount.toLocaleString()} insurance coverage`;
    document.getElementById('working-amount').textContent = `$${workingAmount.toLocaleString()} revolving credit`;
    
    // Update rates based on risk
    const rates = {
        'low': { guarantee: 1.8, insurance: 1.5, hedge: 0.3, working: 3.8 },
        'medium': { guarantee: 2.1, insurance: 1.8, hedge: 0.5, working: 4.2 },
        'high': { guarantee: 2.5, insurance: 2.2, hedge: 0.7, working: 4.8 }
    };
    
    const rate = rates[riskTolerance] || rates['medium'];
    const packageItems = document.querySelectorAll('.package-item .package-rate');
    if (packageItems.length >= 4) {
        packageItems[0].textContent = `${rate.guarantee}%`;
        packageItems[1].textContent = `${rate.insurance}%`;
        packageItems[2].textContent = `${rate.hedge}%`;
        packageItems[3].textContent = `${rate.working}%`;
    }
}

// Create advanced partner card element
function createAdvancedPartnerCard(partner, index) {
    const card = document.createElement('div');
    card.className = 'partner-card advanced';
    
    // Calculate additional metrics for advanced card
    const responseTime = Math.floor(Math.random() * 12) + 4; // 4-16 hours
    const languages = ['English', 'Korean', 'Local'];
    const certifications = ['ISO 9001', 'Local Business License', 'Trade Association Member'];
    
    card.innerHTML = `
        <div class="partner-header">
            <div class="partner-avatar">
                <i class="fas fa-building"></i>
            </div>
            <div class="partner-info">
                <h4>${partner.name}</h4>
                <p><i class="fas fa-map-marker-alt"></i> ${partner.location}</p>
                <p><i class="fas fa-industry"></i> ${partner.industry}</p>
            </div>
            <div class="match-score">
                <div class="score">${partner.matchScore}%</div>
                <small>AI Match</small>
            </div>
        </div>
        
        <div class="partner-details">
            <div class="detail-item">
                <i class="fas fa-clock"></i>
                <span>Avg Response: ${responseTime}h</span>
            </div>
            <div class="detail-item">
                <i class="fas fa-language"></i>
                <span>Languages: ${languages.slice(0, 2).join(', ')}</span>
            </div>
            <div class="detail-item">
                <i class="fas fa-certificate"></i>
                <span>Verified Partner</span>
            </div>
        </div>
        
        <div class="partner-metrics">
            <div class="metric">
                <strong>${Math.floor(Math.random() * 50) + 20}</strong>
                <small>Active Deals</small>
            </div>
            <div class="metric">
                <strong>${(Math.random() * 4 + 1).toFixed(1)}★</strong>
                <small>Rating</small>
            </div>
            <div class="metric">
                <strong>${Math.floor(Math.random() * 8) + 2}y</strong>
                <small>Experience</small>
            </div>
        </div>
        
        <div class="partner-actions">
            <button class="btn-contact primary" onclick="contactPartner('${partner.name}')">
                <i class="fas fa-envelope"></i> Send Message
            </button>
            <button class="btn-contact secondary" onclick="scheduleCall('${partner.name}')">
                <i class="fas fa-video"></i> Schedule Call
            </button>
        </div>
    `;
    
    return card;
}

// Schedule call function
function scheduleCall(partnerName) {
    alert(`📹 Video Call Scheduled!\n\nScheduling video call with ${partnerName}...\n\n📅 Available slots:\n• Today 3:00 PM KST\n• Tomorrow 10:00 AM KST\n• Tomorrow 2:00 PM KST\n\nCalendar invitation will be sent to your email.`);
}

// Simulate approval process
function simulateApprovalProcess() {
    const steps = document.querySelectorAll('.approval-step');
    
    // Reset all steps
    steps.forEach(step => {
        step.classList.remove('completed', 'in-progress');
    });
    
    // Simulate step-by-step approval
    let currentStep = 0;
    const interval = setInterval(() => {
        if (currentStep < steps.length) {
            if (currentStep > 0) {
                steps[currentStep - 1].classList.remove('in-progress');
                steps[currentStep - 1].classList.add('completed');
                steps[currentStep - 1].querySelector('i').className = 'fas fa-check-circle';
            }
            
            if (currentStep < steps.length) {
                steps[currentStep].classList.add('in-progress');
                steps[currentStep].querySelector('i').className = 'fas fa-spinner fa-spin';
            }
            
            currentStep++;
        } else {
            clearInterval(interval);
            // Complete final step
            steps[steps.length - 1].classList.remove('in-progress');
            steps[steps.length - 1].classList.add('completed');
            steps[steps.length - 1].querySelector('i').className = 'fas fa-check-circle';
            steps[steps.length - 1].querySelector('span').textContent = 'Final Approval - Completed ✓';
        }
    }, 1500);
}

// Create financing package chart
function createFinancingChart() {
    const ctx = document.getElementById('packageChart');
    if (!ctx) return;
    
    const chartCtx = ctx.getContext('2d');
    
    const data = {
        labels: ['Export Guarantee', 'Trade Insurance', 'Currency Hedge', 'Working Capital'],
        datasets: [{
            data: [45, 30, 5, 20],
            backgroundColor: [
                '#667eea',
                '#764ba2',
                '#f093fb',
                '#f5576c'
            ],
            borderWidth: 0
        }]
    };
    
    new Chart(chartCtx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                }
            }
        }
    });
}

// Create funding breakdown chart
function createFundingBreakdownChart() {
    const ctx = document.getElementById('fundingChart');
    if (!ctx) return;
    
    const chartCtx = ctx.getContext('2d');
    
    const data = {
        labels: ['Market Research', 'Legal & Compliance', 'Marketing Launch', 'Inventory', 'Operations', 'Contingency'],
        datasets: [{
            label: 'Funding Allocation',
            data: [8000, 5000, 12000, 15000, 7000, 3000],
            backgroundColor: [
                '#667eea',
                '#764ba2',
                '#f093fb',
                '#f5576c',
                '#4facfe',
                '#43e97b'
            ]
        }]
    };
    
    new Chart(chartCtx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
    
    // Update funding details
    const fundingDetails = document.getElementById('funding-details');
    if (fundingDetails) {
        fundingDetails.innerHTML = `
            <div class="funding-item">
                <span class="funding-category">Market Research & Analysis</span>
                <span class="funding-amount">$8,000</span>
                <div class="funding-description">Comprehensive market study and competitor analysis</div>
            </div>
            <div class="funding-item">
                <span class="funding-category">Legal & Compliance</span>
                <span class="funding-amount">$5,000</span>
                <div class="funding-description">Regulatory compliance and legal documentation</div>
            </div>
            <div class="funding-item">
                <span class="funding-category">Marketing Launch</span>
                <span class="funding-amount">$12,000</span>
                <div class="funding-description">Digital marketing and brand establishment</div>
            </div>
            <div class="funding-item">
                <span class="funding-category">Initial Inventory</span>
                <span class="funding-amount">$15,000</span>
                <div class="funding-description">Product inventory for market launch</div>
            </div>
            <div class="funding-item">
                <span class="funding-category">Operations Setup</span>
                <span class="funding-amount">$7,000</span>
                <div class="funding-description">Logistics and operational infrastructure</div>
            </div>
            <div class="funding-item">
                <span class="funding-category">Contingency Reserve</span>
                <span class="funding-amount">$3,000</span>
                <div class="funding-description">Emergency fund for unexpected costs</div>
            </div>
        `;
    }
}

// Show financing options
function showFinancing() {
    const financingDemo = document.getElementById('financing-demo');
    const { businessType, targetMarket } = diagnosisData;
    const market = marketData[targetMarket];
    const result = market ? market[businessType] : null;
    
    if (!result) return;
    
    // Update financing amounts
    const totalAmount = result.funding;
    const guaranteeAmount = Math.round(totalAmount * 0.6);
    const insuranceAmount = Math.round(totalAmount * 0.4);
    
    financingDemo.querySelector('.package-amount').textContent = `Total: $${totalAmount.toLocaleString()}`;
    
    // Update package details
    const packageItems = financingDemo.querySelectorAll('.package-item');
    packageItems[0].querySelector('p').textContent = `$${guaranteeAmount.toLocaleString()} guarantee coverage`;
    packageItems[1].querySelector('p').textContent = `$${insuranceAmount.toLocaleString()} insurance coverage`;
    
    // Show financing section
    financingDemo.style.display = 'block';
    financingDemo.scrollIntoView({ behavior: 'smooth' });
    
    // Add animation
    setTimeout(() => {
        financingDemo.style.opacity = '0';
        financingDemo.style.transform = 'translateY(20px)';
        financingDemo.style.opacity = '1';
        financingDemo.style.transform = 'translateY(0)';
        financingDemo.style.transition = 'all 0.5s ease';
    }, 100);
}

// Contact partner function
function contactPartner(partnerName) {
    alert(`Connecting you with ${partnerName}...\n\nIn the real platform, this would:\n• Open direct messaging\n• Schedule video meeting\n• Share company profile\n• Exchange contact information`);
}

// Apply for financing
function applyFinancing() {
    const button = event.target;
    const originalText = button.innerHTML;
    
    // Show processing
    button.innerHTML = '<span class="loading"></span> Processing Application...';
    button.disabled = true;
    
    setTimeout(() => {
        alert(`🎉 Financing Application Submitted!\n\nYour application for global expansion financing has been submitted.\n\n✅ Expected approval: Same day\n✅ Integrated package: Export Guarantee + Trade Insurance + Currency Hedge\n✅ Next steps: Documentation review\n\nYou will receive confirmation within 4 hours.`);
        
        button.innerHTML = '✅ Application Submitted';
        button.style.background = '#27ae60';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
            button.style.background = '';
        }, 3000);
    }, 2500);
}

// Add scroll effects
function addScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    const startValue = parseInt(start);
    const endValue = parseInt(end);
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(startValue + (endValue - startValue) * progress);
        
        element.textContent = currentValue + (element.textContent.includes('%') ? '%' : '');
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile-open');
}

// Easter egg - Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showEasterEgg();
    }
});

function showEasterEgg() {
    alert('🎮 Konami Code Activated!\n\n🚀 Secret Feature Unlocked: "Hyper-Speed Global Expansion Mode"\n\n✨ All diagnosis now show 99% success rate!\n✨ Funding requirements reduced by 50%!\n✨ Time to market: "Tomorrow"!\n\n(Just kidding... but wouldn\'t that be nice? 😄)');
}

// Success Stories Carousel Functions
let currentStoryIndex = 0;
const totalStories = 3;

function showStory(index) {
    const stories = document.querySelectorAll('.story-card');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    
    // Hide all stories
    stories.forEach(story => story.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show selected story
    if (stories[index]) {
        stories[index].classList.add('active');
        dots[index].classList.add('active');
        currentStoryIndex = index;
    }
}

function nextStory() {
    const nextIndex = (currentStoryIndex + 1) % totalStories;
    showStory(nextIndex);
}

function prevStory() {
    const prevIndex = (currentStoryIndex - 1 + totalStories) % totalStories;
    showStory(prevIndex);
}

// Auto-rotate stories (optional)
function startStoryRotation() {
    setInterval(() => {
        nextStory();
    }, 8000); // Change story every 8 seconds
}

// Export functions for global access
window.startDiagnosis = startDiagnosis;
window.scrollToDemo = scrollToDemo;
window.runAdvancedDiagnosis = runAdvancedDiagnosis;
window.showAdvancedMatching = showAdvancedMatching;
window.showAdvancedFinancing = showAdvancedFinancing;
window.downloadReport = downloadReport;
window.showFundingBreakdown = showFundingBreakdown;
window.closeFundingModal = closeFundingModal;
window.applyAdvancedFinancing = applyAdvancedFinancing;
window.updateFinancingCalc = updateFinancingCalc;
window.contactPartner = contactPartner;
window.scheduleCall = scheduleCall;
window.toggleMobileMenu = toggleMobileMenu;
window.showStory = showStory;
window.nextStory = nextStory;
window.prevStory = prevStory;

// Performance monitoring
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`🚀 KODIT Global Bridge Demo loaded in ${Math.round(loadTime)}ms`);
});