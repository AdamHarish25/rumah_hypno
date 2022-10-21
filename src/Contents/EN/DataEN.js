/* eslint-disable import/no-anonymous-default-export */

import Content1 from "../Attachments/Images/Content1.png";
import ProfilePhoto from "../Attachments/Images/ProfilePhoto.jpg";
import Content2 from "../Attachments/Images/Content2.png";
import Content3 from "../Attachments/Images/Content3.png";
import Content5 from "../Attachments/Images/Content5.png";

const MainPageDataEN = {
  title: "Rumah Hypno",
  name: "Melanie",
  quote:
    "“People don’t come to therapy to change their past, but their future”",
  quotePeople: "-Milton H. Erickson-",
};

const AboutPageDataEN = {
  section: "About",
  content1: {
    title: "Who Are We?",
    description:
      "Rumah Hypno is a Family Hypnotherapy Clinic located in South Jakarta. We provide therapy for various complaints of  Psychological and Physical caused by Psychological Imbalances (Psychosomatic). Such as Addiction to gadgets/ Alcohol/ Cigarettes, Depression, Stress, Difficulty Focusing, HypnoSlimming, Couple Therapy, Inner Child, Trauma, Emotional Control, or other Psychometric disorders. With Professional Therapists, we do the best for you.",
    image: Content1,
  },
  profile: {
    title: "Profile",
    name: "MELANIE IVONE S.Kom CH.,CHt.,CPHt",
    description1:
      "Born and raised in Jakarta, graduated from the University of Indonesia in 2006. Her interest in Human Psychology and a strong desire to help fellow humans in solving various psychological and physical problems, make Melanie studies Human Psychology. Experience as a Trainer:",
    listDescription: [
      {
        list: "1. STIFIn Trainer in 2017 for the National Region. STIFIn stands for Sensing, Thinking, Intuiting, Feeling and Insting which is a concept to identify human intelligence based on the dominant brain operating system and can be identified by scanning fingerprints.",
      },
      {
        list: "2. Motivation Trainer for State Civil Apparatus (ASN) Teachers in Bekasi in 2018,",
      },
      {
        list: "3. Motivation & Entrepreneurship Trainer in Singapore in 2019.",
      },
    ],
    description2:
      "Now Melanie has been certified by IBH (The Indonesian Board of Hypnotherapy) as a Professional Hypnotherapist and Hypnosis, who will be happy to help overcome your problems, and make a better version of yourself.",
    image: ProfilePhoto,
  },

  content2: {
    title: "What is Hypnotherapy ?",
    description:
      "Hypnotherapy consists of two words, hypnosis and therapy, meaning the clinical therapy by using special techniques in hypnosis stage.Hypnosis is a state of relaxed awareness. You will be physically relaxed but mentally alert. In this state, your subconscious mind is most receptive to hypnotic suggestion. You are in full control throughout. Hypnosis has been demonstrated in numerous studies and scientific research world wide for several decades as an effective treatment for a wide range of issues such as childhood trauma, self and couple conflict, stress management, etc.",
    image: Content2,
  },

  content3: {
    title: "What Techniques Are Used in Hypnotherapy?",
    description:
      "During a hypnotherapy session, people are guided through a process to induce a trance-like state that helps them focus their minds, respond more readily to suggestions, and become deeply relaxed. Hypnotherapy utilizes the heightened awareness of the hypnotic state to help you focus on a problem more deeply.",
    image: Content3,
    lists: [
      {
        id: 1,
        list: "Relaxation",
        content:
          "You will be guided by the hypnotherapist to visualize yourself in a state of peacefulness and relaxation, even when confronting a problematic behavior or the object of your fears.",
      },
      {
        id: 2,
        list: "Suggestion",
        content:
          "Your hypnotherapist may make gentle suggestions for behavior changes that can help you conquer your issue. For example, you may be taught to see yourself as a supportive advisor during a phobic reaction, thus learning to trust yourself and your ability to get through the situation.",
      },
      {
        id: 3,
        list: "Coping Skills",
        content:
          "You may be taught certain cognitive-behavioral coping skills, such as guided imagery and the STOP! technique, that you can use when confronting fears or anxieties.",
      },
      {
        id: 4,
        list: "Exploration of past experiences",
        content:
          "You may even be encouraged to talk about the first time you experienced the behavior or problem that you are trying to overcome and how you felt at that moment.",
      },
    ],
  },

  content4: {
    title: "Benefits Of  Hypnotherapy",
    description:
      "Some people may experience dramatic results with hypnotherapy. In other cases, people may simply feel very relaxed. Some of the benefits of hypnotherapy may include:",
    lists: [
      {
        id: 1,
        list: "Awareness",
        content:
          "Some people remain fully aware during the entire experience. They recall everything that happens and are even able to have conversations while under hypnosis. Other people may experience states of relaxation that are so deep that they may even feel detached from what is happening.",
      },
      {
        id: 2,
        list: "Focus",
        content:
          "Most of the time, we are distracted by our surroundings. Whether the TV is blaring, your kids are demanding attention or your spouse wants to talk, it can be difficult to fully focus on yourself. Our conscious minds are also cluttered. You may be worried about paying a bill, concerned about an upcoming project, or planning tonight’s dinner. The therapy session is intended to break through these day-to-day concerns and allow you to focus completely on the problem at hand.",
      },
      {
        id: 3,
        list: "Relaxation",
        content:
          "In the hypnotic state, you are deeply relaxed. Your conscious mind is quieted, allowing your unconscious mind to deeply focus on your issue. You are also calmer, and therefore more receptive to facing your problems or fears.",
      },
    ],
    addition:
      "Most hypnotherapists utilize a series of calming messages, such as 'you are safe' and 'no one can harm you' to reassure their clients that during hypnosis they can objectively face their problems without having a panicked reaction.",
  },

  content5: {
    title: "How Effective is Hypnotherapy",
    image: Content5,
    description:
      "The effectiveness and impact of hypnotherapy can vary based on the individual and how the treatment is used. Hypnotherapy has been shown to have some degree of efficacy for certain applications, particularly:",
    list: [
      {
        id: 1,
        title:
          "Pain reduction and control during dental procedures and childbirth.",
      },
      {
        id: 2,
        title:
          "Reduction in nausea and vomiting in individuals being treated for cancer with chemotherapy.",
      },
      {
        id: 3,
        title:
          "Reduction in the severity of symptoms associated with irritable bowel syndrome (IBS)",
      },
    ],
    addition1:
      "While it may help people cope with problems related to stress and anxiety, it may be best applied when used in conjunction with first-line treatments such as cognitive behavioral therapy (CBT) and medications.",
    addition2:
      "The results of a study published in the May 2021 issue of the Journal of Affective Disorders found that hypnotherapy was not less effective than CBT for treating mild to moderate depression. The results indicated that where CBT led to a 38.5% reduction in symptom severity, hypnotherapy resulted in a 44.6% reduction.",
  },
};

