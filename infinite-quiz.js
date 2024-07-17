const questions = [
    { question: "環境 (かんきょう)", answers: [{ text: "Environment", correct: true }, { text: "Company", correct: false }, { text: "Career", correct: false }, { text: "Discussion", correct: false }] },
    { question: "工場 (こうじょう)", answers: [{ text: "Factory", correct: true }, { text: "Hospital", correct: false }, { text: "Restaurant", correct: false }, { text: "Office", correct: false }] },
    { question: "成績 (せいせき)", answers: [{ text: "Grade", correct: true }, { text: "Exam", correct: false }, { text: "Attendance", correct: false }, { text: "Schedule", correct: false }] },
    { question: "会話 (かいわ)", answers: [{ text: "Conversation", correct: true }, { text: "Language", correct: false }, { text: "Speech", correct: false }, { text: "Discussion", correct: false }] },
    { question: "経験 (けいけん)", answers: [{ text: "Experience", correct: true }, { text: "Training", correct: false }, { text: "Lesson", correct: false }, { text: "Memory", correct: false }] },
    { question: "税金 (ぜいきん)", answers: [{ text: "Tax", correct: true }, { text: "Fee", correct: false }, { text: "Debt", correct: false }, { text: "Credit", correct: false }] },
    { question: "態度 (たいど)", answers: [{ text: "Attitude", correct: true }, { text: "Behavior", correct: false }, { text: "Mood", correct: false }, { text: "Gesture", correct: false }] },
    { question: "責任 (せきにん)", answers: [{ text: "Responsibility", correct: true }, { text: "Authority", correct: false }, { text: "Accountability", correct: false }, { text: "Obligation", correct: false }] },
    { question: "対策 (たいさく)", answers: [{ text: "Countermeasure", correct: true }, { text: "Solution", correct: false }, { text: "Plan", correct: false }, { text: "Method", correct: false }] },
    { question: "競争 (きょうそう)", answers: [{ text: "Competition", correct: true }, { text: "Cooperation", correct: false }, { text: "Challenge", correct: false }, { text: "Struggle", correct: false }] },
    { question: "増加 (ぞうか)", answers: [{ text: "Increase", correct: true }, { text: "Decrease", correct: false }, { text: "Growth", correct: false }, { text: "Expansion", correct: false }] },
    { question: "利益 (りえき)", answers: [{ text: "Profit", correct: true }, { text: "Revenue", correct: false }, { text: "Income", correct: false }, { text: "Gain", correct: false }] },
    { question: "組織 (そしき)", answers: [{ text: "Organization", correct: true }, { text: "System", correct: false }, { text: "Structure", correct: false }, { text: "Group", correct: false }] },
    { question: "技術 (ぎじゅつ)", answers: [{ text: "Technology", correct: true }, { text: "Skill", correct: false }, { text: "Technique", correct: false }, { text: "Method", correct: false }] },
    { question: "資格 (しかく)", answers: [{ text: "Qualification", correct: true }, { text: "Certificate", correct: false }, { text: "License", correct: false }, { text: "Degree", correct: false }] },
    { question: "調査 (ちょうさ)", answers: [{ text: "Investigation", correct: true }, { text: "Research", correct: false }, { text: "Survey", correct: false }, { text: "Analysis", correct: false }] },
    { question: "契約 (けいやく)", answers: [{ text: "Contract", correct: true }, { text: "Agreement", correct: false }, { text: "Deal", correct: false }, { text: "Negotiation", correct: false }] },
    { question: "進展 (しんてん)", answers: [{ text: "Progress", correct: true }, { text: "Development", correct: false }, { text: "Advancement", correct: false }, { text: "Improvement", correct: false }] },
    { question: "認識 (にんしき)", answers: [{ text: "Recognition", correct: true }, { text: "Awareness", correct: false }, { text: "Perception", correct: false }, { text: "Understanding", correct: false }] },
    { question: "感覚 (かんかく)", answers: [{ text: "Sense", correct: true }, { text: "Feeling", correct: false }, { text: "Sensation", correct: false }, { text: "Perception", correct: false }] },
    { question: "構成 (こうせい)", answers: [{ text: "Composition", correct: true }, { text: "Structure", correct: false }, { text: "Formation", correct: false }, { text: "Arrangement", correct: false }] },
    { question: "革新 (かくしん)", answers: [{ text: "Innovation", correct: true }, { text: "Revolution", correct: false }, { text: "Change", correct: false }, { text: "Transformation", correct: false }] },
    { question: "発展 (はってん)", answers: [{ text: "Development", correct: true }, { text: "Growth", correct: false }, { text: "Advancement", correct: false }, { text: "Progress", correct: false }] },
    { question: "制度 (せいど)", answers: [{ text: "System", correct: true }, { text: "Institution", correct: false }, { text: "Regulation", correct: false }, { text: "Policy", correct: false }] },
    { question: "原因 (げんいん)", answers: [{ text: "Cause", correct: true }, { text: "Reason", correct: false }, { text: "Factor", correct: false }, { text: "Source", correct: false }] },
    { question: "障害 (しょうがい)", answers: [{ text: "Obstacle", correct: true }, { text: "Barrier", correct: false }, { text: "Difficulty", correct: false }, { text: "Challenge", correct: false }] },
    { question: "財政 (ざいせい)", answers: [{ text: "Finance", correct: true }, { text: "Economy", correct: false }, { text: "Budget", correct: false }, { text: "Fiscal", correct: false }] },
    { question: "対象 (たいしょう)", answers: [{ text: "Target", correct: true }, { text: "Subject", correct: false }, { text: "Object", correct: false }, { text: "Goal", correct: false }] },
    { question: "取引 (とりひき)", answers: [{ text: "Transaction", correct: true }, { text: "Deal", correct: false }, { text: "Business", correct: false }, { text: "Trade", correct: false }] },
    { question: "改善 (かいぜん)", answers: [{ text: "Improvement", correct: true }, { text: "Enhancement", correct: false }, { text: "Development", correct: false }, { text: "Progress", correct: false }] },
    { question: "影響 (えいきょう)", answers: [{ text: "Influence", correct: true }, { text: "Impact", correct: false }, { text: "Effect", correct: false }, { text: "Consequence", correct: false }] },
    { question: "優先 (ゆうせん)", answers: [{ text: "Priority", correct: true }, { text: "Preference", correct: false }, { text: "Precedence", correct: false }, { text: "Importance", correct: false }] },
    { question: "順番 (じゅんばん)", answers: [{ text: "Order", correct: true }, { text: "Sequence", correct: false }, { text: "Turn", correct: false }, { text: "Arrangement", correct: false }] },
    { question: "評価 (ひょうか)", answers: [{ text: "Evaluation", correct: true }, { text: "Assessment", correct: false }, { text: "Appraisal", correct: false }, { text: "Review", correct: false }] },
    { question: "条件 (じょうけん)", answers: [{ text: "Condition", correct: true }, { text: "Term", correct: false }, { text: "Requirement", correct: false }, { text: "Stipulation", correct: false }] },
    { question: "決定 (けってい)", answers: [{ text: "Decision", correct: true }, { text: "Determination", correct: false }, { text: "Conclusion", correct: false }, { text: "Resolution", correct: false }] },
    { question: "設立 (せつりつ)", answers: [{ text: "Establishment", correct: true }, { text: "Foundation", correct: false }, { text: "Creation", correct: false }, { text: "Initiation", correct: false }] },
    { question: "計画 (けいかく)", answers: [{ text: "Plan", correct: true }, { text: "Project", correct: false }, { text: "Schedule", correct: false }, { text: "Strategy", correct: false }] },
    { question: "適応 (てきおう)", answers: [{ text: "Adaptation", correct: true }, { text: "Adjustment", correct: false }, { text: "Accommodation", correct: false }, { text: "Conformity", correct: false }] },
    { question: "協力 (きょうりょく)", answers: [{ text: "Cooperation", correct: true }, { text: "Collaboration", correct: false }, { text: "Support", correct: false }, { text: "Partnership", correct: false }] },
    { question: "解決 (かいけつ)", answers: [{ text: "Solution", correct: true }, { text: "Resolution", correct: false }, { text: "Settlement", correct: false }, { text: "Conclusion", correct: false }] },
    { question: "維持 (いじ)", answers: [{ text: "Maintenance", correct: true }, { text: "Sustainment", correct: false }, { text: "Upkeep", correct: false }, { text: "Preservation", correct: false }] },
    { question: "対立 (たいりつ)", answers: [{ text: "Conflict", correct: true }, { text: "Opposition", correct: false }, { text: "Contradiction", correct: false }, { text: "Dispute", correct: false }] },
    { question: "管理 (かんり)", answers: [{ text: "Management", correct: true }, { text: "Administration", correct: false }, { text: "Control", correct: false }, { text: "Supervision", correct: false }] },
    { question: "供給 (きょうきゅう)", answers: [{ text: "Supply", correct: true }, { text: "Provision", correct: false }, { text: "Distribution", correct: false }, { text: "Delivery", correct: false }] },
    { question: "成果 (せいか)", answers: [{ text: "Achievement", correct: true }, { text: "Result", correct: false }, { text: "Outcome", correct: false }, { text: "Success", correct: false }] },
    { question: "影響 (えいきょう)", answers: [{ text: "Influence", correct: true }, { text: "Impact", correct: false }, { text: "Effect", correct: false }, { text: "Consequence", correct: false }] },
    { question: "適切 (てきせつ)", answers: [{ text: "Appropriate", correct: true }, { text: "Suitable", correct: false }, { text: "Adequate", correct: false }, { text: "Proper", correct: false }] },
    { question: "統合 (とうごう)", answers: [{ text: "Integration", correct: true }, { text: "Consolidation", correct: false }, { text: "Unification", correct: false }, { text: "Combination", correct: false }] },
    { question: "供給 (きょうきゅう)", answers: [{ text: "Supply", correct: true }, { text: "Provision", correct: false }, { text: "Distribution", correct: false }, { text: "Delivery", correct: false }] },
    { question: "努力 (どりょく)", answers: [{ text: "Effort", correct: true }, { text: "Attempt", correct: false }, { text: "Struggle", correct: false }, { text: "Endeavor", correct: false }] },
    { question: "拡大 (かくだい)", answers: [{ text: "Expansion", correct: true }, { text: "Extension", correct: false }, { text: "Enlargement", correct: false }, { text: "Increase", correct: false }] },
    { question: "推進 (すいしん)", answers: [{ text: "Promotion", correct: true }, { text: "Advancement", correct: false }, { text: "Progress", correct: false }, { text: "Propulsion", correct: false }] },
    { question: "調整 (ちょうせい)", answers: [{ text: "Adjustment", correct: true }, { text: "Regulation", correct: false }, { text: "Arrangement", correct: false }, { text: "Coordination", correct: false }] },
    { question: "規模 (きぼ)", answers: [{ text: "Scale", correct: true }, { text: "Size", correct: false }, { text: "Magnitude", correct: false }, { text: "Extent", correct: false }] },
    { question: "状況 (じょうきょう)", answers: [{ text: "Situation", correct: true }, { text: "Condition", correct: false }, { text: "State", correct: false }, { text: "Circumstance", correct: false }] },
    { question: "制約 (せいやく)", answers: [{ text: "Constraint", correct: true }, { text: "Limitation", correct: false }, { text: "Restriction", correct: false }, { text: "Condition", correct: false }] },
    { question: "推測 (すいそく)", answers: [{ text: "Inference", correct: true }, { text: "Assumption", correct: false }, { text: "Conjecture", correct: false }, { text: "Speculation", correct: false }] },
    { question: "複雑 (ふくざつ)", answers: [{ text: "Complex", correct: true }, { text: "Complicated", correct: false }, { text: "Difficult", correct: false }, { text: "Elaborate", correct: false }] },
    { question: "特徴 (とくちょう)", answers: [{ text: "Characteristic", correct: true }, { text: "Feature", correct: false }, { text: "Trait", correct: false }, { text: "Attribute", correct: false }] },
    { question: "権利 (けんり)", answers: [{ text: "Right", correct: true }, { text: "Authority", correct: false }, { text: "Privilege", correct: false }, { text: "Entitlement", correct: false }] },
    { question: "促進 (そくしん)", answers: [{ text: "Promotion", correct: true }, { text: "Facilitation", correct: false }, { text: "Encouragement", correct: false }, { text: "Acceleration", correct: false }] },
    { question: "維持 (いじ)", answers: [{ text: "Maintenance", correct: true }, { text: "Sustainment", correct: false }, { text: "Upkeep", correct: false }, { text: "Preservation", correct: false }] },
    { question: "基準 (きじゅん)", answers: [{ text: "Standard", correct: true }, { text: "Criterion", correct: false }, { text: "Norm", correct: false }, { text: "Benchmark", correct: false }] },
    { question: "観点 (かんてん)", answers: [{ text: "Perspective", correct: true }, { text: "Viewpoint", correct: false }, { text: "Angle", correct: false }, { text: "Standpoint", correct: false }] },
    { question: "同意 (どうい)", answers: [{ text: "Agreement", correct: true }, { text: "Consent", correct: false }, { text: "Approval", correct: false }, { text: "Conformity", correct: false }] },
    { question: "意識 (いしき)", answers: [{ text: "Awareness", correct: true }, { text: "Consciousness", correct: false }, { text: "Perception", correct: false }, { text: "Mindfulness", correct: false }] },
    { question: "状態 (じょうたい)", answers: [{ text: "State", correct: true }, { text: "Condition", correct: false }, { text: "Situation", correct: false }, { text: "Status", correct: false }] },
    { question: "発表 (はっぴょう)", answers: [{ text: "Presentation", correct: true }, { text: "Announcement", correct: false }, { text: "Publication", correct: false }, { text: "Release", correct: false }] },
    { question: "対応 (たいおう)", answers: [{ text: "Correspondence", correct: true }, { text: "Response", correct: false }, { text: "Reaction", correct: false }, { text: "Handling", correct: false }] },
    { question: "展開 (てんかい)", answers: [{ text: "Development", correct: true }, { text: "Expansion", correct: false }, { text: "Deployment", correct: false }, { text: "Unfolding", correct: false }] },
    { question: "状態 (じょうたい)", answers: [{ text: "State", correct: true }, { text: "Condition", correct: false }, { text: "Situation", correct: false }, { text: "Status", correct: false }] },
    { question: "規模 (きぼ)", answers: [{ text: "Scale", correct: true }, { text: "Size", correct: false }, { text: "Magnitude", correct: false }, { text: "Extent", correct: false }] },
    { question: "情報 (じょうほう)", answers: [{ text: "Information", correct: true }, { text: "Data", correct: false }, { text: "News", correct: false }, { text: "Knowledge", correct: false }] },
    { question: "改革 (かいかく)", answers: [{ text: "Reform", correct: true }, { text: "Revolution", correct: false }, { text: "Innovation", correct: false }, { text: "Transformation", correct: false }] },
    { question: "取り組み (とりくみ)", answers: [{ text: "Initiative", correct: true }, { text: "Effort", correct: false }, { text: "Activity", correct: false }, { text: "Engagement", correct: false }] },
    { question: "維持 (いじ)", answers: [{ text: "Maintenance", correct: true }, { text: "Sustainment", correct: false }, { text: "Upkeep", correct: false }, { text: "Preservation", correct: false }] },
    { question: "機能 (きのう)", answers: [{ text: "Function", correct: true }, { text: "Capability", correct: false }, { text: "Feature", correct: false }, { text: "Performance", correct: false }] },
    { question: "資源 (しげん)", answers: [{ text: "Resource", correct: true }, { text: "Asset", correct: false }, { text: "Material", correct: false }, { text: "Supply", correct: false }] },
    { question: "提供 (ていきょう)", answers: [{ text: "Provision", correct: true }, { text: "Offer", correct: false }, { text: "Supply", correct: false }, { text: "Distribution", correct: false }] },
    { question: "定義 (ていぎ)", answers: [{ text: "Definition", correct: true }, { text: "Explanation", correct: false }, { text: "Interpretation", correct: false }, { text: "Meaning", correct: false }] },
    { question: "条件 (じょうけん)", answers: [{ text: "Condition", correct: true }, { text: "Term", correct: false }, { text: "Requirement", correct: false }, { text: "Stipulation", correct: false }] },
    { question: "措置 (そち)", answers: [{ text: "Measure", correct: true }, { text: "Step", correct: false }, { text: "Action", correct: false }, { text: "Provision", correct: false }] },
    { question: "発生 (はっせい)", answers: [{ text: "Occurrence", correct: true }, { text: "Happening", correct: false }, { text: "Event", correct: false }, { text: "Incident", correct: false }] },
    { question: "状況 (じょうきょう)", answers: [{ text: "Situation", correct: true }, { text: "Condition", correct: false }, { text: "State", correct: false }, { text: "Circumstance", correct: false }] },
    { question: "対策 (たいさく)", answers: [{ text: "Countermeasure", correct: true }, { text: "Solution", correct: false }, { text: "Plan", correct: false }, { text: "Method", correct: false }] },
    { question: "価値 (かち)", answers: [{ text: "Value", correct: true }, { text: "Worth", correct: false }, { text: "Merit", correct: false }, { text: "Benefit", correct: false }] },
    { question: "増加 (ぞうか)", answers: [{ text: "Increase", correct: true }, { text: "Rise", correct: false }, { text: "Growth", correct: false }, { text: "Expansion", correct: false }] },
    { question: "展開 (てんかい)", answers: [{ text: "Development", correct: true }, { text: "Expansion", correct: false }, { text: "Deployment", correct: false }, { text: "Unfolding", correct: false }] },
    { question: "解決 (かいけつ)", answers: [{ text: "Solution", correct: true }, { text: "Resolution", correct: false }, { text: "Settlement", correct: false }, { text: "Conclusion", correct: false }] },
    { question: "過程 (かてい)", answers: [{ text: "Process", correct: true }, { text: "Procedure", correct: false }, { text: "Course", correct: false }, { text: "Stage", correct: false }] },
    { question: "確認 (かくにん)", answers: [{ text: "Confirmation", correct: true }, { text: "Verification", correct: false }, { text: "Assurance", correct: false }, { text: "Validation", correct: false }] },
    { question: "経済 (けいざい)", answers: [{ text: "Economy", correct: true }, { text: "Financial", correct: false }, { text: "Commerce", correct: false }, { text: "Business", correct: false }] },
    { question: "概念 (がいねん)", answers: [{ text: "Concept", correct: true }, { text: "Idea", correct: false }, { text: "Notion", correct: false }, { text: "Thought", correct: false }] },
    { question: "形式 (けいしき)", answers: [{ text: "Form", correct: true }, { text: "Format", correct: false }, { text: "Style", correct: false }, { text: "Structure", correct: false }] },
    { question: "信頼 (しんらい)", answers: [{ text: "Trust", correct: true }, { text: "Confidence", correct: false }, { text: "Reliance", correct: false }, { text: "Faith", correct: false }] },
    { question: "基本 (きほん)", answers: [{ text: "Basic", correct: true }, { text: "Fundamental", correct: false }, { text: "Essential", correct: false }, { text: "Primary", correct: false }] },
    { question: "観点 (かんてん)", answers: [{ text: "Perspective", correct: true }, { text: "Viewpoint", correct: false }, { text: "Angle", correct: false }, { text: "Standpoint", correct: false }] },
    { question: "拡張 (かくちょう)", answers: [{ text: "Expansion", correct: true }, { text: "Extension", correct: false }, { text: "Enlargement", correct: false }, { text: "Increase", correct: false }] },
    { question: "選択 (せんたく)", answers: [{ text: "Choice", correct: true }, { text: "Selection", correct: false }, { text: "Decision", correct: false }, { text: "Option", correct: false }] },
    { question: "展開 (てんかい)", answers: [{ text: "Development", correct: true }, { text: "Expansion", correct: false }, { text: "Deployment", correct: false }, { text: "Unfolding", correct: false }] },
    { question: "対応 (たいおう)", answers: [{ text: "Correspondence", correct: true }, { text: "Response", correct: false }, { text: "Reaction", correct: false }, { text: "Handling", correct: false }] },
    { question: "構造 (こうぞう)", answers: [{ text: "Structure", correct: true }, { text: "Framework", correct: false }, { text: "Construction", correct: false }, { text: "Organization", correct: false }] },
    { question: "要素 (ようそ)", answers: [{ text: "Element", correct: true }, { text: "Factor", correct: false }, { text: "Component", correct: false }, { text: "Ingredient", correct: false }] },
    { question: "比較 (ひかく)", answers: [{ text: "Comparison", correct: true }, { text: "Contrast", correct: false }, { text: "Analysis", correct: false }, { text: "Difference", correct: false }] },
    { question: "効果 (こうか)", answers: [{ text: "Effect", correct: true }, { text: "Impact", correct: false }, { text: "Result", correct: false }, { text: "Outcome", correct: false }] },
    { question: "組織 (そしき)", answers: [{ text: "Organization", correct: true }, { text: "Structure", correct: false }, { text: "Institution", correct: false }, { text: "System", correct: false }] },
    { question: "形成 (けいせい)", answers: [{ text: "Formation", correct: true }, { text: "Development", correct: false }, { text: "Creation", correct: false }, { text: "Shaping", correct: false }] },
    { question: "採用 (さいよう)", answers: [{ text: "Adoption", correct: true }, { text: "Employment", correct: false }, { text: "Recruitment", correct: false }, { text: "Hiring", correct: false }] },
    { question: "確認 (かくにん)", answers: [{ text: "Confirmation", correct: true }, { text: "Verification", correct: false }, { text: "Assurance", correct: false }, { text: "Validation", correct: false }] },
    { question: "充実 (じゅうじつ)", answers: [{ text: "Enrichment", correct: true }, { text: "Enhancement", correct: false }, { text: "Improvement", correct: false }, { text: "Fulfillment", correct: false }] },
    { question: "適応 (てきおう)", answers: [{ text: "Adaptation", correct: true }, { text: "Adjustment", correct: false }, { text: "Accommodation", correct: false }, { text: "Conformity", correct: false }] },
    { question: "設立 (せつりつ)", answers: [{ text: "Establishment", correct: true }, { text: "Foundation", correct: false }, { text: "Creation", correct: false }, { text: "Initiation", correct: false }] },
    { question: "影響 (えいきょう)", answers: [{ text: "Influence", correct: true }, { text: "Impact", correct: false }, { text: "Effect", correct: false }, { text: "Consequence", correct: false }] },
    { question: "利益 (りえき)", answers: [{ text: "Profit", correct: true }, { text: "Benefit", correct: false }, { text: "Gain", correct: false }, { text: "Revenue", correct: false }] },
    { question: "対象 (たいしょう)", answers: [{ text: "Target", correct: true }, { text: "Subject", correct: false }, { text: "Object", correct: false }, { text: "Goal", correct: false }] },
    { question: "評価 (ひょうか)", answers: [{ text: "Evaluation", correct: true }, { text: "Assessment", correct: false }, { text: "Appraisal", correct: false }, { text: "Review", correct: false }] },
    { question: "連携 (れんけい)", answers: [{ text: "Collaboration", correct: true }, { text: "Coordination", correct: false }, { text: "Integration", correct: false }, { text: "Connection", correct: false }] },
    { question: "構成 (こうせい)", answers: [{ text: "Composition", correct: true }, { text: "Structure", correct: false }, { text: "Formation", correct: false }, { text: "Construction", correct: false }] },
    { question: "計画 (けいかく)", answers: [{ text: "Plan", correct: true }, { text: "Project", correct: false }, { text: "Schedule", correct: false }, { text: "Strategy", correct: false }] },
    { question: "解決 (かいけつ)", answers: [{ text: "Solution", correct: true }, { text: "Resolution", correct: false }, { text: "Settlement", correct: false }, { text: "Conclusion", correct: false }] },
    { question: "過程 (かてい)", answers: [{ text: "Process", correct: true }, { text: "Procedure", correct: false }, { text: "Course", correct: false }, { text: "Stage", correct: false }] },
    { question: "確認 (かくにん)", answers: [{ text: "Confirmation", correct: true }, { text: "Verification", correct: false }, { text: "Assurance", correct: false }, { text: "Validation", correct: false }] },
    { question: "経済 (けいざい)", answers: [{ text: "Economy", correct: true }, { text: "Financial", correct: false }, { text: "Commerce", correct: false }, { text: "Business", correct: false }] },
    { question: "概念 (がいねん)", answers: [{ text: "Concept", correct: true }, { text: "Idea", correct: false }, { text: "Notion", correct: false }, { text: "Thought", correct: false }] },
    { question: "形式 (けいしき)", answers: [{ text: "Form", correct: true }, { text: "Format", correct: false }, { text: "Style", correct: false }, { text: "Structure", correct: false }] },
    { question: "信頼 (しんらい)", answers: [{ text: "Trust", correct: true }, { text: "Confidence", correct: false }, { text: "Reliance", correct: false }, { text: "Faith", correct: false }] },
    { question: "基本 (きほん)", answers: [{ text: "Basic", correct: true }, { text: "Fundamental", correct: false }, { text: "Essential", correct: false }, { text: "Primary", correct: false }] },
    { question: "観点 (かんてん)", answers: [{ text: "Perspective", correct: true }, { text: "Viewpoint", correct: false }, { text: "Angle", correct: false }, { text: "Standpoint", correct: false }] },
    { question: "拡張 (かくちょう)", answers: [{ text: "Expansion", correct: true }, { text: "Extension", correct: false }, { text: "Enlargement", correct: false }, { text: "Increase", correct: false }] },
    { question: "選択 (せんたく)", answers: [{ text: "Choice", correct: true }, { text: "Selection", correct: false }, { text: "Decision", correct: false }, { text: "Option", correct: false }] },
    { question: "展開 (てんかい)", answers: [{ text: "Development", correct: true }, { text: "Expansion", correct: false }, { text: "Deployment", correct: false }, { text: "Unfolding", correct: false }] },
    { question: "対応 (たいおう)", answers: [{ text: "Correspondence", correct: true }, { text: "Response", correct: false }, { text: "Reaction", correct: false }, { text: "Handling", correct: false }] },
    { question: "構造 (こうぞう)", answers: [{ text: "Structure", correct: true }, { text: "Framework", correct: false }, { text: "Construction", correct: false }, { text: "Organization", correct: false }] },
    { question: "要素 (ようそ)", answers: [{ text: "Element", correct: true }, { text: "Factor", correct: false }, { text: "Component", correct: false }, { text: "Ingredient", correct: false }] },
    { question: "比較 (ひかく)", answers: [{ text: "Comparison", correct: true }, { text: "Contrast", correct: false }, { text: "Analysis", correct: false }, { text: "Difference", correct: false }] },
    { question: "効果 (こうか)", answers: [{ text: "Effect", correct: true }, { text: "Impact", correct: false }, { text: "Result", correct: false }, { text: "Outcome", correct: false }] },
    { question: "組織 (そしき)", answers: [{ text: "Organization", correct: true }, { text: "Structure", correct: false }, { text: "Institution", correct: false }, { text: "System", correct: false }] },
    { question: "形成 (けいせい)", answers: [{ text: "Formation", correct: true }, { text: "Development", correct: false }, { text: "Creation", correct: false }, { text: "Shaping", correct: false }] },
    { question: "採用 (さいよう)", answers: [{ text: "Adoption", correct: true }, { text: "Employment", correct: false }, { text: "Recruitment", correct: false }, { text: "Hiring", correct: false }] },
    { question: "確認 (かくにん)", answers: [{ text: "Confirmation", correct: true }, { text: "Verification", correct: false }, { text: "Assurance", correct: false }, { text: "Validation", correct: false }] },
    { question: "充実 (じゅうじつ)", answers: [{ text: "Enrichment", correct: true }, { text: "Enhancement", correct: false }, { text: "Improvement", correct: false }, { text: "Fulfillment", correct: false }] },
    { question: "適応 (てきおう)", answers: [{ text: "Adaptation", correct: true }, { text: "Adjustment", correct: false }, { text: "Accommodation", correct: false }, { text: "Conformity", correct: false }] },
    { question: "設立 (せつりつ)", answers: [{ text: "Establishment", correct: true }, { text: "Foundation", correct: false }, { text: "Creation", correct: false }, { text: "Initiation", correct: false }] },
    { question: "影響 (えいきょう)", answers: [{ text: "Influence", correct: true }, { text: "Impact", correct: false }, { text: "Effect", correct: false }, { text: "Consequence", correct: false }] },
    { question: "利益 (りえき)", answers: [{ text: "Profit", correct: true }, { text: "Benefit", correct: false }, { text: "Gain", correct: false }, { text: "Revenue", correct: false }] },
    { question: "対象 (たいしょう)", answers: [{ text: "Target", correct: true }, { text: "Subject", correct: false }, { text: "Object", correct: false }, { text: "Goal", correct: false }] },
    { question: "評価 (ひょうか)", answers: [{ text: "Evaluation", correct: true }, { text: "Assessment", correct: false }, { text: "Appraisal", correct: false }, { text: "Review", correct: false }] },
    { question: "連携 (れんけい)", answers: [{ text: "Collaboration", correct: true }, { text: "Coordination", correct: false }, { text: "Integration", correct: false }, { text: "Connection", correct: false }] },
    { question: "構成 (こうせい)", answers: [{ text: "Composition", correct: true }, { text: "Structure", correct: false }, { text: "Formation", correct: false }, { text: "Construction", correct: false }] },
    { question: "計画 (けいかく)", answers: [{ text: "Plan", correct: true }, { text: "Project", correct: false }, { text: "Schedule", correct: false }, { text: "Strategy", correct: false }] },
    { question: "調整 (ちょうせい)", answers: [{ text: "Adjustment", correct: true }, { text: "Regulation", correct: false }, { text: "Arrangement", correct: false }, { text: "Coordination", correct: false }] },
    { question: "進展 (しんてん)", answers: [{ text: "Progress", correct: true }, { text: "Advancement", correct: false }, { text: "Development", correct: false }, { text: "Expansion", correct: false }] },
    { question: "利用 (りよう)", answers: [{ text: "Utilization", correct: true }, { text: "Use", correct: false }, { text: "Application", correct: false }, { text: "Employment", correct: false }] },
    { question: "状態 (じょうたい)", answers: [{ text: "State", correct: true }, { text: "Condition", correct: false }, { text: "Situation", correct: false }, { text: "Status", correct: false }] },
    { question: "規定 (きてい)", answers: [{ text: "Regulation", correct: true }, { text: "Rule", correct: false }, { text: "Provision", correct: false }, { text: "Stipulation", correct: false }] },
    { question: "資料 (しりょう)", answers: [{ text: "Material", correct: true }, { text: "Document", correct: false }, { text: "Data", correct: false }, { text: "Information", correct: false }] },
    { question: "研究 (けんきゅう)", answers: [{ text: "Research", correct: true }, { text: "Study", correct: false }, { text: "Investigation", correct: false }, { text: "Examination", correct: false }] },
    { question: "方法 (ほうほう)", answers: [{ text: "Method", correct: true }, { text: "Way", correct: false }, { text: "Approach", correct: false }, { text: "Technique", correct: false }] },
    { question: "権利 (けんり)", answers: [{ text: "Right", correct: true }, { text: "Authority", correct: false }, { text: "Privilege", correct: false }, { text: "Entitlement", correct: false }] },
    { question: "機会 (きかい)", answers: [{ text: "Opportunity", correct: true }, { text: "Chance", correct: false }, { text: "Option", correct: false }, { text: "Possibility", correct: false }] },
    { question: "変化 (へんか)", answers: [{ text: "Change", correct: true }, { text: "Transformation", correct: false }, { text: "Variation", correct: false }, { text: "Shift", correct: false }] },
    { question: "区分 (くぶん)", answers: [{ text: "Division", correct: true }, { text: "Segmentation", correct: false }, { text: "Classification", correct: false }, { text: "Category", correct: false }] },
    { question: "基準 (きじゅん)", answers: [{ text: "Standard", correct: true }, { text: "Criterion", correct: false }, { text: "Norm", correct: false }, { text: "Benchmark", correct: false }] },
    { question: "具体 (ぐたい)", answers: [{ text: "Concrete", correct: true }, { text: "Specific", correct: false }, { text: "Particular", correct: false }, { text: "Detailed", correct: false }] },
    { question: "維持 (いじ)", answers: [{ text: "Maintenance", correct: true }, { text: "Sustainment", correct: false }, { text: "Upkeep", correct: false }, { text: "Preservation", correct: false }] },
    { question: "関連 (かんれん)", answers: [{ text: "Relation", correct: true }, { text: "Connection", correct: false }, { text: "Association", correct: false }, { text: "Link", correct: false }] },
    { question: "構造 (こうぞう)", answers: [{ text: "Structure", correct: true }, { text: "Framework", correct: false }, { text: "Construction", correct: false }, { text: "Organization", correct: false }] },
    { question: "状況 (じょうきょう)", answers: [{ text: "Situation", correct: true }, { text: "Condition", correct: false }, { text: "State", correct: false }, { text: "Circumstance", correct: false }] },
    { question: "解決 (かいけつ)", answers: [{ text: "Solution", correct: true }, { text: "Resolution", correct: false }, { text: "Settlement", correct: false }, { text: "Conclusion", correct: false }] },
    { question: "過程 (かてい)", answers: [{ text: "Process", correct: true }, { text: "Procedure", correct: false }, { text: "Course", correct: false }, { text: "Stage", correct: false }] },
    { question: "確認 (かくにん)", answers: [{ text: "Confirmation", correct: true }, { text: "Verification", correct: false }, { text: "Assurance", correct: false }, { text: "Validation", correct: false }] },
    { question: "経済 (けいざい)", answers: [{ text: "Economy", correct: true }, { text: "Financial", correct: false }, { text: "Commerce", correct: false }, { text: "Business", correct: false }] },
    { question: "概念 (がいねん)", answers: [{ text: "Concept", correct: true }, { text: "Idea", correct: false }, { text: "Notion", correct: false }, { text: "Thought", correct: false }] },
    { question: "形式 (けいしき)", answers: [{ text: "Form", correct: true }, { text: "Format", correct: false }, { text: "Style", correct: false }, { text: "Structure", correct: false }] },
    { question: "信頼 (しんらい)", answers: [{ text: "Trust", correct: true }, { text: "Confidence", correct: false }, { text: "Reliance", correct: false }, { text: "Faith", correct: false }] },
    { question: "基本 (きほん)", answers: [{ text: "Basic", correct: true }, { text: "Fundamental", correct: false }, { text: "Essential", correct: false }, { text: "Primary", correct: false }] },
    { question: "観点 (かんてん)", answers: [{ text: "Perspective", correct: true }, { text: "Viewpoint", correct: false }, { text: "Angle", correct: false }, { text: "Standpoint", correct: false }] },
    { question: "拡張 (かくちょう)", answers: [{ text: "Expansion", correct: true }, { text: "Extension", correct: false }, { text: "Enlargement", correct: false }, { text: "Increase", correct: false }] },
    { question: "選択 (せんたく)", answers: [{ text: "Choice", correct: true }, { text: "Selection", correct: false }, { text: "Decision", correct: false }, { text: "Option", correct: false }] },
    { question: "展開 (てんかい)", answers: [{ text: "Development", correct: true }, { text: "Expansion", correct: false }, { text: "Deployment", correct: false }, { text: "Unfolding", correct: false }] },
    { question: "対応 (たいおう)", answers: [{ text: "Correspondence", correct: true }, { text: "Response", correct: false }, { text: "Reaction", correct: false }, { text: "Handling", correct: false }] },
    { question: "構造 (こうぞう)", answers: [{ text: "Structure", correct: true }, { text: "Framework", correct: false }, { text: "Construction", correct: false }, { text: "Organization", correct: false }] },
    { question: "要素 (ようそ)", answers: [{ text: "Element", correct: true }, { text: "Factor", correct: false }, { text: "Component", correct: false }, { text: "Ingredient", correct: false }] },
    { question: "比較 (ひかく)", answers: [{ text: "Comparison", correct: true }, { text: "Contrast", correct: false }, { text: "Analysis", correct: false }, { text: "Difference", correct: false }] },
    { question: "効果 (こうか)", answers: [{ text: "Effect", correct: true }, { text: "Impact", correct: false }, { text: "Result", correct: false }, { text: "Outcome", correct: false }] },
    { question: "組織 (そしき)", answers: [{ text: "Organization", correct: true }, { text: "Structure", correct: false }, { text: "Institution", correct: false }, { text: "System", correct: false }] },
    { question: "形成 (けいせい)", answers: [{ text: "Formation", correct: true }, { text: "Development", correct: false }, { text: "Creation", correct: false }, { text: "Shaping", correct: false }] },
    { question: "採用 (さいよう)", answers: [{ text: "Adoption", correct: true }, { text: "Employment", correct: false }, { text: "Recruitment", correct: false }, { text: "Hiring", correct: false }] },
    { question: "確認 (かくにん)", answers: [{ text: "Confirmation", correct: true }, { text: "Verification", correct: false }, { text: "Assurance", correct: false }, { text: "Validation", correct: false }] },
    { question: "充実 (じゅうじつ)", answers: [{ text: "Enrichment", correct: true }, { text: "Enhancement", correct: false }, { text: "Improvement", correct: false }, { text: "Fulfillment", correct: false }] },
    { question: "適応 (てきおう)", answers: [{ text: "Adaptation", correct: true }, { text: "Adjustment", correct: false }, { text: "Accommodation", correct: false }, { text: "Conformity", correct: false }] },
    { question: "設立 (せつりつ)", answers: [{ text: "Establishment", correct: true }, { text: "Foundation", correct: false }, { text: "Creation", correct: false }, { text: "Initiation", correct: false }] },
    { question: "影響 (えいきょう)", answers: [{ text: "Influence", correct: true }, { text: "Impact", correct: false }, { text: "Effect", correct: false }, { text: "Consequence", correct: false }] },
    { question: "利益 (りえき)", answers: [{ text: "Profit", correct: true }, { text: "Benefit", correct: false }, { text: "Gain", correct: false }, { text: "Revenue", correct: false }] },
    { question: "対象 (たいしょう)", answers: [{ text: "Target", correct: true }, { text: "Subject", correct: false }, { text: "Object", correct: false }, { text: "Goal", correct: false }] },
    { question: "評価 (ひょうか)", answers: [{ text: "Evaluation", correct: true }, { text: "Assessment", correct: false }, { text: "Appraisal", correct: false }, { text: "Review", correct: false }] },
    { question: "連携 (れんけい)", answers: [{ text: "Collaboration", correct: true }, { text: "Coordination", correct: false }, { text: "Integration", correct: false }, { text: "Connection", correct: false }] },
    { question: "構成 (こうせい)", answers: [{ text: "Composition", correct: true }, { text: "Structure", correct: false }, { text: "Formation", correct: false }, { text: "Construction", correct: false }] },
    { question: "計画 (けいかく)", answers: [{ text: "Plan", correct: true }, { text: "Project", correct: false }, { text: "Schedule", correct: false }, { text: "Strategy", correct: false }] },
    { question: "調整 (ちょうせい)", answers: [{ text: "Adjustment", correct: true }, { text: "Regulation", correct: false }, { text: "Arrangement", correct: false }, { text: "Coordination", correct: false }] },
    { question: "進展 (しんてん)", answers: [{ text: "Progress", correct: true }, { text: "Advancement", correct: false }, { text: "Development", correct: false }, { text: "Expansion", correct: false }] },
    { question: "利用 (りよう)", answers: [{ text: "Utilization", correct: true }, { text: "Use", correct: false }, { text: "Application", correct: false }, { text: "Employment", correct: false }] },
    { question: "状態 (じょうたい)", answers: [{ text: "State", correct: true }, { text: "Condition", correct: false }, { text: "Situation", correct: false }, { text: "Status", correct: false }] },
    { question: "規定 (きてい)", answers: [{ text: "Regulation", correct: true }, { text: "Rule", correct: false }, { text: "Provision", correct: false }, { text: "Stipulation", correct: false }] },
    { question: "資料 (しりょう)", answers: [{ text: "Material", correct: true }, { text: "Document", correct: false }, { text: "Data", correct: false }, { text: "Information", correct: false }] },
    { question: "研究 (けんきゅう)", answers: [{ text: "Research", correct: true }, { text: "Study", correct: false }, { text: "Investigation", correct: false }, { text: "Examination", correct: false }] },
    { question: "方法 (ほうほう)", answers: [{ text: "Method", correct: true }, { text: "Way", correct: false }, { text: "Approach", correct: false }, { text: "Technique", correct: false }] },
    { question: "権利 (けんり)", answers: [{ text: "Right", correct: true }, { text: "Authority", correct: false }, { text: "Privilege", correct: false }, { text: "Entitlement", correct: false }] },
    { question: "機会 (きかい)", answers: [{ text: "Opportunity", correct: true }, { text: "Chance", correct: false }, { text: "Option", correct: false }, { text: "Possibility", correct: false }] },
    { question: "変化 (へんか)", answers: [{ text: "Change", correct: true }, { text: "Transformation", correct: false }, { text: "Variation", correct: false }, { text: "Shift", correct: false }] },
    { question: "区分 (くぶん)", answers: [{ text: "Division", correct: true }, { text: "Segmentation", correct: false }, { text: "Classification", correct: false }, { text: "Category", correct: false }] },
    { question: "基準 (きじゅん)", answers: [{ text: "Standard", correct: true }, { text: "Criterion", correct: false }, { text: "Norm", correct: false }, { text: "Benchmark", correct: false }] },
    { question: "具体 (ぐたい)", answers: [{ text: "Concrete", correct: true }, { text: "Specific", correct: false }, { text: "Particular", correct: false }, { text: "Detailed", correct: false }] },
    { question: "維持 (いじ)", answers: [{ text: "Maintenance", correct: true }, { text: "Sustainment", correct: false }, { text: "Upkeep", correct: false }, { text: "Preservation", correct: false }] },
    { question: "関連 (かんれん)", answers: [{ text: "Relation", correct: true }, { text: "Connection", correct: false }, { text: "Association", correct: false }, { text: "Link", correct: false }] },
    { question: "構造 (こうぞう)", answers: [{ text: "Structure", correct: true }, { text: "Framework", correct: false }, { text: "Construction", correct: false }, { text: "Organization", correct: false }] },
    { question: "状況 (じょうきょう)", answers: [{ text: "Situation", correct: true }, { text: "Condition", correct: false }, { text: "State", correct: false }, { text: "Circumstance", correct: false }] },
    { question: "解決 (かいけつ)", answers: [{ text: "Solution", correct: true }, { text: "Resolution", correct: false }, { text: "Settlement", correct: false }, { text: "Conclusion", correct: false }] },
    { question: "過程 (かてい)", answers: [{ text: "Process", correct: true }, { text: "Procedure", correct: false }, { text: "Course", correct: false }, { text: "Stage", correct: false }] },
    { question: "確認 (かくにん)", answers: [{ text: "Confirmation", correct: true }, { text: "Verification", correct: false }, { text: "Assurance", correct: false }, { text: "Validation", correct: false }] },
    { question: "経済 (けいざい)", answers: [{ text: "Economy", correct: true }, { text: "Financial", correct: false }, { text: "Commerce", correct: false }, { text: "Business", correct: false }] },
    { question: "概念 (がいねん)", answers: [{ text: "Concept", correct: true }, { text: "Idea", correct: false }, { text: "Notion", correct: false }, { text: "Thought", correct: false }] },
    { question: "形式 (けいしき)", answers: [{ text: "Form", correct: true }, { text: "Format", correct: false }, { text: "Style", correct: false }, { text: "Structure", correct: false }] },
    { question: "信頼 (しんらい)", answers: [{ text: "Trust", correct: true }, { text: "Confidence", correct: false }, { text: "Reliance", correct: false }, { text: "Faith", correct: false }] },
    { question: "基本 (きほん)", answers: [{ text: "Basic", correct: true }, { text: "Fundamental", correct: false }, { text: "Essential", correct: false }, { text: "Primary", correct: false }] },
    { question: "観点 (かんてん)", answers: [{ text: "Perspective", correct: true }, { text: "Viewpoint", correct: false }, { text: "Angle", correct: false }, { text: "Standpoint", correct: false }] },
    { question: "拡張 (かくちょう)", answers: [{ text: "Expansion", correct: true }, { text: "Extension", correct: false }, { text: "Enlargement", correct: false }, { text: "Increase", correct: false }] },
    { question: "選択 (せんたく)", answers: [{ text: "Choice", correct: true }, { text: "Selection", correct: false }, { text: "Decision", correct: false }, { text: "Option", correct: false }] },
    { question: "展開 (てんかい)", answers: [{ text: "Development", correct: true }, { text: "Expansion", correct: false }, { text: "Deployment", correct: false }, { text: "Unfolding", correct: false }] },
    { question: "対応 (たいおう)", answers: [{ text: "Correspondence", correct: true }, { text: "Response", correct: false }, { text: "Reaction", correct: false }, { text: "Handling", correct: false }] },
    { question: "構造 (こうぞう)", answers: [{ text: "Structure", correct: true }, { text: "Framework", correct: false }, { text: "Construction", correct: false }, { text: "Organization", correct: false }] },
    { question: "要素 (ようそ)", answers: [{ text: "Element", correct: true }, { text: "Factor", correct: false }, { text: "Component", correct: false }, { text: "Ingredient", correct: false }] },
    { question: "比較 (ひかく)", answers: [{ text: "Comparison", correct: true }, { text: "Contrast", correct: false }, { text: "Analysis", correct: false }, { text: "Difference", correct: false }] },
    { question: "効果 (こうか)", answers: [{ text: "Effect", correct: true }, { text: "Impact", correct: false }, { text: "Result", correct: false }, { text: "Outcome", correct: false }] },
    { question: "組織 (そしき)", answers: [{ text: "Organization", correct: true }, { text: "Structure", correct: false }, { text: "Institution", correct: false }, { text: "System", correct: false }] },
    { question: "形成 (けいせい)", answers: [{ text: "Formation", correct: true }, { text: "Development", correct: false }, { text: "Creation", correct: false }, { text: "Shaping", correct: false }] },
    { question: "採用 (さいよう)", answers: [{ text: "Adoption", correct: true }, { text: "Employment", correct: false }, { text: "Recruitment", correct: false }, { text: "Hiring", correct: false }] },
    { question: "確認 (かくにん)", answers: [{ text: "Confirmation", correct: true }, { text: "Verification", correct: false }, { text: "Assurance", correct: false }, { text: "Validation", correct: false }] },
    { question: "充実 (じゅうじつ)", answers: [{ text: "Enrichment", correct: true }, { text: "Enhancement", correct: false }, { text: "Improvement", correct: false }, { text: "Fulfillment", correct: false }] },
    { question: "適応 (てきおう)", answers: [{ text: "Adaptation", correct: true }, { text: "Adjustment", correct: false }, { text: "Accommodation", correct: false }, { text: "Conformity", correct: false }] },
    { question: "設立 (せつりつ)", answers: [{ text: "Establishment", correct: true }, { text: "Foundation", correct: false }, { text: "Creation", correct: false }, { text: "Initiation", correct: false }] },
    { question: "影響 (えいきょう)", answers: [{ text: "Influence", correct: true }, { text: "Impact", correct: false }, { text: "Effect", correct: false }, { text: "Consequence", correct: false }] },
    { question: "利益 (りえき)", answers: [{ text: "Profit", correct: true }, { text: "Benefit", correct: false }, { text: "Gain", correct: false }, { text: "Revenue", correct: false }] },
    { question: "対象 (たいしょう)", answers: [{ text: "Target", correct: true }, { text: "Subject", correct: false }, { text: "Object", correct: false }, { text: "Goal", correct: false }] },
    { question: "評価 (ひょうか)", answers: [{ text: "Evaluation", correct: true }, { text: "Assessment", correct: false }, { text: "Appraisal", correct: false }, { text: "Review", correct: false }] },
    { question: "連携 (れんけい)", answers: [{ text: "Collaboration", correct: true }, { text: "Coordination", correct: false }, { text: "Integration", correct: false }, { text: "Connection", correct: false }] },
    { question: "構成 (こうせい)", answers: [{ text: "Composition", correct: true }, { text: "Structure", correct: false }, { text: "Formation", correct: false }, { text: "Construction", correct: false }] },
    { question: "計画 (けいかく)", answers: [{ text: "Plan", correct: true }, { text: "Project", correct: false }, { text: "Schedule", correct: false }, { text: "Strategy", correct: false }] },
    { question: "調整 (ちょうせい)", answers: [{ text: "Adjustment", correct: true }, { text: "Regulation", correct: false }, { text: "Arrangement", correct: false }, { text: "Coordination", correct: false }] },
    { question: "進展 (しんてん)", answers: [{ text: "Progress", correct: true }, { text: "Advancement", correct: false }, { text: "Development", correct: false }, { text: "Expansion", correct: false }] },
    { question: "利用 (りよう)", answers: [{ text: "Utilization", correct: true }, { text: "Use", correct: false }, { text: "Application", correct: false }, { text: "Employment", correct: false }] },
    { question: "調査 (ちょうさ)", answers: [{ text: "Investigation", correct: true }, { text: "Survey", correct: false }, { text: "Research", correct: false }, { text: "Examination", correct: false }] },
    { question: "生活 (せいかつ)", answers: [{ text: "Life", correct: true }, { text: "Living", correct: false }, { text: "Lifestyle", correct: false }, { text: "Existence", correct: false }] },
    { question: "管理 (かんり)", answers: [{ text: "Management", correct: true }, { text: "Administration", correct: false }, { text: "Control", correct: false }, { text: "Supervision", correct: false }] },
    { question: "経験 (けいけん)", answers: [{ text: "Experience", correct: true }, { text: "Skill", correct: false }, { text: "Knowledge", correct: false }, { text: "Expertise", correct: false }] },
    { question: "発展 (はってん)", answers: [{ text: "Development", correct: true }, { text: "Advancement", correct: false }, { text: "Growth", correct: false }, { text: "Expansion", correct: false }] },
    { question: "観察 (かんさつ)", answers: [{ text: "Observation", correct: true }, { text: "Monitoring", correct: false }, { text: "Inspection", correct: false }, { text: "Examination", correct: false }] },
    { question: "状態 (じょうたい)", answers: [{ text: "State", correct: true }, { text: "Condition", correct: false }, { text: "Situation", correct: false }, { text: "Status", correct: false }] },
    { question: "理解 (りかい)", answers: [{ text: "Understanding", correct: true }, { text: "Comprehension", correct: false }, { text: "Awareness", correct: false }, { text: "Insight", correct: false }] },
    { question: "関心 (かんしん)", answers: [{ text: "Interest", correct: true }, { text: "Concern", correct: false }, { text: "Attention", correct: false }, { text: "Curiosity", correct: false }] },
    { question: "基地 (きち)", answers: [{ text: "Base", correct: true }, { text: "Foundation", correct: false }, { text: "Station", correct: false }, { text: "Center", correct: false }] },
    { question: "配慮 (はいりょ)", answers: [{ text: "Consideration", correct: true }, { text: "Attention", correct: false }, { text: "Care", correct: false }, { text: "Concern", correct: false }] },
    { question: "設定 (せってい)", answers: [{ text: "Setting", correct: true }, { text: "Configuration", correct: false }, { text: "Establishment", correct: false }, { text: "Arrangement", correct: false }] },
    { question: "課題 (かだい)", answers: [{ text: "Issue", correct: true }, { text: "Challenge", correct: false }, { text: "Problem", correct: false }, { text: "Task", correct: false }] },
    { question: "詳細 (しょうさい)", answers: [{ text: "Detail", correct: true }, { text: "Specifics", correct: false }, { text: "Elaboration", correct: false }, { text: "Particulars", correct: false }] },
    { question: "支援 (しえん)", answers: [{ text: "Support", correct: true }, { text: "Assistance", correct: false }, { text: "Aid", correct: false }, { text: "Backing", correct: false }] },
    { question: "質問 (しつもん)", answers: [{ text: "Question", correct: true }, { text: "Inquiry", correct: false }, { text: "Query", correct: false }, { text: "Interrogation", correct: false }] },
    { question: "発表 (はっぴょう)", answers: [{ text: "Presentation", correct: true }, { text: "Announcement", correct: false }, { text: "Publication", correct: false }, { text: "Release", correct: false }] },
    { question: "追求 (ついきゅう)", answers: [{ text: "Pursuit", correct: true }, { text: "Quest", correct: false }, { text: "Search", correct: false }, { text: "Investigation", correct: false }] },
    { question: "資源 (しげん)", answers: [{ text: "Resource", correct: true }, { text: "Asset", correct: false }, { text: "Material", correct: false }, { text: "Stock", correct: false }] },
    { question: "提案 (ていあん)", answers: [{ text: "Proposal", correct: true }, { text: "Suggestion", correct: false }, { text: "Recommendation", correct: false }, { text: "Offer", correct: false }] },
    { question: "取引 (とりひき)", answers: [{ text: "Transaction", correct: true }, { text: "Deal", correct: false }, { text: "Business", correct: false }, { text: "Trade", correct: false }] },
    { question: "組織 (そしき)", answers: [{ text: "Organization", correct: true }, { text: "Structure", correct: false }, { text: "Institution", correct: false }, { text: "System", correct: false }] },
    { question: "体制 (たいせい)", answers: [{ text: "System", correct: true }, { text: "Structure", correct: false }, { text: "Regime", correct: false }, { text: "Organization", correct: false }] },
    { question: "貢献 (こうけん)", answers: [{ text: "Contribution", correct: true }, { text: "Donation", correct: false }, { text: "Offering", correct: false }, { text: "Gift", correct: false }] },
    { question: "活動 (かつどう)", answers: [{ text: "Activity", correct: true }, { text: "Action", correct: false }, { text: "Operation", correct: false }, { text: "Movement", correct: false }] },
    { question: "支配 (しはい)", answers: [{ text: "Domination", correct: true }, { text: "Control", correct: false }, { text: "Rule", correct: false }, { text: "Supremacy", correct: false }] },
    { question: "効率 (こうりつ)", answers: [{ text: "Efficiency", correct: true }, { text: "Effectiveness", correct: false }, { text: "Productivity", correct: false }, { text: "Performance", correct: false }] },
    { question: "分析 (ぶんせき)", answers: [{ text: "Analysis", correct: true }, { text: "Examination", correct: false }, { text: "Investigation", correct: false }, { text: "Study", correct: false }] },
    { question: "理論 (りろん)", answers: [{ text: "Theory", correct: true }, { text: "Concept", correct: false }, { text: "Principle", correct: false }, { text: "Hypothesis", correct: false }] },
    { question: "取り組み (とりくみ)", answers: [{ text: "Initiative", correct: true }, { text: "Effort", correct: false }, { text: "Activity", correct: false }, { text: "Engagement", correct: false }] },
    { question: "充実 (じゅうじつ)", answers: [{ text: "Enrichment", correct: true }, { text: "Enhancement", correct: false }, { text: "Improvement", correct: false }, { text: "Fulfillment", correct: false }] },
    { question: "評価 (ひょうか)", answers: [{ text: "Evaluation", correct: true }, { text: "Assessment", correct: false }, { text: "Appraisal", correct: false }, { text: "Review", correct: false }] },
    { question: "感謝 (かんしゃ)", answers: [{ text: "Gratitude", correct: true }, { text: "Thanks", correct: false }, { text: "Appreciation", correct: false }, { text: "Recognition", correct: false }] },
    { question: "必要性 (ひつようせい)", answers: [{ text: "Necessity", correct: true }, { text: "Requirement", correct: false }, { text: "Need", correct: false }, { text: "Essential", correct: false }] },
    { question: "創造 (そうぞう)", answers: [{ text: "Creation", correct: true }, { text: "Innovation", correct: false }, { text: "Imagination", correct: false }, { text: "Generation", correct: false }] },
    { question: "供給 (きょうきゅう)", answers: [{ text: "Supply", correct: true }, { text: "Provision", correct: false }, { text: "Delivery", correct: false }, { text: "Distribution", correct: false }] },
    { question: "最適化 (さいてきか)", answers: [{ text: "Optimization", correct: true }, { text: "Maximization", correct: false }, { text: "Improvement", correct: false }, { text: "Enhancement", correct: false }] },
    { question: "解決 (かいけつ)", answers: [{ text: "Solution", correct: true }, { text: "Resolution", correct: false }, { text: "Settlement", correct: false }, { text: "Conclusion", correct: false }] },
    { question: "改善 (かいぜん)", answers: [{ text: "Improvement", correct: true }, { text: "Enhancement", correct: false }, { text: "Betterment", correct: false }, { text: "Amelioration", correct: false }] },
    { question: "成果 (せいか)", answers: [{ text: "Result", correct: true }, { text: "Achievement", correct: false }, { text: "Outcome", correct: false }, { text: "Product", correct: false }] },
    { question: "協力 (きょうりょく)", answers: [{ text: "Cooperation", correct: true }, { text: "Collaboration", correct: false }, { text: "Support", correct: false }, { text: "Assistance", correct: false }] },
    { question: "確保 (かくほ)", answers: [{ text: "Securing", correct: true }, { text: "Ensuring", correct: false }, { text: "Guaranteeing", correct: false }, { text: "Protection", correct: false }] },
    { question: "適切 (てきせつ)", answers: [{ text: "Appropriate", correct: true }, { text: "Suitable", correct: false }, { text: "Proper", correct: false }, { text: "Correct", correct: false }] },
    { question: "現象 (げんしょう)", answers: [{ text: "Phenomenon", correct: true }, { text: "Occurrence", correct: false }, { text: "Manifestation", correct: false }, { text: "Event", correct: false }] },
    { question: "実現 (じつげん)", answers: [{ text: "Realization", correct: true }, { text: "Achievement", correct: false }, { text: "Fulfillment", correct: false }, { text: "Implementation", correct: false }] },
    { question: "対策 (たいさく)", answers: [{ text: "Countermeasure", correct: true }, { text: "Response", correct: false }, { text: "Solution", correct: false }, { text: "Precaution", correct: false }] },
    { question: "設計 (せっけい)", answers: [{ text: "Design", correct: true }, { text: "Planning", correct: false }, { text: "Blueprint", correct: false }, { text: "Configuration", correct: false }] },
    { question: "経過 (けいか)", answers: [{ text: "Progress", correct: true }, { text: "Passage", correct: false }, { text: "Course", correct: false }, { text: "Development", correct: false }] },
    { question: "努力 (どりょく)", answers: [{ text: "Effort", correct: true }, { text: "Struggle", correct: false }, { text: "Endeavor", correct: false }, { text: "Attempt", correct: false }] },
    { question: "責任 (せきにん)", answers: [{ text: "Responsibility", correct: true }, { text: "Accountability", correct: false }, { text: "Obligation", correct: false }, { text: "Duty", correct: false }] },
    { question: "取り扱い (とりあつかい)", answers: [{ text: "Handling", correct: true }, { text: "Treatment", correct: false }, { text: "Dealing", correct: false }, { text: "Management", correct: false }] },
    { question: "優先 (ゆうせん)", answers: [{ text: "Priority", correct: true }, { text: "Preference", correct: false }, { text: "Precedence", correct: false }, { text: "Advantage", correct: false }] },
    { question: "協議 (きょうぎ)", answers: [{ text: "Consultation", correct: true }, { text: "Negotiation", correct: false }, { text: "Discussion", correct: false }, { text: "Conference", correct: false }] },
    { question: "財産 (ざいさん)", answers: [{ text: "Property", correct: true }, { text: "Assets", correct: false }, { text: "Wealth", correct: false }, { text: "Possession", correct: false }] },
    { question: "努力 (どりょく)", answers: [{ text: "Effort", correct: true }, { text: "Struggle", correct: false }, { text: "Endeavor", correct: false }, { text: "Attempt", correct: false }] },
    { question: "責任 (せきにん)", answers: [{ text: "Responsibility", correct: true }, { text: "Accountability", correct: false }, { text: "Obligation", correct: false }, { text: "Duty", correct: false }] },
    { question: "取り扱い (とりあつかい)", answers: [{ text: "Handling", correct: true }, { text: "Treatment", correct: false }, { text: "Dealing", correct: false }, { text: "Management", correct: false }] },
    { question: "優先 (ゆうせん)", answers: [{ text: "Priority", correct: true }, { text: "Preference", correct: false }, { text: "Precedence", correct: false }, { text: "Advantage", correct: false }] },
    { question: "協議 (きょうぎ)", answers: [{ text: "Consultation", correct: true }, { text: "Negotiation", correct: false }, { text: "Discussion", correct: false }, { text: "Conference", correct: false }] },
    { question: "財産 (ざいさん)", answers: [{ text: "Property", correct: true }, { text: "Assets", correct: false }, { text: "Wealth", correct: false }, { text: "Possession", correct: false }] },
    { question: "解決 (かいけつ)", answers: [{ text: "Solution", correct: true }, { text: "Resolution", correct: false }, { text: "Settlement", correct: false }, { text: "Conclusion", correct: false }] },
    { question: "改善 (かいぜん)", answers: [{ text: "Improvement", correct: true }, { text: "Enhancement", correct: false }, { text: "Betterment", correct: false }, { text: "Amelioration", correct: false }] },
    { question: "成果 (せいか)", answers: [{ text: "Result", correct: true }, { text: "Achievement", correct: false }, { text: "Outcome", correct: false }, { text: "Product", correct: false }] },
    { question: "協力 (きょうりょく)", answers: [{ text: "Cooperation", correct: true }, { text: "Collaboration", correct: false }, { text: "Support", correct: false }, { text: "Assistance", correct: false }] },
    { question: "確保 (かくほ)", answers: [{ text: "Securing", correct: true }, { text: "Ensuring", correct: false }, { text: "Guaranteeing", correct: false }, { text: "Protection", correct: false }] },
    { question: "適切 (てきせつ)", answers: [{ text: "Appropriate", correct: true }, { text: "Suitable", correct: false }, { text: "Proper", correct: false }, { text: "Correct", correct: false }] },
    { question: "現象 (げんしょう)", answers: [{ text: "Phenomenon", correct: true }, { text: "Occurrence", correct: false }, { text: "Manifestation", correct: false }, { text: "Event", correct: false }] },
    { question: "実現 (じつげん)", answers: [{ text: "Realization", correct: true }, { text: "Achievement", correct: false }, { text: "Fulfillment", correct: false }, { text: "Implementation", correct: false }] },
    { question: "対策 (たいさく)", answers: [{ text: "Countermeasure", correct: true }, { text: "Response", correct: false }, { text: "Solution", correct: false }, { text: "Precaution", correct: false }] },
    { question: "設計 (せっけい)", answers: [{ text: "Design", correct: true }, { text: "Planning", correct: false }, { text: "Blueprint", correct: false }, { text: "Configuration", correct: false }] },
    { question: "経過 (けいか)", answers: [{ text: "Progress", correct: true }, { text: "Passage", correct: false }, { text: "Course", correct: false }, { text: "Development", correct: false }] },
    { question: "努力 (どりょく)", answers: [{ text: "Effort", correct: true }, { text: "Struggle", correct: false }, { text: "Endeavor", correct: false }, { text: "Attempt", correct: false }] },
    { question: "責任 (せきにん)", answers: [{ text: "Responsibility", correct: true }, { text: "Accountability", correct: false }, { text: "Obligation", correct: false }, { text: "Duty", correct: false }] },
    { question: "現実 (げんじつ)", answers: [{ text: "Reality", correct: true }, { text: "Actuality", correct: false }, { text: "Truth", correct: false }, { text: "Realization", correct: false }] },
    { question: "取り扱い (とりあつかい)", answers: [{ text: "Handling", correct: true }, { text: "Treatment", correct: false }, { text: "Dealing", correct: false }, { text: "Management", correct: false }] },
    { question: "優先 (ゆうせん)", answers: [{ text: "Priority", correct: true }, { text: "Preference", correct: false }, { text: "Precedence", correct: false }, { text: "Advantage", correct: false }] },
    { question: "協議 (きょうぎ)", answers: [{ text: "Consultation", correct: true }, { text: "Negotiation", correct: false }, { text: "Discussion", correct: false }, { text: "Conference", correct: false }] },
    { question: "財産 (ざいさん)", answers: [{ text: "Property", correct: true }, { text: "Assets", correct: false }, { text: "Wealth", correct: false }, { text: "Possession", correct: false }] },
    { question: "努力 (どりょく)", answers: [{ text: "Effort", correct: true }, { text: "Struggle", correct: false }, { text: "Endeavor", correct: false }, { text: "Attempt", correct: false }] },
    { question: "責任 (せきにん)", answers: [{ text: "Responsibility", correct: true }, { text: "Accountability", correct: false }, { text: "Obligation", correct: false }, { text: "Duty", correct: false }] },
    { question: "現実 (げんじつ)", answers: [{ text: "Reality", correct: true }, { text: "Actuality", correct: false }, { text: "Truth", correct: false }, { text: "Realization", correct: false }] },
    { question: "取り扱い (とりあつかい)", answers: [{ text: "Handling", correct: true }, { text: "Treatment", correct: false }, { text: "Dealing", correct: false }, { text: "Management", correct: false }] },
    { question: "優先 (ゆうせん)", answers: [{ text: "Priority", correct: true }, { text: "Preference", correct: false }, { text: "Precedence", correct: false }, { text: "Advantage", correct: false }] },
    { question: "協議 (きょうぎ)", answers: [{ text: "Consultation", correct: true }, { text: "Negotiation", correct: false }, { text: "Discussion", correct: false }, { text: "Conference", correct: false }] },
    { question: "財産 (ざいさん)", answers: [{ text: "Property", correct: true }, { text: "Assets", correct: false }, { text: "Wealth", correct: false }, { text: "Possession", correct: false }] },
    { question: "設計 (せっけい)", answers: [{ text: "Design", correct: true }, { text: "Planning", correct: false }, { text: "Blueprint", correct: false }, { text: "Configuration", correct: false }] },
    { question: "経過 (けいか)", answers: [{ text: "Progress", correct: true }, { text: "Passage", correct: false }, { text: "Course", correct: false }, { text: "Development", correct: false }] },
    { question: "努力 (どりょく)", answers: [{ text: "Effort", correct: true }, { text: "Struggle", correct: false }, { text: "Endeavor", correct: false }, { text: "Attempt", correct: false }] },
    { question: "責任 (せきにん)", answers: [{ text: "Responsibility", correct: true }, { text: "Accountability", correct: false }, { text: "Obligation", correct: false }, { text: "Duty", correct: false }] },
    { question: "現実 (げんじつ)", answers: [{ text: "Reality", correct: true }, { text: "Actuality", correct: false }, { text: "Truth", correct: false }, { text: "Realization", correct: false }] },
    { question: "犬 (いぬ)", answers: [{ text: "Dog", correct: true }, { text: "Cat", correct: false }, { text: "Bird", correct: false }, { text: "Fish", correct: false }] },
    { question: "赤い (あかい)", answers: [{ text: "Red", correct: true }, { text: "Blue", correct: false }, { text: "Yellow", correct: false }, { text: "Green", correct: false }] },
    { question: "食べる (たべる)", answers: [{ text: "To eat", correct: true }, { text: "To drink", correct: false }, { text: "To sleep", correct: false }, { text: "To run", correct: false }] },
    { question: "学校 (がっこう)", answers: [{ text: "School", correct: true }, { text: "Library", correct: false }, { text: "Park", correct: false }, { text: "Home", correct: false }] },
    { question: "本 (ほん)", answers: [{ text: "Book", correct: true }, { text: "Newspaper", correct: false }, { text: "Magazine", correct: false }, { text: "TV", correct: false }] },
    { question: "時間 (じかん)", answers: [{ text: "Time", correct: true }, { text: "Year", correct: false }, { text: "Day", correct: false }, { text: "Month", correct: false }] },
    { question: "大きい (おおきい)", answers: [{ text: "Big", correct: true }, { text: "Small", correct: false }, { text: "Tall", correct: false }, { text: "Short", correct: false }] },
    { question: "行く (いく)", answers: [{ text: "To go", correct: true }, { text: "To come", correct: false }, { text: "To stay", correct: false }, { text: "To leave", correct: false }] },
    { question: "家族 (かぞく)", answers: [{ text: "Family", correct: true }, { text: "Friend", correct: false }, { text: "Neighbor", correct: false }, { text: "Colleague", correct: false }] },
    { question: "写真 (しゃしん)", answers: [{ text: "Photograph", correct: true }, { text: "Painting", correct: false }, { text: "Sculpture", correct: false }, { text: "Drawing", correct: false }] },
    { question: "水 (みず)", answers: [{ text: "Water", correct: true }, { text: "Juice", correct: false }, { text: "Tea", correct: false }, { text: "Coffee", correct: false }] },
    { question: "見る (みる)", answers: [{ text: "To see", correct: true }, { text: "To hear", correct: false }, { text: "To speak", correct: false }, { text: "To touch", correct: false }] },
    { question: "友達 (ともだち)", answers: [{ text: "Friend", correct: true }, { text: "Sibling", correct: false }, { text: "Parent", correct: false }, { text: "Relative", correct: false }] },
    { question: "雨 (あめ)", answers: [{ text: "Rain", correct: true }, { text: "Snow", correct: false }, { text: "Sun", correct: false }, { text: "Wind", correct: false }] },
    { question: "青い (あおい)", answers: [{ text: "Blue", correct: true }, { text: "Red", correct: false }, { text: "Yellow", correct: false }, { text: "Green", correct: false }] },
    { question: "朝 (あさ)", answers: [{ text: "Morning", correct: true }, { text: "Noon", correct: false }, { text: "Evening", correct: false }, { text: "Night", correct: false }] },
    { question: "好き (すき)", answers: [{ text: "Like", correct: true }, { text: "Dislike", correct: false }, { text: "Love", correct: false }, { text: "Hate", correct: false }] },
    { question: "先生 (せんせい)", answers: [{ text: "Teacher", correct: true }, { text: "Doctor", correct: false }, { text: "Engineer", correct: false }, { text: "Artist", correct: false }] },
    { question: "昼 (ひる)", answers: [{ text: "Noon", correct: true }, { text: "Morning", correct: false }, { text: "Evening", correct: false }, { text: "Night", correct: false }] },
    { question: "遊ぶ (あそぶ)", answers: [{ text: "To play", correct: true }, { text: "To work", correct: false }, { text: "To study", correct: false }, { text: "To sleep", correct: false }] },
    { question: "経済 (けいざい)", answers: [{ text: "Economy", correct: true }, { text: "Politics", correct: false }, { text: "Society", correct: false }, { text: "Culture", correct: false }] },
    { question: "自然 (しぜん)", answers: [{ text: "Nature", correct: true }, { text: "Environment", correct: false }, { text: "Technology", correct: false }, { text: "Artificial", correct: false }] },
    { question: "国際 (こくさい)", answers: [{ text: "International", correct: true }, { text: "National", correct: false }, { text: "Global", correct: false }, { text: "Local", correct: false }] },
    { question: "教育 (きょういく)", answers: [{ text: "Education", correct: true }, { text: "Training", correct: false }, { text: "Learning", correct: false }, { text: "Schooling", correct: false }] },
    { question: "健康 (けんこう)", answers: [{ text: "Health", correct: true }, { text: "Fitness", correct: false }, { text: "Wellness", correct: false }, { text: "Medicine", correct: false }] },
    { question: "文化 (ぶんか)", answers: [{ text: "Culture", correct: true }, { text: "Tradition", correct: false }, { text: "Heritage", correct: false }, { text: "Art", correct: false }] },
    { question: "発展 (はってん)", answers: [{ text: "Development", correct: true }, { text: "Growth", correct: false }, { text: "Advancement", correct: false }, { text: "Progress", correct: false }] },
    { question: "社会 (しゃかい)", answers: [{ text: "Society", correct: true }, { text: "Community", correct: false }, { text: "Population", correct: false }, { text: "Public", correct: false }] },
    { question: "科学 (かがく)", answers: [{ text: "Science", correct: true }, { text: "Technology", correct: false }, { text: "Research", correct: false }, { text: "Experiment", correct: false }] },
    { question: "問題 (もんだい)", answers: [{ text: "Problem", correct: true }, { text: "Question", correct: false }, { text: "Challenge", correct: false }, { text: "Issue", correct: false }] },
    { question: "可能 (かのう)", answers: [{ text: "Possible", correct: true }, { text: "Impossible", correct: false }, { text: "Likely", correct: false }, { text: "Certain", correct: false }] },
    { question: "理解 (りかい)", answers: [{ text: "Understanding", correct: true }, { text: "Knowledge", correct: false }, { text: "Comprehension", correct: false }, { text: "Awareness", correct: false }] },
    { question: "管理 (かんり)", answers: [{ text: "Management", correct: true }, { text: "Control", correct: false }, { text: "Organization", correct: false }, { text: "Supervision", correct: false }] },
    { question: "改善 (かいぜん)", answers: [{ text: "Improvement", correct: true }, { text: "Change", correct: false }, { text: "Modification", correct: false }, { text: "Upgrade", correct: false }] },
    { question: "関係 (かんけい)", answers: [{ text: "Relationship", correct: true }, { text: "Connection", correct: false }, { text: "Association", correct: false }, { text: "Interaction", correct: false }] },
    { question: "効果 (こうか)", answers: [{ text: "Effect", correct: true }, { text: "Result", correct: false }, { text: "Outcome", correct: false }, { text: "Impact", correct: false }] },
    { question: "対象 (たいしょう)", answers: [{ text: "Target", correct: true }, { text: "Objective", correct: false }, { text: "Subject", correct: false }, { text: "Goal", correct: false }] },
    { question: "事実 (じじつ)", answers: [{ text: "Fact", correct: true }, { text: "Truth", correct: false }, { text: "Reality", correct: false }, { text: "Evidence", correct: false }] },
    { question: "経験 (けいけん)", answers: [{ text: "Experience", correct: true }, { text: "Knowledge", correct: false }, { text: "Skill", correct: false }, { text: "Learning", correct: false }] },
];



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let intervalQueue = [];
let intervalCounter = 0;

function startQuiz() {
    correctCount = 0;
    incorrectCount = 0;
    intervalQueue = [];
    intervalCounter = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    const question = getRandomQuestion();

    questionElement.innerHTML = question.question;

    shuffleArray(question.answers);

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function getRandomQuestion() {
    const questionIndices = Array.from({ length: questions.length }, (_, i) => i);
    questionIndices.splice(currentQuestionIndex, 1); 
    const randomIndex = questionIndices[Math.floor(Math.random() * questionIndices.length)];
    currentQuestionIndex = randomIndex;

    if (intervalQueue.length > 0 && intervalCounter >= intervalQueue[0].interval) {
        currentQuestionIndex = intervalQueue.shift().index;
    }

    intervalCounter++;

    return questions[currentQuestionIndex];
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        correctCount++;
    } else {
        selectedBtn.classList.add("incorrect");
        incorrectCount++;
        intervalQueue.push({ index: currentQuestionIndex, interval: intervalCounter + Math.floor(Math.random() * 8) + 3 });
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton() {
    showQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

nextButton.addEventListener("click", handleNextButton);

startQuiz();
