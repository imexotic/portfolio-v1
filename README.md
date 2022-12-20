# <p align="center">Portfolio Website 1️⃣</p>

<p align="center">
    The first iteration of
    <a href="https://imexotic.vercel.app/">hstoklosa.com</a>
    created for informative purposes.
</p>

<img src="https://github.com/imexotic/portfolio-v1/blob/main/public/assets/preview.png?raw=true" width="800"/>

## Project Status

The project is still in the development stage and new features will be released to suit my personal needs.

In addition, the site has been deployed to [Vercel](https://vercel.com/) and it can be previewed at any time through there or by creating a pull request.

Project's current TODO list:

-  [ ] Fix overflow issues in the Projects component
-  [ ] Add Featured Projects + some info about them
-  [ ] Add relevant information to the About component
-  [ ] Install & implement an animation/transition library

Ideas / Possible implementations:

-  [ ] Database integration to store projects etc

## Technologies

-  [Next.js](https://nextjs.org/)
-  [React + React-DOM](https://reactjs.org/)
-  [ReactIcons](https://react-icons.github.io/react-icons/)
-  [FramerMotion](https://www.framer.com/motion/)
-  [Nodemailer](https://nodemailer.com/about/)
-  [react-github-calendar](https://grubersjoe.github.io/react-github-calendar/)
-  [react-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter)

## 🛠 Usage

Before running development/production mode, the following commands need to be executed in order to create a local repository for local development.

```
git clone https://github.com/imexotic/portfolio-v1.git

npm install
```

### ❌ Environmental Variables

```
// Nodemailer

MAIL_SERVICE = ...
MAIL_USER = ...
MAIL_PASS = ...
```

### 💻 Development

To run the site in development mode

```
npm run dev
```

The previously mentioned _**Environmental Variables**_ have to be set up in a file `.env.local` in the same directory as `.sample.env` to ensure that they are being used in development mode.

### 🚀 Deployment

To run the site in production mode.

```
npm run build

npm start
```

`npm run build` should be executed on every new feature to ensure that all changes are also applied to the production site.

The site can be deployed on any [hosting provider supported by Next.js](https://nextjs.org/docs/deployment), although [Vercel](https://vercel.com/) is recommended due to its 1st class support for Next.js sites.

The _**Environmental Variables**_ have to be correctly set up in your chosen hosting provider for them to take full effect on the site.

## 📝 License

[MIT License](https://github.com/imexotic/ExoBot/blob/main/LICENSE)
