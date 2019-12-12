const db = {
  articles: [
    {
      author: "flyingturtle",
      slug: "5-amazing-math-tricks-flyingturtle",
      firstusername: null,
      lastusername: null,
      bio: null,
      imageUrl: null,
      title: "5 Amazing Math Tricks",
      description: "It's a beautiful day",
      category: "Mathematics",
      body:
        "<p>It's amazing how I never knew how to calculate this fast until I turned 30. It's amazing how I never knew how to calculate this fast until I turned 30. It's amazing how I never knew how to calculate this fast until I turned 30. It's amazing how I never knew how to calculate this fast until I turned 30. It's amazing how I never knew how to calculate this fast until I turned 30. It's amazing how I never knew how to calculate this fast until I turned 30.It's amazing how I never knew how to calculate this fast until I turned 30. It's amazing how I never knew how to calculate this fast until I turned 30. It's amazing how I never knew how to calculate this fast until I turned 30.</p>",
      readTime: 1,
      coverImageUrl:
        "https://res.cloudinary.com/hba821/image/upload/v1551436731/ta9d5xbeskea7xi5q2ik.png",
      createdOn: "1 March 2019, 10:52AM",
      modifiedOn: "1 March 2019, 10:52AM"
    },
    {
      author: "runningeagle",
      slug: "a-special-article-runningeagle",
      firstusername: null,
      lastusername: null,
      bio: null,
      imageUrl: null,
      title: "A Special Article",
      description: "A day to remember",
      category: "Engineering",
      body: "<p>A Special Article</p>",
      readTime: 1,
      coverImageUrl:
        "https://res.cloudinary.com/hba821/image/upload/v1551211295/euws1xn36ym5nfeqepws.jpg",
      createdOn: "27 February 2019, 10:39AM",
      modifiedOn: "27 February 2019, 10:39AM"
    },
    {
      author: "runningeagle",
      slug: "a-simple-article-runningeagle",
      firstusername: null,
      lastusername: null,
      bio: null,
      imageUrl: null,
      title: "A Simple Article",
      description: "Some Description",
      category: "Science",
      body: "<p>Some Text body</p>",
      readTime: 1,
      coverImageUrl:
        "https://res.cloudinary.com/hba821/image/upload/v1551263798/x7qrzjsl6nqw8chmkrn8.jpg",
      createdOn: "27 February 2019, 10:40AM",
      modifiedOn: "27 February 2019, 10:40AM"
    },
    {
      author: "runningeagle",
      slug: "a-demo-article-runningeagle",
      firstusername: null,
      lastusername: null,
      bio: null,
      imageUrl: null,
      title: "A Demo Article",
      description: "A day to remember",
      category: "Science",
      body: "<p>This demo article is ...</p>",
      readTime: 1,
      coverImageUrl:
        "https://res.cloudinary.com/hba821/image/upload/v1551262472/o8w5uitxgyvqrebjmdiv.jpg",
      createdOn: "27 February 2019, 10:33AM",
      modifiedOn: "27 February 2019, 10:33AM"
    },
    {
      author: "runningeagle",
      slug: "is-this-final-runningeagle",
      firstusername: null,
      lastusername: null,
      bio: null,
      imageUrl: null,
      title: "Is This Final?",
      description: "From Grace To Grass",
      category: "Science",
      body: "<p>What if this is the final result of all</p>",
      readTime: 1,
      coverImageUrl:
        "https://res.cloudinary.com/hba821/image/upload/v1551211539/xbnqmpg5aiy3manbv9at.jpg",
      createdOn: "26 February 2019, 8:40PM",
      modifiedOn: "26 February 2019, 8:40PM"
    },
    {
      author: "runningeagle",
      slug: "great-ways-of-life-runningeagle",
      firstusername: null,
      lastusername: null,
      bio: null,
      imageUrl: null,
      title: "Great Ways of Life",
      description: "A day to remember",
      category: "Science",
      body: "<p>What life has to say</p>",
      readTime: 1,
      coverImageUrl:
        "https://res.cloudinary.com/hba821/image/upload/v1551211347/iseiwgy1mw9doubjpppe.jpg",
      createdOn: "26 February 2019, 8:28PM",
      modifiedOn: "26 February 2019, 8:28PM"
    },
    {
      author: "runningeagle",
      slug: "greatest-articles-of-all-time-runningeagle",
      firstusername: null,
      lastusername: null,
      bio: null,
      imageUrl: null,
      title: "Greatest Articles of All Time",
      description: "Greatest Articles of All Time",
      category: "Science",
      body: "<p>Great Articles are know by</p>",
      readTime: 1,
      coverImageUrl:
        "https://res.cloudinary.com/hba821/image/upload/v1551211295/euws1xn36ym5nfeqepws.jpg",
      createdOn: "26 February 2019, 8:37PM",
      modifiedOn: "26 February 2019, 8:37PM"
    },
    {
      author: "runningeagle",
      slug: "great-men-of-old-runningeagle",
      firstusername: null,
      lastusername: null,
      bio: null,
      imageUrl: null,
      title: "Great Men Of Old",
      description: "A day to remember",
      category: "Science",
      body: "<p>A day to remember</p>",
      readTime: 1,
      coverImageUrl:
        "https://res.cloudinary.com/hba821/image/upload/v1551208117/lfgolx4abwskaydb0ixt.jpg",
      createdOn: "26 February 2019, 7:39PM",
      modifiedOn: "26 February 2019, 7:39PM"
    },
    {
      author: "runningeagle",
      slug: "the-lifes-of-the-greats-runningeagle",
      firstusername: null,
      lastusername: null,
      bio: null,
      imageUrl: null,
      title: "The Lifes of The Greats",
      description: "Some Description",
      category: "Science",
      body: "<p>Body is not empty</p>",
      readTime: 1,
      coverImageUrl:
        "https://res.cloudinary.com/hba821/image/upload/v1551208017/nsrb84tsocg2w7tqtstk.jpg",
      createdOn: "26 February 2019, 7:58PM",
      modifiedOn: "26 February 2019, 7:58PM"
    },
    {
      author: "runningeagle",
      slug: "the-article-cover-runningeagle",
      firstusername: null,
      lastusername: null,
      bio: null,
      imageUrl: null,
      title: "The Article Cover",
      description: "From Grace To Grass",
      category: "Science",
      body: "<p>Article Cover</p>",
      readTime: 1,
      coverImageUrl:
        "https://res.cloudinary.com/hba821/image/upload/v1551207530/gtetrsfynoqfrzubpjqt.jpg",
      createdOn: "26 February 2019, 6:51PM",
      modifiedOn: "26 February 2019, 6:51PM"
    },
    {
      author: "runningeagle",
      slug: "evolving-life-runningeagle",
      firstusername: null,
      lastusername: null,
      bio: null,
      imageUrl: null,
      title: "Evolving Life",
      description: "A day to remember",
      category: "Science",
      body: "<p>A body for our article</p>",
      readTime: 1,
      coverImageUrl:
        "https://res.cloudinary.com/hba821/image/upload/v1551207118/kdgoqdxogntbemeaepya.jpg",
      createdOn: "26 February 2019, 6:00PM",
      modifiedOn: "26 February 2019, 6:00PM"
    },
    {
      author: "runningeagle",
      slug: "no-regrets-runningeagle",
      firstusername: null,
      lastusername: null,
      bio: null,
      imageUrl: null,
      title: "No Regrets",
      description: "Some Description",
      category: "Science",
      body: "<p>This is a well described article</p>",
      readTime: 1,
      coverImageUrl:
        "https://res.cloudinary.com/hba821/image/upload/v1551206749/tef5aluppetwyx7xdlai.jpg",
      createdOn: "26 February 2019, 6:51PM",
      modifiedOn: "26 February 2019, 6:51PM"
    },
    {
      author: "runningeagle",
      slug: "the-judas-of-science-runningeagle",
      firstusername: null,
      lastusername: null,
      bio: null,
      imageUrl: null,
      title: "The Judas of Science",
      description: "A day to remember",
      category: "Science",
      body: "<p>In Science, There are a lot of people</p>",
      readTime: 1,
      coverImageUrl:
        "https://res.cloudinary.com/hba821/image/upload/v1551206506/o2dbud1na8svmowmbdq2.jpg",
      createdOn: "26 February 2019, 6:47PM",
      modifiedOn: "26 February 2019, 6:47PM"
    },
    {
      author: "runningeagle",
      slug: "an-article-to-behold-runningeagle",
      firstusername: null,
      lastusername: null,
      bio: null,
      imageUrl: null,
      title: "An Article to Behold",
      description: "Some Description",
      category: "Science",
      body: "<p>This is a very interesting article</p>",
      readTime: 1,
      coverImageUrl:
        "https://res.cloudinary.com/hba821/image/upload/v1551206124/fourximta5phhmcimdk6.jpg",
      createdOn: "26 February 2019, 6:25PM",
      modifiedOn: "26 February 2019, 6:25PM"
    }
  ],

  authors: [
    {
      username: "flyingturtle",
      name: "Flying Turtle",
      bio: "I catch birds when I run through mountains",
      country: "Nigeria"
    },
    {
      username: "runningeagle",
      name: "Running Eagle",
      bio: "I eat while I roll",
      country: "Nigeria"
    }
  ]
};

module.exports = db;