const BookingPageDataEN = {
  adultUrl: {
    title: "Intake for Adult",
    url: "https://forms.gle/uvoNYgY1J8DAAzQr8",
    image: "bg-adultBook",
  },
  childrenUrl: {
    title: "Intake for Children",
    url: "https://forms.gle/FZv12AxZGsV79e3t8",
    image: "bg-childrenBook",
  },
};

const TreatmentsPageDataEN = {
  section: "Treatments",
  list1: [
    {
      title: "Couple Therapy",
    },
    {
      title: "Hypno Slimming",
    },
    {
      title: "Hypno Parenting",
    },
    {
      title: "Hypnosis For Students",
    },
    {
      title: "Anger Management",
    },
    {
      title: "Soul Retrieval",
    },
    {
      title: "Inner Child",
    },
    {
      title: "Grief",
    },
    {
      title: "Abandonment",
    },
    {
      title: "Phobias",
    },
  ],
  list2: [
    {
      title: "Trauma",
    },
    {
      title: "Smoking Cessation",
    },
    {
      title: "Anxiety",
    },
    {
      title: "Stress",
    },
    {
      title: "Deep Sadness",
    },
    {
      title: "Depression",
    },
    {
      title: "Addictions (Alcohol, Sex, Etc.)",
    },
    {
      title: "Confidence",
    },
    {
      title: "Public Speaking",
    },
  ],
  list3: [
    {
      title: "Abuse issues",
    },
    {
      title: "Sexual Issues",
    },
    {
      title: "Releasing Negative Energy",
    },
    {
      title: "Spirit Release",
    },
    {
      title: "Motivation",
    },
    {
      title: "Obsessive Behaviour",
    },
    {
      title: "Insomnia",
    },
    {
      title: "Fear of Flying",
    },
    {
      title: "Panic Attack",
    },
    {
      title: "Other Psychometric Disorder",
    },
  ],
};

const FaqPageDataEn = [
  {
    question: "IS HYPNOTHERAPY SAFE?",
    answer:
      "HYPNOTHERAPY IS 100% SAFE. IT IS A HEALING METHOD BY USING THE POWER OF THE SUBCONSCIOUS MIND. HYPNOTHERAPY IS A SELF-HEALING, IT RESTRUCTURE THE CLIENT’S MINDSET. THE FIRST REQUIREMENT OF HYPNOTHERAPY IS THE CLIENT’S WILL TO DO THE THERAPY. THE SAFER ALTERNATIVE TECHNIQUE WILL BE APPLIED FOR CLIENTS WITH CERTAIN CONDITION SUCH AS BEING A PREGNANT WOMAN OR HAVING A HEART PROBLEM.",
  },
];

export {
  MainPageDataEN,
  AboutPageDataEN,
  TreatmentsPageDataEN,
  BookingPageDataEN,
  FaqPageDataEn,
};
