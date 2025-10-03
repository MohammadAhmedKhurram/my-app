export default {
    name: 'contact', // this is the type we will use in the code later
    type: 'document',
    title: 'Contact Messages',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Your Name',
        validation: Rule => Rule.required(),
      },
      {
        name: 'email',
        type: 'string',
        title: 'Your Email',
        validation: Rule => Rule.email(),
      },
      {
        name: 'subject',
        type: 'string',
        title: 'Subject',
        validation: Rule => Rule.required(),
      },
      {
        name: 'message',
        type: 'text',
        title: 'Message',
        validation: Rule => Rule.required(),
      },
    ],
  };
  