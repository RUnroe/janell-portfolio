import { FacebookIcon, InstagramIcon, MailIcon } from "./assets/icons/icons";

export default {
  home: {
    imageSrc: "",
    headline: "Director  |  Stage Manager  |  Actor  |  Singer  |  Artist",
    bio: "Janell Rogers is a dedicated professional with a Bachelor's degree in Theatre Studies from the University of Utah. With a diverse skill set encompassing directing, acting, and other expertise encompassing various aspects of theatre production, including dramaturgy, and production assistance. Janell brings a comprehensive understanding of the theatrical arts to every project. Her passion for storytelling and her commitment to excellence drive her work, ensuring the successful execution of creative visions on stage. Janell's collaborative approach, combined with her strong communication skills and attention to detail, makes her a valuable asset in any theatrical production. With a proven track record of delivering high-quality performances and productions, Janell Rogers is poised to continue making significant contributions to the world of theatre."
  },
  experience: {
    "directing": {
      pageTitle: "Directing",
      coverImageSrc: "/directing.jpg",
      projects: [
        {
          title: "",
          subline: [""],
          media: 
            {
              type: "image",
              src: "",
            },
          dateString: "",
          description: "",
        },
      ]
    },






    "acting": {
      pageTitle: "Acting",
      coverImageSrc: "/acting.jpg",
      projects: [
        {
          title: "Hunchback of Notre Dame",
          subline: ["Murray Arts Counsil · Directed by Candy Tippets", "Characters: Gargoyle / Statue / Gypsy"],
          media: 
            {
              type: "image",
              src: "",
            },
          dateString: "07 · 2024",
          description: "The Hunchback of Notre Dame musical, based on Victor Hugo’s novel and Disney’s film, follows Quasimodo, the kind but lonely bell-ringer of Notre Dame, who seeks freedom and connection. His life changes when he meets Esmeralda, a brave Romani woman fighting for justice. With powerful songs like “Out There” and “God Help the Outcasts,” the musical explores themes of love, acceptance, and the battle between good and evil, captivating audiences with its rich characters and hauntingly beautiful music.",
        },
        {
          title: "Cinderella",
          subline: ["Murray Arts Counsil · Directed by Candy Tippets", "Charaters: Dragon / Ensemble"],
          media:
            {
              type: "video",
              src: "https://www.youtube.com/embed/jfKfPfyJRdk?si=c5QQ5E92D5L-T_LP",
            },
          dateString: "07 · 2023",
          description: "Rodgers and Hammerstein’s Cinderella is a musical adaptation of the classic fairy tale, where a kind young woman, mistreated by her stepfamily, is transformed by her Fairy Godmother to attend a royal ball. There, she captures the heart of Prince Charming. Featuring beloved songs like “In My Own Little Corner” and “Ten Minutes Ago,” the musical highlights themes of hope, kindness, and believing in the impossible, enchanting audiences with its timeless story and memorable score.",
        },
        {
          title: "The Little Mermaid",
          subline: ["Murray Arts Counsil · Directed by Candy Tippets", "Charaters: Princess / Ensemble"],
          media: 
            {
              type: "image",
              src: "/projects/the-little-mermaid/IMG_9357.jpg",
            },
          dateString: "07 · 2021",
          description: "The Little Mermaid musical is a stage adaptation of Disney’s classic film, following Ariel, a young mermaid who dreams of life on land. Defying her father, King Triton, she makes a deal with the sea witch Ursula to trade her voice for human legs and pursue her love, Prince Eric. With iconic songs like “Part of Your World” and “Under the Sea,” the show explores themes of adventure, sacrifice, and following one's heart, captivating audiences with its vibrant characters and heartfelt story.",
        },
        {
          title: ["Marvel Spotlight, Mirror of", "Most Value: A Mrs. Marvel Play"],
          subline: ["Hillcrest High School · Directed by Julie Anderson", "Charaters: Kamala Khan / Mrs. Marvel"],
          media: [
            {
              type: "image",
              src: "/projects/the-little-mermaid/IMG_9357.jpg",
            },
            {
              type: "image",
              src: "/projects/the-little-mermaid/IMG_9357.jpg",
            },
          ],
          dateString: "08 · 2019",
          description: "Mirror of Most Value: A Ms. Marvel Play is part of the Marvel Spotlight series, which brings superheroes into relatable, everyday situations. The play focuses on Kamala Khan, a young Pakistani-American teenager who gains polymorphic powers after being exposed to the Terrigen Mist. As Kamala embraces her new identity as Ms. Marvel, she becomes obsessed with building a superhero fandom by writing fan fiction. However, this obsession starts affecting her schoolwork and relationships. Kamala's journey teaches her the importance of self-acceptance and recognizing her own imperfections, all while navigating the challenges of being both a teenager and a superhero.",
        },
      ]
    },





    "other": {
      pageTitle: "Other Experiences",
      coverImageSrc: "/stage_management.jpg",
      projects: [
        {
          title: "",
          media:
            {
              type: "image",
              src: "",
            },
          dateString: "",
          description: "",
        }
      ]
    },
    
  },
  resume: {
    pdf: {
      src: "https://drive.google.com/file/d/1Cl2PiKxf9up3jtT6I0uVuj_FMmteTm5-/preview", //Add to G Drive, 3 dots => embed item... => copy link to here
    }
  },
  contact: {
    imageSrc: "",
    phoneNumber: "",
    email: "kjre00@gmail.com",
    socials: [
      {
        title: "Instagram", //Use this with title to make image alt e.g. (Instagram - janell.ro.1)
        username: "janell.ro.1",
        iconComponent: InstagramIcon,
        url: "https://www.instagram.com/janell.ro.1",
      },
      {
        title: "Facebook",
        username: "janelle.rogers.731", 
        iconComponent: FacebookIcon,
        url: "https://www.facebook.com/janelle.rogers.731",
      },
      {
        title: "Email",
        username: "kjre00@gmail.com",
        iconComponent: MailIcon,
        url: "mailto:kjre00@gmail.com?subject=Oh%20hi!",
      },
    ]
  }
}