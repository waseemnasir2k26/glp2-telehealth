// Mock patient data for demo
export const mockPatient = {
  id: "P-2024-001",
  name: "Sarah Mitchell",
  email: "sarah.mitchell@email.com",
  phone: "(555) 123-4567",
  dateOfBirth: "1985-06-15",
  startDate: "2024-09-15",
  currentWeight: 178,
  startingWeight: 215,
  goalWeight: 160,
  height: "5'6\"",
  bmi: 28.7,
  startingBmi: 34.7,
  treatmentProgress: 67,
  currentMedication: "Semaglutide",
  currentDosage: "1.0mg weekly",
  nextRefillDate: "2025-03-01",
  nextAppointmentDate: "2025-02-25",
  provider: "Dr. Emily Chen, MD",
  providerId: "DR-001",
};

export const mockWeightHistory = [
  { date: "Sep 2024", weight: 215 },
  { date: "Oct 2024", weight: 208 },
  { date: "Nov 2024", weight: 198 },
  { date: "Dec 2024", weight: 190 },
  { date: "Jan 2025", weight: 183 },
  { date: "Feb 2025", weight: 178 },
];

export const mockAppointments = [
  {
    id: "APT-001",
    date: "2025-02-25",
    time: "10:00 AM",
    type: "Follow-up Consultation",
    provider: "Dr. Emily Chen, MD",
    status: "upcoming",
    isVideo: true,
  },
  {
    id: "APT-002",
    date: "2025-03-25",
    time: "2:30 PM",
    type: "Monthly Check-in",
    provider: "Dr. Emily Chen, MD",
    status: "scheduled",
    isVideo: true,
  },
  {
    id: "APT-003",
    date: "2025-01-25",
    time: "11:00 AM",
    type: "Dosage Adjustment",
    provider: "Dr. Emily Chen, MD",
    status: "completed",
    isVideo: true,
  },
  {
    id: "APT-004",
    date: "2024-12-20",
    time: "9:30 AM",
    type: "Monthly Check-in",
    provider: "Dr. Emily Chen, MD",
    status: "completed",
    isVideo: true,
  },
];

export const mockMessages = [
  {
    id: "MSG-001",
    sender: "Dr. Emily Chen",
    senderType: "provider" as const,
    content: "Great progress this month, Sarah! Your weight loss is right on track. Keep up the excellent work with your diet and exercise routine.",
    timestamp: "2025-02-15T14:30:00",
    read: true,
  },
  {
    id: "MSG-002",
    sender: "Sarah Mitchell",
    senderType: "patient" as const,
    content: "Thank you, Dr. Chen! I've been feeling much more energetic lately. Should I continue with the same dosage?",
    timestamp: "2025-02-15T15:45:00",
    read: true,
  },
  {
    id: "MSG-003",
    sender: "Dr. Emily Chen",
    senderType: "provider" as const,
    content: "Yes, let's maintain the current 1.0mg dosage. We can discuss any adjustments at your next appointment. Remember to log any side effects you experience.",
    timestamp: "2025-02-15T16:20:00",
    read: true,
  },
  {
    id: "MSG-004",
    sender: "Dr. Emily Chen",
    senderType: "provider" as const,
    content: "Quick reminder: Your appointment is coming up on Feb 25th at 10:00 AM. Please complete your pre-visit questionnaire beforehand.",
    timestamp: "2025-02-18T09:00:00",
    read: false,
  },
];

export const mockMedications = [
  {
    id: "MED-001",
    name: "Semaglutide",
    dosage: "1.0mg",
    frequency: "Weekly injection",
    startDate: "2024-09-15",
    status: "active",
    nextRefill: "2025-03-01",
    refillsRemaining: 3,
    instructions: "Inject subcutaneously once weekly on the same day each week. Rotate injection sites.",
    sideEffects: ["Mild nausea (first 2 weeks)", "Decreased appetite"],
  },
];

export const mockMedicationHistory = [
  { date: "Sep 2024", dosage: "0.25mg", note: "Starting dose" },
  { date: "Oct 2024", dosage: "0.5mg", note: "Dose increase" },
  { date: "Nov 2024", dosage: "1.0mg", note: "Maintenance dose reached" },
  { date: "Dec 2024", dosage: "1.0mg", note: "Continued" },
  { date: "Jan 2025", dosage: "1.0mg", note: "Continued" },
  { date: "Feb 2025", dosage: "1.0mg", note: "Current" },
];

