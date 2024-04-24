import { FacebookIcon, InstagramIcon, MailIcon } from "./assets/icons/icons";

export default {
  home: {
    imageSrc: "",
    headline: "Director  |  Stage Manager  |  Actor  |  Singer  |  Artist",
    bio: "Janell is a senior at the University of Utah working on her BA in theatre studies. She is very excited to be a part of helping create this amazing show as an Assistant Director. Some of her work includes being the dramaturg for The Lightning Thief: The Percy Jackson Musical at the University of Utah, directing Gay Girls with Umbrella Theatre Company in The New Works Mentorship Project,  Near Mint- a new production with the New Play Workshop class in the Department of Theatre, and directed a short version of The Tempest for Egyptian Youtheatre."
  },
  experience: {
    "directing": {
      coverImageSrc: "",
      projects: [
        {
          title: "",
          imageSource: "",
          dateString: "",
          description: "",
        }
      ]
    },
    "stage-managing": {
      coverImageSrc: "",
      projects: [
        {
          title: "",
          imageSource: "",
          dateString: "",
          description: "",
        }
      ]
    },
    "acting": {
      coverImageSrc: "",
      projects: [
        {
          title: "The Little Mermaid",
          imageSource: "",
          dateString: "07 · 05 · 2022",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed imperdiet elit. Pellentesque maximus, nunc eget porttitor convallis, mi eros gravida dolor, vel pharetra sapien purus quis enim. Praesent malesuada, purus sed mattis posuere, erat justo scelerisque metus, a convallis quam arcu sed lacus. Donec imperdiet risus vel tellus vulputate, sed mollis nulla pellentesque. Nullam elementum sapien felis, id tempor diam mattis nec. Cras sit amet nisl mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris porttitor odio metus, eget scelerisque dui vulputate nec. In maximus interdum vehicula. Nullam vulputate feugiat tincidunt. Donec varius libero eu diam vestibulum, porttitor varius erat ornare.",
        }
      ]
    }
  },
  resume: {
    pdf: {
      src: "https://drive.google.com/file/d/1Cl2PiKxf9up3jtT6I0uVuj_FMmteTm5-/preview", //Add to G Drive, 3 dots => embed item... => copy link to here
    }
  },
  contact: {
    imageSrc: "",
    phoneNumber: "+1 (808) 783-8941",
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