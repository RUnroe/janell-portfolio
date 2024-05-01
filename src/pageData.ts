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
      coverImageSrc: "https://picsum.photos/600/700",
      projects: [
        {
          title: "",
          imageSrc: "",
          dateString: "",
          description: "",
        }
      ]
    },
    "acting": {
      pageTitle: "Acting",
      coverImageSrc: "https://picsum.photos/600/500",
      projects: [
        {
          title: "The Little Mermaid",
          imageSrc: "https://picsum.photos/600/900",
          dateString: "07 · 05 · 2022",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed imperdiet elit. Pellentesque maximus, nunc eget porttitor convallis, mi eros gravida dolor, vel pharetra sapien purus quis enim. Praesent malesuada, purus sed mattis posuere, erat justo scelerisque metus, a convallis quam arcu sed lacus. Donec imperdiet risus vel tellus vulputate, sed mollis nulla pellentesque. Nullam elementum sapien felis, id tempor diam mattis nec. Cras sit amet nisl mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris porttitor odio metus, eget scelerisque dui vulputate nec. In maximus interdum vehicula. Nullam vulputate feugiat tincidunt. Donec varius libero eu diam vestibulum, porttitor varius erat ornare.",
        },
        {
          title: "The Little Mermaid",
          imageSrc: "https://picsum.photos/600/900",
          dateString: "07 · 05 · 2022",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed imperdiet elit. Pellentesque maximus, nunc eget porttitor convallis, mi eros gravida dolor, vel pharetra sapien purus quis enim. Praesent malesuada, purus sed mattis posuere, erat justo scelerisque metus, a convallis quam arcu sed lacus. Donec imperdiet risus vel tellus vulputate, sed mollis nulla pellentesque. Nullam elementum sapien felis, id tempor diam mattis nec. Cras sit amet nisl mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris porttitor odio metus, eget scelerisque dui vulputate nec. In maximus interdum vehicula. Nullam vulputate feugiat tincidunt. Donec varius libero eu diam vestibulum, porttitor varius erat ornare.",
        }
      ]
    },
    "other": {
      pageTitle: "Other Experiences",
      coverImageSrc: "/stage_management.jpg",
      projects: [
        {
          title: "",
          imageSrc: "",
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