export const mockLabResults = [
  {
    id: "LAB-001",
    date: "2025-01-15",
    type: "Comprehensive Metabolic Panel",
    results: [
      { name: "BMI", value: "28.7", unit: "kg/m²", range: "18.5-24.9", status: "high" },
      { name: "Fasting Glucose", value: "95", unit: "mg/dL", range: "70-100", status: "normal" },
      { name: "HbA1c", value: "5.4", unit: "%", range: "<5.7", status: "normal" },
      { name: "Total Cholesterol", value: "188", unit: "mg/dL", range: "<200", status: "normal" },
      { name: "LDL Cholesterol", value: "110", unit: "mg/dL", range: "<100", status: "high" },
      { name: "HDL Cholesterol", value: "55", unit: "mg/dL", range: ">40", status: "normal" },
      { name: "Triglycerides", value: "120", unit: "mg/dL", range: "<150", status: "normal" },
    ],
  },
  {
    id: "LAB-002",
    date: "2024-09-10",
    type: "Initial Metabolic Panel",
    results: [
      { name: "BMI", value: "34.7", unit: "kg/m²", range: "18.5-24.9", status: "high" },
      { name: "Fasting Glucose", value: "112", unit: "mg/dL", range: "70-100", status: "high" },
      { name: "HbA1c", value: "5.9", unit: "%", range: "<5.7", status: "high" },
      { name: "Total Cholesterol", value: "225", unit: "mg/dL", range: "<200", status: "high" },
      { name: "LDL Cholesterol", value: "145", unit: "mg/dL", range: "<100", status: "high" },
      { name: "HDL Cholesterol", value: "42", unit: "mg/dL", range: ">40", status: "normal" },
      { name: "Triglycerides", value: "185", unit: "mg/dL", range: "<150", status: "high" },
    ],
  },
];

export const mockConsentForms = [
  {
    id: "CONSENT-001",
    name: "Telehealth Informed Consent",
    signedDate: "2024-09-10",
    status: "signed",
  },
  {
    id: "CONSENT-002",
    name: "HIPAA Notice of Privacy Practices",
    signedDate: "2024-09-10",
    status: "signed",
  },
  {
    id: "CONSENT-003",
    name: "Treatment Agreement",
    signedDate: "2024-09-10",
    status: "signed",
  },
  {
    id: "CONSENT-004",
    name: "Financial Agreement",
    signedDate: "2024-09-10",
    status: "signed",
  },
];

export const mockProviders = [
  {
    id: "DR-001",
    name: "Dr. Emily Chen, MD",
    title: "Board Certified Internal Medicine",
    specialty: "Weight Management & Metabolic Health",
    avatar: "/placeholder-doctor-1.jpg",
    bio: "Dr. Chen has over 15 years of experience in internal medicine with a focus on metabolic health and weight management.",
    credentials: ["MD - Stanford University", "Board Certified - Internal Medicine", "Fellowship - Endocrinology"],
  },
  {
    id: "DR-002",
    name: "Dr. Michael Torres, DO",
    title: "Board Certified Family Medicine",
    specialty: "Preventive Medicine & Lifestyle Modification",
    avatar: "/placeholder-doctor-2.jpg",
    bio: "Dr. Torres specializes in preventive medicine and helps patients achieve sustainable weight loss through evidence-based protocols.",
    credentials: ["DO - PCOM", "Board Certified - Family Medicine", "Certified - Obesity Medicine"],
  },
  {
    id: "DR-003",
    name: "Dr. Amanda Williams, MD",
    title: "Board Certified Endocrinology",
    specialty: "Hormonal Health & Metabolic Disorders",
    avatar: "/placeholder-doctor-3.jpg",
    bio: "Dr. Williams is an endocrinologist with expertise in hormonal health and its impact on weight and metabolism.",
    credentials: ["MD - Johns Hopkins", "Board Certified - Endocrinology", "Fellowship - Metabolic Medicine"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Jennifer M.",
    location: "Austin, TX",
    rating: 5,
    weightLost: 47,
    duration: "6 months",
    image: "/testimonial-1.jpg",
    quote: "I've tried everything over the years, but GLP-2 therapy finally gave me the results I've been looking for. The medical team is incredibly supportive, and the process couldn't be easier.",
  },
  {
    id: 2,
    name: "Robert K.",
    location: "Denver, CO",
    rating: 5,
    weightLost: 62,
    duration: "8 months",
    image: "/testimonial-2.jpg",
    quote: "As a busy professional, I needed a program that worked with my schedule. The telehealth appointments and home delivery made it possible for me to finally prioritize my health.",
  },
  {
    id: 3,
    name: "Maria S.",
    location: "Miami, FL",
    rating: 5,
    weightLost: 38,
    duration: "5 months",
    image: "/testimonial-3.jpg",
    quote: "The personalized approach made all the difference. My doctor adjusted my treatment based on my progress, and I never felt like just a number. Life-changing experience!",
  },
];

export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    price: 199,
    period: "month",
    description: "Perfect for those beginning their weight management journey",
    features: [
      "Initial physician consultation",
      "GLP-2 medication (starting dose)",
      "Monthly check-in appointments",
      "Patient portal access",
      "Email support",
      "Basic progress tracking",
    ],
    notIncluded: [
      "Weekly provider messaging",
      "Nutrition coaching",
      "Priority scheduling",
    ],
  },
  {
    id: "complete",
    name: "Complete",
    price: 299,
    period: "month",
    description: "Our most popular plan for comprehensive care",
    popular: true,
    features: [
      "Everything in Starter, plus:",
      "Bi-weekly physician consultations",
      "Unlimited provider messaging",
      "Nutrition guidance",
      "Advanced progress analytics",
      "Priority appointment scheduling",
      "Side effect management support",
    ],
    notIncluded: [
      "Dedicated care coordinator",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 449,
    period: "month",
    description: "White-glove service for optimal results",
    features: [
      "Everything in Complete, plus:",
      "Weekly physician consultations",
      "Dedicated care coordinator",
      "Personalized nutrition plan",
      "Fitness guidance",
      "Lab work coordination",
      "Concierge support",
      "Family member discounts",
    ],
    notIncluded: [],
  },
];

