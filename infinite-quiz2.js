const questions = [
    { question: "環境 (かんきょう)", answers: [{ text: "Environment", correct: true }, { text: "Company", correct: false }, { text: "Career", correct: false }, { text: "Discussion", correct: false }] },
    { question: "工場 (こうじょう)", answers: [{ text: "Hospital", correct: false }, { text: "Restaurant", correct: false }, { text: "Factory", correct: true }, { text: "Office", correct: false }] },
    { question: "成績 (せいせき)", answers: [{ text: "Grade", correct: true }, { text: "Exam", correct: false }, { text: "Attendance", correct: false }, { text: "Schedule", correct: false }] },
    { question: "会話 (かいわ)", answers: [{ text: "Conversation", correct: true }, { text: "Language", correct: false }, { text: "Speech", correct: false }, { text: "Discussion", correct: false }] },
    { question: "経験 (けいけん)", answers: [{ text: "Experience", correct: true }, { text: "Training", correct: false }, { text: "Lesson", correct: false }, { text: "Memory", correct: false }] },
    { question: "税金 (ぜいきん)", answers: [{ text: "Tax", correct: true }, { text: "Fee", correct: false }, { text: "Debt", correct: false }, { text: "Credit", correct: false }] },
    { question: "通信 (つうしん)", answers: [{ text: "Communication", correct: true }, { text: "Post", correct: false }, { text: "Radio", correct: false }, { text: "Message", correct: false }] },
    { question: "番組 (ばんぐみ)", answers: [{ text: "Show", correct: true }, { text: "News", correct: false }, { text: "Series", correct: false }, { text: "Channel", correct: false }] },
    { question: "資料 (しりょう)", answers: [{ text: "Documents", correct: true }, { text: "Materials", correct: false }, { text: "Notes", correct: false }, { text: "Information", correct: false }] },
    { question: "観光 (かんこう)", answers: [{ text: "Sightseeing", correct: true }, { text: "Shopping", correct: false }, { text: "Dining", correct: false }, { text: "Traveling", correct: false }] },
    { question: "出席 (しゅっせき)", answers: [{ text: "Attendance", correct: true }, { text: "Absence", correct: false }, { text: "Punctuality", correct: false }, { text: "Participation", correct: false }] },
    { question: "状態 (じょうたい)", answers: [{ text: "Condition", correct: true }, { text: "Position", correct: false }, { text: "State", correct: false }, { text: "Situation", correct: false }] },
    { question: "状況 (じょうきょう)", answers: [{ text: "Circumstances", correct: true }, { text: "Events", correct: false }, { text: "News", correct: false }, { text: "Condition", correct: false }] },
    { question: "確率 (かくりつ)", answers: [{ text: "Probability", correct: true }, { text: "Frequency", correct: false }, { text: "Chance", correct: false }, { text: "Possibility", correct: false }] },
    { question: "使用 (しよう)", answers: [{ text: "Use", correct: true }, { text: "Purpose", correct: false }, { text: "Meaning", correct: false }, { text: "Reason", correct: false }] },
    { question: "注意 (ちゅうい)", answers: [{ text: "Attention", correct: true }, { text: "Reminder", correct: false }, { text: "Warning", correct: false }, { text: "Notice", correct: false }] },
    { question: "職業 (しょくぎょう)", answers: [{ text: "Occupation", correct: true }, { text: "Company", correct: false }, { text: "Employee", correct: false }, { text: "Industry", correct: false }] },
    { question: "場所 (ばしょ)", answers: [{ text: "Location", correct: true }, { text: "Area", correct: false }, { text: "Space", correct: false }, { text: "Place", correct: false }] },
    { question: "医者 (いしゃ)", answers: [{ text: "Doctor", correct: true }, { text: "Nurse", correct: false }, { text: "Patient", correct: false }, { text: "Hospital", correct: false }] },
    { question: "問題 (もんだい)", answers: [{ text: "Question", correct: true }, { text: "Solution", correct: false }, { text: "Problem", correct: false }, { text: "Discussion", correct: false }] },
    { question: "店 (みせ)", answers: [{ text: "Store", correct: true }, { text: "Shop", correct: false }, { text: "Market", correct: false }, { text: "Restaurant", correct: false }] },
    { question: "番号 (ばんごう)", answers: [{ text: "Number", correct: true }, { text: "Sign", correct: false }, { text: "Figure", correct: false }, { text: "Position", correct: false }] },
    { question: "運動 (うんどう)", answers: [{ text: "Exercise", correct: true }, { text: "Running", correct: false }, { text: "Movement", correct: false }, { text: "Sport", correct: false }] },
    { question: "資料 (しりょう)", answers: [{ text: "Documents", correct: true }, { text: "Materials", correct: false }, { text: "Notes", correct: false }, { text: "Information", correct: false }] },
    { question: "景色 (けしき)", answers: [{ text: "Scenery", correct: true }, { text: "Picture", correct: false }, { text: "Scene", correct: false }, { text: "Landscape", correct: false }] },
    { question: "野菜 (やさい)", answers: [{ text: "Vegetable", correct: true }, { text: "Fruit", correct: false }, { text: "Leaf", correct: false }, { text: "Plant", correct: false }] },
    { question: "注文 (ちゅうもん)", answers: [{ text: "Order", correct: true }, { text: "Request", correct: false }, { text: "Command", correct: false }, { text: "Demand", correct: false }] },
    { question: "運転 (うんてん)", answers: [{ text: "Driving", correct: true }, { text: "Walking", correct: false }, { text: "Running", correct: false }, { text: "Riding", correct: false }] },
    { question: "学期 (がっき)", answers: [{ text: "Semester", correct: true }, { text: "Term", correct: false }, { text: "Course", correct: false }, { text: "Class", correct: false }] },
    { question: "作家 (さっか)", answers: [{ text: "Writer", correct: true }, { text: "Artist", correct: false }, { text: "Painter", correct: false }, { text: "Author", correct: false }] },
    { question: "旅行 (りょこう)", answers: [{ text: "Travel", correct: true }, { text: "Journey", correct: false }, { text: "Trip", correct: false }, { text: "Tour", correct: false }] },
    { question: "質問 (しつもん)", answers: [{ text: "Question", correct: true }, { text: "Inquiry", correct: false }, { text: "Problem", correct: false }, { text: "Discussion", correct: false }] },
    { question: "大使館 (たいしかん)", answers: [{ text: "Embassy", correct: true }, { text: "Office", correct: false }, { text: "Consulate", correct: false }, { text: "Agency", correct: false }] },
    { question: "先生 (せんせい)", answers: [{ text: "Teacher", correct: true }, { text: "Professor", correct: false }, { text: "Instructor", correct: false }, { text: "Guide", correct: false }] },
    { question: "生活 (せいかつ)", answers: [{ text: "Life", correct: true }, { text: "Living", correct: false }, { text: "Existence", correct: false }, { text: "Lifestyle", correct: false }] },
    { question: "地理 (ちり)", answers: [{ text: "Geography", correct: true }, { text: "History", correct: false }, { text: "Science", correct: false }, { text: "Culture", correct: false }] },
    { question: "本物 (ほんもの)", answers: [{ text: "Genuine article", correct: true }, { text: "Fake", correct: false }, { text: "Original", correct: false }, { text: "Replica", correct: false }] },
    { question: "夢 (ゆめ)", answers: [{ text: "Dream", correct: true }, { text: "Vision", correct: false }, { text: "Reality", correct: false }, { text: "Nightmare", correct: false }] },
    { question: "国内 (こくない)", answers: [{ text: "Domestic", correct: true }, { text: "International", correct: false }, { text: "National", correct: false }, { text: "Global", correct: false }] },
    { question: "訪問 (ほうもん)", answers: [{ text: "Visit", correct: true }, { text: "Travel", correct: false }, { text: "Trip", correct: false }, { text: "Tour", correct: false }] },
    { question: "自由 (じゆう)", answers: [{ text: "Freedom", correct: true }, { text: "Liberty", correct: false }, { text: "Right", correct: false }, { text: "Choice", correct: false }] },
    { question: "宿題 (しゅくだい)", answers: [{ text: "Homework", correct: true }, { text: "Assignment", correct: false }, { text: "Task", correct: false }, { text: "Study", correct: false }] },
    { question: "電話 (でんわ)", answers: [{ text: "Telephone", correct: true }, { text: "Message", correct: false }, { text: "Call", correct: false }, { text: "Conversation", correct: false }] },
    { question: "映画 (えいが)", answers: [{ text: "Movie", correct: true }, { text: "Theater", correct: false }, { text: "Film", correct: false }, { text: "Screen", correct: false }] },
    { question: "調査 (ちょうさ)", answers: [{ text: "Investigation", correct: true }, { text: "Research", correct: false }, { text: "Survey", correct: false }, { text: "Analysis", correct: false }] },
    { question: "漢字 (かんじ)", answers: [{ text: "Kanji", correct: true }, { text: "Hiragana", correct: false }, { text: "Katakana", correct: false }, { text: "Romanji", correct: false }] },
    { question: "報告 (ほうこく)", answers: [{ text: "Report", correct: true }, { text: "Announcement", correct: false }, { text: "News", correct: false }, { text: "Message", correct: false }] },
    { question: "昼食 (ちゅうしょく)", answers: [{ text: "Lunch", correct: true }, { text: "Breakfast", correct: false }, { text: "Dinner", correct: false }, { text: "Meal", correct: false }] },
    { question: "世界 (せかい)", answers: [{ text: "World", correct: true }, { text: "Country", correct: false }, { text: "Globe", correct: false }, { text: "Earth", correct: false }] },
    { question: "参加 (さんか)", answers: [{ text: "Participation", correct: true }, { text: "Attendance", correct: false }, { text: "Involvement", correct: false }, { text: "Joining", correct: false }] },
    { question: "友達 (ともだち)", answers: [{ text: "Friend", correct: true }, { text: "Colleague", correct: false }, { text: "Companion", correct: false }, { text: "Pal", correct: false }] },
    { question: "計画 (けいかく)", answers: [{ text: "Plan", correct: true }, { text: "Project", correct: false }, { text: "Schedule", correct: false }, { text: "Strategy", correct: false }] },
    { question: "料理 (りょうり)", answers: [{ text: "Cooking", correct: true }, { text: "Meal", correct: false }, { text: "Food", correct: false }, { text: "Recipe", correct: false }] },
    { question: "成功 (せいこう)", answers: [{ text: "Success", correct: true }, { text: "Achievement", correct: false }, { text: "Victory", correct: false }, { text: "Progress", correct: false }] },
    { question: "費用 (ひよう)", answers: [{ text: "Cost", correct: true }, { text: "Expense", correct: false }, { text: "Fee", correct: false }, { text: "Payment", correct: false }] },
    { question: "作品 (さくひん)", answers: [{ text: "Work", correct: true }, { text: "Product", correct: false }, { text: "Piece", correct: false }, { text: "Art", correct: false }] },
    { question: "部屋 (へや)", answers: [{ text: "Room", correct: true }, { text: "House", correct: false }, { text: "Apartment", correct: false }, { text: "Home", correct: false }] },
    { question: "自然 (しぜん)", answers: [{ text: "Nature", correct: true }, { text: "Environment", correct: false }, { text: "Wildlife", correct: false }, { text: "Natural", correct: false }] },
    { question: "社会 (しゃかい)", answers: [{ text: "Society", correct: true }, { text: "Community", correct: false }, { text: "Culture", correct: false }, { text: "Public", correct: false }] },
    { question: "理由 (りゆう)", answers: [{ text: "Reason", correct: true }, { text: "Logic", correct: false }, { text: "Cause", correct: false }, { text: "Purpose", correct: false }] },
    { question: "支店 (してん)", answers: [{ text: "Branch", correct: true }, { text: "Office", correct: false }, { text: "Store", correct: false }, { text: "Department", correct: false }] },
    { question: "条件 (じょうけん)", answers: [{ text: "Condition", correct: true }, { text: "Requirement", correct: false }, { text: "Term", correct: false }, { text: "Rule", correct: false }] },
    { question: "管理 (かんり)", answers: [{ text: "Management", correct: true }, { text: "Control", correct: false }, { text: "Administration", correct: false }, { text: "Supervision", correct: false }] },
    { question: "結果 (けっか)", answers: [{ text: "Result", correct: true }, { text: "Outcome", correct: false }, { text: "Conclusion", correct: false }, { text: "Effect", correct: false }] },
    { question: "情報 (じょうほう)", answers: [{ text: "Information", correct: true }, { text: "Data", correct: false }, { text: "News", correct: false }, { text: "Message", correct: false }] },
    { question: "影響 (えいきょう)", answers: [{ text: "Influence", correct: true }, { text: "Effect", correct: false }, { text: "Impact", correct: false }, { text: "Result", correct: false }] },
    { question: "場合 (ばあい)", answers: [{ text: "Case", correct: true }, { text: "Situation", correct: false }, { text: "Event", correct: false }, { text: "Instance", correct: false }] },
    { question: "変化 (へんか)", answers: [{ text: "Change", correct: true }, { text: "Variation", correct: false }, { text: "Shift", correct: false }, { text: "Transformation", correct: false }] },
    { question: "支援 (しえん)", answers: [{ text: "Support", correct: true }, { text: "Assistance", correct: false }, { text: "Aid", correct: false }, { text: "Help", correct: false }] },
    { question: "場所 (ばしょ)", answers: [{ text: "Location", correct: true }, { text: "Area", correct: false }, { text: "Space", correct: false }, { text: "Place", correct: false }] },
    { question: "国際 (こくさい)", answers: [{ text: "International", correct: true }, { text: "Global", correct: false }, { text: "Foreign", correct: false }, { text: "Worldwide", correct: false }] },
    { question: "作業 (さぎょう)", answers: [{ text: "Work", correct: true }, { text: "Task", correct: false }, { text: "Job", correct: false }, { text: "Operation", correct: false }] },
    { question: "発表 (はっぴょう)", answers: [{ text: "Presentation", correct: true }, { text: "Speech", correct: false }, { text: "Announcement", correct: false }, { text: "Introduction", correct: false }] },
    { question: "内容 (ないよう)", answers: [{ text: "Content", correct: true }, { text: "Subject", correct: false }, { text: "Material", correct: false }, { text: "Topic", correct: false }] },
    { question: "生徒 (せいと)", answers: [{ text: "Student", correct: true }, { text: "Pupil", correct: false }, { text: "Learner", correct: false }, { text: "Classmate", correct: false }] },
    { question: "教授 (きょうじゅ)", answers: [{ text: "Professor", correct: true }, { text: "Teacher", correct: false }, { text: "Instructor", correct: false }, { text: "Lecturer", correct: false }] },
    { question: "改善 (かいぜん)", answers: [{ text: "Improvement", correct: true }, { text: "Enhancement", correct: false }, { text: "Progress", correct: false }, { text: "Upgrade", correct: false }] },
    { question: "分野 (ぶんや)", answers: [{ text: "Field", correct: true }, { text: "Area", correct: false }, { text: "Domain", correct: false }, { text: "Sector", correct: false }] },
    { question: "部品 (ぶひん)", answers: [{ text: "Part", correct: true }, { text: "Component", correct: false }, { text: "Piece", correct: false }, { text: "Section", correct: false }] },
    { question: "計画 (けいかく)", answers: [{ text: "Plan", correct: true }, { text: "Project", correct: false }, { text: "Schedule", correct: false }, { text: "Strategy", correct: false }] },
    { question: "人々 (ひとびと)", answers: [{ text: "People", correct: true }, { text: "Person", correct: false }, { text: "Citizens", correct: false }, { text: "Residents", correct: false }] },
    { question: "相手 (あいて)", answers: [{ text: "Opponent", correct: true }, { text: "Partner", correct: false }, { text: "Rival", correct: false }, { text: "Enemy", correct: false }] },
    { question: "進行 (しんこう)", answers: [{ text: "Progress", correct: true }, { text: "Advancement", correct: false }, { text: "Development", correct: false }, { text: "Movement", correct: false }] },
    { question: "発音 (はつおん)", answers: [{ text: "Pronunciation", correct: true }, { text: "Accent", correct: false }, { text: "Speech", correct: false }, { text: "Sound", correct: false }] },
    { question: "演技 (えんぎ)", answers: [{ text: "Acting", correct: true }, { text: "Performance", correct: false }, { text: "Play", correct: false }, { text: "Show", correct: false }] },
    { question: "商品 (しょうひん)", answers: [{ text: "Product", correct: true }, { text: "Item", correct: false }, { text: "Goods", correct: false }, { text: "Merchandise", correct: false }] },
    { question: "留学 (りゅうがく)", answers: [{ text: "Studying abroad", correct: true }, { text: "Foreign exchange", correct: false }, { text: "Overseas study", correct: false }, { text: "Immigration", correct: false }] },
    { question: "提案 (ていあん)", answers: [{ text: "Proposal", correct: true }, { text: "Suggestion", correct: false }, { text: "Offer", correct: false }, { text: "Idea", correct: false }] },
    { question: "出身 (しゅっしん)", answers: [{ text: "Hometown", correct: true }, { text: "Birthplace", correct: false }, { text: "Origin", correct: false }, { text: "Background", correct: false }] },
    { question: "条件 (じょうけん)", answers: [{ text: "Condition", correct: true }, { text: "Requirement", correct: false }, { text: "Term", correct: false }, { text: "Rule", correct: false }] },
    { question: "報告 (ほうこく)", answers: [{ text: "Report", correct: true }, { text: "Announcement", correct: false }, { text: "News", correct: false }, { text: "Message", correct: false }] },
    { question: "応援 (おうえん)", answers: [{ text: "Support", correct: true }, { text: "Encouragement", correct: false }, { text: "Cheering", correct: false }, { text: "Assistance", correct: false }] },
    { question: "教育 (きょういく)", answers: [{ text: "Education", correct: true }, { text: "Teaching", correct: false }, { text: "Learning", correct: false }, { text: "Training", correct: false }] },
    { question: "予算 (よさん)", answers: [{ text: "Budget", correct: true }, { text: "Plan", correct: false }, { text: "Cost", correct: false }, { text: "Expense", correct: false }] },
    { question: "条件 (じょうけん)", answers: [{ text: "Condition", correct: true }, { text: "Requirement", correct: false }, { text: "Term", correct: false }, { text: "Rule", correct: false }] },
    { question: "説明 (せつめい)", answers: [{ text: "Explanation", correct: true }, { text: "Description", correct: false }, { text: "Clarification", correct: false }, { text: "Definition", correct: false }] },
    { question: "休暇 (きゅうか)", answers: [{ text: "Vacation", correct: true }, { text: "Holiday", correct: false }, { text: "Break", correct: false }, { text: "Leave", correct: false }] },
    { question: "提案 (ていあん)", answers: [{ text: "Proposal", correct: true }, { text: "Suggestion", correct: false }, { text: "Offer", correct: false }, { text: "Idea", correct: false }] },
    { question: "料金 (りょうきん)", answers: [{ text: "Fee", correct: true }, { text: "Charge", correct: false }, { text: "Cost", correct: false }, { text: "Price", correct: false }] },
    { question: "映像 (えいぞう)", answers: [{ text: "Video", correct: true }, { text: "Image", correct: false }, { text: "Picture", correct: false }, { text: "Film", correct: false }] },
    { question: "景色 (けしき)", answers: [{ text: "Scenery", correct: true }, { text: "View", correct: false }, { text: "Landscape", correct: false }, { text: "Scene", correct: false }] },
    { question: "応募 (おうぼ)", answers: [{ text: "Application", correct: true }, { text: "Entry", correct: false }, { text: "Submission", correct: false }, { text: "Request", correct: false }] },
    { question: "成長 (せいちょう)", answers: [{ text: "Growth", correct: true }, { text: "Development", correct: false }, { text: "Progress", correct: false }, { text: "Advancement", correct: false }] },
    { question: "方法 (ほうほう)", answers: [{ text: "Method", correct: true }, { text: "Way", correct: false }, { text: "Technique", correct: false }, { text: "Approach", correct: false }] },
    { question: "選手 (せんしゅ)", answers: [{ text: "Player", correct: true }, { text: "Athlete", correct: false }, { text: "Competitor", correct: false }, { text: "Participant", correct: false }] },
    { question: "最後 (さいご)", answers: [{ text: "Last", correct: true }, { text: "Final", correct: false }, { text: "End", correct: false }, { text: "Conclusion", correct: false }] },
    { question: "友情 (ゆうじょう)", answers: [{ text: "Friendship", correct: true }, { text: "Relationship", correct: false }, { text: "Connection", correct: false }, { text: "Bond", correct: false }] },
    { question: "申し込む (もうしこむ)", answers: [{ text: "Apply", correct: true }, { text: "Register", correct: false }, { text: "Enroll", correct: false }, { text: "Submit", correct: false }] },
    { question: "特技 (とくぎ)", answers: [{ text: "Special skill", correct: true }, { text: "Talent", correct: false }, { text: "Expertise", correct: false }, { text: "Ability", correct: false }] },
    { question: "手紙 (てがみ)", answers: [{ text: "Letter", correct: true }, { text: "Mail", correct: false }, { text: "Message", correct: false }, { text: "Postcard", correct: false }] },
    { question: "選択 (せんたく)", answers: [{ text: "Choice", correct: true }, { text: "Selection", correct: false }, { text: "Decision", correct: false }, { text: "Option", correct: false }] },
    { question: "関係 (かんけい)", answers: [{ text: "Relationship", correct: true }, { text: "Connection", correct: false }, { text: "Association", correct: false }, { text: "Involvement", correct: false }] },
    { question: "自動 (じどう)", answers: [{ text: "Automatic", correct: true }, { text: "Auto", correct: false }, { text: "Self", correct: false }, { text: "Machine", correct: false }] },
    { question: "市場 (しじょう)", answers: [{ text: "Market", correct: true }, { text: "Store", correct: false }, { text: "Shop", correct: false }, { text: "Business", correct: false }] },
    { question: "具合 (ぐあい)", answers: [{ text: "Condition", correct: true }, { text: "State", correct: false }, { text: "Health", correct: false }, { text: "Situation", correct: false }] },
    { question: "発表 (はっぴょう)", answers: [{ text: "Presentation", correct: true }, { text: "Speech", correct: false }, { text: "Announcement", correct: false }, { text: "Introduction", correct: false }] },
    { question: "電子 (でんし)", answers: [{ text: "Electronic", correct: true }, { text: "Electric", correct: false }, { text: "Digital", correct: false }, { text: "Device", correct: false }] },
    { question: "練習 (れんしゅう)", answers: [{ text: "Practice", correct: true }, { text: "Training", correct: false }, { text: "Exercise", correct: false }, { text: "Drill", correct: false }] },
    { question: "範囲 (はんい)", answers: [{ text: "Range", correct: true }, { text: "Area", correct: false }, { text: "Scope", correct: false }, { text: "Extent", correct: false }] },
    { question: "研究 (けんきゅう)", answers: [{ text: "Research", correct: true }, { text: "Study", correct: false }, { text: "Investigation", correct: false }, { text: "Analysis", correct: false }] },
    { question: "機会 (きかい)", answers: [{ text: "Opportunity", correct: true }, { text: "Chance", correct: false }, { text: "Occasion", correct: false }, { text: "Moment", correct: false }] },
    { question: "訪問 (ほうもん)", answers: [{ text: "Visit", correct: true }, { text: "Trip", correct: false }, { text: "Tour", correct: false }, { text: "Journey", correct: false }] },
    { question: "交通 (こうつう)", answers: [{ text: "Traffic", correct: true }, { text: "Transportation", correct: false }, { text: "Communication", correct: false }, { text: "Exchange", correct: false }] },
    { question: "授業 (じゅぎょう)", answers: [{ text: "Class", correct: true }, { text: "Lesson", correct: false }, { text: "Course", correct: false }, { text: "Teaching", correct: false }] },
    { question: "支援 (しえん)", answers: [{ text: "Support", correct: true }, { text: "Assistance", correct: false }, { text: "Aid", correct: false }, { text: "Backing", correct: false }] },
    { question: "経営 (けいえい)", answers: [{ text: "Management", correct: true }, { text: "Administration", correct: false }, { text: "Operation", correct: false }, { text: "Business", correct: false }] },
    { question: "対応 (たいおう)", answers: [{ text: "Response", correct: true }, { text: "Correspondence", correct: false }, { text: "Reaction", correct: false }, { text: "Handling", correct: false }] },
    { question: "連絡 (れんらく)", answers: [{ text: "Contact", correct: true }, { text: "Communication", correct: false }, { text: "Connection", correct: false }, { text: "Reach out", correct: false }] },
    { question: "設計 (せっけい)", answers: [{ text: "Design", correct: true }, { text: "Plan", correct: false }, { text: "Blueprint", correct: false }, { text: "Scheme", correct: false }] },
    { question: "責任 (せきにん)", answers: [{ text: "Responsibility", correct: true }, { text: "Duty", correct: false }, { text: "Obligation", correct: false }, { text: "Accountability", correct: false }] },
    { question: "経験 (けいけん)", answers: [{ text: "Experience", correct: true }, { text: "Knowledge", correct: false }, { text: "Skill", correct: false }, { text: "Practice", correct: false }] },
    { question: "試験 (しけん)", answers: [{ text: "Exam", correct: true }, { text: "Test", correct: false }, { text: "Quiz", correct: false }, { text: "Evaluation", correct: false }] },
    { question: "要求 (ようきゅう)", answers: [{ text: "Demand", correct: true }, { text: "Request", correct: false }, { text: "Requirement", correct: false }, { text: "Claim", correct: false }] },
    { question: "発展 (はってん)", answers: [{ text: "Development", correct: true }, { text: "Progress", correct: false }, { text: "Advancement", correct: false }, { text: "Expansion", correct: false }] },
    { question: "評価 (ひょうか)", answers: [{ text: "Evaluation", correct: true }, { text: "Assessment", correct: false }, { text: "Appraisal", correct: false }, { text: "Review", correct: false }] },
    { question: "変更 (へんこう)", answers: [{ text: "Change", correct: true }, { text: "Modification", correct: false }, { text: "Alteration", correct: false }, { text: "Amendment", correct: false }] },
    { question: "特徴 (とくちょう)", answers: [{ text: "Characteristic", correct: true }, { text: "Feature", correct: false }, { text: "Trait", correct: false }, { text: "Attribute", correct: false }] },
    { question: "情報 (じょうほう)", answers: [{ text: "Information", correct: true }, { text: "Data", correct: false }, { text: "News", correct: false }, { text: "Report", correct: false }] },
    { question: "発表 (はっぴょう)", answers: [{ text: "Presentation", correct: true }, { text: "Speech", correct: false }, { text: "Announcement", correct: false }, { text: "Introduction", correct: false }] },
    { question: "結果 (けっか)", answers: [{ text: "Result", correct: true }, { text: "Outcome", correct: false }, { text: "Conclusion", correct: false }, { text: "Effect", correct: false }] },
    { question: "作成 (さくせい)", answers: [{ text: "Creation", correct: true }, { text: "Production", correct: false }, { text: "Making", correct: false }, { text: "Development", correct: false }] },
    { question: "観察 (かんさつ)", answers: [{ text: "Observation", correct: true }, { text: "Watching", correct: false }, { text: "Inspection", correct: false }, { text: "Monitoring", correct: false }] },
    { question: "雰囲気 (ふんいき)", answers: [{ text: "Atmosphere", correct: true }, { text: "Ambiance", correct: false }, { text: "Mood", correct: false }, { text: "Environment", correct: false }] },
    { question: "感想 (かんそう)", answers: [{ text: "Impression", correct: true }, { text: "Thoughts", correct: false }, { text: "Opinion", correct: false }, { text: "Feedback", correct: false }] },
    { question: "面接 (めんせつ)", answers: [{ text: "Interview", correct: true }, { text: "Meeting", correct: false }, { text: "Discussion", correct: false }, { text: "Conversation", correct: false }] },
    { question: "支払い (しはらい)", answers: [{ text: "Payment", correct: true }, { text: "Paying", correct: false }, { text: "Transaction", correct: false }, { text: "Settlement", correct: false }] },
    { question: "関心 (かんしん)", answers: [{ text: "Interest", correct: true }, { text: "Concern", correct: false }, { text: "Attention", correct: false }, { text: "Curiosity", correct: false }] },
    { question: "推薦 (すいせん)", answers: [{ text: "Recommendation", correct: true }, { text: "Suggestion", correct: false }, { text: "Endorsement", correct: false }, { text: "Proposal", correct: false }] },
    { question: "参考 (さんこう)", answers: [{ text: "Reference", correct: true }, { text: "Consultation", correct: false }, { text: "Advice", correct: false }, { text: "Guidance", correct: false }] },
    { question: "議論 (ぎろん)", answers: [{ text: "Discussion", correct: true }, { text: "Debate", correct: false }, { text: "Argument", correct: false }, { text: "Conversation", correct: false }] },
    { question: "管理 (かんり)", answers: [{ text: "Management", correct: true }, { text: "Control", correct: false }, { text: "Administration", correct: false }, { text: "Supervision", correct: false }] },
    { question: "対策 (たいさく)", answers: [{ text: "Countermeasure", correct: true }, { text: "Strategy", correct: false }, { text: "Solution", correct: false }, { text: "Response", correct: false }] },
    { question: "現場 (げんば)", answers: [{ text: "Scene", correct: true }, { text: "Site", correct: false }, { text: "Location", correct: false }, { text: "Field", correct: false }] },
    { question: "理解 (りかい)", answers: [{ text: "Understanding", correct: true }, { text: "Comprehension", correct: false }, { text: "Grasp", correct: false }, { text: "Awareness", correct: false }] },
    { question: "進行 (しんこう)", answers: [{ text: "Progress", correct: true }, { text: "Advance", correct: false }, { text: "Movement", correct: false }, { text: "Development", correct: false }] },
    { question: "推測 (すいそく)", answers: [{ text: "Guess", correct: true }, { text: "Assumption", correct: false }, { text: "Inference", correct: false }, { text: "Estimation", correct: false }] },
    { question: "確認 (かくにん)", answers: [{ text: "Confirmation", correct: true }, { text: "Verification", correct: false }, { text: "Check", correct: false }, { text: "Validation", correct: false }] },
    { question: "作業 (さぎょう)", answers: [{ text: "Work", correct: true }, { text: "Task", correct: false }, { text: "Job", correct: false }, { text: "Operation", correct: false }] },
    { question: "主張 (しゅちょう)", answers: [{ text: "Assertion", correct: true }, { text: "Claim", correct: false }, { text: "Argument", correct: false }, { text: "Statement", correct: false }] },
    { question: "状態 (じょうたい)", answers: [{ text: "Condition", correct: true }, { text: "State", correct: false }, { text: "Status", correct: false }, { text: "Situation", correct: false }] },
    { question: "実験 (じっけん)", answers: [{ text: "Experiment", correct: true }, { text: "Test", correct: false }, { text: "Trial", correct: false }, { text: "Research", correct: false }] },
    { question: "適応 (てきおう)", answers: [{ text: "Adaptation", correct: true }, { text: "Adjustment", correct: false }, { text: "Accommodation", correct: false }, { text: "Fit", correct: false }] },
    { question: "使用 (しよう)", answers: [{ text: "Use", correct: true }, { text: "Utilization", correct: false }, { text: "Application", correct: false }, { text: "Consumption", correct: false }] },
    { question: "提供 (ていきょう)", answers: [{ text: "Offer", correct: true }, { text: "Provide", correct: false }, { text: "Supply", correct: false }, { text: "Contribute", correct: false }] },
    { question: "分析 (ぶんせき)", answers: [{ text: "Analysis", correct: true }, { text: "Examination", correct: false }, { text: "Study", correct: false }, { text: "Investigation", correct: false }] },
    { question: "試合 (しあい)", answers: [{ text: "Match", correct: true }, { text: "Game", correct: false }, { text: "Competition", correct: false }, { text: "Contest", correct: false }] },
    { question: "対象 (たいしょう)", answers: [{ text: "Target", correct: true }, { text: "Subject", correct: false }, { text: "Object", correct: false }, { text: "Goal", correct: false }] },
    { question: "計画 (けいかく)", answers: [{ text: "Plan", correct: true }, { text: "Program", correct: false }, { text: "Scheme", correct: false }, { text: "Strategy", correct: false }] },
    { question: "実現 (じつげん)", answers: [{ text: "Realization", correct: true }, { text: "Achievement", correct: false }, { text: "Implementation", correct: false }, { text: "Fulfillment", correct: false }] },
    { question: "採用 (さいよう)", answers: [{ text: "Adoption", correct: true }, { text: "Employment", correct: false }, { text: "Hiring", correct: false }, { text: "Recruitment", correct: false }] },
    { question: "解決 (かいけつ)", answers: [{ text: "Solution", correct: true }, { text: "Resolution", correct: false }, { text: "Settlement", correct: false }, { text: "Conclusion", correct: false }] },
    { question: "課題 (かだい)", answers: [{ text: "Issue", correct: true }, { text: "Problem", correct: false }, { text: "Challenge", correct: false }, { text: "Task", correct: false }] },
    { question: "出発 (しゅっぱつ)", answers: [{ text: "Departure", correct: true }, { text: "Start", correct: false }, { text: "Beginning", correct: false }, { text: "Commencement", correct: false }] },
    { question: "提案 (ていあん)", answers: [{ text: "Proposal", correct: true }, { text: "Suggestion", correct: false }, { text: "Offer", correct: false }, { text: "Idea", correct: false }] },
    { question: "登録 (とうろく)", answers: [{ text: "Registration", correct: true }, { text: "Enrollment", correct: false }, { text: "Sign-up", correct: false }, { text: "Entry", correct: false }] },
    { question: "統計 (とうけい)", answers: [{ text: "Statistics", correct: true }, { text: "Data", correct: false }, { text: "Figures", correct: false }, { text: "Analysis", correct: false }] },
    { question: "最初 (さいしょ)", answers: [{ text: "First", correct: true }, { text: "Beginning", correct: false }, { text: "Start", correct: false }, { text: "Initiation", correct: false }] },
    { question: "関連 (かんれん)", answers: [{ text: "Relation", correct: true }, { text: "Connection", correct: false }, { text: "Association", correct: false }, { text: "Link", correct: false }] },
    { question: "効果 (こうか)", answers: [{ text: "Effect", correct: true }, { text: "Impact", correct: false }, { text: "Result", correct: false }, { text: "Outcome", correct: false }] },
    { question: "回復 (かいふく)", answers: [{ text: "Recovery", correct: true }, { text: "Restoration", correct: false }, { text: "Healing", correct: false }, { text: "Return", correct: false }] },
    { question: "配布 (はいふ)", answers: [{ text: "Distribution", correct: true }, { text: "Issue", correct: false }, { text: "Delivery", correct: false }, { text: "Supply", correct: false }] },
    { question: "販売 (はんばい)", answers: [{ text: "Sale", correct: true }, { text: "Selling", correct: false }, { text: "Marketing", correct: false }, { text: "Distribution", correct: false }] },
    { question: "要因 (よういん)", answers: [{ text: "Factor", correct: true }, { text: "Cause", correct: false }, { text: "Reason", correct: false }, { text: "Element", correct: false }] },
    { question: "合格 (ごうかく)", answers: [{ text: "Pass", correct: true }, { text: "Success", correct: false }, { text: "Approval", correct: false }, { text: "Acceptance", correct: false }] },
    { question: "分野 (ぶんや)", answers: [{ text: "Field", correct: true }, { text: "Area", correct: false }, { text: "Domain", correct: false }, { text: "Sphere", correct: false }] },
    { question: "目的 (もくてき)", answers: [{ text: "Purpose", correct: true }, { text: "Goal", correct: false }, { text: "Objective", correct: false }, { text: "Intention", correct: false }] },
    { question: "体験 (たいけん)", answers: [{ text: "Experience", correct: true }, { text: "Adventure", correct: false }, { text: "Trial", correct: false }, { text: "Journey", correct: false }] },
    { question: "拡大 (かくだい)", answers: [{ text: "Expansion", correct: true }, { text: "Enlarge", correct: false }, { text: "Extend", correct: false }, { text: "Increase", correct: false }] },
    { question: "安全 (あんぜん)", answers: [{ text: "Safety", correct: true }, { text: "Security", correct: false }, { text: "Protection", correct: false }, { text: "Defense", correct: false }] },
    { question: "評判 (ひょうばん)", answers: [{ text: "Reputation", correct: true }, { text: "Fame", correct: false }, { text: "Popularity", correct: false }, { text: "Public opinion", correct: false }] },
    { question: "状況 (じょうきょう)", answers: [{ text: "Situation", correct: true }, { text: "Condition", correct: false }, { text: "State", correct: false }, { text: "Context", correct: false }] },
    { question: "成果 (せいか)", answers: [{ text: "Achievement", correct: true }, { text: "Result", correct: false }, { text: "Outcome", correct: false }, { text: "Product", correct: false }] },
    { question: "確保 (かくほ)", answers: [{ text: "Securing", correct: true }, { text: "Ensuring", correct: false }, { text: "Guaranteeing", correct: false }, { text: "Protection", correct: false }] },
    { question: "追加 (ついか)", answers: [{ text: "Addition", correct: true }, { text: "Supplement", correct: false }, { text: "Extension", correct: false }, { text: "Increase", correct: false }] },
    { question: "改善 (かいぜん)", answers: [{ text: "Improvement", correct: true }, { text: "Enhancement", correct: false }, { text: "Upgrade", correct: false }, { text: "Progress", correct: false }] },
    { question: "適切 (てきせつ)", answers: [{ text: "Appropriate", correct: true }, { text: "Suitable", correct: false }, { text: "Proper", correct: false }, { text: "Adequate", correct: false }] },
    { question: "形式 (けいしき)", answers: [{ text: "Format", correct: true }, { text: "Form", correct: false }, { text: "Style", correct: false }, { text: "Structure", correct: false }] },
    { question: "返事 (へんじ)", answers: [{ text: "Reply", correct: true }, { text: "Response", correct: false }, { text: "Answer", correct: false }, { text: "Feedback", correct: false }] },
    { question: "費用 (ひよう)", answers: [{ text: "Cost", correct: true }, { text: "Expense", correct: false }, { text: "Charge", correct: false }, { text: "Fee", correct: false }] },
    { question: "規定 (きてい)", answers: [{ text: "Regulation", correct: true }, { text: "Rule", correct: false }, { text: "Standard", correct: false }, { text: "Guideline", correct: false }] },
    { question: "参加 (さんか)", answers: [{ text: "Participation", correct: true }, { text: "Joining", correct: false }, { text: "Involvement", correct: false }, { text: "Attendance", correct: false }] },
    { question: "提出 (ていしゅつ)", answers: [{ text: "Submission", correct: true }, { text: "Presenting", correct: false }, { text: "Handing in", correct: false }, { text: "Delivery", correct: false }] },
    { question: "連続 (れんぞく)", answers: [{ text: "Continuous", correct: true }, { text: "Successive", correct: false }, { text: "Series", correct: false }, { text: "Consecutive", correct: false }] },
    { question: "対応 (たいおう)", answers: [{ text: "Response", correct: true }, { text: "Correspondence", correct: false }, { text: "Reaction", correct: false }, { text: "Handling", correct: false }] },
    { question: "要望 (ようぼう)", answers: [{ text: "Request", correct: true }, { text: "Demand", correct: false }, { text: "Desire", correct: false }, { text: "Wish", correct: false }] },
    { question: "増加 (ぞうか)", answers: [{ text: "Increase", correct: true }, { text: "Rise", correct: false }, { text: "Growth", correct: false }, { text: "Expansion", correct: false }] },
    { question: "報告 (ほうこく)", answers: [{ text: "Report", correct: true }, { text: "Notification", correct: false }, { text: "Announcement", correct: false }, { text: "Update", correct: false }] },
    { question: "確立 (かくりつ)", answers: [{ text: "Establishment", correct: true }, { text: "Foundation", correct: false }, { text: "Formation", correct: false }, { text: "Setting", correct: false }] },
    { question: "対話 (たいわ)", answers: [{ text: "Dialogue", correct: true }, { text: "Conversation", correct: false }, { text: "Discussion", correct: false }, { text: "Interaction", correct: false }] },
    { question: "制度 (せいど)", answers: [{ text: "System", correct: true }, { text: "Institution", correct: false }, { text: "Regulation", correct: false }, { text: "Structure", correct: false }] },
    { question: "活動 (かつどう)", answers: [{ text: "Activity", correct: true }, { text: "Action", correct: false }, { text: "Operation", correct: false }, { text: "Movement", correct: false }] },
    { question: "検討 (けんとう)", answers: [{ text: "Consideration", correct: true }, { text: "Examination", correct: false }, { text: "Study", correct: false }, { text: "Investigation", correct: false }] },
    { question: "整備 (せいび)", answers: [{ text: "Maintenance", correct: true }, { text: "Development", correct: false }, { text: "Improvement", correct: false }, { text: "Adjustment", correct: false }] },
    { question: "説明 (せつめい)", answers: [{ text: "Explanation", correct: true }, { text: "Description", correct: false }, { text: "Elaboration", correct: false }, { text: "Clarification", correct: false }] },
    { question: "質問 (しつもん)", answers: [{ text: "Question", correct: true }, { text: "Inquiry", correct: false }, { text: "Query", correct: false }, { text: "Interrogation", correct: false }] },
    { question: "回答 (かいとう)", answers: [{ text: "Answer", correct: true }, { text: "Response", correct: false }, { text: "Reply", correct: false }, { text: "Solution", correct: false }] },
    { question: "配信 (はいしん)", answers: [{ text: "Distribution", correct: true }, { text: "Delivery", correct: false }, { text: "Broadcasting", correct: false }, { text: "Transmission", correct: false }] },
    { question: "課程 (かてい)", answers: [{ text: "Course", correct: true }, { text: "Program", correct: false }, { text: "Curriculum", correct: false }, { text: "Training", correct: false }] },
    { question: "形成 (けいせい)", answers: [{ text: "Formation", correct: true }, { text: "Creation", correct: false }, { text: "Development", correct: false }, { text: "Structure", correct: false }] },
    { question: "改革 (かいかく)", answers: [{ text: "Reform", correct: true }, { text: "Revolution", correct: false }, { text: "Innovation", correct: false }, { text: "Change", correct: false }] },
    { question: "運営 (うんえい)", answers: [{ text: "Operation", correct: true }, { text: "Management", correct: false }, { text: "Administration", correct: false }, { text: "Conduct", correct: false }] }
]


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

    // Shuffle answers before displaying
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
