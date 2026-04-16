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
    title: "Faculty Profile Template",
    subtitle: "Professor of Efficient AI Systems and Applied Machine Learning",
    photo: "./assets/media/people/fei-wang.svg",
    photoAlt: "Sample profile photo for Fei Wang",
    note:
      "This page is intentionally data-driven so you can replace the sample biography, timeline, and projects with the real faculty profile later.",
    bio: [
      "Fei Wang's research centers on practical machine learning systems, especially the gap between algorithmic progress and real-world deployment. His group studies efficient training, inference, embodied intelligence, and reliable model serving for large foundation models.",
      "He is particularly interested in GPU-efficient model design, robust multimodal systems, and the educational side of modern AI systems engineering. His lab philosophy emphasizes clarity, reproducibility, and engineering decisions that survive contact with production constraints."
    ],
    interests: [
      "Efficient large language models",
      "Multimodal systems and long-context reasoning",
      "Training-time and inference-time optimization",
      "Reliable deployment for research-to-production transfer"
    ],
    profileLinks: [
      { label: "Email", href: "mailto:feiwang@example.edu" },
      { label: "Google Scholar", href: "#" },
      { label: "Curriculum Vitae", href: "#" }
    ],
    teaching: [
      "6.5940 TinyML and Efficient Deep Learning Computing",
      "Special Topics in Efficient Generative AI Systems",
      "Graduate Reading Group on Long-Context and Multimodal Models"
    ],
    timeline: [
      { year: "2026", title: "Leads a new effort on efficient generative AI systems", text: "Building sample profile content around efficient LLM, VLM, and diffusion deployment." },
      { year: "2024", title: "Launches graduate seminar on foundation model systems", text: "A discussion-based course on practical training, serving, and evaluation of large models." },
      { year: "2021", title: "Receives early-career teaching recognition", text: "Recognized for making systems-heavy AI topics approachable for interdisciplinary students." }
    ],
    selectedProjects: [
      {
        title: "Hardware-aware LLM Serving",
        text: "Research on memory layout, quantized kernels, and scheduling strategies for long-context inference."
      },
      {
        title: "Reliable Multimodal Evaluation",
        text: "Benchmarks and tooling for understanding model behavior on long video, mixed-modal, and real-time tasks."
      },
      {
        title: "Systems Education for Modern AI",
        text: "Course materials and open teaching resources that connect theory with deployment constraints."
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
      "The team page is configured from editable member objects. Each card can use a real photo if you provide one, otherwise it falls back to a generated portrait, plus a role label, optional link, and short biography.",
    groups: [
      {
        title: "Principal Investigator",
        members: [
          {
            name: "Fei Wang",
            role: "Professor, Xi'an Jiaotong University",
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
            name: "Shengyao Ding",
            role: "PhD Student",
            photo: "./assets/media/people/shengyao-ding.jpg",
            photoAlt: "Sample portrait for Shengyao Ding",
            link: "./member/shengyao-ding.html",
            bio:
              "Interested in efficient LLMs and low-bit quantization, with prior industry and interdisciplinary research experience.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Pei Li (李沛)",
            role: "MSE Student",
            photo: "./assets/media/people/pei-li.jpg",
            photoAlt: "Sample portrait for Pei Li",
            bio:
              "Interested in efficient LLMs and low-bit quantization, with prior industry and interdisciplinary research experience.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Shreya Chaudhury",
            role: "Undergraduate Researcher",
            bio:
              "Interested in quantum computing, variational algorithms, and practical quantum machine learning systems.",
            palette: ["#4f5a27", "#eefbc2"]
          }
        ]
      },
      {
        title: "Alumni",
        members: [
          {
            name: "Zhenkui Yang (杨振奎)",
            role: "MEng Student",
            photo: "./assets/media/people/zhenkui-yang.png",
            photoAlt: "Sample portrait for Zhenkui Yang",
            bio:
              "Graduated in 2025.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Haomin Xiong (熊浩民)",
            role: "MEng Student",
            photo: "./assets/media/people/haomin-xiong.jpg",
            photoAlt: "Sample portrait for Haomin Xiong",
            bio:
              "Graduated in 2025.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Peixi Shi (史培玺)",
            role: "MEng Student",
            photo: "./assets/media/people/peixi-shi.jpg",
            photoAlt: "Sample portrait for Peixi Shi",
            bio:
              "Graduated in 2025.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Hanrui Wang",
            role: "Co-Founder, Eigen AI",
            bio:
              "Worked on efficient AI and emerging hardware, including quantum architecture and compiler systems.",
            link: "https://hanruiwang.com/",
            palette: ["#4d2d4a", "#ffd8f8"]
          },
          {
            name: "Zhijian Liu",
            role: "Assistant Professor, UCSD",
            bio:
              "Researches efficient machine learning systems and computer vision, with broad recognition across top venues.",
            link: "https://zhijianliu.com/",
            palette: ["#25503a", "#d6f9e5"]
          },
          {
            name: "Han Cai",
            role: "NVIDIA Research",
            bio:
              "Known for hardware-aware NAS and efficient deep learning algorithms deployed in widely used ML frameworks.",
            link: "https://han-cai.github.io/",
            palette: ["#3e355f", "#e5ddff"]
          },
          {
            name: "Yujun Lin",
            role: "NVIDIA Research",
            bio:
              "Focuses on the co-design of software and hardware for efficient deep learning and large-model serving.",
            link: "https://yujunlin.com/",
            palette: ["#543021", "#ffe0cf"]
          },
          {
            name: "Wei-Chen Wang",
            role: "Co-Founder, Eigen AI",
            bio:
              "Works on efficient deep learning, TinyML, embedded systems, and memory-aware deployment systems.",
            link: "https://weichenwang.me/",
            palette: ["#2a4f61", "#d6f1ff"]
          }
        ]
      }
    ]
  };

  SiteContent.gallery = {
    intro:
      "The gallery mixes image-style cards with longer Markdown lab notes so the page can document both research milestones and everyday group life.",
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
        title: "Mesume of Modern Art @ New York.",
        date: "December，2017",
        caption: "At Museum of Modern Art, I saw The Starry Night.",
        tag: "Art",
        image: "./assets/media/gallery/2017moma-starrynight.jpg",
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