export const faqs = [
  {
    question: "What is GLP-2 and how does it work for weight loss?",
    answer: "GLP-2 (Glucagon-Like Peptide-2) is a naturally occurring hormone that helps regulate appetite and metabolism. When used therapeutically, GLP-2 agonists like semaglutide work by mimicking this hormone, helping you feel full sooner and longer, reducing cravings, and improving blood sugar control. Clinical studies have shown significant weight loss results when combined with lifestyle modifications.",
  },
  {
    question: "Am I eligible for GLP-2 therapy?",
    answer: "GLP-2 therapy may be appropriate for adults with a BMI of 30 or higher (obesity), or a BMI of 27 or higher with at least one weight-related health condition such as type 2 diabetes, high blood pressure, or high cholesterol. Our medical team will review your complete health history during your consultation to determine if this treatment is right for you.",
  },
  {
    question: "What are the potential side effects?",
    answer: "The most common side effects include nausea, vomiting, diarrhea, and constipation, particularly when starting treatment or increasing doses. These typically improve as your body adjusts. Our physicians start with lower doses and gradually increase to minimize side effects. Serious side effects are rare but will be discussed during your consultation.",
  },
  {
    question: "How quickly will I see results?",
    answer: "Results vary by individual, but most patients begin to notice changes within the first 4-6 weeks of treatment. Clinical studies show an average weight loss of 15-20% of body weight over 68 weeks. Your physician will work with you to set realistic goals and monitor your progress throughout treatment.",
  },
  {
    question: "How is the medication delivered?",
    answer: "Your medication is shipped directly to your door from our licensed, FDA-registered pharmacy partners. Shipments are discreet and temperature-controlled when necessary. You'll receive detailed instructions for proper storage and administration, and our team is always available to answer questions.",
  },
  {
    question: "Is telehealth as effective as in-person visits?",
    answer: "Yes! Telehealth has been proven equally effective for weight management programs. Our board-certified physicians conduct thorough video consultations, review your health data, and provide personalized care. Many patients actually prefer telehealth for its convenience and privacy.",
  },
  {
    question: "Can I use my insurance or HSA/FSA?",
    answer: "While we don't bill insurance directly, many patients successfully obtain reimbursement from their insurance providers. We provide detailed receipts and documentation for submission. HSA and FSA funds are typically accepted for our services and medications. Our team can help with any documentation needed.",
  },
  {
    question: "What happens if I need to cancel?",
    answer: "We understand circumstances change. You can cancel your subscription at any time with no cancellation fees. Simply notify us before your next billing cycle. If you have remaining medication, our team can provide guidance on safe discontinuation. We're here to support you, even if you decide to pause treatment.",
  },
  {
    question: "Is my information secure and private?",
    answer: "Absolutely. We are fully HIPAA compliant and use enterprise-grade encryption for all patient data. Your health information is never shared without your explicit consent. Our platform has been certified by LegitScript, the leading verification service for healthcare websites.",
  },
  {
    question: "What states do you serve?",
    answer: "We currently provide telehealth services in 48 states. During your initial assessment, we'll confirm that we're licensed to practice in your state. Our network of physicians holds licenses across multiple states to serve as many patients as possible.",
  },
];

export const injectionSites = [
  { name: "Abdomen", description: "2 inches from navel", recommended: true },
  { name: "Upper Thigh", description: "Front/outer area", recommended: true },
  { name: "Upper Arm", description: "Back of arm", recommended: false },
];

export const medicalConditions = [
  "Type 2 Diabetes",
  "Hypertension",
  "Heart Disease",
  "Thyroid Disorders",
  "PCOS",
  "Sleep Apnea",
  "History of Eating Disorders",
  "Pancreatitis",
  "Kidney Disease",
  "Cancer (current/history)",
  "Pregnancy/Breastfeeding",
  "Gallbladder Disease",
  "Depression/Anxiety",
  "None of the above",
];

export const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
];
