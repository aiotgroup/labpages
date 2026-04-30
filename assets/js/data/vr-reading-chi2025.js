(function () {
  window.VRReadingContent = {
    "chi2025": {
      "id": "chi-2025",
      "label": "CHI 2025",
      "title": "CHI 2025 虚拟现实（VR）相关论文整理",
      "curator": "助教 Yinuo Li 整理",
      "description": "按交互技术、应用场景、用户体验与技术融合四个主题整理的 VR 论文阅读参考目录。",
      "sections": [
        {
          "title": "一、VR 交互技术与设计",
          "description": "",
          "groups": [
            {
              "title": "（一）locomotion 与空间交互",
              "papers": [
                {
                  "title": "PAPER037 | Modeling Locomotion with Body Angular Movements in Virtual Reality",
                  "authors": "Zijun Mai, BoYu Gao, Huawei Tu, Dasheng Li, HyungSeok Kim, Weiqi Luo",
                  "summary": "提出基于身体角运动的VR运动建模方法，优化虚拟环境中的移动自然性，为VR locomotion设计提供数据支撑"
                },
                {
                  "title": "PAPER038 | Modeling the Impact of Visual Stimuli on Redirection Noticeability with Gaze Behavior in Virtual Reality",
                  "authors": "Zhipeng Li, Yishu Ji, Ruijia Chen, Tianqi Liu, Yuntao Wang, Yuanchun Shi, Yukang Yan",
                  "summary": "研究视觉刺激对VR重定向技术可见性的影响，结合注视行为数据优化重定向算法，减少用户空间感知冲突"
                },
                {
                  "title": "PAPER608 | MotionBlocks: Modular Geometric Motion Remapping for More Accessible Upper Body Movement in Virtual Reality",
                  "authors": "Johann Wentzel, Alessandra Luz, Martez E Mott, Daniel Vogel",
                  "summary": "提出模块化几何运动重映射技术，优化VR中上肢运动的可访问性，适配不同身体能力用户"
                },
                {
                  "title": "PAPER613 | QCM: A Curvature Manipulation Method to Suppress Discomfort in Redirected Walking",
                  "authors": "Xiyu Bao, Gaorong Lv, Yulong Bian, Wei Gai, Shiqing Xin, Hongqiu Luan, Xiaojuan Ma, Chenglei Yang",
                  "summary": "提出曲率操纵方法（QCM），缓解VR重定向行走中的用户不适感，提升长时VR体验的舒适性"
                },
                {
                  "title": "PAPER614 | RedirectedStepper: Exploring Walking-In-Place Locomotion in VR Using a Mini Stepper for Ascents",
                  "authors": "Quang-Tri Le, Duc-Nham Huynh, Tanh Quang Tran, Morten Fjeld, Wolfgang Stuerzlinger, Markus Zank, Minh-Triet Tran, Khanh-Duy Le",
                  "summary": "设计基于迷你踏步机的VR原地行走方案，适配爬坡等垂直移动场景，平衡沉浸感与物理空间限制"
                },
                {
                  "title": "PAPER811 | The Spin Doctor: Leveraging Insensitivity to Passive Rotational & Translational Gain For Unbounded Motion-Based VR Experiences",
                  "authors": "Graham Wilson, Katharina Margareta Theresa Pöhlmann, David Al Baiaty Suarez, Mark McGill, Stephen Anthony Brewster",
                  "summary": "利用用户对被动旋转和平移增益的不敏感性，设计无边界运动类VR体验，解决传统VR运动受限问题"
                },
                {
                  "title": "PAPER823 | Your Hands Can Tell: Detecting Redirected Hand Movements in Virtual Reality",
                  "authors": "Md Aashikur Rahman Azim, Zihao Su, Seongkook Heo",
                  "summary": "提出VR中重定向手部运动的检测方法，提升手部交互的真实性与精准度"
                },
                {
                  "title": "PAPER1147 | Illusion Spaces in VR: The Interplay Between Size and Taper Angle Perception in Grasping",
                  "authors": "Jian Zhang, Wafa Johal, Jarrod Knibbe",
                  "summary": "探索VR中物体尺寸与锥角感知对抓取动作的影响，优化虚拟物体交互的感知一致性"
                }
              ]
            },
            {
              "title": "（二）手势、注视与多模态交互",
              "papers": [
                {
                  "title": "PAPER549 | Mid-Air Gestures for Proactive Olfactory Interactions in Virtual Reality",
                  "authors": "Junxian Li, Yanan Wang, Zhitong Cui, Jas Brooks, Yifan Yan, Zhengyu Lou, Yucheng Li",
                  "summary": "探索VR中空中手势与嗅觉反馈的主动交互设计，丰富多模态感官体验"
                },
                {
                  "title": "PAPER550 | Online-EYE: Multimodal Implicit Eye Tracking Calibration for XR",
                  "authors": "Baosheng James Hou, Lucy Abramyan, Prasanthi Gurumurthy, Haley Adams, Ivana Tosic Rodgers, Eric J Gonzalez, Khushman Patel, Andrea Colaço, Ken Pfeuffer, Hans Gellersen, Karan Ahuja, Mar Gonzalez-Franco",
                  "summary": "提出多模态隐式眼动校准方案，简化VR眼动交互的初始化流程，提升交互流畅性"
                },
                {
                  "title": "PAPER607 | InterFACE: Establishing a Facial Action Unit Input Vocabulary for Hands-Free Extended Reality Interactions",
                  "authors": "Graham Wilson, Jamie McCready, Euan Freeman, Florian Mathis, Harvey Russell, Mark McGill",
                  "summary": "建立基于面部动作单元的无手VR交互词汇表，覆盖游戏、网页浏览等场景"
                },
                {
                  "title": "PAPER1125 | Estimating Detection Thresholds of Being Looked at in Virtual Reality for Avatar Redirection",
                  "authors": "Ephraim Schott, Irene López García, Lauren August Semple, Bernd Froehlich",
                  "summary": "估算VR中“被注视”的检测阈值，优化虚拟化身的重定向设计，提升社交交互的真实性"
                }
              ]
            },
            {
              "title": "（三）触觉与沉浸感增强",
              "papers": [
                {
                  "title": "PAPER494 | Haptic Biosignals Affect Proxemics Toward Virtual Reality Agents",
                  "authors": "Simone Ooms, Minha Lee, Ekaterina R. Stepanova, Pablo Cesar, Abdallah El Ali",
                  "summary": "研究触觉生物信号对VR代理近距离交互（Proxemics）的影响，为VR社交场景设计提供依据"
                },
                {
                  "title": "PAPER497 | Real-time Semantic Full-Body Haptic Feedback Converted from Sound for Virtual Reality Gameplay",
                  "authors": "Gyeore Yun, Seungmoon Choi",
                  "summary": "实现从声音到全身语义触觉反馈的实时转换，提升VR游戏的沉浸感与交互丰富度"
                },
                {
                  "title": "PAPER610 | Reel Feel: Rich Haptic XR Experiences Using an Active, Worn, Multi-String Device",
                  "authors": "Nathan DeVrio, Chris Harrison",
                  "summary": "设计可穿戴多弦触觉设备，为VR提供丰富的触觉反馈，适配多种交互场景"
                },
                {
                  "title": "PAPER809 | DobbyEar: Inducing Body Illusion of Ear Deformation with Haptic Retargeting",
                  "authors": "Han Shi, Seungwoo Je",
                  "summary": "通过触觉重定向诱导耳朵变形的身体错觉，拓展VR多感官交互维度"
                },
                {
                  "title": "PAPER813 | iGripper: A Semi-Active Handheld Haptic VR Controller Based on Variable Stiffness Mechanism",
                  "authors": "Ke Shi, Tongshu Chen, Yichen Xiang, Ye Li, Lifeng Zhu, Aiguo Song",
                  "summary": "设计基于变刚度机制的半主动手持触觉VR控制器，增强虚拟抓取的触觉反馈体验"
                },
                {
                  "title": "PAPER1134 | Motion-Coupled Asymmetric Vibration for Pseudo Force Rendering in Virtual Reality",
                  "authors": "Nihar Sabnis, Maëlle Roche, Dennis Wittchen, Donald Degraen, Paul Strohmeier",
                  "summary": "提出运动耦合非对称振动技术，实现VR中的伪力渲染，提升力反馈的真实感"
                },
                {
                  "title": "PAPER1136 | Tendon Vibration for Creating Movement Illusions in Virtual Reality",
                  "authors": "Mantas Cibulskis, Difeng Yu, Erik Skjoldan Mortensen, Waseem Hassan, Mark Schram Christensen, Joanna Bergström",
                  "summary": "利用肌腱振动创造VR中的运动错觉，丰富虚拟运动交互的感知层次"
                }
              ]
            }
          ]
        },
        {
          "title": "二、VR 应用场景与实践",
          "description": "",
          "groups": [
            {
              "title": "（一）教育与培训",
              "papers": [
                {
                  "title": "PAPER140 | Integrating Virtual Reality Head-Mounted Displays into Higher Education Classrooms on a Large Scale",
                  "authors": "Ville Mäkelä, Cayley MacArthur, Jieun Lee, Daniel Harley",
                  "summary": "探索VR头显在大规模高等教育课堂的集成方案，包括教学资源设计、课堂管理与效果评估"
                },
                {
                  "title": "PAPER191 | VAction: A Lightweight and Integrated VR Training System for Authentic Film-Shooting Experience",
                  "authors": "Shaocong Wang, Che Qu, Minjing Yu, Chao Zhou, Yuntao Wang, Yu-Hui Wen, Yuanchun Shi, Yong-Jin Liu",
                  "summary": "设计轻量化VR影视拍摄训练系统，还原真实拍摄场景与操作流程，降低实训成本"
                },
                {
                  "title": "PAPER591 | Generative Role-Play Communication Training in Virtual Reality for Autistic Individuals",
                  "authors": "Ziming Li, Pinaki Prasanna Babar, Roshan L Peiris",
                  "summary": "基于生成式角色扮演的VR沟通训练系统，针对自闭症群体优化社交技能培训"
                },
                {
                  "title": "PAPER1127 | Origami Sensei: A Mixed Reality AI-Assistant",
                  "authors": "Qiyu Chen, Richa Mishra, Lia Sparingga Purnamasari, Dina EL-Zanfaly, Kris Kitani",
                  "summary": "开发混合现实AI辅助工具，支持VR中的折纸教学，优化技能学习类VR应用的辅助效果"
                }
              ]
            },
            {
              "title": "（二）社交与协作",
              "papers": [
                {
                  "title": "PAPER035 | \"Closer than Real\": How Social VR Platform Features Influence Friendship Dynamics",
                  "authors": "Misato Hide, Yuji Hatada, Hideaki Kuzuoka, Takuji Narumi",
                  "summary": "分析社交VR平台功能对友谊动态的影响，包括存在感设计、互动机制对关系建立的作用"
                },
                {
                  "title": "PAPER039 | Self-Disclosure in Social Virtual Reality: The Influence of Information Management Dynamics, Social Presence, and Privacy Concerns",
                  "authors": "James J. Cummings, Alexis Shore Ingber, Yihan Danny Jia",
                  "summary": "探索社交VR中的自我表露行为，揭示信息管理、社交存在感与隐私顾虑的关联机制"
                },
                {
                  "title": "PAPER040 | Understanding \"Mutes\" in Social Virtual Reality",
                  "authors": "Qijia Chen, Andrea Bellucci, Jie Cai, Matti Nelimarkka, Giulio Jacucci",
                  "summary": "研究社交VR中的“静音”行为，分析其对社交互动质量、群体参与度的影响"
                },
                {
                  "title": "PAPER315 | Exploring the Effects of Social VR Coupling Modes on Engagement and Task Performance for Older Adults",
                  "authors": "Thuan T Vo, Satabdi Das, Shamim Noroozi, Lakshay Dang, Jaisie Sin, Jennifer N Boger, Jennifer Jakobi, Khalad Hasan",
                  "summary": "研究社交VR耦合模式对老年人参与度与任务表现的影响，为面向老年群体的社交VR工具设计提供依据"
                },
                {
                  "title": "PAPER459 | \"Grab the Chat and Stick It to My Wall\": Understanding How Social VR Streamers Bridge Immersive VR Experiences with Streaming Audiences Outside VR",
                  "authors": "Yang Hu, Guo Freeman, Ruchi Panchanadikar",
                  "summary": "解析社交VR主播连接VR沉浸体验与外部观众的交互策略，优化跨场景社交联动设计"
                },
                {
                  "title": "PAPER1124 | Breaking the Familiarity Bias: Employing Virtual Reality Environments to Enhance Team Formation and Inclusion",
                  "authors": "Mariana Fernandez-Espinosa, Kara Clouse, Dylan Sellars, Danny Tong, Michael Bsales, Sophonie Alcindor, Timothy D Hubbard, Michael Villano, Diego Gómez-Zará",
                  "summary": "利用VR环境打破熟悉度偏见，增强团队组建与包容性，优化VR团队协作场景设计"
                },
                {
                  "title": "PAPER1130 | TogetherReflect: Supporting Emotional Expression in Couples Through a Collaborative Virtual Reality Experience",
                  "authors": "Nadine Wagener, Daniel Christian Albensoeder, Leon Reicherts, Paweł W. Woźniak, Yvonne Rogers, Jasmin Niess",
                  "summary": "设计情侣协同VR体验，支持情感表达与反思，拓展VR在亲密关系互动中的应用"
                },
                {
                  "title": "PAPER1238 | Democratic Moderation: Exploring the Use and Perception of Votekicking in Social Virtual Reality",
                  "authors": "Qijia Chen, Qunfang Wu, Giulio Jacucci",
                  "summary": "探索社交VR中的投票踢人机制的使用与感知，为虚拟社交环境的治理提供设计参考"
                }
              ]
            },
            {
              "title": "（三）健康与医疗",
              "papers": [
                {
                  "title": "PAPER700 | Exploring the Remapping Impact of Spatial Head-hand Relations in Immersive Telesurgery",
                  "authors": "Tianren Luo, Ke Zhou, Pengxiang Wang, Shuting Chang, Gaozhang Chen, Hechuan Zhang, Xiaohui Tan, Qi Wang, Teng Han, Feng Tian",
                  "summary": "探索沉浸式远程手术中头部-手部空间关系重映射的影响，优化VR手术操作的精准性与安全性"
                },
                {
                  "title": "PAPER716 | Social Simulation for Everyday Self-Care: Design Insights from Leveraging VR, AR, and LLMs for Practicing Stress Relief",
                  "authors": "Anna Fang, Hriday Chhabria, Alekhya Maram, Haiyi Zhu",
                  "summary": "结合VR、AR与LLM的社交模拟系统，用于日常压力缓解训练，提升自我关怀能力"
                }
              ]
            },
            {
              "title": "（四）创意与娱乐",
              "papers": [
                {
                  "title": "PAPER144 | CreepyCoCreator? Investigating AI Representation Modes for 3D Object Co-Creation in Virtual Reality",
                  "authors": "Julian Rasch, Julia Töws, Teresa Hirzle, Florian Müller, Martin Schmitz",
                  "summary": "研究VR中3D物体协同创作的AI表征模式，平衡人机协作的创意性与可控性"
                },
                {
                  "title": "PAPER193 | \"You'll Be Alice Adventuring in Wonderland!\" Processes, Challenges, and Opportunities of Creating Animated Virtual Reality Stories",
                  "authors": "Lin-Ping Yuan, Feilin Han, Liwenhan Xie, Junjie Zhang, Jian Zhao, Huamin Qu",
                  "summary": "分析VR动画故事创作的流程、挑战与机遇，包括叙事设计、交互逻辑与用户体验优化"
                },
                {
                  "title": "PAPER332 | TravelGalleria: Supporting Remembrance and Reflection of Travel Experiences through Digital Storytelling in Virtual Reality",
                  "authors": "Michael Yin, Robert Xiao",
                  "summary": "设计VR旅行记忆数字叙事系统，通过沉浸式体验支持用户回忆与反思旅行经历"
                },
                {
                  "title": "PAPER807 | A Placebo Concert: The Placebo Effect for Visualization of Physiological Audience Data during Experience Recreation in Virtual Reality",
                  "authors": "Xiaru Meng, Yulan Ju, Christopher Changmok Kim, Yan He, Giulia Barbareschi, Kouta Minamizawa, Kai Kunze, Matthias Hoppe",
                  "summary": "研究VR体验复刻中，生理观众数据可视化带来的安慰剂效应，为沉浸式演出类VR应用提供设计参考"
                },
                {
                  "title": "PAPER1228 | Long-Term Effects of User Expertise and Application Design on Collision Anxiety in VR Games",
                  "authors": "Patrizia Ring, Maic Masuch",
                  "summary": "研究用户熟练度与应用设计对VR游戏中碰撞焦虑的长期影响，为VR游戏交互设计提供优化方向"
                }
              ]
            },
            {
              "title": "（五）文化传承与特殊场景落地",
              "papers": [
                {
                  "title": "PAPER1126 | Facilitating Daily Practice in Intangible Cultural Heritage through Virtual Reality: A Case Study of Traditional Chinese Flower Arrangement",
                  "authors": "Yingna Wang, Qingqin Liu, Xiaoying Wei, Mingming Fan",
                  "summary": "以中国传统插花艺术为例，探索VR在非物质文化遗产日常练习中的应用，助力文化传承"
                },
                {
                  "title": "PAPER1128 | RemoteChess: Enhancing Older Adults' Social Connectedness via Designing a Virtual Reality Chinese Chess (Xiangqi) Community",
                  "authors": "Qianjie Wei, Xiaoying Wei, Yiqi Liang, Fan Lin, Nuonan Si, Mingming Fan",
                  "summary": "设计VR中国象棋社区，提升老年人的社交连接，探索VR在老年群体社交中的应用价值"
                }
              ]
            }
          ]
        },
        {
          "title": "三、VR 用户体验与适配优化",
          "description": "",
          "groups": [
            {
              "title": "（一）特殊群体适配",
              "papers": [
                {
                  "title": "PAPER294 | Enhancing Tactile Learning: A Co-Designed System for Supporting Speech Interaction with Multi-Part 3D Printed Models by Students who are Blind",
                  "authors": "Ruth Galan Nagassa, Andre Ky Pham, Matthew Butler, Leona Holloway, Kalin Stefanov, Skye de Vent, Kim Marriott",
                  "summary": "联合设计支持盲生语音交互的多部件3D打印模型与VR结合系统，增强触觉学习体验"
                },
                {
                  "title": "PAPER367 | \"It Brought the Model to Life\": Exploring the Embodiment of Multimodal I3Ms for People who are Blind or have Low Vision",
                  "authors": "Samuel Reinders, Matthew Butler, Kim Marriott",
                  "summary": "探索多模态交互模型（I3Ms）在视障群体VR体验中的具身认知效果，优化可达性设计"
                },
                {
                  "title": "PAPER560 | Inclusive Avatar Guidelines for People with Disabilities: Supporting Disability Representation in Social Virtual Reality",
                  "authors": "Kexin Zhang, Edward Glenn Scott Spencer, Abijith Manikandan, Andric Li, Ang Li, Yaxing Yao, Yuhang Zhao",
                  "summary": "制定残疾人社交VR化身设计指南，支持残疾表征的真实性与包容性"
                },
                {
                  "title": "PAPER812 | Virtual Worlds Beyond Sight: Designing and Evaluating an Audio-Haptic System for Non-Visual VR Exploration",
                  "authors": "Aayush Shrestha, Joseph Malloch",
                  "summary": "设计面向非视觉用户的音频-触觉VR探索系统，拓展VR对视觉障碍人群的适用性"
                },
                {
                  "title": "PAPER1244 | \"I can run at night!\": Using Augmented Reality to Support Nighttime Guided Running for Low-vision Runners",
                  "authors": "Yuki Abe, Keisuke Matsushima, Kotaro Hara, Daisuke Sakamoto, Tetsuo Ono",
                  "summary": "结合AR/VR技术为低视力跑步者提供夜间引导，拓展VR在特殊人群运动场景的应用"
                },
                {
                  "title": "PAPER1246 | Designing and Evaluating a VR Boxing Experience with Blind People",
                  "authors": "Diogo Furtado, Renato Alexandre Ribeiro, Manuel Piçarra, Letícia Seixas Pereira, Carlos Duarte, André Rodrigues, João Guerreiro",
                  "summary": "为盲人设计并评估VR拳击体验，探索VR在视觉障碍人群娱乐场景中的可访问性设计"
                }
              ]
            },
            {
              "title": "（二）体验评估与优化",
              "papers": [
                {
                  "title": "PAPER368 | Being in Virtual Worlds: How Interaction, Environment, and Touch Shape Embodiment in Immersive Experiences",
                  "authors": "John Desnoyers-Stewart, Alissa N. Antle, Bernhard E. Riecke",
                  "summary": "分析交互方式、环境设计与触觉反馈对VR具身体验的塑造作用，建立体验评估框架"
                },
                {
                  "title": "PAPER370 | Owning the (Virtual) World: A Systematic Review of Psychological Ownership of Interactive Virtual Objects and Environments",
                  "authors": "Jana Krauss, Carolin Wienrich",
                  "summary": "系统综述用户在VR中对虚拟物体与环境的所有权感，为理解沉浸感和用户粘性提供理论框架"
                },
                {
                  "title": "PAPER463 | RetroSketch: A Retrospective Method for Measuring Emotions and Presence in Virtual Reality",
                  "authors": "Dominic Potts, Miloni Gada, Aastha Gupta, Kavya Goel, Klaus Philipp Krzok, Genevieve Pate, Joseph Hartley, Mark Weston-Arnold, Jakob Aylott, Christopher Clarke, Crescent Jicol, Christof Lutteroth",
                  "summary": "提出回顾性VR情绪与存在感测量方法（RetroSketch），适用于大规模用户体验评估"
                },
                {
                  "title": "PAPER606 | How your Physical Environment Affects Spatial Presence in Virtual Reality",
                  "authors": "Thomas van Gemert, Jarrod Knibbe, Eduardo Velloso",
                  "summary": "研究物理环境对VR空间存在感的影响，为VR使用场景布置提供优化建议"
                },
                {
                  "title": "PAPER1150 | The Fidelity-based Presence Scale (FPS): Modeling the Effects of Fidelity on Sense of Presence",
                  "authors": "Jacob Belga, Richard Skarbez, Yahya Hmaiti, Eric J Chen, Ryan P. McMahan, Joseph J. LaViola",
                  "summary": "构建基于真实感的存在感量表（FPS），量化真实感对VR沉浸感的影响机制"
                },
                {
                  "title": "PAPER1155 | HeadTurner: Enhancing Viewing Range and Comfort of using Virtual and Mixed-Reality Headsets while Lying Down via Assisted Shoulder and Head Actuation",
                  "authors": "En-Huei Wu, Po-Yun Cheng, Che-Wei Hsu, Cheng Hsin Han, Pei Chen Lee, Chia-An Fan, Yu Chia Kuo, Kai-Jing Hu, Yu Chen, Mike Y. Chen",
                  "summary": "设计辅助肩颈驱动装置，优化躺姿状态下VR/XR头显的可视范围与舒适度"
                }
              ]
            },
            {
              "title": "（三）可访问性研究",
              "papers": [
                {
                  "title": "PAPER808 | A Qualitative Investigation of User Transitions and Frictions in Cross-Reality Applications",
                  "authors": "Julius von Willich, Frank Nelles, Wen-Jie Tseng, Jan Gugenheimer, Sebastian Günther, Max Mühlhäuser",
                  "summary": "定性研究跨现实（XR）应用中的用户过渡与摩擦问题，为VR与其他现实场景的衔接设计提供参考"
                },
                {
                  "title": "PAPER1245 | Asleep at the Virtual Wheel: The Increasing Inaccessibility of Virtual Reality Applications",
                  "authors": "Craig Anderton, Chris Creed, Sayan Sarcar, Arthur Theil",
                  "summary": "分析当前VR应用的可访问性缺失问题，为VR技术的普惠性优化提供批判与建议"
                },
                {
                  "title": "PAPER1249 | Understanding VR Accessibility Practices of VR Professionals",
                  "authors": "Yi Wang, Xiao Liu, Chetan Arora, John Grundy, Thuong Hoang",
                  "summary": "调研VR从业者的可访问性设计实践，总结行业现状与改进方向，推动无障碍VR技术落地"
                }
              ]
            }
          ]
        },
        {
          "title": "四、VR 技术融合与创新",
          "description": "",
          "groups": [
            {
              "title": "未分类",
              "papers": [
                {
                  "title": "PAPER141 | MaRginalia: Enabling In-person Lecture Capturing and Note-taking Through Mixed Reality",
                  "authors": "Leping Qiu, Erin Seongyoon Kim, Sangho Suh, Ludwig Sidenmark, Tovi Grossman",
                  "summary": "结合混合现实（MR）技术的课堂录制与笔记系统，衔接VR沉浸式复习与现实课堂学习"
                },
                {
                  "title": "PAPER371 | RemapVR: An Immersive Authoring Tool for Rapid Prototyping of Remapped Interaction in VR",
                  "authors": "Tianren Luo, Tong Wu, Chaoyong Jiang, Xinran Duan, Jiafu Lv, Nianlong Li, Yachun Fan, Teng Han, Feng Tian",
                  "summary": "设计VR重映射交互快速原型开发工具，降低开发者对特殊交互逻辑的实现成本"
                },
                {
                  "title": "PAPER553 | Sketch2Terrain: AI-Driven Real-Time Terrain Sketch Mapping in Augmented Reality",
                  "authors": "Tianyi Xiao, Yizi Chen, Sailin Zhong, Peter Kiefer, Jakub Krukar, Kevin Gonyop Kim, Lorenz Hurni, Angela Schwering, Martin Raubal",
                  "summary": "AI驱动的实时地形草图映射技术，支持AR/VR中快速生成虚拟地形，适配游戏、规划等场景"
                },
                {
                  "title": "PAPER701 | Investigating the Benefits of Physical Models for Anatomical Education in Augmented Reality",
                  "authors": "Matthew Wragg, Raj Sengupta, Dario Cazzola, Jason Alexander",
                  "summary": "研究物理模型与AR结合在解剖学教育中的优势，为VR/AR医学教育工具设计提供参考"
                },
                {
                  "title": "PAPER847 | Exploring Empty Spaces: Human-in-the-Loop Data Augmentation",
                  "authors": "Catherine Yeh, Donghao Ren, Yannick Assogba, Dominik Moritz, Fred Hohman",
                  "summary": "提出人机协同数据增强方法，作为通用技术可优化VR场景中空白空间的内容生成与交互体验"
                },
                {
                  "title": "PAPER1156 | Juggling Extra Limbs: Identifying Control Strategies for Supernumerary Multi-Arms in Virtual Reality",
                  "authors": "Hongyu Zhou, Tom Kip, Yihao Dong, Andrea Bianchi, Zhanna Sarsenbayeva, Anusha Withana",
                  "summary": "探索VR中额外多手臂的控制策略，为多肢体虚拟交互提供设计依据"
                }
              ]
            }
          ]
        }
      ],
      "countLabel": "共 61 篇"
    },
    "chi2024": {
      "id": "chi-2024",
      "label": "CHI 2024",
      "title": "CHI 2024 虚拟现实（VR）相关论文整理",
      "curator": "助教 Yinuo Li 整理",
      "description": "按交互、医疗、教育、娱乐、可访问性与系统设计等主题整理的 VR 论文阅读参考目录。",
      "sections": [
        {
          "title": "一、VR 交互技术与设备创新",
          "description": "聚焦VR交互方式优化、设备适配与感知增强，提升操作自然性与沉浸感。",
          "groups": [
            {
              "title": "未分类",
              "papers": [
                {
                  "title": "PAPER372 | FocusFlow: 3D Gaze-Depth Interaction in Virtual Reality Leveraging Active Visual Depth Manipulation",
                  "authors": "Chenyang Zhang, Tiansu Chen, Eric Shaffer, Elahe Soltanaghai (UIUC)",
                  "summary": "提出基于视线深度感知的VR 3D交互方案，通过主动视觉深度操纵实现精准目标选择，降低复杂场景下的操作成本；融合视线与深度信息的交互方式，在复杂场景中比传统手柄操作效率提升30%以上"
                },
                {
                  "title": "PAPER403 | EchoWrist: Continuous Hand Pose Tracking and Hand-Object Interaction Recognition Using Low-Power Active Acoustic Sensing On a Wristband",
                  "authors": "Chi-Jung Lee, Ruidong Zhang, Devansh Agarwal, Tianhong Catherine Yu, Vipin Gunda, Oliver Lopez, James Kim, Sicheng Yin, Boao Dong, Ke Li, Mose Sakashita, Francois Guimbretiere, Cheng Zhang",
                  "summary": "设计腕带式声学传感器设备，实现VR中手部姿态与物体交互的连续追踪，无需依赖外部摄像头，支持移动VR场景；低功耗设计适配长时间VR使用，手部动作识别准确率达92%，适用于轻量化VR设备"
                },
                {
                  "title": "PAPER414 | vARitouch: Back of the Finger Device for Adding Variable Compliance to Rigid Objects",
                  "authors": "Gabriela Vega, Valentin Martinez-Missir, Dennis Wittchen, Nihar Sabnis, Audrey Girouard, Karen Anne Cochrane, Paul Strohmeier",
                  "summary": "开发VR触觉反馈配件，通过调节手指背部接触刚度，模拟不同物体的物理质感，增强VR触觉沉浸感；适用于VR设计、维修培训等需要精细触觉感知的场景"
                },
                {
                  "title": "PAPER423 | InflatableBots: Inflatable Shape-Changing Mobile Robots for Large-Scale Encountered-Type Haptics in VR",
                  "authors": "Ryota Gomi, Ryo Suzuki, Kazuki Takashima, Kazuyuki Fujita, Yoshifumi Kitamura",
                  "summary": "设计大型充气式移动机器人，为VR提供“遭遇式触觉反馈”，支持多人VR协作场景中的物理交互；通过充气变形实现动态触觉反馈，适配VR社交、团队训练等场景"
                },
                {
                  "title": "PAPER753 | STMG: A Machine Learning Microgesture Recognition System for Supporting Thumb-Based VR/AR Input",
                  "authors": "Kenrick Kin, Chengde Wan, Ken Koh, Andrei Marin, Necati Cihan Camgöz, Yubo Zhang, Yujun Cai, Fedor Kovalev, Moshe Ben-Zacharia, Shannon Hoople, Marcos Nunes-Ueno, Mariel Sanchez-Rodriguez, Ayush Bhargava, Robert Wang, Eric Sauser, Shugao Ma",
                  "summary": "提出基于机器学习的拇指微手势识别系统，支持VR/AR中的精细化单手输入，适用于控制器受限场景"
                },
                {
                  "title": "PAPER940 | Exploration of Foot-based Text Entry Techniques for Virtual Reality Environments",
                  "authors": "Tingjie Wan, Liangyuting Zhang, Hongyu Yang, Pourang Irani, Lingyun Yu, Hai-Ning Liang",
                  "summary": "探索VR环境中的足部文本输入技术，设计适用于沉浸式场景的无手输入方案，解决VR中文字输入效率低的问题"
                }
              ]
            }
          ]
        },
        {
          "title": "二、VR 在医疗与康复中的应用",
          "description": "探索VR在康复训练、医疗培训、疾病辅助治疗中的实践，聚焦有效性与安全性。",
          "groups": [
            {
              "title": "未分类",
              "papers": [
                {
                  "title": "PAPER242 | To Reach the Unreachable: Exploring the Potential of VR Hand Redirection for Upper Limb Rehabilitation",
                  "authors": "Peixuan Xiong, Yukai Zhang, Nandi Zhang, Shihan Fu, Xin Li, Yadan Zheng, Jinni Zhou, Xiquan Hu, Mingming Fan",
                  "summary": "提出VR手部重定向技术，通过视觉-动作错位引导，辅助上肢功能障碍患者进行康复训练；在脑卒中患者康复试验中，患者训练依从性提升40%，运动功能恢复速度加快25%"
                },
                {
                  "title": "PAPER462 | LightSword: A Customized Virtual Reality Exergame for Long-Term Cognitive Inhibition Training in Older Adults",
                  "authors": "Qiuxin Du, Zhen Song, Haiyan Jiang, Xiaoying Wei, Dongdong Weng, Mingming Fan",
                  "summary": "定制化VR剑术游戏，针对老年人认知抑制能力衰退问题，通过沉浸式训练延缓认知老化；长期使用（12周）可显著提升老年人注意力控制能力，且用户留存率达78%（高于传统康复工具）"
                },
                {
                  "title": "PAPER458 | Facilitating Virtual Reality Integration in Medical Education: A Case Study of Childbirth Delivery Training",
                  "authors": "Chang Liu, Felicia Fang-Yi Tan, Shengdong Zhao, Abhiram Kanneganti, Gosavi Arundhati Tushar, Eng Tat Khoo",
                  "summary": "开发产科分娩VR培训系统，还原真实分娩场景，辅助医护人员应急处理能力提升；与传统模拟培训相比，医护人员应急反应时间缩短30%，操作准确率提升28%"
                },
                {
                  "title": "PAPER538 | Mindfulness-based Embodied Tangible Interactions for Stroke Rehabilitation at Home",
                  "authors": "Preetham Madapura Nagaraj, Wen Mo, Catherine Holloway (UCL)",
                  "summary": "结合正念疗法与VR触觉交互，设计居家脑卒中康复系统，支持患者自主训练；通过触觉反馈与呼吸引导结合，降低患者居家康复的心理压力，提升训练持续性"
                }
              ]
            }
          ]
        },
        {
          "title": "三、VR 教育与学习场景",
          "description": "聚焦VR在知识传授、技能培训中的应用，优化学习体验与效果。",
          "groups": [
            {
              "title": "未分类",
              "papers": [
                {
                  "title": "PAPER65 | Examining the Use of VR as a Study Aid for University Students with ADHD",
                  "authors": "Isabelle Cuber, Juliana G Goncalves De Souza, Irene Jacobs, Caroline Lowman, David Shepherd, Thomas Fritz, Joshua M Langberg",
                  "summary": "探索VR作为注意力缺陷多动障碍（ADHD）学生学习辅助工具的可行性，通过沉浸式场景提升专注力；VR学习场景可减少ADHD学生的注意力分散，学习效率比传统屏幕学习提升22%，但需控制单次使用时长（建议≤25分钟）"
                },
                {
                  "title": "PAPER659 | ClassMeta: Designing Interactive Virtual Classmate to Promote VR Classroom Participation",
                  "authors": "Ziyi Liu, Zhengzhe Zhu, Lijun Zhu, Enze Jiang, Xiyun Hu, Kylie A Peppler, Karthik Ramani",
                  "summary": "设计交互式虚拟同学，为VR课堂提供社交化学习环境，促进学生主动参与讨论；虚拟同学的表情反馈与互动响应，使VR课堂参与度提升50%，尤其适配远程VR教学场景"
                },
                {
                  "title": "PAPER461 | Surge: Segmentation-enabled Semantic Search and Creation of Visual Question and Feedback to Support Video-Based Surgery Learning",
                  "authors": "Jingying Wang, Haoran Tang, Taylor Kantor, Tandis Soltani, Vitaliy Popov, Xu Wang",
                  "summary": "开发基于VR视频的外科手术培训系统，支持手术步骤语义检索与交互式反馈，辅助新手医生学习；通过AI分割手术关键步骤，允许用户反复观看重点操作，手术操作熟练度提升35%"
                },
                {
                  "title": "PAPER721 | Watch This! Observational Learning in VR Promotes Better Far Transfer than Active Learning for a Fine Psychomotor Task",
                  "authors": "Isabel Sophie Fitton, Elizabeth Dark, Manoela Milena Oliveira da Silva, Jeremy Dalton, Michael J Proulx, Christopher Clarke, Christof Lutteroth",
                  "summary": "实证表明，VR中的“观察式学习”在精细动作技能（如精密操作）的迁移应用中，效果优于主动练习，为VR技能培训设计提供新范式"
                }
              ]
            }
          ]
        },
        {
          "title": "四、VR 娱乐与社交体验",
          "description": "优化VR游戏、叙事、社交场景的用户体验，解决沉浸感、疲劳感、社交自然性问题。",
          "groups": [
            {
              "title": "未分类",
              "papers": [
                {
                  "title": "PAPER424 | VeeR: Exploring the Feasibility of Deliberately Designing VR Motion that Diverges from Mundane, Everyday Physical Motion to Create More Entertaining VR Experiences",
                  "authors": "Pin-Chun Lu, Che-Wei Wang, Yu Lun Hsu, Alvaro Lopez, Ching-Yi Tsai, Chiao-Ju Chang, Wei Tian Mireille Tan, Li-Chun Lu, Mike Y. Chen",
                  "summary": "突破VR运动设计的“日常物理限制”，通过非自然运动规则设计，增强VR游戏的趣味性与沉浸感；非日常运动设计使VR游戏的用户愉悦度提升47%，且未显著增加眩晕感"
                },
                {
                  "title": "PAPER100 | ShareYourReality: Investigating Haptic Feedback and Agency in Virtual Avatar Co-embodiment",
                  "authors": "Karthikeya Puttur Venkatraj, Wo Meijer, Monica Perusquia-Hernandez, Gijs Huisman, Abdallah El Ali",
                  "summary": "研究VR社交中虚拟化身的触觉反馈设计，探索如何通过触觉增强“共同在场”感；同步触觉反馈（如握手、触碰）使VR社交的“社交存在感”提升60%，减少远程社交的疏离感"
                },
                {
                  "title": "PAPER598 | Navigating the Virtual Gaze: Social Anxiety‘s Role in VR Proxemics",
                  "authors": "Beatriz Mello, Robin Welsch, Marissa Verbokkem, Pascal Knierim, Martin Dechant",
                  "summary": "探索社交焦虑用户在VR中的空间距离感知（Proxemics），为VR社交平台设计提供适配方案；针对社交焦虑用户，VR社交应提供可调节的“社交距离阈值”，降低用户心理压力"
                },
                {
                  "title": "PAPER797 | “I’d rather drink in VRChat”: Understanding Drinking in Social Virtual Reality",
                  "authors": "Qijia Chen, Andrea Bellucci, Giulio Jacucci (University of Helsinki, UC3M)",
                  "summary": "通过实证研究揭示VR社交中“虚拟饮酒”的社交意义与行为模式，为虚拟社交场景设计提供洞察"
                }
              ]
            }
          ]
        },
        {
          "title": "五、特殊群体与VR适配",
          "description": "聚焦老年人、残障人士等特殊群体的VR使用需求，解决可达性、安全性与实用性问题。",
          "groups": [
            {
              "title": "未分类",
              "papers": [
                {
                  "title": "PAPER24 | Toward Making Virtual Reality (VR) More Inclusive for Older Adults: Investigating Aging Effect on Target Selection and Manipulation Tasks in VR",
                  "authors": "Zhiqing Wu, Duotun Wang, Shumeng Zhang, Yuru Huang, Zeyu Wang, Mingming Fan",
                  "summary": "研究老年人在VR目标选择与操作中的认知与运动障碍，提出大图标、慢响应、容错设计等适配原则；适配设计使老年人VR操作成功率从58%提升至89%，眩晕发生率降低40%"
                },
                {
                  "title": "PAPER60 | Designing Upper-Body Gesture Interaction with and for People with Spinal Muscular Atrophy in VR",
                  "authors": "Jingze Tian, Yingna Wang, Keye Yu, Liyi Xu, Junan Xie, Franklin Mingzhe Li, Yafeng Niu, Mingming Fan",
                  "summary": "为脊髓性肌萎缩症患者设计VR上肢手势交互方案，适配肌肉力量有限的用户，支持VR娱乐与康复训练；简化手势操作逻辑，通过微小动作触发VR功能，患者操作满意度达85%"
                },
                {
                  "title": "PAPER39 | FetchAid: Making Parcel Lockers More Accessible to Blind and Low Vision People With Deep-learning Enhanced Touchscreen Guidance, Error-Recovery Mechanism, and AR-based Search Support",
                  "authors": "Zhitong Guan, Zeyu Xiong, Mingming Fan (HKUST, University of Texas at Austin)",
                  "summary": "结合VR与AR技术，为视障用户设计快递柜导航系统，通过语音引导与触觉反馈辅助操作；VR场景预演+实时AR引导，视障用户快递柜操作完成时间缩短50%，错误率降低62%"
                },
                {
                  "title": "PAPER683 | Investigating Virtual Reality Locomotion Techniques with Blind People",
                  "authors": "Renato Alexandre Ribeiro, Inês Gonçalves, Manuel Piçarra, Letícia Seixas Pereira, Carlos Duarte, André Rodrigues, João Guerreiro",
                  "summary": "首次系统探索盲人用户的VR移动技术，设计基于空间音频、触觉反馈的导航方案，填补特殊群体VR locomotion研究空白"
                }
              ]
            }
          ]
        },
        {
          "title": "六、VR 关键问题解决（眩晕、感知、评估）",
          "description": "针对VR使用中的眩晕、空间感知偏差、体验评估等核心问题，提供技术方案与评估工具。",
          "groups": [
            {
              "title": "未分类",
              "papers": [
                {
                  "title": "PAPER632 | Sicknificant Steps: A Systematic Review and Meta-analysis of VR Sickness in Walking-based Locomotion for Virtual Reality",
                  "authors": "Thomas van Gemert, Niels Christian Nilsson, Teresa Hirzle, Joanna Bergström (University of Copenhagen, Aalborg University)",
                  "summary": "通过元分析总结VR步行移动方式（如平移、teleport）对眩晕的影响，提出低眩晕设计原则；teleport移动方式的眩晕发生率比平移低60%，结合视线引导可进一步降低眩晕感"
                },
                {
                  "title": "PAPER605 | Development and Validation of the Collision Anxiety Questionnaire for VR Applications",
                  "authors": "Patrizia Ring, Julius Tietenberg, Katharina Emmerich, Maic Masuch (University of Duisburg-Essen)",
                  "summary": "开发VR碰撞焦虑评估量表，用于量化用户在VR中对“碰撞”的心理恐惧，指导VR场景设计；量表可预测用户在VR冒险类游戏中的留存率，为场景难度设计提供依据"
                },
                {
                  "title": "PAPER543 | A Survey On Measuring Presence in Mixed Reality",
                  "authors": "Tanh Quang Tran, Tobias Langlotz, Holger Regenbrecht (University of Otago)",
                  "summary": "系统梳理VR/混合现实（MR）中“在场感”的评估方法，提出多维度评估框架（感官沉浸、认知投入、情感共鸣）；为VR研究提供标准化的在场感评估工具，统一研究衡量标准"
                },
                {
                  "title": "PAPER795 | The Effects of False but Stable Heart Rate Feedback on Cybersecurity and User Experience in Virtual Reality",
                  "authors": "Dongyun Joo, Hanseob Kim, Gerard Jounghyun Kim (Korea University)",
                  "summary": "探索VR中心率反馈（即使为虚假但稳定的反馈）对晕动症和用户体验的影响，为VR心理健康工具的生理反馈设计提供参考"
                }
              ]
            }
          ]
        },
        {
          "title": "七、VR 移动与导航（Locomotion）",
          "description": "聚焦 VR 环境中的移动方式优化、空间感知与导航效率提升，解决有限物理空间与虚拟大范围移动的矛盾。",
          "groups": [
            {
              "title": "未分类",
              "papers": [
                {
                  "title": "PAPER681 | Doorways Do Not Always Cause Forgetting: Studying the Effect of Locomotion Technique and Doorway Visualization in Virtual Reality",
                  "authors": "Thomas van Gemert, Sean Chew, Yiannis Kalaitzoglou, Joanna Bergström (University of Copenhagen)",
                  "summary": "挑战“门框导致VR记忆遗忘”的传统认知，分析不同移动技术（如平滑移动、瞬移）和门框可视化设计对用户空间记忆的影响，为VR场景布局设计提供依据"
                },
                {
                  "title": "PAPER682 | Exploring Experience Gaps Between Active and Passive Users During Multi-user Locomotion in VR",
                  "authors": "Tianren Luo, Fenglin Lu, Jiafu Lv, Xiaohui Tan, Chang Liu, Fangzhi Yan, Jin Huang, Chun Yu, Teng Han, Feng Tian",
                  "summary": "针对多用户VR场景，对比主动移动用户与被动跟随用户的体验差异，提出优化多用户协作移动的交互设计原则"
                },
                {
                  "title": "PAPER684 | Stacked Retargeting: Combining Redirected Walking and Hand Redirection to Expand Haptic Retargeting's Coverage",
                  "authors": "Aldrich Clarence, Jarrod Knibbe, Maxime Cordeil, Michael Wybrow (Monash University, University of Queensland)",
                  "summary": "提出“堆叠重定向”技术，融合 Redirected Walking（行走重定向）与 Hand Redirection（手部重定向），在有限物理空间中扩展VR触觉交互范围"
                },
                {
                  "title": "PAPER685 | The Effect of Spatial Audio on Curvature Gains in VR Redirected Walking",
                  "authors": "Maarten Gerritse, Michael Rietzler, Christof Van Nimwegen, Julian Frommel (Utrecht University, Ulm University)",
                  "summary": "验证空间音频对VR行走重定向中“曲率增益”（用户可接受的路径弯曲程度）的影响，为音频-移动协同设计提供量化参考"
                },
                {
                  "title": "PAPER800 | Seated-WIP: Enabling Walking-in-Place Locomotion for Stationary Chairs in Confined Spaces",
                  "authors": "Liwei Chan, Tzu-Wei Mi, Zhung Hao Hsueh, Yi-Ci Huang, Ming Yun Hsu",
                  "summary": "针对狭小空间场景，设计基于座椅的“原地行走”VR移动方案，通过姿态识别实现无物理移动的虚拟导航"
                }
              ]
            }
          ]
        },
        {
          "title": "八、VR 感知与输入交互",
          "description": "探索 VR 中的多模态感知反馈、手势/姿态输入优化，提升交互自然性与沉浸感。",
          "groups": [
            {
              "title": "未分类",
              "papers": [
                {
                  "title": "PAPER750 | Beyond the Blink: Investigating Combined Saccadic & Blink-Suppressed Hand Redirection in Virtual Reality",
                  "authors": "André Zenner, Chiara Karr, Martin Feick, Oscar Ariza, Antonio Krüger",
                  "summary": "利用眼动信号（扫视、眨眼）优化手部重定向技术，减少VR交互中的感知冲突，提升手势操作的自然度"
                },
                {
                  "title": "PAPER751 | Big or Small, It‘s All in Your Head: Visuo-Haptic Illusion of Size-Change Using Finger-Repositioning",
                  "authors": "Myung Jin Kim, Eyal Ofek, Michel Pahud, Mike J Sinclair, Andrea Bianchi",
                  "summary": "设计基于手指定位的视触错觉交互，让用户在VR中感知虚拟物体的尺寸变化，无需实体道具支持"
                },
                {
                  "title": "PAPER407 | ArmDeformation: Inducing the Sensation of Arm Deformation in Virtual Reality Using Skin-Stretching",
                  "authors": "Yilong Lin, Peng Zhang, Eyal Ofek (SUSTech, Data Basket)",
                  "summary": "通过皮肤拉伸技术在VR中诱导用户产生手臂变形的感知错觉"
                }
              ]
            }
          ]
        },
        {
          "title": "九、VR 运动学习与技能训练",
          "description": "利用 VR 沉浸感优势，优化运动技能习得、动作训练效果，覆盖舞蹈、精细操作等场景。",
          "groups": [
            {
              "title": "未分类",
              "papers": [
                {
                  "title": "PAPER720 | WAVE: Anticipatory Movement Visualization for VR Dancing",
                  "authors": "Markus Laattala, Roosa Piitulainen, Nadia M. Ady, Monica Tamariz, Perttu Hämäläinen",
                  "summary": "设计舞蹈动作预判可视化系统，在VR舞蹈训练中提前提示后续动作，提升学习效率与节奏感"
                },
                {
                  "title": "PAPER724 | Metrics of Motor Learning for Analyzing Movement Mapping in Virtual Reality",
                  "authors": "Difeng Yu, Mantas Cibulskis, Erik Skjoldan Mortensen, Mark Schram Christensen, Joanna Bergström",
                  "summary": "提出VR运动学习的量化评估指标体系，用于分析虚拟-现实动作映射的准确性与学习效果"
                },
                {
                  "title": "PAPER725 | WieldingCanvas: Interactive Sketch Canvases for Freehand Drawing in VR",
                  "authors": "Xiaohui Tan, Zhenxuan He, Can Liu, Mingming Fan, Tianren Luo, Zitao Liu, Mi Tian, Teng Han, Feng Tian",
                  "summary": "设计VR自由手绘交互系统，支持沉浸式草图创作，优化3D空间中的绘画手感与精度控制"
                }
              ]
            }
          ]
        },
        {
          "title": "十、VR 心理健康与正念应用",
          "description": "结合 VR 沉浸感，开发压力缓解、呼吸训练、情绪调节等心理健康干预工具。",
          "groups": [
            {
              "title": "未分类",
              "papers": [
                {
                  "title": "PAPER691 | 'I Call Upon a Friend': Virtual Reality-Based Supports for Cognitive Reappraisal Identified through Co-designing with Adolescents",
                  "authors": "Alexandra Kitson, Alissa N. Antle, Sadhbh Kenny, Ashu Adhikari, Kenneth Karthik, Artun Cimensel, Melissa Chan",
                  "summary": "通过与青少年协同设计，开发VR认知重评支持系统，帮助青少年调节负面情绪，提供沉浸式情绪管理训练"
                },
                {
                  "title": "PAPER717 | Stairway to Heaven: A Gamified VR Journey for Breath Awareness",
                  "authors": "Nathan Miner, Amir Abdollahi, Caleb Myers, Mehmet Kosa, Hamid Ghaednia, Joseph H. Schwab, Casper Harteveld, Giovanni Maria Troiano",
                  "summary": "设计游戏化VR呼吸感知系统，通过沉浸式场景引导用户进行正念呼吸训练，辅助压力缓解与情绪调节"
                },
                {
                  "title": "PAPER1004 | Exploring an Extended Reality Floatation Tank Experience to Reduce the Fear of Being in Water",
                  "authors": "Maria F. Montoya, Hannah Qiao, Prasanth Sasikumar, Don Samitha Elvitigala, Sarah Jane Pell, Suranga Nanayakkara, Florian ‘Floyd’ Mueller",
                  "summary": "设计VR漂浮舱体验，用于缓解恐水症，通过渐进式沉浸暴露帮助用户克服恐惧"
                }
              ]
            }
          ]
        },
        {
          "title": "十一、VR 社交与协作",
          "description": "探索虚拟环境中的多人交互模式、协作效率与社交体验优化。",
          "groups": [
            {
              "title": "未分类",
              "papers": [
                {
                  "title": "PAPER794 | Socially Late, Virtually Present: The Effects of Transforming Asynchronous Social Interactions in Virtual Reality",
                  "authors": "Portia Wang, Mark R. Miller, Anna C.M. Queiroz, Jeremy N. Bailenson (Stanford University)",
                  "summary": "将异步社交交互（如留言、延迟回应）转化为VR中的沉浸式体验，提升远程社交的临场感"
                },
                {
                  "title": "PAPER919 | A Change of Scenery: Transformative Insights from Retrospective VR Embodied Perspective-Taking of Conflict With a Close Other",
                  "authors": "Seraphina Yong, Leo Cui, Evan Suma Rosenberg, Svetlana Yarosh (University of Minnesota)",
                  "summary": "设计VR回顾式共情系统，让用户以他人视角重历人际冲突场景，促进沟通理解与关系修复"
                }
              ]
            }
          ]
        },
        {
          "title": "十二、VR 系统设计与用户体验优化",
          "description": "关注 VR 核心技术优化、用户体验评估、跨场景适配等基础研究。",
          "groups": [
            {
              "title": "未分类",
              "papers": [
                {
                  "title": "PAPER110 | Virtual Body Swapping: A VR-Based Approach to Embodied Third-Person Self-Processing in Mind-Body Therapy",
                  "authors": "Nina Döllinger, David Mal, Sebastian Keppler, Erik Wolf, Mario Botsch, Johann Habakuk Israel, Marc Erich Latoschik, Carolin Wienrich",
                  "summary": "提出一种基于VR的虚拟身体交换方法，用于心身治疗中的第三人称自我处理，探索自我认知的新途径"
                },
                {
                  "title": "PAPER548 | The Impact of Avatar Completeness on Embodiment and the Detectability of Hand Redirection in VR",
                  "authors": "Martin Feick, André Zenner, Simon Seibert, Anthony Tang, Antonio Krüger",
                  "summary": "研究化身完整性对VR中身体拥有感与手部重定向可检测性的影响，为化身设计提供指导"
                },
                {
                  "title": "PAPER796 | Was it Real or Virtual? Confirming the Occurrence and Explaining Causes of Memory Source Confusion between Reality and Virtual Reality",
                  "authors": "Elise Bonnail, Julian Frommel, Eric Lecolinet, Samuel Huron, Jan Gugenheimer",
                  "summary": "实证验证“VR记忆源混淆”现象（用户混淆虚拟与现实经历），并分析其产生机制，为VR内容设计提供伦理与体验参考"
                },
                {
                  "title": "PAPER801 | SwitchSpace: Understanding Context-Aware Peeking Between VR and Desktop Interfaces",
                  "authors": "Johann Wentzel, Fraser Anderson, George Fitzmaurice, Tovi Grossman, Daniel Vogel",
                  "summary": "设计VR与桌面界面的上下文感知切换系统，支持用户在沉浸式VR与传统桌面工作流间无缝过渡"
                },
                {
                  "title": "PAPER952 | Just Undo It: Exploring Undo Mechanics in Multi-User Virtual Reality",
                  "authors": "Julian Rasch, Florian Perzl, Yannick Weiss, Florian Müller (LMU Munich)",
                  "summary": "探索多用户VR场景中的“撤销”交互机制，解决多人协作中的操作冲突与错误修正问题"
                },
                {
                  "title": "PAPER954 | Predicting the Noticeability of Dynamic Virtual Elements in Virtual Reality",
                  "authors": "Zhipeng Li, Yi Fei Cheng, Yukang Yan, David Lindlbauer (CMU, Tsinghua University)",
                  "summary": "提出VR动态虚拟元素的“可感知性预测模型”，帮助设计师优化虚拟场景中动态内容的呈现方式，提升信息传递效率"
                },
                {
                  "title": "PAPER630 | Effects of Device Environment and Information Layout on Spatial Memory and Performance in VR Selection Tasks",
                  "authors": "Kim Kargut, Carl Gutwin, Andy Cockburn (University of Saskatchewan, University of Canterbury)",
                  "summary": "研究设备环境与信息布局对VR选择任务中空间记忆与表现的影响"
                }
              ]
            }
          ]
        },
        {
          "title": "十三、VR 特殊场景适配",
          "description": "针对太空操作等特殊场景，开发定制化VR解决方案。",
          "groups": [
            {
              "title": "未分类",
              "papers": [
                {
                  "title": "PAPER718 | Designing for Human Operations on the Moon: Challenges and Opportunities of Navigational HUD Interfaces",
                  "authors": "Leonie Bensch, Tommy Nilsson, Jan Wulkop, Paul Demedeiros, Nicolas Daniel Herzberger, Michael Preutenborbeck, Andreas Gerndt, Frank Flemisch, Florian Dufresne, Georgia Albuquerque, Aidan Cowley",
                  "summary": "面向月球表面操作场景，设计VR导航HUD界面，解决低重力、复杂地形下的导航与操作支持问题"
                },
                {
                  "title": "PAPER783 | Kinetic Signatures: A Systematic Investigation of Movement-Based User Identification in Virtual Reality",
                  "authors": "Jonathan Liebers, Patrick Laskowski, Florian Rademaker, Leon Sabel, Jordan Hoppen, Uwe Gruenefeld, Stefan Schneegass",
                  "summary": "探索基于用户运动特征（如行走姿态、手势习惯）的VR身份识别技术，提升沉浸式系统的安全性"
                },
                {
                  "title": "PAPER784 | Privacy in Immersive Extended Reality: Exploring User Perceptions, Concerns, and Coping Strategies",
                  "authors": "Hilda Hadan, Derrick M. Wang, Lennart E. Nacke, Leah Zhang-Kennedy (University of Waterloo)",
                  "summary": "调研用户对VR/XR中数据隐私的感知与担忧，提出沉浸式环境中的隐私保护设计策略"
                }
              ]
            }
          ]
        }
      ],
      "countLabel": "共 52 篇"
    },
    "uist2025": {
      "id": "uist-2025",
      "label": "UIST 2025",
      "title": "UIST 2025 虚拟现实（VR）相关论文整理",
      "curator": "助教 Yinuo Li 整理",
      "description": "聚焦可访问性、触觉、本体感、生成式创作与自然交互的 VR 论文阅读参考目录。",
      "sections": [
        {
          "title": "论文清单",
          "description": "",
          "groups": [
            {
              "title": "未分类",
              "papers": [
                {
                  "title": "Paper 49 | VRSight: An AI-Driven Scene Description System to Improve Virtual Reality Accessibility for Blind People",
                  "authors": "Daniel Killough、Justin Feng、Zheng Xue Ching、Daniel Wang、Rithvik Dyava、Yapeng Tian、Yuhang Zhao",
                  "summary": "研发了一套基于AI的场景描述系统，旨在提升盲人使用虚拟现实（VR）的可及性，通过AI技术为盲人用户提供VR场景的详细描述，帮助他们更好地感知和交互VR环境"
                },
                {
                  "title": "Paper 50 | Adaptique: Multi-objective and Context-aware Online Adaptation of Selection Techniques in Virtual Reality",
                  "authors": "Chao-Jung Lai（University of Toronto and University of California, San Diego）、Mauricio Sousa（University of Toronto）、Tianyu Zhang（University of Toronto and University of Rochester）、Ludwig Sidenmark（University of Toronto）、Tovi Grossman（University of Toronto）",
                  "summary": "提出了一种多目标且上下文感知的在线适配选择技术，应用于虚拟现实场景中，能够根据不同的使用场景和目标，自动调整VR中的选择交互方式，提升用户操作的便捷性和准确性"
                },
                {
                  "title": "Paper 55 | EchoLadder: Progressive AI-Assisted Design of Immersive VR Scenes",
                  "authors": "Zhuangze Hou、Jingze Tian（City University of Hong Kong）、Nianlong Li（Chinese Academy of Sciences）、Farong Ren（New York University）、Can Liu（City University of Hong Kong）",
                  "summary": "构建了一个渐进式AI辅助设计工具EchoLadder，用于沉浸式VR场景的设计，借助AI技术逐步引导用户完成VR场景的创建，降低沉浸式VR场景设计的门槛，提升设计效率和效果"
                },
                {
                  "title": "Paper 78 | Delusionized? Potential Harms of Proprioceptive Manipulations through Hand Redirection in Virtual Reality",
                  "authors": "Martin Feick（Karlsruhe Institute of Technology (KIT)）、Kora Persephone Regitz（Saarland University, Saarland）、André Zenner（Saarland University & DFKI, Saarland）",
                  "summary": "探讨了虚拟现实中通过手部重定向进行本体感受操纵可能带来的潜在危害，对VR交互中这一常见技术的安全性进行了深入分析和研究，为VR技术的安全应用提供参考"
                },
                {
                  "title": "Paper 79 | Extendlibur: Dynamic Haptic Retargeting for Length-Mismatched Proxies in Co-Located VR",
                  "authors": "Junyu Chen、Qianyuan Zou、Yingjie Chang、Seungwoo Je（Southern University of Science and Technology）、Seungjae Oh（Kyung Hee University）",
                  "summary": "针对协同定位VR中代理长度不匹配的问题，提出了一种动态触觉重定向技术Extendlibur，通过动态调整触觉反馈，优化用户在这类VR场景中的触觉交互体验，增强沉浸感"
                },
                {
                  "title": "Paper 80 | VR Side-Effects: Memory & Proprioceptive Discrepancies After Leaving Virtual Reality",
                  "authors": "Antonin Cheymol（Inria, Univ Rennes, CNRS, IRISA and University of Chicago）、Pedro Lopes（University of Chicago）完成",
                  "summary": "研究了用户离开虚拟现实环境后可能出现的记忆和本体感受差异等副作用，深入分析了VR体验对用户认知和身体感知的后续影响，为VR技术的健康应用提供了研究依据"
                },
                {
                  "title": "Paper 81 | Subthreshold Jitter in VR Can Induce Visual Discomfort",
                  "authors": "Samuel Levulis、Kevin W. Rio、James P. Wilmott、Pablo Ramon Soria、Charlie S. Burlingham、Phillip Guan（均来自Meta）",
                  "summary": "发现虚拟现实中的亚阈值抖动会引发用户的视觉不适，通过相关实验和分析，揭示了VR视觉呈现中这一潜在问题，为优化VR视觉设计、提升用户体验提供了重要参考"
                },
                {
                  "title": "Paper 83 | Move with Style! Enhancing Avatar Embodiment in Virtual Reality through Proprioceptive Motion Feedback",
                  "authors": "David Wagmann、Marie Muehlhaus、Jürgen Steimle（均来自Saarland University, Saarland）",
                  "summary": "提出通过本体感受运动反馈来增强虚拟现实中的化身具身感，让用户在操控VR化身时，能够获得更真实的身体感知反馈，从而提升VR体验的沉浸感和自然度"
                },
                {
                  "title": "Paper 163 | AttraCar: Multisensory In-Car VR with Thermal, Airflow, and Motion Feedback through Built-In Vehicle Systems",
                  "authors": "Dohyeon Yeo、Gwangbin Kim、Minwoo Oh、Jeongju Park、Bocheon Gim、Seongjun Kang、Ahmed Elsharkawy、SeungJun Kim（均来自HCIS Lab. GIST）",
                  "summary": "研发了一种车载多感官虚拟现实系统AttraCar，该系统借助车辆内置系统提供热、气流和运动反馈，为用户打造沉浸式的车载VR体验，拓展了VR技术在汽车场景中的应用"
                },
                {
                  "title": "Paper 166 | EarPressure VR: Ear Canal Pressure Feedback for Enhancing Environmental Presence in Virtual Reality",
                  "authors": "Seongjun Kang、Gwangbin Kim、Bocheon Gim、Jeongju Park、Semoo Shin、SeungJun Kim（均来自HCIS Lab, GIST）",
                  "summary": "通过耳道压力反馈来增强虚拟现实中的环境存在感，设计了EarPressure VR系统，利用压力反馈让用户更真实地感知VR环境中的空间和场景变化，提升VR体验的沉浸感"
                },
                {
                  "title": "Paper 167 | TwinSpin: A Virtual Ball in a VR Controller Enabling In-Hand 3DoF Rotation",
                  "authors": "Changsung Lim、Taejun Kim、Geehyuk Lee（均来自KAIST）",
                  "summary": "在VR控制器中设计了一个虚拟球TwinSpin，支持手中3自由度旋转交互，为VR用户提供了一种新的操作方式，提升了VR场景中旋转操作的精准性和便捷性"
                },
                {
                  "title": "Paper 185 | Can You Move These Over There? Exploring an LLM-based VR Mover to Support Natural Multi-object Manipulation",
                  "authors": "Xiangzhi Eric Wang、Zackary P. T. Sin、Ye Jia、Qing Li、Chen Li（The Hong Kong Polytechnic University）、Dan Archer（University College London）、Wynonna H. Y. Fong（Heep Yunn School）",
                  "summary": "探索了一种基于大语言模型（LLM）的VR移动工具，支持自然的多物体操纵，用户可以通过更自然的交互方式在VR中移动多个物体，提升VR场景中物体操纵的效率和自然度"
                },
                {
                  "title": "Paper 188 | GaussianShopVR: Facilitating Immersive 3D Authoring Using Gaussian Splatting in VR",
                  "authors": "Yulin Shen、Boyu Li、Jiayang Huang、David Yip、Zeyu Wang（均来自The Hong Kong University of Science and Technology (Guangzhou)）",
                  "summary": "利用高斯溅射技术（Gaussian Splatting）开发了GaussianShopVR工具，方便用户在VR中进行沉浸式3D创作，降低3D内容创作的难度，让用户能够在沉浸式环境中更直观地设计3D作品"
                }
              ]
            }
          ]
        }
      ],
      "countLabel": "共 13 篇"
    },
    "uist2024": {
      "id": "uist-2024",
      "label": "UIST 2024",
      "title": "UIST 2024 虚拟现实（VR）相关论文整理",
      "curator": "助教 Yinuo Li 整理",
      "description": "聚焦交互、触觉、协作、输入与系统设计的 VR 论文阅读参考目录。",
      "sections": [
        {
          "title": "论文清单",
          "description": "",
          "groups": [
            {
              "title": "未分类",
              "papers": [
                {
                  "title": "Paper 7 | TouchInsight: Uncertainty-aware Rapid Touch and Text Input for Mixed Reality from Egocentric Vision",
                  "authors": "Paul Streli, Mark Richardson, Fadi Botros, Shugao Ma, Robert Wang, Christian Holz",
                  "summary": "提出基于第一人称视觉的混合现实快速触摸和文本输入方法，具备不确定性感知能力"
                },
                {
                  "title": "Paper 24 | Predicting the Limits: Tailoring Unnoticeable Hand Redirection Offsets in Virtual Reality to Individuals' Perceptual Boundaries",
                  "authors": "Martin Feick, Kora Persephone Regitz, Lukas Gehrke, André Zenner, Anthony Tang, Tobias Patrick Jungbluth, Maurice Rekrut, Antonio Krüger",
                  "summary": "研究个体感知边界，为用户个性化定制虚拟现实中不可察觉的手部重定向偏移量"
                },
                {
                  "title": "Paper 32 | VisCourt: In-Situ Guidance for Interactive Tactic Training in Mixed Reality",
                  "authors": "Liqi Cheng (Zhejiang University)",
                  "summary": "MR环境下的实时战术训练指导系统，提供情境感知的交互式原位引导"
                },
                {
                  "title": "Paper 35 | avaTTAR: Table Tennis Stroke Training with On-body and Detached Visualization in Augmented Reality",
                  "authors": "Dizhi Ma, Xiyun Hu, Jingyu Shi, Mayank Patel 0005, Rahul Jain 0018, Ziyi Liu 0004, Zhengzhe Zhu, Karthik Ramani",
                  "summary": "AR中结合身体附着与分离可视化技术，辅助乒乓球击球动作训练"
                },
                {
                  "title": "Paper 43 | SituationAdapt: Contextual UI Optimization in Mixed Reality with Situation Awareness via LLM Reasoning",
                  "authors": "Zhipeng Li, Christoph Gebhardt, Yves Inglin, Nicolas Steck, Paul Streli, Christian Holz",
                  "summary": "通过大语言模型推理实现MR中情境感知的用户界面优化"
                },
                {
                  "title": "Paper 44 | Desk2Desk: Optimization-based Mixed Reality Workspace Integration for Remote Side-by-side Collaboration",
                  "authors": "Ludwig Sidenmark, Tianyu Zhang, Leen Al Lababidi, Jiannan Li, Tovi Grossman",
                  "summary": "基于优化算法的MR工作区整合，支持远程用户的并排协作"
                },
                {
                  "title": "Paper 53 | Exploring the Effects of Sensory Conflicts on Cognitive Fatigue in VR Remappings",
                  "authors": "Tianren Luo, Gaozhang Chen, Yijian Wen, Pengxiang Wang 0006, Yachun Fan, Teng Han, Feng Tian 0001",
                  "summary": "探讨虚拟现实重映射场景中，感官冲突对用户认知疲劳的影响规律"
                },
                {
                  "title": "Paper 55 | VirtualNexus: Enhancing 360-Degree Video AR/VR Collaboration with Environment Cutouts and Virtual Replicas",
                  "authors": "Xincheng Huang, Michael Yin, Ziyi Xia, Robert Xiao",
                  "summary": "通过环境裁剪与虚拟副本技术，增强360度视频中的AR/VR协同体验"
                },
                {
                  "title": "Paper 79 | SIM2VR: Towards Automated Biomechanical Testing in VR",
                  "authors": "Florian Fischer, Aleksi Ikkala, Markus Klar, Arthur Fleig, Miroslav Bachinski, Roderick Murray-Smith, Perttu Hämäläinen, Antti Oulasvirta, Jörg Müller",
                  "summary": "构建并验证虚拟现实环境下的自动化生物力学测试系统"
                },
                {
                  "title": "Paper 80 | Hands-on, Hands-off: Gaze-Assisted Bimanual 3D Interaction",
                  "authors": "Mathias N. Lystbæk, Thorbjørn Mikkelsen, Roland Krisztandl, Eric J Gonzalez, Mar Gonzalez-Franco, Hans Gellersen, Ken Pfeuffer",
                  "summary": "提出基于视线辅助的双手3D交互方法，兼顾手动与无接触操作模式"
                },
                {
                  "title": "Paper 81 | Pro-Tact: Hierarchical Synthesis of Proprioception and Tactile Exploration for Eyes-Free Ray Pointing on Out-of-View VR Menus",
                  "authors": "Yeonsu Kim, Jisu Yim, Kyunghwan Kim, Yohan Yun, Geehyuk Lee",
                  "summary": "结合本体感与触觉探索，实现VR视线外菜单的无视觉射线指向"
                },
                {
                  "title": "Paper 82 | GradualReality: Enhancing Physical Object Interaction in Virtual Reality via Interaction State-Aware Blending",
                  "authors": "HyunA Seo, Juheon Yi, Rajesh Balan, Youngki Lee",
                  "summary": "通过交互状态感知融合技术，增强VR中物理对象的交互自然度"
                },
                {
                  "title": "Paper 83 | StegoType: Surface Typing from Egocentric Cameras",
                  "authors": "Mark Richardson, Fadi Botros, Yangyang Shi, Pinhao Guo, Bradford J Snow, Linguang Zhang, Jingming Dong, Keith Vertanen, Shugao Ma, Robert Wang",
                  "summary": "基于第一人称相机的表面打字技术，适配VR/AR环境的文本输入"
                },
                {
                  "title": "Paper 84 | Eye-Hand Movement of Objects in Near Space Extended Reality",
                  "authors": "Uta Wagner, Andreas Asferg Jacobsen, Tiare Feuchtner, Hans Gellersen, Ken Pfeuffer",
                  "summary": "研究XR中近场空间物体操作时，用户的眼手协调运动规律"
                },
                {
                  "title": "Paper 96 | VRCopilot: Authoring 3D Layouts with Generative AI Models in VR",
                  "authors": "Lei Zhang, Jin Pan, Jacob Gettig, Steve Oney, Anhong Guo",
                  "summary": "结合生成式AI模型，开发VR中的3D布局设计辅助工具"
                },
                {
                  "title": "Paper 99 | AniCraft: Crafting Everyday Objects as Physical Proxies for Prototyping 3D Character Animation in Mixed Reality",
                  "authors": "Boyu Li, Linping Yuan, Zhe Yan, Qianxi Liu, Yulin Shen, Zeyu Wang",
                  "summary": "将日常物体作为物理代理，实现MR中3D角色动画的快速原型制作"
                },
                {
                  "title": "Paper 103 | Flip-Pelt: Motor-Driven Peltier Elements for Rapid Thermal Stimulation and Congruent Pressure Feedback in VR",
                  "authors": "Seongjun Kang, Gwangbin Kim, Seokhyun Hwang, Jeongju Park, Ahmed Ibrahim Ahmed Mohamed Elsharkawy, SeungJun Kim",
                  "summary": "基于珀尔帖元件实现VR中快速热刺激与协同压力反馈，提升多感官沉浸感"
                },
                {
                  "title": "Paper 125 | SonoHaptics: An Audio-Haptic Cursor for Gaze-Based Object Selection in XR",
                  "authors": "Hyunsung Cho, Naveen Sendhilnathan, Michael Nebeling, Tianyi Wang 0004, Purnima Padmanabhan, Jonathan Browder, David Lindlbauer, Tanya R. Jonker, Kashyap Todi",
                  "summary": "设计XR中音频-触觉融合光标，支持视线引导的对象精准选择"
                },
                {
                  "title": "Paper 126 | Auptimize: Optimal Placement of Spatial Audio Cues for Extended Reality",
                  "authors": "Hyunsung Cho, Alexander Wang, Divya Kartik, Emily Liying Xie, Yukang Yan, David Lindlbauer",
                  "summary": "优化XR中空间音频提示的布局，提升环境沉浸感与交互效率"
                },
                {
                  "title": "Paper 128 | SonifyAR: Context-Aware Sound Generation in Augmented Reality",
                  "authors": "Xia Su, Jon E. Froehlich, Eunyee Koh, Chang Xiao",
                  "summary": "AR中基于情境感知的声音生成系统，增强环境交互的沉浸感"
                },
                {
                  "title": "Paper 135 | LoopBot: Representing Continuous Haptics of Grounded Objects in Room-scale VR",
                  "authors": "Tetsushi Ikeda, Kazuyuki Fujita, Kumpei Ogawa, Kazuki Takashima, Yoshifumi Kitamura",
                  "summary": "在房间尺度VR中，实现接地物体的连续触觉反馈，提升触摸真实感"
                },
                {
                  "title": "Paper 136 | JetUnit: Rendering Diverse Force Feedback in Virtual Reality Using Water Jets",
                  "authors": "Zining Zhang, Jiasheng Li, Zeyu Yan, Jun Nishida, Huaishu Peng",
                  "summary": "利用水射流技术，在VR中实现多样化的力反馈效果"
                },
                {
                  "title": "Paper 141 | CookAR: Affordance Augmentations in Wearable AR to Support Kitchen Tool Interactions for People with Low Vision",
                  "authors": "Jaewook Lee, Andrew D. Tjahjadi, Jiho Kim, Junpu Yu, Minji Park, Jiawen Zhang, Jon E. Froehlich, Yapeng Tian, Yuhang Zhao",
                  "summary": "为低视力人群开发可穿戴AR，实现厨房工具的可供性增强，优化操作体验"
                },
                {
                  "title": "Paper 144 | Augmented Physics: Creating Interactive and Embedded Physics Simulations from Static Textbook Diagrams",
                  "authors": "Aditya Gunturu, Yi Wen, Nandi Zhang, Jarin Thundathil, Rubaiat Habib Kazi, Ryo Suzuki 0001",
                  "summary": "将静态教材物理图示，转化为AR中可交互的嵌入式物理仿真系统"
                }
              ]
            }
          ]
        }
      ],
      "countLabel": "共 24 篇"
    }
  };
})();
