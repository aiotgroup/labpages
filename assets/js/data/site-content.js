(function () {
  const SiteContent = (window.SiteContent = window.SiteContent || {});

  SiteContent.site = {
    title: "XJTU AIoT Group",
    brandMark: "X",
    footerMark: "X",
    tagline: "Ubiquitous AI, Intelligent Systems, Connected Future.",
    description:
      "A multi-page static group website for XJTU AIoT Group, rebuilt with a cleaner structure and editable local content.",
    copyright: "Copyright \u00A9 XJTU AIoT Group. Designed and Developed by Shengyao Ding.",
    nav: [
      { key: "about", label: "About", href: "./index.html" },
      { key: "fei-wang", label: "Fei Wang", href: "./fei-wang.html" },
      { key: "publications", label: "Publications", href: "./publications.html" },
      { key: "course", label: "Courses", href: "./course.html" },
      { key: "awards", label: "Awards", href: "./awards.html" },
      { key: "team", label: "Team", href: "./team.html" },
      { key: "gallery", label: "Gallery", href: "./gallery.html" }
    ],
    footerLinks: [
      { label: "XJTU AIoT Group", href: "./index.html" },
      { label: "Publications", href: "./publications.html" },
      { label: "Team", href: "./team.html" },
      { label: "Gallery", href: "./gallery.html" }
    ]
  };

  SiteContent.about = {
    hero: {
      eyebrow: "About",
      title: "AI for Ubiquitous Sensing,\nSystems, and Everyday Life.",
      description:
        "XJTU AIoT Group explores the intersection of artificial intelligence and ubiquitous computing, building intelligent sensing and interaction systems that can serve people in the physical world.",
      actions: [
        { label: "Browse Publications", href: "./publications.html", kind: "primary" },
        { label: "Meet The Team", href: "./team.html", kind: "secondary" }
      ]
    },
    intro: [
      "Our research sits at the intersection of artificial intelligence and ubiquitous computing. Ubiquitous computing asks how computation can quietly support people everywhere, while AI provides the learning and reasoning needed to make that support adaptive, practical, and responsive.",
      "Within this broad space, we focus on turning real-world signals such as WiFi, mmWave, wearable IMU and PPG streams, audio, video, and text into robust intelligent systems. The goal is not only to achieve strong model accuracy, but also to make these systems reliable, privacy-aware, efficient, and deployable in everyday environments."
    ],
    metrics: [
      { label: "Core Intersection", value: "Artificial intelligence + ubiquitous computing" },
      { label: "Sensing Modalities", value: "WiFi, mmWave, IMU, PPG, audio, video, and text" },
      { label: "Deployment Goal", value: "Offline perception, real-time response, and trustworthy intelligence" }
    ],
    highlights: [
      {
        title: "Intelligent Sensing",
        text:
          "We use AI to turn ambient signals into contactless perception systems that understand people, environments, and activities without requiring users to carry special hardware.",
        details: [
          "Wireless sensing with WiFi and mmWave for activity recognition, health monitoring, respiration sensing, and security-oriented detection.",
          "Representative threads include Person-in-WiFi (ICCV 2019), Person-in-WiFi 3D (CVPR 2024), WiPIN (Globecom 2019 Best Paper Award), and our recent UWB respiration monitoring effort."
        ]
      },
      {
        title: "Wearable Computing and HCI",
        text:
          "We design human-centered sensing pipelines around smartwatches, bands, glasses, and other wearable devices so that AI can better understand user intent, daily behavior, and affective state.",
        details: [
          "Typical signals include IMU and PPG streams collected from watches, wristbands, earbuds, and glasses.",
          "Recent examples include XRF V2 (ACM IMWUT/UBICOMP 2025) and You Can Wash Hands Better (IEEE TMC 2025)."
        ]
      },
      {
        title: "Multimodal Machine Learning",
        text:
          "Our systems often need to combine multiple sensing channels, so we study multimodal fusion, cross-modal alignment, and robustness when one or more modalities are noisy or missing.",
        details: [
          "We work on how to fuse WiFi, mmWave, IMU, audio, vision, and language signals into shared representations that remain useful in real-world conditions.",
          "A current emphasis is maintaining robustness under partial modality failure, domain shift, and low-quality sensor observations."
        ]
      },
      {
        title: "Smart IoT, Security, and Efficient Edge AI",
        text:
          "We build intelligent IoT systems that can sense, infer, and react under tight constraints in compute, memory, power, and connectivity.",
        details: [
          "This includes privacy-aware sensing, defending intelligent systems from attacks, and designing resource-efficient pipelines for embedded deployment.",
          "We are especially interested in model compression and acceleration so that capable AI can run on MCU-class and edge devices with offline sensing and real-time response."
        ]
      }
    ],
    news: [
      {
        date: "Apr 2026",
        title: "Survey on Wi-Fi Sensing Generalizability highlighted in the lab archive",
        summary:
          "Our recent survey organizes the taxonomy, techniques, datasets, and open challenges behind generalizable WiFi sensing systems.",
        slug: "a-survey-on-wi-fi-sensing-generalizability-taxonomy-techniques-datasets-and-future-research-prospects"
      },
      {
        date: "Apr 2026",
        title: "COMPASS explores complete multimodal fusion for ubiquitous sensing",
        summary:
          "The project studies proxy-token fusion and shared latent spaces for sensing systems that must reason across several data sources at once.",
        slug: "compass-complete-multimodal-fusion-via-proxy-tokens-and-shared-spaces-for-ubiquitous-sensing"
      },
      {
        date: "Mar 2026",
        title: "Cross-domain EEG emotion recognition extends the group's sensing portfolio",
        summary:
          "The new ICASSP paper applies contrastive learning to improve cross-domain EEG-based emotion recognition.",
        slug: "cross-domain-eeg-based-emotion-recognition-with-contrastive-learning"
      },
      {
        date: "Mar 2026",
        title: "mmWave-aided speech enhancement and separation enters the archive",
        summary:
          "This INFOCOM work studies unified speech enhancement and separation without requiring a prior on speaker count.",
        slug: "mmwave-aided-unified-speech-enhancement-and-separation-without-speaker-count-prior"
      },
      {
        date: "Oct 2025",
        title: "XRF V2 expands wearable and wireless action understanding",
        summary:
          "The dataset combines WiFi with IMUs from phones, watches, earbuds, and glasses to support richer action summarization research.",
        slug: "xrf-v2-a-dataset-for-action-summarization-with-wi-fi-signals-and-imus-in-phones-watches-earbuds-and-glasses"
      },
      {
        date: "Mar 2025",
        title: "One Snapshot is All You Need demonstrates generalized mmWave signal generation",
        summary:
          "The paper introduces a generalized signal-generation method aimed at improving scalability and data efficiency for mmWave-based sensing.",
        slug: "one-snapshot-is-all-you-need-a-generalized-method-for-mmwave-signal-generation"
      }
    ],
    sponsors: [
      "AMD",
      "Xilinx",
      "NVIDIA",
      "NSF",
      "IBM",
      "Amazon",
      "Qualcomm",
      "Microsoft",
      "Hyundai",
      "Samsung",
      "Apple",
      "Intel",
      "Meta",
      "Sony",
      "Google",
      "Texas Instruments",
      "Ford",
      "SRC",
      "Huawei",
      "Tencent",
      "Alibaba Cloud",
      "Baidu",
      "NSFC",
      "CNSA"
    ]
  };

  SiteContent.feiWang = {
    name: "Fei Wang",
    title: "Associate Professor and Ph.D. Supervisor",
    subtitle: "Associate Professor · Ph.D. Supervisor",
    photo: "./assets/media/people/fei-wang.svg",
    photoAlt: "Profile photo for Fei Wang",
    note:
      "Associate Professor in the School of Software Engineering at Xi'an Jiaotong University, working at the intersection of artificial intelligence, ubiquitous computing, wireless sensing, wearable systems, and multimodal learning.",
    admissionsNote:
      "We welcome applications from interns and prospective master's students. For more information about the group and admissions, please refer to: ",
    admissionsLink: {
      label: "Q&A",
      href: "https://hqf1h4do6vh.feishu.cn/wiki/Qb7XwbUDjiTbikkEid2ctIHzn1d"
    },
    bio: [
      "Fei Wang is an Associate Professor and Ph.D. supervisor in the School of Software Engineering, Faculty of Electronic and Information Engineering, Xi'an Jiaotong University. His research lies at the intersection of artificial intelligence and ubiquitous computing, with a particular emphasis on wireless sensing, wearable computing, multimodal machine learning, and efficient AIoT systems.",
    ],
    interests: [
      "Wireless sensing with WiFi, mmWave, and UWB",
      "Wearable computing and human-computer interaction",
      "Multimodal learning for real-world sensing and interaction",
      "Efficient and edge AI for AIoT systems",
      "Security and privacy in intelligent sensing"
    ],
    profileLinks: [
      { label: "Email", href: "mailto:feynmanw@xjtu.edu.cn" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=LKPpmXQAAAAJ&hl=en" }
    ],
    quickFacts: [
      "School of Software Engineering, Xi'an Jiaotong University",
      "Contact: feynmanw[at]xjtu.edu.cn",
      "Executive Committee Member, CCF Technical Committee on Ubiquitous Computing",
      "Executive Committee Member, CCF Technical Committee on Internet of Things"
    ],
    roles: [
      "Associate Professor and Ph.D. Supervisor, School of Software Engineering, Xi'an Jiaotong University",
      "Postdoctoral Researcher in Control Science and Engineering, Xi'an Jiaotong University",
      "Executive Committee Member, CCF Technical Committee on Ubiquitous Computing",
      "Executive Committee Member, CCF Technical Committee on Internet of Things"
    ],
    appointments: [
      {
        year: "Mar 2024 - Present",
        title: "Associate Professor and Ph.D. Supervisor",
        text: "School of Software Engineering, Faculty of Electronic and Information Engineering, Xi'an Jiaotong University."
      },
      {
        year: "Sep 2020 - Mar 2024",
        title: "Assistant Professor and Master's Supervisor",
        text: "School of Software Engineering, Faculty of Electronic and Information Engineering, Xi'an Jiaotong University."
      },
      {
        year: "Sep 2020 - Present",
        title: "Postdoctoral Researcher in Control Science and Engineering",
        text: "Xi'an Jiaotong University. Mentor: Prof. Yihong Gong (IEEE Fellow)."
      },
      {
        year: "Mar 2016 - Mar 2020",
        title: "Ph.D. in Computer Science and Technology",
        text: "Xi'an Jiaotong University. Advisor: Prof. Jinsong Han."
      },
      {
        year: "Nov 2019 - Jan 2020",
        title: "Visiting Scholar",
        text: "College of Cyber Security, Zhejiang University. Hosted by Prof. Jinsong Han, Research Prof. Feng Lin, and Prof. Kui Ren (ACM/IEEE Fellow)."
      },
      {
        year: "Oct 2017 - Oct 2019",
        title: "Joint Ph.D. Student",
        text: "Robotics Institute, Carnegie Mellon University. Advisors: Dr. Dong Huang and Prof. Fernando De la Torre."
      },
      {
        year: "Sep 2014 - Feb 2016",
        title: "M.S. in Computer Science and Technology",
        text: "Xi'an Jiaotong University. Advisor: Prof. Yinliang Zhao."
      },
      {
        year: "Sep 2009 - Jul 2013",
        title: "B.S. in Computer Science and Technology",
        text: "Xi'an Jiaotong University."
      }
    ],
    service: [
      {
        title: "Leadership and Memberships",
        items: [
          "Executive Committee Member, CCF Technical Committee on Ubiquitous Computing",
          "Executive Committee Member, CCF Technical Committee on Internet of Things"
        ]
      },
      {
        title: "Guest Editorships and Chairs",
        items: [
          "Guest Editor: MDPI Electronics",
          "Guest Editor: MDPI Sensors special issue (active call for papers)",
          "Area / Workshop Chair: ICSEE 2024, IEEE ICCVIT 2025, IEEE ECIS 2026"
        ]
      },
      {
        title: "Conference Reviewing and PC Service",
        items: [
          "BMVC 2026, ECCV 2026, SIGIR 2026, ICML 2026, CVPR 2026, ICASSP 2026, AAAI 2026, UBICOMP 2026, WACV 2026, INFOCOM 2026",
          "ACM MM 2025, ACM UBICOMP 2025, ICCV 2025, IJCNN 2025, CVPR 2025, ICASSP 2025, AAAI 2025",
          "HPCC 2024, UIST 2024, ECCV 2024, CVPR 2024, AAAI 2024, ICCV 2023, CVPR 2023, AAAI 2023, SocialCom 2023, ICCV 2021, AAAI 2020"
        ]
      },
      {
        title: "Journal Reviewing",
        items: [
          "IEEE TPAMI, ACM IMWUT, IEEE TMC, IEEE TVCG, IEEE TIP, IEEE TNNLS, IEEE TII, IEEE IoT Journal, IEEE Access, IEEE TSMC",
          "Elsevier Computer Networks and Computer Vision and Image Understanding",
          "MDPI Sensors and related venues"
        ]
      }
    ],
    grants: [
      {
        period: "Jan 2026 - Dec 2029",
        title: "Foundation Models for Open-Domain Generalizable Multimodal Wireless Sensing",
        sponsor: "National Natural Science Foundation of China, General Program",
        note: "Grant No. 62572383. Research on constructing and continuously updating foundation models for open-domain generalizable multimodal wireless sensing. RMB 500,000."
      },
      {
        period: "May 2025 - May 2027",
        title: "Fundamental Research Funds for the Central Universities",
        sponsor: "New Associate Professor Program",
        note: "Principal investigator of a university-level startup project. RMB 100,000."
      },
      {
        period: "May 2025 - May 2026",
        title: "Foundation-Model-Based Research for an Open Topic",
        sponsor: "Open Project, State Key Laboratory of Integrated Services Networks",
        note: "Project title is abbreviated in the source materials as a foundation-model-based xxxx topic. RMB 60,000."
      },
      {
        period: "Jan 2024 - Dec 2026",
        title: "Wireless Imaging via Foundation-Model Fine-Tuning",
        sponsor: "Fundamental Research Funds for the Central Universities",
        note: "Research on wireless imaging methods based on large-model fine-tuning. RMB 50,000."
      },
      {
        period: "Jan 2022 - Dec 2024",
        title: "Cross-Modal Wireless Sensing with Fine-Grained Spatial-Temporal Modeling",
        sponsor: "National Natural Science Foundation of China, Young Scientists Fund",
        note: "Grant No. 62102307. Completed. RMB 300,000."
      },
      {
        period: "May 2021 - Apr 2023",
        title: "Fine-Grained Behavior Sensing System Based on WiFi",
        sponsor: "Shaanxi Key R&D Program",
        note: "Grant No. 2021GXLH-Z-021. Completed. RMB 500,000."
      },
      {
        period: "Sep 2021 - Feb 2023",
        title: "Intelligently Enhanced Contactless Behavior Understanding",
        sponsor: "China Postdoctoral Science Foundation, General Program",
        note: "Grant No. 2021M692562. Completed. RMB 80,000."
      },
      {
        period: "2021 - 2022",
        title: "MindSpore Development on Ascend",
        sponsor: "Huawei",
        note: "Industry-supported project on MindSpore development under the Ascend ecosystem. Completed."
      }
    ]
  };

  SiteContent.courses = [
    {
      code: "6.5940",
      name: "TinyML and Efficient Deep Learning Computing",
      term: "Fall 2024",
      level: "Graduate / Advanced Undergraduate",
      link: "https://efficientml.ai",
      overview:
        "The lab's flagship course on efficient ML systems, covering model compression, accelerator-aware deployment, TinyML, and practical throughput optimization.",
      topics: ["Model compression", "TinyML", "efficient inference", "hardware-aware design"],
      outcomes: [
        "Understand end-to-end efficiency tradeoffs in modern ML systems.",
        "Build intuition for deploying models under strict memory and power budgets.",
        "Connect algorithmic ideas with systems-level constraints."
      ]
    },
    {
      code: "6.S982",
      name: "Efficient Generative AI Systems",
      term: "Spring 2026",
      level: "Graduate Seminar",
      link: "#",
      overview:
        "A sample editable course entry focused on LLM serving, sparse attention, diffusion acceleration, and multimodal deployment.",
      topics: ["LLM serving", "diffusion systems", "multimodal inference", "benchmarking"],
      outcomes: [
        "Analyze the systems bottlenecks in generative AI pipelines.",
        "Compare practical optimization strategies for different model families.",
        "Develop a project that links research ideas to deployable implementations."
      ]
    },
    {
      code: "6.S991",
      name: "Reading Group: Long-Context and Streaming Models",
      term: "Independent Study",
      level: "Research Reading Group",
      link: "#",
      overview:
        "A lighter-weight discussion format for papers on long-context reasoning, streaming video understanding, and memory-aware attention.",
      topics: ["StreamingLLM", "StreamingVLM", "KV-cache design", "evaluation"],
      outcomes: [
        "Track current literature on long-context modeling.",
        "Practice concise technical presentation and synthesis.",
        "Bridge paper reading with prototype design ideas."
      ]
    }
  ];

  SiteContent.awards = {
    competition: [
      {
        year: "2023",
        title: "1st Place Award",
        org: "ACM Quantum Computing for Drug Discovery Contest @ ICCAD 2023",
        people: "QuantumNAS team",
        note: "Recognized for top performance in a competition setting that connects quantum computing research to practical discovery workflows."
      },
      {
        year: "2022",
        title: "First Place (1/150)",
        org: "ACM/IEEE TinyML Design Contest, Memory Occupation Track",
        people: "HAT / TinyML team",
        note: "Demonstrated strong end-to-end optimization under strict deployment constraints."
      },
      {
        year: "2021",
        title: "First Place",
        org: "AI Driving Olympics, nuScenes Semantic Segmentation @ ICRA",
        people: "SPVNAS team",
        note: "A notable win for efficient 3D understanding and autonomous driving workloads."
      },
      {
        year: "2020",
        title: "First Place",
        org: "Low-Power Computer Vision Challenge, CPU Detection / FPGA @ CVPR",
        people: "OFA team",
        note: "Illustrates the lab's consistent strength in resource-constrained vision systems."
      }
    ],
    paperAwards: [
      {
        year: "2024",
        title: "Best Paper Award",
        org: "MLSys 2024",
        people: "AWQ team",
        note: "Recognition for activation-aware quantization work with broad downstream adoption."
      },
      {
        year: "2023",
        title: "Best Demo Award",
        org: "DAC University Demo",
        people: "SpAtten team",
        note: "Highlights the lab's strength in turning research ideas into compelling systems demonstrations."
      },
      {
        year: "2023",
        title: "Top-5 Cited Paper in 50 Years of ISCA",
        org: "ISCA retrospective recognition",
        people: "EIE retrospective team",
        note: "A landmark signal of the long-term impact of sparse and compressed inference research."
      },
      {
        year: "2017 / 2016",
        title: "Best Paper Awards",
        org: "FPGA 2017 and ICLR 2016",
        people: "Fei Wang team",
        note: "Foundational recognition for efficient neural network compression and deployment work."
      }
    ],
    honors: [
      {
        year: "2024",
        title: "Rising Stars in ML and Systems",
        org: "MLCommons",
        people: "Qinghao Hu",
        note: "Recognized for research at the intersection of efficient learning systems and scalable model training."
      },
      {
        year: "2023",
        title: "Google PhD Fellowship",
        org: "Google",
        people: "Qinghao Hu",
        note: "Awarded for promising contributions to machine learning systems."
      },
      {
        year: "2023",
        title: "Sloan Research Fellowship",
        org: "Alfred P. Sloan Foundation",
        people: "Fei Wang",
        note: "Highlights broader academic impact beyond individual papers and projects."
      },
      {
        year: "2022",
        title: "Qualcomm Innovation Fellowship",
        org: "Qualcomm",
        people: "Ji Lin, Yujun Lin, Zhijian Liu, Han Cai, Hanrui Wang",
        note: "Multiple lab members have been recognized for strong research potential and technical depth."
      }
    ]
  };

  SiteContent.team = {
    intro:
      "Pioneering the frontiers of ubiquitous AI sensing and multimodal machine learning, our dynamic team is engineering smarter, more resilient AIoT systems for the future.",
    groups: [
      {
        title: "Principal Investigator",
        members: [
          {
            name: "Fei Wang",
            role: "Associate Professor, Xi'an Jiaotong University",
            bio:
              "Leads XJTU AIoT Group with interests spanning efficient AI systems, multimodal intelligence, embodied AI, and AIoT applications.",
            link: "./fei-wang.html",
            photo: "./assets/media/people/fei-wang.svg",
            photoAlt: "Profile portrait for Fei Wang",
            palette: ["#1c355e", "#c7e0ff"]
          }
        ]
      },
      {
        title: "Students and Collaborators",
        members: [
          {
            name: "Shengyao Ding (丁声耀)",
            role: "M.Eng. Student",
            photo: "./assets/media/people/2025shengyao-ding.jpg",
            photoAlt: "Sample portrait for Shengyao Ding",
            bio:
              "Point cloud segmentation.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Jiaxi Yin (尹佳茜)",
            role: "M.Sc Student",
            photo: "./assets/media/people/2025jiaxi-yin.jpg",
            photoAlt: "Sample portrait for Jiaxi Yin",
            bio:
              "Temporal action localization using smart devices equipped with IMUs.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Chuntong Chu (初春童)",
            role: "M.Eng. Student",
            photo: "./assets/media/people/2025chuntong-chu.jpg",
            photoAlt: "Sample portrait for Chuntong Chu",
            bio:
              "Intereseted in LLM Agent.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Wenqian Xu (徐文谦)",
            role: "M.Eng. Student",
            photo: "./assets/media/people/2024wenqian-xu.jpg",
            photoAlt: "Sample portrait for Wenqian Xu",
            bio:
              "Using LLMs for equipment diagnostics with nuclear power sensor data.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Kainan Shi (施凯南)",
            role: "M.Eng. Student",
            photo: "./assets/media/people/2024kainan-shi.jpg",
            photoAlt: "Sample portrait for Kainan Shi",
            bio:
              "Taking LLMs as featues extractors for recommender systems.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Pei Li (李沛)",
            role: "M.Eng. Student",
            photo: "./assets/media/people/2023pei-li.jpg",
            photoAlt: "Sample portrait for Pei Li",
            bio:
              "Temporal action localization using smart devices equipped with IMUs.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Zixuan Xia (夏梓轩)",
            role: "Master Student, Research Intern, Universität Bern",
            photo: "./assets/media/people/2024zixuan-xia.jpg",
            photoAlt: "Sample portrait for Zixuan Xia",
            bio:
              "Multimodal machine learning, neural optimization.",
            link: "https://sumxiaa.github.io/",
            palette: ["#5d4628", "#ffe6c8"]
          },
                    {
            name: "Hao Wang (王皓)",
            role: "Master Student, Research Intern, Universität Bern",
            photo: "./assets/media/people/2024hao-wang.png",
            photoAlt: "Sample portrait for Hao Wang",
            bio:
              "Multimodal machine learning.",
            link: "https://scholar.google.com/citations?user=RSjDZx0AAAAJ",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Lei Ouyang (欧阳蕾)",
            role: "Incoming M.Eng. Student",
            photo: "./assets/media/people/2026lei-ouyang.png",
            photoAlt: "Sample portrait for Lei Ouyang",
            bio:
              "Human sensing with Wi-Fi and IMUs.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Baorui Zhang (张宝瑞)",
            role: "Incoming M.Eng. Student",
            photo: "./assets/media/people/2026baorui-zhang.jpg",
            photoAlt: "Sample portrait for Baorui Zhang",
            bio:
              "",
            palette: ["#5d4628", "#ffe6c8"]
          },
        ]
      },
      {
        title: "Alumni",
        members: [
          {
            name: "Tiantian Wang (王天天)",
            role: "M.Eng. student",
            photo: "./assets/media/people/2024tiantian-wang.jpg",
            photoAlt: "Sample portrait for Qunhang Fu",
            bio:
              "Go to pursue a master’s degree at The University of Tokyo.",
            link: "https://scholar.google.com/citations?user=Pj4jG9YAAAAJ",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Qunhang Fu (付群航)",
            role: "M.Eng.",
            photo: "./assets/media/people/2022qunhang-fu.jpg",
            photoAlt: "Sample portrait for Qunhang Fu",
            bio:
              "Graduated in 2025 and then joined Hangzhou Xiaoshan District People's Government.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Zhenkui Yang (杨振奎)",
            role: "M.Eng.",
            photo: "./assets/media/people/2022zhenkui-yang.png",
            photoAlt: "Sample portrait for Zhenkui Yang",
            bio:
              "Graduated in 2025 and then joined Alibaba Group.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Haomin Xiong (熊浩民)",
            role: "M.Eng.",
            photo: "./assets/media/people/2022haomin-xiong.jpg",
            photoAlt: "Sample portrait for Haomin Xiong",
            bio:
              "Graduated in 2025 and then joined Xianyu.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Peixi Shi (史培玺)",
            role: "M.Eng.",
            photo: "./assets/media/people/2022peixi-shi.jpg",
            photoAlt: "Sample portrait for Peixi Shi",
            bio:
              "Graduated in 2025 and then joined NR Electric Co., Ltd.",
            palette: ["#3d376a", "#e0dcff"]
          },
           {
            name: "Bo Lan (兰博)",
            role: "M.Eng.",
            photo: "./assets/media/people/2022bo-lan.jpg",
            photoAlt: "Sample portrait for Bo Lan",
            bio:
              "Graduated in 2025 and then joined Pinduoduo.",
            link: "https://scholar.google.com/citations?user=kP6Dr_4AAAAJ",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Huina Meng (孟慧娜)",
            role: "M.Eng.",
            photo: "./assets/media/people/2020huina-meng.jpg",
            photoAlt: "Sample portrait for Huina Meng",
            bio:
              "Graduated in 2023 and then joined SPIC Nuelectronic（Wuxi）Company Limited.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Xin Wang (王欣)",
            role: "M.Eng.",
            photo: "./assets/media/people/2020xin-wang.jpg",
            photoAlt: "Sample portrait for Xin Wang",
            bio:
              "Graduated in 2023 and then joined STATE GRID.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Yiao Gao (高一奥)",
            role: "M.Eng.",
            photo: "./assets/media/people/2020yiao-gao.png",
            photoAlt: "Sample portrait for Yiao Gao",
            bio:
              "Graduated in 2023 and then joined Honor Device Co., Ltd.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Yuhang Zhang (张宇航)",
            role: "Bachelor of Engineering",
            photo: "./assets/media/people/2024yuhang-zhang.jpg",
            photoAlt: "Sample portrait for Yuhang Zhang",
            bio:
              "After graduating in 2024, he went on to pursue a master’s degree at Peking University.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Shichao Ma (马世超)",
            role: "Bachelor of Engineering",
            photo: "./assets/media/people/2024shichao-ma.jpg",
            photoAlt: "Sample portrait for Yuhang Zhang",
            bio:
              "After graduating with a bachelor’s degree in 2024, he went on to pursue a master’s degree at University of Science and Technology of China.",
            link: "https://scholar.google.com/citations?user=-ojMOq0AAAAJ",
            palette: ["#3d376a", "#e0dcff"]
          },
        ]
      }
    ]
  };

  SiteContent.gallery = {
    intro:
      "The gallery documents both research milestones and everyday group life.",
    snapshots: [
      {
        title: "China Graduate Intelligent Construction Innovation Competition",
        date: "November 29, 2025",
        caption: "We won the second prize in the national competition in Nantong, Jiangsu.",
        tag: "Competition",
        image: "./assets/media/gallery/2025zhinengjianzao_competition.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "CHINA GRADUATE CONTEST ON SMART-CITY TECHNOLOGYAND CREATIVE DESIGN",
        date: "November 10, 2025",
        caption: "We won the second prize in the national competition in Wuhan, Hubei.",
        tag: "Competition",
        image: "./assets/media/gallery/2025zhihuichengshi_competition.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Mobicom 2025 @ HongKong",
        date: "November 5, 2025",
        caption: "I had sweet drinks with friends in Hong Kong during MobiCom 2025.",
        tag: "Conference",
        image: "./assets/media/gallery/2025-hetianshui-hongkong.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Museum of Art Pudong",
        date: "September 4, 2025",
        caption: "We visited the Museum of Art Pudong in Shanghai during CSWN 2025.",
        tag: "Conference",
        image: "./assets/media/gallery/2025pumei-cwsn.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "HHME/HHMC @ Dalian",
        date: "August 24, 2025",
        caption: "We walked along the seaside in Dalian.",
        tag: "Conference",
        image: "./assets/media/gallery/2025hhme-dalian.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Graduate of the Class of 2026.",
        date: "July, 2025",
        caption: "I met with my Ph.D. advisor and fellow lab mates in Nanjing during the Wireless Sensing Forum.",
        tag: "Confrence",
        image: "./assets/media/gallery/2025wuxianluntan-nanjing.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Graduate of the Class of 2026.",
        date: "June, 2025",
        caption: "Six students have successfully graduated—congratulations, and wishing you all a bright and promising future.",
        tag: "Celebration",
        image: "./assets/media/gallery/2025biyekuaile.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "INFOCOM 2025 @ London",
        date: "May 20, 2025",
        caption: "I ran into Mr. Bean in a park in London.",
        tag: "Conference",
        image: "./assets/media/gallery/2025infocom-london.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Time Square @ New York.",
        date: "December, 2017",
        caption: "We drove to New York City from Pittsburgh to celebrate Christmas.",
        tag: "Festival",
        image: "./assets/media/gallery/2017timesquare.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Museum of Natural History @ New York.",
        date: "December，2017",
        caption: "I saw many fossils at the American Museum of Natural History.",
        tag: "Mesume",
        image: "./assets/media/gallery/2017nhm-newyork.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
    ],
    notes: [
      {
        slug: "how-we-review-new-papers-as-a-group",
        title: "How we review new papers as a group",
        date: "Lab Note",
        cover: "./notes/how-we-review-new-papers-as-a-group/assets/cover.svg",
        coverAlt: "Cover for paper review workflow note",
        text:
          "We try to read for assumptions, systems bottlenecks, and reproducibility details first. That habit keeps discussions grounded and makes follow-up experiments more focused."
      },
      {
        slug: "a-practical-rule-for-demos",
        title: "A practical rule for demos",
        date: "Lab Note",
        cover: "./notes/a-practical-rule-for-demos/assets/cover.svg",
        coverAlt: "Cover for demo preparation note",
        text:
          "If the benchmark is important enough to appear on the slide, it should be repeatable on a clean setup. Demo confidence is part of the research story."
      },
      {
        slug: "teaching-feeds-research",
        title: "Teaching feeds research",
        date: "Lab Note",
        cover: "./notes/teaching-feeds-research/assets/cover.svg",
        coverAlt: "Cover for teaching and research note",
        text:
          "Course questions often expose which explanations are still fuzzy. Cleaning those up tends to improve both papers and codebases."
      },
      {
        slug: "what-we-celebrate-internally",
        title: "What we celebrate internally",
        date: "Lab Note",
        cover: "./notes/what-we-celebrate-internally/assets/cover.svg",
        coverAlt: "Cover for internal culture note",
        text:
          "Not just acceptances or awards: clear debugging notes, clean experiments, and a helpful teammate handoff usually matter just as much."
      }
    ]
  };

  SiteContent.publicationManualNotes = {
    "locality-aware-parallel-decoding-for-efficient-autoregressive-image-generation": {
      summary:
        "This paper studies how to parallelize autoregressive image generation without discarding the locality priors that make autoregressive decoders strong. The main idea is to preserve spatially local dependencies while decoding multiple regions more efficiently.",
      bullets: [
        "Targets autoregressive image generation bottlenecks directly.",
        "Balances visual quality and parallel decoding speed.",
        "Fits the lab's broader theme of efficiency without giving up strong model behavior."
      ]
    },
    "longlive-real-time-interactive-long-video-generation": {
      summary:
        "LongLive focuses on real-time interactive long-video generation, framing the problem around prompt responsiveness, temporal coherence, and the systems costs of maintaining long outputs.",
      bullets: [
        "Optimized for responsiveness during human interaction.",
        "Emphasizes long-form temporal consistency.",
        "Connects generative modeling with real deployment constraints."
      ]
    },
    "qserve-w4a8kv4-quantization-and-system-co-design-for-efficient-llm-serving": {
      summary:
        "QServe pairs quantization with serving-system co-design, showing that low-bit arithmetic only becomes truly useful when runtime memory access, cache layout, and execution planning are optimized together.",
      bullets: [
        "Combines algorithm choices with systems implementation.",
        "Built for practical large-model serving workloads.",
        "A representative example of algorithm-system co-design."
      ]
    }
  };
})();
